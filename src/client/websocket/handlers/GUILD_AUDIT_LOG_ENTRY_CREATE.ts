import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildAuditLogEntryCreate.handle(packet.d); };

export default handler;;
