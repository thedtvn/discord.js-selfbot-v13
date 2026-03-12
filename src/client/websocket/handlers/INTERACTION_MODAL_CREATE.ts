import type { GatewayHandler } from './types';
import Modal from '../../../structures/Modal';
import { Events } from '../../../util/Constants';

const handler: GatewayHandler = (client, { d: data }) => { /**
 * Emitted whenever client user receive interaction.showModal()
 * @event Client#interactionModalCreate
 * @param {Modal} modal The modal (extended)
 */
client.emit(Events.INTERACTION_MODAL_CREATE, new Modal(data, client)); };

export default handler;;
