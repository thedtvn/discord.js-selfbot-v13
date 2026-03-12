import EventEmitter from 'node:events';
import { Collection } from '@discordjs/collection';
import WebSocketShard from './WebSocketShard';
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
declare class WebSocketManager extends EventEmitter {
    client: Client;
    gateway: string | null;
    totalShards: number;
    shards: Collection<number, WebSocketShard>;
    shardQueue: Set<WebSocketShard>;
    packetQueue: QueuedPacket[];
    status: number;
    destroyed: boolean;
    reconnecting: boolean;
    constructor(client: Client);
    get ping(): number;
    debug(message: string, shard?: WebSocketShard): void;
    connect(): Promise<boolean>;
    createShards(): Promise<boolean>;
    reconnect(): Promise<boolean>;
    broadcast(packet: GatewayPacket): void;
    destroy(): void;
    handlePacket(packet?: GatewayPacket, shard?: WebSocketShard): boolean;
    checkShardsReady(): void;
    triggerClientReady(): void;
}
export default WebSocketManager;
