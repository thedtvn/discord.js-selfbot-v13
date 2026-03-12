import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.PresenceUpdate.handle(packet.d); };

export default handler;;
