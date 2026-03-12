import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildBanRemove.handle(packet.d); };

export default handler;;
