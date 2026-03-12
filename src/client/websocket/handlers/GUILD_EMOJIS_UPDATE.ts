import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildEmojisUpdate.handle(packet.d); };

export default handler;;
