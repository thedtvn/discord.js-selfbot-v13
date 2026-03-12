import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.ThreadCreate.handle(packet.d); };

export default handler;;
