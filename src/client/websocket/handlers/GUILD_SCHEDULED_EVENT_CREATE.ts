import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildScheduledEventCreate.handle(packet.d); };

export default handler;;
