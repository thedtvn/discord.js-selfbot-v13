import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.WebhooksUpdate.handle(packet.d); };

export default handler;;
