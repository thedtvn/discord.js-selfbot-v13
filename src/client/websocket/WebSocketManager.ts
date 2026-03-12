import EventEmitter from 'node:events';
import { setImmediate } from 'node:timers';
import { setTimeout as sleep } from 'node:timers/promises';
import { Collection } from '@discordjs/collection';
import { RPCErrorCodes } from 'discord-api-types/v10';
import WebSocketShard from './WebSocketShard';
import PacketHandlers from './handlers';
import { Error as DiscordjsError } from '../../errors';
import { Events, ShardEvents, Status, WSCodes, WSEvents } from '../../util/Constants';
import type Client from '../Client';

interface GatewayPacket {
  t?: string;
  d?: any;
  op?: number;
  s?: number;
}

interface QueuedPacket {
  packet: GatewayPacket;
  shard: WebSocketShard;
}

const BeforeReadyWhitelist: string[] = [
  WSEvents.READY,
  WSEvents.RESUMED,
  WSEvents.GUILD_CREATE,
  WSEvents.GUILD_DELETE,
  WSEvents.GUILD_MEMBERS_CHUNK,
  WSEvents.GUILD_MEMBER_ADD,
  WSEvents.GUILD_MEMBER_REMOVE,
];

const UNRECOVERABLE_CLOSE_CODES = Object.keys(WSCodes).slice(2).map(Number);
const UNRESUMABLE_CLOSE_CODES = [
  RPCErrorCodes.UnknownError,
  RPCErrorCodes.InvalidPermissions,
  RPCErrorCodes.InvalidClientId,
];

class WebSocketManager extends EventEmitter {
  public client: Client;
  public gateway: string | null;
  public totalShards: number;
  public shards: Collection<number, WebSocketShard>;
  public shardQueue: Set<WebSocketShard>;
  public packetQueue: QueuedPacket[];
  public status: number;
  public destroyed: boolean;
  public reconnecting: boolean;

  constructor(client: Client) {
    super();
    this.client = client;
    this.gateway = null;
    this.totalShards = (this.client.options.shards as any[]).length;
    this.shards = new Collection();
    this.shardQueue = new Set();
    this.packetQueue = [];
    this.status = Status.IDLE;
    this.destroyed = false;
    this.reconnecting = false;
  }

  get ping(): number {
    const sum = this.shards.reduce((a, b) => a + b.ping, 0);
    return sum / this.shards.size;
  }

  debug(message: string, shard?: WebSocketShard): void {
    this.client.emit(Events.DEBUG, `[WS => ${shard ? `Shard ${shard.id}` : 'Manager'}] ${message}`);
  }

  async connect(): Promise<boolean> {
    let gatewayURL = 'wss://gateway.discord.gg';
    await this.client.api.gateway
      .get({ auth: false })
      .then((r: { url: string }) => (gatewayURL = r.url))
      .catch(() => {});

    const total = Infinity;
    const remaining = Infinity;
    const recommendedShards = 1;

    this.debug(`Fetched Gateway Information
    URL: ${gatewayURL}
    Recommended Shards: ${recommendedShards}`);

    this.debug(`Session Limit Information
    Total: ${total}
    Remaining: ${remaining}`);

    this.gateway = `${gatewayURL}/`;

    let { shards } = this.client.options;
    if (shards === 'auto') {
      this.debug(`Using the recommended shard count provided by Discord: ${recommendedShards}`);
      this.totalShards = this.client.options.shardCount = recommendedShards;
      shards = this.client.options.shards = Array.from({ length: recommendedShards }, (_, i) => i);
    }

    this.totalShards = (shards as any[]).length;
    this.debug(`Spawning shards: ${(shards as any[]).join(', ')}`);
    this.shardQueue = new Set((shards as any[]).map((id: number) => new WebSocketShard(this, id)));

    return this.createShards();
  }

