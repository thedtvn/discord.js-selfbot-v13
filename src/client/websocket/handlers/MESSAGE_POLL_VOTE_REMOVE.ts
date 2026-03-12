import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessagePollVoteRemove.handle(packet.d); };

export default handler;;
