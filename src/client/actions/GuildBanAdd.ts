import Action from './Action';
import { Events } from '../../util/Constants';

class GuildBanAdd extends Action {
  handle(data: any): any {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);

    /**
     * Emitted whenever a member is banned from a guild.
     * @event Client#guildBanAdd
     * @param {GuildBan} ban The ban that occurred
     */
    if (guild) client.emit(Events.GUILD_BAN_ADD, guild.bans._add(data));
  }
}

export default GuildBanAdd;
