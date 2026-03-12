import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import type GuildEmoji from '../structures/GuildEmoji';
import DataManager from './DataManager';
import { Role } from '../structures/Role';
type RoleResolvable = Snowflake | Role;
/**
 * Manages API methods for roles belonging to emojis and stores their cache.
 * @extends {DataManager}
 */
declare class GuildEmojiRoleManager extends DataManager<Snowflake, Role, RoleResolvable> {
    readonly emoji: GuildEmoji;
    readonly guild: Guild;
    constructor(emoji: GuildEmoji);
    /**
     * The cache of roles belonging to this emoji
     * @type {Collection<Snowflake, Role>}
     * @readonly
     */
    get cache(): Collection<Snowflake, Role>;
    /**
     * Adds a role (or multiple roles) to the list of roles that can use this emoji.
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
     * @returns {Promise<GuildEmoji>}
     */
    add(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>): Promise<GuildEmoji>;
    /**
     * Removes a role (or multiple roles) from the list of roles that can use this emoji.
     * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
     * @returns {Promise<GuildEmoji>}
     */
    remove(roleOrRoles: RoleResolvable | RoleResolvable[] | Collection<Snowflake, Role>): Promise<GuildEmoji>;
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
    set(roles: Collection<Snowflake, Role> | RoleResolvable[]): Promise<GuildEmoji>;
    clone(): GuildEmojiRoleManager;
    /**
     * Patches the roles for this manager's cache
     * @param {Snowflake[]} roles The new roles
     * @private
     */
    _patch(roles: Snowflake[]): void;
    valueOf(): Collection<Snowflake, Role>;
}
export default GuildEmojiRoleManager;
