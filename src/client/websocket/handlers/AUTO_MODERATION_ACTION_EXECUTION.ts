import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.AutoModerationActionExecution.handle(packet.d); };

export default handler;;
