import Action from './Action';
import { Events } from '../../util/Constants';

class GuildScheduledEventUserAddAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);

    if (guild) {
      const guildScheduledEvent = this.getScheduledEvent(data, guild);
      const user = this.getUser(data);

      if (guildScheduledEvent && user) {
        /**
         * Emitted whenever a user subscribes to a guild scheduled event
         * @event Client#guildScheduledEventUserAdd
         * @param {GuildScheduledEvent} guildScheduledEvent The guild scheduled event
         * @param {User} user The user who subscribed
         */
        client.emit(Events.GUILD_SCHEDULED_EVENT_USER_ADD, guildScheduledEvent, user);

        return { guildScheduledEvent, user };
      }
    }

    return {};
  }
}

export default GuildScheduledEventUserAddAction;
