import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildScheduledEventDelete.handle(packet.d); };

export default handler;;
