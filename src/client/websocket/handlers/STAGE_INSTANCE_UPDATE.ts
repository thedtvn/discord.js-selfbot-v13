import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.StageInstanceUpdate.handle(packet.d); };

export default handler;;
