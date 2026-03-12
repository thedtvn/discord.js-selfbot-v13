import type { GatewayHandler } from './types';
import CallState from '../../../structures/CallState';
import { Events } from '../../../util/Constants';
const handler: GatewayHandler = (client, packet) => { /**
 * Emitted whenever delete a call
 * @event Client#callDelete
 * @param {Call} call Call
 */
client.emit(Events.CALL_DELETE, new CallState(client, packet.d)); };

export default handler;;
