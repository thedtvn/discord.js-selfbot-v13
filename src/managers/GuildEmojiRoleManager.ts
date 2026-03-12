import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import type GuildEmoji from '../structures/GuildEmoji';
import DataManager from './DataManager';
import { TypeError } from '../errors';
import { Role } from '../structures/Role';

type RoleResolvable = Snowflake | Role;

/**
 * Manages API methods for roles belonging to emojis and stores their cache.
 * @extends {DataManager}
 */
class GuildEmojiRoleManager extends DataManager<Snowflake, Role, RoleResolvable> {
  public readonly emoji: GuildEmoji;
  public readonly guild: Guild;

  constructor(emoji: GuildEmoji) {
    super(emoji.client, Role);

    /**
     * The emoji belonging to this manager
     * @type {GuildEmoji}
     */
    this.emoji = emoji;
    /**
     * The guild belonging to this manager
     * @type {Guild}
     */
    this.guild = emoji.guild;
  }

  /**
   * The cache of roles belonging to this emoji
   * @type {Collection<Snowflake, Role>}
   * @readonly
   */
  get cache(): Collection<Snowflake, Role> {
    return this.guild.roles.cache.filter(role => this.emoji._roles.includes(role.id));
  }

  /**
   * Adds a role (or multiple roles) to the list of roles that can use this emoji.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
   * @returns {Promise<GuildEmoji>}
   */
  async add(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>): Promise<GuildEmoji> {
    if (!Array.isArray(roleOrRoles) && !(roleOrRoles instanceof Collection)) roleOrRoles = [roleOrRoles];

    const resolvedRoles = [];
    for (const role of roleOrRoles.values()) {
      const resolvedRole = this.guild.roles.resolveId(role);
      if (!resolvedRole) {
        throw new TypeError('INVALID_ELEMENT', 'Array or Collection', 'roles', role);
      }
      resolvedRoles.push(resolvedRole);
    }

    const newRoles = [...new Set(resolvedRoles.concat(...this.cache.keys()))];
    return this.set(newRoles);
  }

  /**
   * Removes a role (or multiple roles) from the list of roles that can use this emoji.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
   * @returns {Promise<GuildEmoji>}
   */
  async remove(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>): Promise<GuildEmoji> {
    if (!Array.isArray(roleOrRoles) && !(roleOrRoles instanceof Collection)) roleOrRoles = [roleOrRoles];

    const resolvedRoleIds = [];
    for (const role of roleOrRoles.values()) {
      const roleId = this.guild.roles.resolveId(role);
      if (!roleId) {
        throw new TypeError('INVALID_ELEMENT', 'Array or Collection', 'roles', role);
      }
      resolvedRoleIds.push(roleId);
    }

    const newRoles = [...this.cache.keys()].filter(id => !resolvedRoleIds.includes(id));
    return this.set(newRoles);
  }

  /**
   * Sets the role(s) that can use this emoji.
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} roles The roles or role ids to apply
   * @returns {Promise<GuildEmoji>}
   * @example
   * // Set the emoji's roles to a single role
   * guildEmoji.roles.set(['391156570408615936'])
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Remove all roles from an emoji
   * guildEmoji.roles.set([])
   *    .then(console.log)
   *    .catch(console.error);
   */
  set(roles: Collection<Snowflake, Role> | RoleResolvable[]): Promise<GuildEmoji> {
    return this.emoji.edit({ roles: (roles instanceof Collection ? [...roles.values()] : roles) as RoleResolvable[] });
  }

  clone(): GuildEmojiRoleManager {
    const clone = new (this.constructor as typeof GuildEmojiRoleManager)(this.emoji);
    clone._patch([...this.cache.keys()]);
    return clone;
  }

  /**
   * Patches the roles for this manager's cache
   * @param {Snowflake[]} roles The new roles
   * @private
   */
  _patch(roles: Snowflake[]): void {
    this.emoji._roles = roles;
  }

  valueOf(): Collection<Snowflake, Role> {
    return this.cache;
  }
}

export default GuildEmojiRoleManager;
