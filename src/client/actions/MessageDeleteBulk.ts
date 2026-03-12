import { Collection } from '@discordjs/collection';
import Action from './Action';
import { deletedMessages } from '../../structures/Message';
import { Events } from '../../util/Constants';

class MessageDeleteBulkAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);

    if (channel) {
      if (!channel.isText()) return {};

      const ids = data.ids;
      const messages = new Collection();
      for (const id of ids) {
        const message = this.getMessage(
          {
            id,
            guild_id: data.guild_id,
          },
          channel,
          false,
        );
        if (message) {
          deletedMessages.add(message);
          messages.set(message.id, message);
          channel.messages.cache.delete(id);
        }
      }

      /**
       * Emitted whenever messages are deleted in bulk.
       * @event Client#messageDeleteBulk
       * @param {Collection<Snowflake, Message>} messages The deleted messages, mapped by their id
       */
      if (messages.size > 0) client.emit(Events.MESSAGE_BULK_DELETE, messages);
      return { messages };
    }
    return {};
  }
}

export default MessageDeleteBulkAction;
