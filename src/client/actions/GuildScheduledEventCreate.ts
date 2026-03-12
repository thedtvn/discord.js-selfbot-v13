import Action from './Action';
import { Events } from '../../util/Constants';

class GuildScheduledEventCreateAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      const guildScheduledEvent = guild.scheduledEvents._add(data);

      /**
       * Emitted whenever a guild scheduled event is created.
       * @event Client#guildScheduledEventCreate
       * @param {GuildScheduledEvent} guildScheduledEvent The created guild scheduled event
       */
      client.emit(Events.GUILD_SCHEDULED_EVENT_CREATE, guildScheduledEvent);

      return { guildScheduledEvent };
    }

    return {};
  }
}

export default GuildScheduledEventCreateAction;
