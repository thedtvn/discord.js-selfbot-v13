import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.ThreadMemberUpdate.handle(packet.d); };

export default handler;;