  async createShards(): Promise<boolean> {
    if (!this.shardQueue.size) return false;

    const [shard] = this.shardQueue;
    this.shardQueue.delete(shard);

    if (!shard.eventsAttached) {
      shard.on(ShardEvents.ALL_READY, unavailableGuilds => {
        this.client.emit(Events.SHARD_READY, shard.id, unavailableGuilds);
        if (!this.shardQueue.size) this.reconnecting = false;
        this.checkShardsReady();
      });

      shard.on(ShardEvents.CLOSE, (event: { code: number }) => {
        if (event.code === 1_000 ? this.destroyed : UNRECOVERABLE_CLOSE_CODES.includes(event.code)) {
          this.client.emit(Events.SHARD_DISCONNECT, event, shard.id);
          this.debug(WSCodes[event.code], shard);
          return;
        }

        if (UNRESUMABLE_CLOSE_CODES.includes(event.code)) {
          shard.sessionId = null;
        }

        this.client.emit(Events.SHARD_RECONNECTING, shard.id);
        this.shardQueue.add(shard);

        if (shard.sessionId) this.debug('Session id is present, attempting an immediate reconnect...', shard);
        this.reconnect();
      });

      shard.on(ShardEvents.INVALID_SESSION, () => {
        this.client.emit(Events.SHARD_RECONNECTING, shard.id);
      });

      shard.on(ShardEvents.DESTROYED, () => {
        this.debug('Shard was destroyed but no WebSocket connection was present! Reconnecting...', shard);
        this.client.emit(Events.SHARD_RECONNECTING, shard.id);
        this.shardQueue.add(shard);
        this.reconnect();
      });

      shard.eventsAttached = true;
    }

    this.shards.set(shard.id, shard);

    try {
      await shard.connect();
    } catch (error) {
      const err = error as { code?: number; httpStatus?: number } | undefined;
      if (err?.code && UNRECOVERABLE_CLOSE_CODES.includes(err.code)) {
        throw new DiscordjsError(WSCodes[err.code]);
      } else if (!err || err.code) {
        this.debug('Failed to connect to the gateway, requeueing...', shard);
        this.shardQueue.add(shard);
      } else {
        throw error;
      }
    }

    if (this.shardQueue.size) {
      this.debug(`Shard Queue Size: ${this.shardQueue.size}; continuing in 5 seconds...`);
      await sleep(5_000);
      return this.createShards();
    }

    return true;
  }

  async reconnect(): Promise<boolean> {
    if (this.reconnecting || this.status !== Status.READY) return false;
    this.reconnecting = true;
    try {
      await this.createShards();
    } catch (error) {
      const err = error as { httpStatus?: number };
      this.debug(`Couldn't reconnect or fetch information about the gateway. ${error}`);
      if (err.httpStatus !== 401) {
        this.debug('Possible network error occurred. Retrying in 5s...');
        await sleep(5_000);
        this.reconnecting = false;
        return this.reconnect();
      }

      if (this.client.listenerCount(Events.INVALIDATED)) {
        this.client.emit(Events.INVALIDATED);
        this.destroy();
      } else {
        this.client.destroy();
      }
    } finally {
      this.reconnecting = false;
    }
    return true;
  }

  broadcast(packet: GatewayPacket): void {
    for (const shard of this.shards.values()) shard.send(packet);
  }

  destroy(): void {
    if (this.destroyed) return;
    this.debug(`Manager was destroyed. Called by:\n${new DiscordjsError('MANAGER_DESTROYED').stack}`);
    this.destroyed = true;
    this.shardQueue.clear();
    for (const shard of this.shards.values()) shard.destroy({ closeCode: 1_000, reset: true, emit: false, log: false });
  }

  handlePacket(packet?: GatewayPacket, shard?: WebSocketShard): boolean {
    if (packet && this.status !== Status.READY) {
      if (!BeforeReadyWhitelist.includes(packet.t as string)) {
        this.packetQueue.push({ packet, shard: shard as WebSocketShard });
        return false;
      }
    }

    if (this.packetQueue.length) {
      const item = this.packetQueue.shift() as QueuedPacket;
      setImmediate(() => {
        this.handlePacket(item.packet, item.shard);
      }).unref();
    }

    if (packet && PacketHandlers[packet.t as string]) {
      PacketHandlers[packet.t as string](this.client, packet as any, shard as WebSocketShard);
    } else if (packet) {
      this.client.emit(Events.UNHANDLED_PACKET, packet, shard);
    }

    return true;
  }

  checkShardsReady(): void {
    if (this.status === Status.READY) return;
    if (this.shards.size !== this.totalShards || this.shards.some(s => s.status !== Status.READY)) {
      return;
    }

    this.triggerClientReady();
  }

  triggerClientReady(): void {
    this.status = Status.READY;
    this.client.readyAt = new Date();
    this.client.emit(Events.CLIENT_READY, this.client);
    this.handlePacket();
  }
}

export default WebSocketManager;
