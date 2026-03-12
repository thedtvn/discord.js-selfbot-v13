import Action from './Action';
import { deletedChannels } from '../../structures/Channel';
import DMChannel from '../../structures/DMChannel';
import { deletedMessages } from '../../structures/Message';
import { Events } from '../../util/Constants';

class ChannelDeleteAction extends Action {
  public deleted: Map<string, any>;
  constructor(client: any) {
    super(client);
    this.deleted = new Map();
  }

  handle(data: any): any {
    const client = this.client;
    const channel = client.channels.cache.get(data.id);

    if (channel) {
      client.channels._remove(channel.id);
      deletedChannels.add(channel);
      if (channel.messages && !(channel instanceof DMChannel)) {
        for (const message of channel.messages.cache.values()) {
          deletedMessages.add(message);
        }
      }
      /**
       * Emitted whenever a channel is deleted.
       * @event Client#channelDelete
       * @param {DMChannel|GuildChannel} channel The channel that was deleted
       */
      client.emit(Events.CHANNEL_DELETE, channel);
    }

    return { channel };
  }
}

export default ChannelDeleteAction;
