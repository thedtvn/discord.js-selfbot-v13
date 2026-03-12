import Action from './Action';
import GuildBan from '../../structures/GuildBan';
import { Events } from '../../util/Constants';

class GuildBanRemove extends Action {
  handle(data: any): any {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);

    /**
     * Emitted whenever a member is unbanned from a guild.
     * @event Client#guildBanRemove
     * @param {GuildBan} ban The ban that was removed
     */
    if (guild) {
      const ban = guild.bans.cache.get(data.user.id) ?? new GuildBan(client, data, guild);
      guild.bans.cache.delete(ban.user.id);
      client.emit(Events.GUILD_BAN_REMOVE, ban);
    }
  }
}

export default GuildBanRemove;
