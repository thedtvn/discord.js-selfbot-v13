import Action from './Action';
import { Events } from '../../util/Constants';

class ChannelCreateAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const existing = client.channels.cache.has(data.id);
    const channel = client.channels._add(data, data.guild_id ? client.guilds.cache.get(data.guild_id) ?? null : null);
    if (!existing && channel) {
      /**
       * Emitted whenever a guild channel is created.
       * @event Client#channelCreate
       * @param {GuildChannel} channel The channel that was created
       */
      client.emit(Events.CHANNEL_CREATE, channel);
    }
    return { channel };
  }
}

export default ChannelCreateAction;
