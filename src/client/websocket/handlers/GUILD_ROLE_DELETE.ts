import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildRoleDelete.handle(packet.d); };

export default handler;;
