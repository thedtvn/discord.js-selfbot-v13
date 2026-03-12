import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.MessagePollVoteAdd.handle(packet.d); };

export default handler;;
