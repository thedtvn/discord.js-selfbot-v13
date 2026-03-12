import type { GatewayHandler } from './types';
import CallState from '../../../structures/CallState';
import { Events } from '../../../util/Constants';
const handler: GatewayHandler = (client, packet) => { for (const voice of packet.d.voice_states) {
  client.actions.VoiceStateUpdate.handle(voice);
}
/**
 * Emitted whenever received a call
 * @event Client#callCreate
 * @param {CallState} call Call
 */
client.emit(Events.CALL_CREATE, new CallState(client, packet.d)); };

export default handler;;
