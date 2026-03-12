import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.VoiceStateUpdate.handle(packet.d); };

export default handler;;
