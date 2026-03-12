import Action from './Action';
import { deletedRoles } from '../../structures/Role';
import { Events } from '../../util/Constants';

class GuildRoleDeleteAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    let role;

    if (guild) {
      role = guild.roles.cache.get(data.role_id);
      if (role) {
        guild.roles.cache.delete(data.role_id);
        deletedRoles.add(role);
        /**
         * Emitted whenever a guild role is deleted.
         * @event Client#roleDelete
         * @param {Role} role The role that was deleted
         */
        client.emit(Events.GUILD_ROLE_DELETE, role);
      }
    }

    return { role };
  }
}

export default GuildRoleDeleteAction;
