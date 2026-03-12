import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessageCreate.handle(packet.d); };

export default handler;;
