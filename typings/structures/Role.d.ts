import Base from './Base';
/**
 * @type {WeakSet<Role>}
 * @private
 * @internal
 */
declare const deletedRoles: WeakSet<WeakKey>;
/**
 * Represents a role on Discord.
 * @extends {Base}
 */
declare class Role extends Base {
    constructor(client: any, data: any, guild: any);
    _patch(data: any): void;
    /**
     * The timestamp the role was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the role was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Whether or not the role has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * The hexadecimal version of the role color, with a leading hashtag
     * @type {string}
     * @readonly
     */
    get hexColor(): string;
    /**
     * The cached guild members that have this role
     * @type {Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get members(): any;
    /**
     * Whether the role is editable by the client user
     * @type {boolean}
     * @readonly
     */
    get editable(): boolean;
    /**
     * The position of the role in the role manager
     * @type {number}
     * @readonly
     */
    get position(): number;
    /**
     * Compares this role's position to another role's.
     * @param {RoleResolvable} role Role to compare to this one
     * @returns {number} Negative number if this role's position is lower (other role's is higher),
     * positive number if this one is higher (other's is lower), 0 if equal
     * @example
     * // Compare the position of a role to another
     * const roleCompare = role.comparePositionTo(otherRole);
     * if (roleCompare >= 1) console.log(`${role.name} is higher than ${otherRole.name}`);
     */
    comparePositionTo(role: any): any;
    /**
     * The data for a role.
     * @typedef {Object} RoleData
     * @property {string} [name] The name of the role
     * @property {ColorResolvable} [color] The color of the role, either a hex string or a base 10 number
     * <warn>This property is deprecated. Use `colors` instead.</warn>
     * @property {RoleColorsResolvable} [colors] The colors of the role
     * @property {boolean} [hoist] Whether or not the role should be hoisted
     * @property {number} [position] The position of the role
     * @property {PermissionResolvable} [permissions] The permissions of the role
     * @property {boolean} [mentionable] Whether or not the role should be mentionable
     * @property {?(BufferResolvable|Base64Resolvable|EmojiResolvable)} [icon] The icon for the role
     * <warn>The `EmojiResolvable` should belong to the same guild as the role.
     * If not, pass the emoji's URL directly</warn>
     * @property {?string} [unicodeEmoji] The unicode emoji for the role
     */
    /**
     * Edits the role.
     * @param {RoleData} data The new data for the role
     * @param {string} [reason] Reason for editing this role
     * @returns {Promise<Role>}
     * @example
     * // Edit a role
     * role.edit({ name: 'new role' })
     *   .then(updated => console.log(`Edited role name to ${updated.name}`))
     *   .catch(console.error);
     */
    edit(data: any, reason: any): any;
    /**
     * Returns `channel.permissionsFor(role)`. Returns permissions for a role in a guild channel,
     * taking into account permission overwrites.
     * @param {GuildChannel|Snowflake} channel The guild channel to use as context
     * @param {boolean} [checkAdmin=true] Whether having `ADMINISTRATOR` will return all permissions
     * @returns {Readonly<Permissions>}
     */
    permissionsIn(channel: any, checkAdmin?: boolean): any;
    /**
     * Sets a new name for the role.
     * @param {string} name The new name of the role
     * @param {string} [reason] Reason for changing the role's name
     * @returns {Promise<Role>}
     * @example
     * // Set the name of the role
     * role.setName('new role')
     *   .then(updated => console.log(`Updated role name to ${updated.name}`))
     *   .catch(console.error);
     */
    setName(name: any, reason: any): any;
    /**
     * Sets a new color for the role.
     * @param {ColorResolvable} color The color of the role
     * @param {string} [reason] Reason for changing the role's color
     * @returns {Promise<Role>}
     * @deprecated Use {@link Role#setColors} instead.
     */
    setColor(color: any, reason: any): any;
    /**
     * Sets new colors for the role.
     *
     * @param {RoleColorsResolvable} colors The colors of the role
     * @param {string} [reason] Reason for changing the role's colors
     * @returns {Promise<Role>}
     * @example
     * // Set the colors of a role
     * role.setColors({ primaryColor: '#FF0000', secondaryColor: '#00FF00', tertiaryColor: '#0000FF' })
     *   .then(updated => console.log(`Set colors of role to ${updated.colors}`))
     *   .catch(console.error);
     * @example
     * // Set holographic colors using constants
     * role.setColors({
     *   primaryColor: Constants.HolographicStyle.Primary,
     *   secondaryColor: Constants.HolographicStyle.Secondary,
     *   tertiaryColor: Constants.HolographicStyle.Tertiary,
     * })
     *   .then(updated => console.log(`Set holographic colors for role ${updated.name}`))
     *   .catch(console.error);
     */
    setColors(colors: any, reason: any): any;
    /**
     * Sets whether or not the role should be hoisted.
     * @param {boolean} [hoist=true] Whether or not to hoist the role
     * @param {string} [reason] Reason for setting whether or not the role should be hoisted
     * @returns {Promise<Role>}
     * @example
     * // Set the hoist of the role
     * role.setHoist(true)
     *   .then(updated => console.log(`Role hoisted: ${updated.hoist}`))
     *   .catch(console.error);
     */
    setHoist(hoist: boolean, reason: any): any;
    /**
     * Sets the permissions of the role.
     * @param {PermissionResolvable} permissions The permissions of the role
     * @param {string} [reason] Reason for changing the role's permissions
     * @returns {Promise<Role>}
     * @example
     * // Set the permissions of the role
     * role.setPermissions([Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS])
     *   .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
     *   .catch(console.error);
     * @example
     * // Remove all permissions from a role
     * role.setPermissions(0n)
     *   .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
     *   .catch(console.error);
     */
    setPermissions(permissions: any, reason: any): any;
    /**
     * Sets whether this role is mentionable.
     * @param {boolean} [mentionable=true] Whether this role should be mentionable
     * @param {string} [reason] Reason for setting whether or not this role should be mentionable
     * @returns {Promise<Role>}
     * @example
     * // Make the role mentionable
     * role.setMentionable(true)
     *   .then(updated => console.log(`Role updated ${updated.name}`))
     *   .catch(console.error);
     */
    setMentionable(mentionable: boolean, reason: any): any;
    /**
     * Sets a new icon for the role.
     * @param {?(BufferResolvable|Base64Resolvable|EmojiResolvable)} icon The icon for the role
     * <warn>The `EmojiResolvable` should belong to the same guild as the role.
     * If not, pass the emoji's URL directly</warn>
     * @param {string} [reason] Reason for changing the role's icon
     * @returns {Promise<Role>}
     */
    setIcon(icon: any, reason: any): any;
    /**
     * Sets a new unicode emoji for the role.
     * @param {?string} unicodeEmoji The new unicode emoji for the role
     * @param {string} [reason] Reason for changing the role's unicode emoji
     * @returns {Promise<Role>}
     * @example
     * // Set a new unicode emoji for the role
     * role.setUnicodeEmoji('🤖')
     *   .then(updated => console.log(`Set unicode emoji for the role to ${updated.unicodeEmoji}`))
     *   .catch(console.error);
     */
    setUnicodeEmoji(unicodeEmoji: any, reason: any): any;
    /**
     * Options used to set the position of a role.
     * @typedef {Object} SetRolePositionOptions
     * @property {boolean} [relative=false] Whether to change the position relative to its current value or not
     * @property {string} [reason] The reason for changing the position
     */
    /**
     * Sets the new position of the role.
     * @param {number} position The new position for the role
     * @param {SetRolePositionOptions} [options] Options for setting the position
     * @returns {Promise<Role>}
     * @example
     * // Set the position of the role
     * role.setPosition(1)
     *   .then(updated => console.log(`Role position: ${updated.position}`))
     *   .catch(console.error);
     */
    setPosition(position: any, options?: {}): any;
    /**
     * Deletes the role.
     * @param {string} [reason] Reason for deleting this role
     * @returns {Promise<Role>}
     * @example
     * // Delete a role
     * role.delete('The role needed to go')
     *   .then(deleted => console.log(`Deleted role ${deleted.name}`))
     *   .catch(console.error);
     */
    delete(reason: any): Promise<this>;
    /**
     * Fetches the member ids for this role in the guild.
     * <info>This only returns 100 member ids</info>
     * @returns {Promise<Snowflake[]>}
     */
    fetchMemberIds(): any;
    /**
     * A link to the role's icon
     * @param {StaticImageURLOptions} [options={}] Options for the image URL
     * @returns {?string}
     */
    iconURL({ format, size }?: {}): any;
    /**
     * Whether this role equals another role. It compares all properties, so for most operations
     * it is advisable to just compare `role.id === role2.id` as it is much faster and is often
     * what most users need.
     * @param {Role} role Role to compare with
     * @returns {boolean}
     */
    equals(role: any): boolean;
    /**
     * When concatenated with a string, this automatically returns the role's mention instead of the Role object.
     * @returns {string}
     * @example
     * // Logs: Role: <@&123456789012345678>
     * console.log(`Role: ${role}`);
     */
    toString(): string;
    toJSON(): any;
    /**
     * Compares the positions of two roles.
     * @param {Role} role1 First role to compare
     * @param {Role} role2 Second role to compare
     * @returns {number} Negative number if the first role's position is lower (second role's is higher),
     * positive number if the first's is higher (second's is lower), 0 if equal
     * @deprecated Use {@link RoleManager#comparePositions} instead.
     */
    static comparePositions(role1: any, role2: any): any;
}
/**
 * @external APIRole
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */
export { Role, deletedRoles };
