import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildRoleCreate.handle(packet.d); };

export default handler;;
