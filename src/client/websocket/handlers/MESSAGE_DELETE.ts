import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessageDelete.handle(packet.d); };

export default handler;;
