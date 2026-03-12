import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.emit('debug', `[VOICE] received voice server: ${JSON.stringify(packet)}`);
client.voice.onVoiceServer(packet.d); };

export default handler;;
