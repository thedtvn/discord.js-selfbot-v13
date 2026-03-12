import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessageReactionRemove.handle(packet.d); };

export default handler;;
