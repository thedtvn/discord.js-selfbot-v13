import type { GatewayHandler } from './types';

import { Events } from '../../../util/Constants';

const handler: GatewayHandler = (client, packet) => { const { old, updated } = client.actions.ChannelUpdate.handle(packet.d);
if (old && updated) {
  /**
   * Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
   * @event Client#threadUpdate
   * @param {ThreadChannel} oldThread The thread before the update
   * @param {ThreadChannel} newThread The thread after the update
   */
  client.emit(Events.THREAD_UPDATE, old, updated);
} };

export default handler;;
