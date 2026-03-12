import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Guild from '../structures/Guild';
import type { GuildMember } from '../structures/GuildMember';
import DataManager from './DataManager';
import { TypeError } from '../errors';
import { Role } from '../structures/Role';

type RoleResolvable = Snowflake | Role;

/**
 * Manages API methods for roles of a GuildMember and stores their cache.
 * @extends {DataManager}
 */
class GuildMemberRoleManager extends DataManager<Snowflake, Role, RoleResolvable> {
  public readonly member: GuildMember;
  public readonly guild: Guild;

  constructor(member: GuildMember) {
    super(member.client, Role);

    /**
     * The GuildMember this manager belongs to
     * @type {GuildMember}
     */
    this.member = member;

    /**
     * The Guild this manager belongs to
     * @type {Guild}
     */
    this.guild = member.guild;
  }

  /**
   * The roles of this member
   * @type {Collection<Snowflake, Role>}
   * @readonly
   */
  get cache(): Collection<Snowflake, Role> {
    const everyone = this.guild.roles.everyone;
    return this.guild.roles.cache.filter(role => this.member._roles.includes(role.id)).set(everyone.id, everyone);
  }

  /**
   * The role of the member used to hoist them in a separate category in the users list
   * @type {?Role}
   * @readonly
   */
  get hoist(): Role | null {
    const hoistedRoles = this.cache.filter(role => role.hoist);
    if (!hoistedRoles.size) return null;
    return hoistedRoles.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev));
  }

  /**
   * The role of the member used to set their role icon
   * @type {?Role}
   * @readonly
   */
  get icon(): Role | null {
    const iconRoles = this.cache.filter(role => role.icon || role.unicodeEmoji);
    if (!iconRoles.size) return null;
    return iconRoles.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev));
  }

  /**
   * The role of the member used to set their color
   * @type {?Role}
   * @readonly
   */
  get color(): Role | null {
    const coloredRoles = this.cache.filter(role => role.colors.primaryColor);
    if (!coloredRoles.size) return null;
    return coloredRoles.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev));
  }

  /**
   * The role of the member with the highest position
   * @type {Role}
   * @readonly
   */
  get highest(): Role {
    return this.cache.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev), this.cache.first());
  }

  /**
   * The premium subscriber role of the guild, if present on the member
   * @type {?Role}
   * @readonly
   */
  get premiumSubscriberRole(): Role | null {
    return this.cache.find(role => role.tags?.premiumSubscriberRole) ?? null;
  }

  /**
   * The managed role this member created when joining the guild, if any
   * <info>Only ever available on bots</info>
   * @type {?Role}
   * @readonly
   */
  get botRole(): Role | null {
    if (!this.member.user.bot) return null;
    return this.cache.find(role => role.tags?.botId === this.member.user.id) ?? null;
  }

  /**
   * Adds a role (or multiple roles) to the member.
   *
   * <info>Uses the idempotent PUT route for singular roles, otherwise PATCHes the underlying guild member</info>
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
   * @param {string} [reason] Reason for adding the role(s)
   * @returns {Promise<GuildMember>}
   */
  async add(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>, reason?: string): Promise<GuildMember> {
    if (roleOrRoles instanceof Collection || Array.isArray(roleOrRoles)) {
      const resolvedRoles = [];
      for (const role of roleOrRoles.values()) {
        const resolvedRole = this.guild.roles.resolveId(role);
        if (!resolvedRole) throw new TypeError('INVALID_ELEMENT', 'Array or Collection', 'roles', role);
        resolvedRoles.push(resolvedRole);
      }

      const newRoles = [...new Set(resolvedRoles.concat(...this.cache.keys()))];
      return this.set(newRoles, reason);
    } else {
      roleOrRoles = this.guild.roles.resolveId(roleOrRoles);
      if (roleOrRoles === null) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Role, Snowflake or Array or Collection of Roles or Snowflakes');
      }

      await this.client.api.guilds[this.guild.id].members[this.member.id].roles[roleOrRoles].put({ reason });

      const clone = this.member._clone();
      clone._roles = [...this.cache.keys(), roleOrRoles];
      return clone;
    }
  }

  /**
   * Removes a role (or multiple roles) from the member.
   *
   * <info>Uses the idempotent DELETE route for singular roles, otherwise PATCHes the underlying guild member</info>
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
   * @param {string} [reason] Reason for removing the role(s)
   * @returns {Promise<GuildMember>}
   */
  async remove(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>, reason?: string): Promise<GuildMember> {
    if (roleOrRoles instanceof Collection || Array.isArray(roleOrRoles)) {
      const resolvedRoles = [];
      for (const role of roleOrRoles.values()) {
        const resolvedRole = this.guild.roles.resolveId(role);
        if (!resolvedRole) throw new TypeError('INVALID_ELEMENT', 'Array or Collection', 'roles', role);
        resolvedRoles.push(resolvedRole);
      }

      const newRoles = this.cache.filter(role => !resolvedRoles.includes(role.id));
      return this.set(newRoles, reason);
    } else {
      roleOrRoles = this.guild.roles.resolveId(roleOrRoles);
      if (roleOrRoles === null) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Role, Snowflake or Array or Collection of Roles or Snowflakes');
      }

      await this.client.api.guilds[this.guild.id].members[this.member.id].roles[roleOrRoles].delete({ reason });

      const clone = this.member._clone();
      const newRoles = this.cache.filter(role => role.id !== roleOrRoles);
      clone._roles = [...newRoles.keys()];
      return clone;
    }
  }

  /**
   * Sets the roles applied to the member.
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} roles The roles or role ids to apply
   * @param {string} [reason] Reason for applying the roles
   * @returns {Promise<GuildMember>}
   * @example
   * // Set the member's roles to a single role
   * guildMember.roles.set(['391156570408615936'])
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Remove all the roles from a member
   * guildMember.roles.set([])
   *   .then(member => console.log(`Member roles is now of ${member.roles.cache.size} size`))
   *   .catch(console.error);
   */
  set(roles: Collection<Snowflake, Role> | RoleResolvable[], reason?: string): Promise<GuildMember> {
    return this.member.edit({ roles }, reason);
  }

  clone(): GuildMemberRoleManager {
    const clone = new this.constructor(this.member);
    clone.member._roles = [...this.cache.keys()];
    return clone;
  }
}

export default GuildMemberRoleManager;
