import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessageReactionRemoveAll.handle(packet.d); };

export default handler;;
