import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildRoleUpdate.handle(packet.d); };

export default handler;;
