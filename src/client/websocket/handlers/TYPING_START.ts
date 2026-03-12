import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.TypingStart.handle(packet.d); };

export default handler;;
