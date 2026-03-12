import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
import { Role } from '../structures/Role';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
type RoleResolvable = Role | Snowflake;
type RawRoleData = {
    id: Snowflake;
} & Record<string, unknown>;
interface RoleColorsResolvable {
    primaryColor: unknown;
    secondaryColor?: unknown;
    tertiaryColor?: unknown;
}
interface CreateRoleOptions {
    name?: string;
    color?: unknown;
    colors?: RoleColorsResolvable;
    hoist?: boolean;
    permissions?: unknown;
    position?: number;
    mentionable?: boolean;
    icon?: unknown;
    unicodeEmoji?: string | null;
    reason?: string;
}
interface RoleData {
    name?: string;
    color?: unknown;
    colors?: RoleColorsResolvable;
    hoist?: boolean;
    permissions?: unknown;
    position?: number;
    mentionable?: boolean;
    icon?: unknown;
    unicodeEmoji?: string | null;
    [key: string]: unknown;
}
interface SetRolePositionOptions {
    relative?: boolean;
    reason?: string;
}
interface GuildRolePosition {
    role: RoleResolvable;
    position: number;
}
/**
 * Manages API methods for roles and stores their cache.
 * @extends {CachedManager}
 */
declare class RoleManager extends CachedManager<Snowflake, Role, RoleResolvable, RawRoleData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawRoleData>);
    /**
     * The role cache of this manager
     * @type {Collection<Snowflake, Role>}
     * @name RoleManager#cache
     */
    _add(data: RawRoleData, cache?: boolean): Role;
    /**
     * Obtains a role from Discord, or the role cache if they're already available.
     * @param {Snowflake} [id] The role's id
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<?Role|Collection<Snowflake, Role>>}
     * @example
     * // Fetch all roles from the guild
     * message.guild.roles.fetch()
     *   .then(roles => console.log(`There are ${roles.size} roles.`))
     *   .catch(console.error);
     * @example
     * // Fetch a single role
     * message.guild.roles.fetch('222078108977594368')
     *   .then(role => console.log(`The role color is: ${role.colors.primaryColor}`))
     *   .catch(console.error);
     */
    fetch(id?: Snowflake, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<Role | null | Collection<Snowflake, Role>>;
    /**
     * Fetches the member counts for each role in the guild.
     * @returns {Promise<Record<Snowflake, number>>}
     */
    fetchMemberCounts(): Promise<Record<Snowflake, number>>;
    /**
     * Fetches the member ids for a role in the guild.
     * <info>This only returns 100 member ids</info>
     * @param {RoleResolvable} role The role to fetch member ids for
     * @returns {Promise<Snowflake[]>}
     */
    fetchMemberIds(role: RoleResolvable): Promise<Snowflake[]>;
    /**
     * Data that can be resolved to a Role object. This can be:
     * * A Role
     * * A Snowflake
     * @typedef {Role|Snowflake} RoleResolvable
     */
    /**
     * Resolves a {@link RoleResolvable} to a {@link Role} object.
     * @method resolve
     * @memberof RoleManager
     * @instance
     * @param {RoleResolvable} role The role resolvable to resolve
     * @returns {?Role}
     */
    /**
     * Resolves a {@link RoleResolvable} to a {@link Role} id.
     * @method resolveId
     * @memberof RoleManager
     * @instance
     * @param {RoleResolvable} role The role resolvable to resolve
     * @returns {?Snowflake}
     */
    /**
     * @typedef {Object} RoleColorsResolvable
     * @property {ColorResolvable} primaryColor The primary color of the role
     * @property {ColorResolvable} [secondaryColor] The secondary color of the role.
     * This will make the role a gradient between the other provided colors
     * @property {ColorResolvable} [tertiaryColor] The tertiary color of the role.
     * When sending `tertiaryColor` the API enforces the role color to be a holographic style
     * with values of `primaryColor = 11127295`, `secondaryColor = 16759788`, and `tertiaryColor = 16761760`.
     * These values are available as a constant: `Constants.HolographicStyle`
     */
    /**
     * Options used to create a new role.
     * @typedef {Object} CreateRoleOptions
     * @property {string} [name] The name of the new role
     * @property {ColorResolvable} [color] The data to create the role with
     * <warn>This property is deprecated. Use `colors` instead.</warn>
     * @property {RoleColorsResolvable} [colors] The colors to create the role with
     * @property {boolean} [hoist] Whether or not the new role should be hoisted
     * @property {PermissionResolvable} [permissions] The permissions for the new role
     * @property {number} [position] The position of the new role
     * @property {boolean} [mentionable] Whether or not the new role should be mentionable
     * @property {?(BufferResolvable|Base64Resolvable|EmojiResolvable)} [icon] The icon for the role
     * <warn>The `EmojiResolvable` should belong to the same guild as the role.
     * If not, pass the emoji's URL directly</warn>
     * @property {?string} [unicodeEmoji] The unicode emoji for the role
     * @property {string} [reason] The reason for creating this role
     */
    /**
     * Creates a new role in the guild with given information.
     * <warn>The position will silently reset to 1 if an invalid one is provided, or none.</warn>
     * @param {CreateRoleOptions} [options] Options for creating the new role
     * @returns {Promise<Role>}
     * @example
     * // Create a new role
     * guild.roles.create()
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Create a new role with data and a reason
     * guild.roles.create({
     *   name: 'Super Cool Blue People',
     *   colors: {
     *     primaryColor: 'BLUE',
     *   },
     *   reason: 'we needed a role for Super Cool People',
     * })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Create a role with holographic colors
     * guild.roles.create({
     *   name: 'Holographic Role',
     *   reason: 'Creating a role with holographic effect',
     *   colors: {
     *     primaryColor: Constants.HolographicStyles.PRIMARY,
     *     secondaryColor: Constants.HolographicStyles.SECONDARY,
     *     tertiaryColor: Constants.HolographicStyles.TERTIARY,
     *   },
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    create(options?: CreateRoleOptions): Promise<Role>;
    /**
     * Edits a role of the guild.
     * @param {RoleResolvable} role The role to edit
     * @param {RoleData} data The new data for the role
     * @param {string} [reason] Reason for editing this role
     * @returns {Promise<Role>}
     * @example
     * // Edit a role
     * guild.roles.edit('222079219327434752', { name: 'buddies' })
     *   .then(updated => console.log(`Edited role name to ${updated.name}`))
     *   .catch(console.error);
     */
    edit(role: RoleResolvable, data: RoleData, reason?: string): Promise<Role>;
    /**
     * Deletes a role.
     * @param {RoleResolvable} role The role to delete
     * @param {string} [reason] Reason for deleting the role
     * @returns {Promise<void>}
     * @example
     * // Delete a role
     * guild.roles.delete('222079219327434752', 'The role needed to go')
     *   .then(() => console.log('Deleted the role.'))
     *   .catch(console.error);
     */
    delete(role: RoleResolvable, reason?: string): Promise<void>;
    /**
     * Sets the new position of the role.
     * @param {RoleResolvable} role The role to change the position of
     * @param {number} position The new position for the role
     * @param {SetRolePositionOptions} [options] Options for setting the position
     * @returns {Promise<Role>}
     * @example
     * // Set the position of the role
     * guild.roles.setPosition('222197033908436994', 1)
     *   .then(updated => console.log(`Role position: ${updated.position}`))
     *   .catch(console.error);
     */
    setPosition(role: RoleResolvable, position: number, { relative, reason }?: SetRolePositionOptions): Promise<Role>;
    /**
     * The data needed for updating a guild role's position
     * @typedef {Object} GuildRolePosition
     * @property {RoleResolvable} role The role's id
     * @property {number} position The position to update
     */
    /**
     * Batch-updates the guild's role positions
     * @param {GuildRolePosition[]} rolePositions Role positions to update
     * @returns {Promise<Guild>}
     * @example
     * guild.roles.setPositions([{ role: roleId, position: updatedRoleIndex }])
     *  .then(guild => console.log(`Role positions updated for ${guild}`))
     *  .catch(console.error);
     */
    setPositions(rolePositions: GuildRolePosition[]): Promise<Guild>;
    /**
     * Compares the positions of two roles.
     * @param {RoleResolvable} role1 First role to compare
     * @param {RoleResolvable} role2 Second role to compare
     * @returns {number} Negative number if the first role's position is lower (second role's is higher),
     * positive number if the first's is higher (second's is lower), 0 if equal
     */
    comparePositions(role1: RoleResolvable, role2: RoleResolvable): number;
    /**
     * Gets the managed role a user created when joining the guild, if any
     * <info>Only ever available for bots</info>
     * @param {UserResolvable} user The user to access the bot role for
     * @returns {?Role}
     */
    botRoleFor(user: unknown): Role | null;
    /**
     * The `@everyone` role of the guild
     * @type {Role}
     * @readonly
     */
    get everyone(): Role;
    /**
     * The premium subscriber role of the guild, if any
     * @type {?Role}
     * @readonly
     */
    get premiumSubscriberRole(): Role | null;
    /**
     * The role with the highest position in the cache
     * @type {Role}
     * @readonly
     */
    get highest(): Role;
}
export default RoleManager;
