import DataManager from './DataManager';
/**
 * Manages API methods for roles belonging to emojis and stores their cache.
 * @extends {DataManager}
 */
declare class GuildEmojiRoleManager extends DataManager {
    constructor(emoji: any);
    /**
     * The cache of roles belonging to this emoji
     * @type {Collection<Snowflake, Role>}
     * @readonly
     */
    get cache(): any;
    /**
     * Adds a role (or multiple roles) to the list of roles that can use this emoji.
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
     * @returns {Promise<GuildEmoji>}
     */
    add(roleOrRoles: any): Promise<any>;
    /**
     * Removes a role (or multiple roles) from the list of roles that can use this emoji.
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
     * @returns {Promise<GuildEmoji>}
     */
    remove(roleOrRoles: any): Promise<any>;
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
    set(roles: any): any;
    clone(): any;
    /**
     * Patches the roles for this manager's cache
     * @param {Snowflake[]} roles The new roles
     * @private
     */
    _patch(roles: any): void;
    valueOf(): any;
}
export default GuildEmojiRoleManager;
