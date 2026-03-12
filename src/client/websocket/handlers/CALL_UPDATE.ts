import type { GatewayHandler } from './types';
import CallState from '../../../structures/CallState';
import { Events } from '../../../util/Constants';
const handler: GatewayHandler = (client, packet) => { /**
 * Emitted whenever update a call
 * @event Client#callUpdate
 * @param {Call} call Call
 */
client.emit(Events.CALL_UPDATE, new CallState(client, packet.d)); };

export default handler;;
