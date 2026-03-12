import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet, shard) => { client.actions.GuildMemberRemove.handle(packet.d, shard); };

export default handler;;
