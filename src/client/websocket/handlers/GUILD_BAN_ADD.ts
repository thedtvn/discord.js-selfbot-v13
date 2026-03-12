import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.GuildBanAdd.handle(packet.d); };

export default handler;;
