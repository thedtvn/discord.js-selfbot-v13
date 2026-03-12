import type { GatewayHandler } from './types';
import { Events, Opcodes, Status } from '../../../util/Constants';

type GuildLike = { id: string; [key: string]: any };

const run = (client: any, guild: GuildLike): void => {
  const subs: Record<string, unknown> = {};
  subs[guild.id] = {
    typing: true,
    threads: true,
    activities: true,
    member_updates: true,
    thread_member_lists: [],
    members: [],
    channels: {},
  };

  client.ws.broadcast({
    op: Opcodes.GUILD_SUBSCRIPTIONS_BULK,
    d: { subscriptions: subs },
  });
};

const handler: GatewayHandler = (client, { d: data }, shard) => {
  let guild = client.guilds.cache.get(data.id);
  run(client, data);

  if (guild) {
    if (!guild.available && !data.unavailable) {
      guild._patch(data);
      client.emit(Events.GUILD_AVAILABLE, guild);
    }
  } else {
    data.shardId = shard.id;
    guild = client.guilds._add(data);
    if (client.ws.status === Status.READY) {
      client.emit(Events.GUILD_CREATE, guild);
      run(client, guild);
    }
  }
};

export default handler;
