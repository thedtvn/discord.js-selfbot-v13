import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildUpdate.handle(packet.d); };

export default handler;;
