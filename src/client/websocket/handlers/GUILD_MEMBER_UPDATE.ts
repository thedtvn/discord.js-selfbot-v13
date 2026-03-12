import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet, shard) => { client.actions.GuildMemberUpdate.handle(packet.d, shard); };

export default handler;;
