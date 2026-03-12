import type { GatewayHandler } from './types';
import { Events } from '../../../util/Constants';
const handler: GatewayHandler = (client, packet) => { const channel = client.channels.cache.get(packet.d.channel_id);
if (channel) {
  if (!channel._recipients) channel._recipients = [];
  channel._recipients = channel._recipients.filter(u => u.id !== packet.d.user.id);
  /**
   * Emitted whenever a recipient is removed from a group DM.
   * @event Client#channelRecipientRemove
   * @param {GroupDMChannel} channel Group DM channel
   * @param {User} user User
   */
  client.emit(Events.CHANNEL_RECIPIENT_REMOVE, channel, client.users._add(packet.d.user));
} };

export default handler;;
