import DataManager from './DataManager';
/**
 * Manages API methods for roles of a GuildMember and stores their cache.
 * @extends {DataManager}
 */
declare class GuildMemberRoleManager extends DataManager {
    constructor(member: any);
    /**
     * The roles of this member
     * @type {Collection<Snowflake, Role>}
     * @readonly
     */
    get cache(): any;
    /**
     * The role of the member used to hoist them in a separate category in the users list
     * @type {?Role}
     * @readonly
     */
    get hoist(): any;
    /**
     * The role of the member used to set their role icon
     * @type {?Role}
     * @readonly
     */
    get icon(): any;
    /**
     * The role of the member used to set their color
     * @type {?Role}
     * @readonly
     */
    get color(): any;
    /**
     * The role of the member with the highest position
     * @type {Role}
     * @readonly
     */
    get highest(): any;
    /**
     * The premium subscriber role of the guild, if present on the member
     * @type {?Role}
     * @readonly
     */
    get premiumSubscriberRole(): any;
    /**
     * The managed role this member created when joining the guild, if any
     * <info>Only ever available on bots</info>
     * @type {?Role}
     * @readonly
     */
    get botRole(): any;
    /**
     * Adds a role (or multiple roles) to the member.
     *
     * <info>Uses the idempotent PUT route for singular roles, otherwise PATCHes the underlying guild member</info>
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
     * @param {string} [reason] Reason for adding the role(s)
     * @returns {Promise<GuildMember>}
     */
    add(roleOrRoles: any, reason: any): Promise<any>;
    /**
     * Removes a role (or multiple roles) from the member.
     *
     * <info>Uses the idempotent DELETE route for singular roles, otherwise PATCHes the underlying guild member</info>
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
     * @param {string} [reason] Reason for removing the role(s)
     * @returns {Promise<GuildMember>}
     */
    remove(roleOrRoles: any, reason: any): Promise<any>;
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
    set(roles: any, reason: any): any;
    clone(): any;
}
export default GuildMemberRoleManager;
