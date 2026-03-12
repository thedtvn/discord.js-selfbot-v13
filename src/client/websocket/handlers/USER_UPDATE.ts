import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.UserUpdate.handle(packet.d); };

export default handler;;
