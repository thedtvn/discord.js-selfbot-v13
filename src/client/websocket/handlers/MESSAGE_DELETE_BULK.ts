import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessageDeleteBulk.handle(packet.d); };

export default handler;;
