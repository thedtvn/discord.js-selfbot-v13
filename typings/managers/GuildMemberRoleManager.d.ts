import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import type { GuildMember } from '../structures/GuildMember';
import DataManager from './DataManager';
import { Role } from '../structures/Role';
type RoleResolvable = Snowflake | Role;
/**
 * Manages API methods for roles of a GuildMember and stores their cache.
 * @extends {DataManager}
 */
declare class GuildMemberRoleManager extends DataManager<Snowflake, Role, RoleResolvable> {
    readonly member: GuildMember;
    readonly guild: Guild;
    constructor(member: GuildMember);
    /**
     * The roles of this member
     * @type {Collection<Snowflake, Role>}
     * @readonly
     */
    get cache(): Collection<Snowflake, Role>;
    /**
     * The role of the member used to hoist them in a separate category in the users list
     * @type {?Role}
     * @readonly
     */
    get hoist(): Role | null;
    /**
     * The role of the member used to set their role icon
     * @type {?Role}
     * @readonly
     */
    get icon(): Role | null;
    /**
     * The role of the member used to set their color
     * @type {?Role}
     * @readonly
     */
    get color(): Role | null;
    /**
     * The role of the member with the highest position
     * @type {Role}
     * @readonly
     */
    get highest(): Role;
    /**
     * The premium subscriber role of the guild, if present on the member
     * @type {?Role}
     * @readonly
     */
    get premiumSubscriberRole(): Role | null;
    /**
     * The managed role this member created when joining the guild, if any
     * <info>Only ever available on bots</info>
     * @type {?Role}
     * @readonly
     */
    get botRole(): Role | null;
    /**
     * Adds a role (or multiple roles) to the member.
     *
     * <info>Uses the idempotent PUT route for singular roles, otherwise PATCHes the underlying guild member</info>
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
     * @param {string} [reason] Reason for adding the role(s)
     * @returns {Promise<GuildMember>}
     */
    add(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>, reason?: string): Promise<GuildMember>;
    /**
     * Removes a role (or multiple roles) from the member.
     *
     * <info>Uses the idempotent DELETE route for singular roles, otherwise PATCHes the underlying guild member</info>
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
     * @param {string} [reason] Reason for removing the role(s)
     * @returns {Promise<GuildMember>}
     */
    remove(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>, reason?: string): Promise<GuildMember>;
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
    set(roles: Collection<Snowflake, Role> | RoleResolvable[], reason?: string): Promise<GuildMember>;
    clone(): GuildMemberRoleManager;
}
export default GuildMemberRoleManager;
