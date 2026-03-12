import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildScheduledEventUserRemove.handle(packet.d); };

export default handler;;
