import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.StageInstanceCreate.handle(packet.d); };

export default handler;;
