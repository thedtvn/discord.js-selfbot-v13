import CachedManager from './CachedManager';
/**
 * Manages API methods for guild channel permission overwrites and stores their cache.
 * @extends {CachedManager}
 */
declare class PermissionOverwriteManager extends CachedManager {
    constructor(channel: any, iterable: any);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, PermissionOverwrites>}
     * @name PermissionOverwriteManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Replaces the permission overwrites in this channel.
     * @param {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} overwrites
     * Permission overwrites the channel gets updated with
     * @param {string} [reason] Reason for updating the channel overwrites
     * @returns {Promise<GuildChannel>}
     * @example
     * message.channel.permissionOverwrites.set([
     *   {
     *      id: message.author.id,
     *      deny: [Permissions.FLAGS.VIEW_CHANNEL],
     *   },
     * ], 'Needed to change permissions');
     */
    set(overwrites: any, reason: any): Promise<any>;
    /**
     * Extra information about the overwrite
     * @typedef {Object} GuildChannelOverwriteOptions
     * @property {string} [reason] Reason for creating/editing this overwrite
     * @property {number} [type] The type of overwrite, either `0` for a role or `1` for a member. Use this to bypass
     * automatic resolution of type that results in an error for uncached structure
     */
    /**
     * Creates or edits permission overwrites for a user or role in this channel.
     * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
     * @param {PermissionOverwriteOptions} options The options for the update
     * @param {GuildChannelOverwriteOptions} [overwriteOptions] The extra information for the update
     * @param {PermissionOverwrites} [existing] The existing overwrites to merge with this update
     * @returns {Promise<GuildChannel>}
     * @private
     */
    upsert(userOrRole: any, options: any, overwriteOptions: {}, existing: any): Promise<any>;
    /**
     * Creates permission overwrites for a user or role in this channel, or replaces them if already present.
     * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
     * @param {PermissionOverwriteOptions} options The options for the update
     * @param {GuildChannelOverwriteOptions} [overwriteOptions] The extra information for the update
     * @returns {Promise<GuildChannel>}
     * @example
     * // Create or Replace permission overwrites for a message author
     * message.channel.permissionOverwrites.create(message.author, {
     *   SEND_MESSAGES: false
     * })
     *   .then(channel => console.log(channel.permissionOverwrites.cache.get(message.author.id)))
     *   .catch(console.error);
     */
    create(userOrRole: any, options: any, overwriteOptions: any): Promise<any>;
    /**
     * Edits permission overwrites for a user or role in this channel, or creates an entry if not already present.
     * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
     * @param {PermissionOverwriteOptions} options The options for the update
     * @param {GuildChannelOverwriteOptions} [overwriteOptions] The extra information for the update
     * @returns {Promise<GuildChannel>}
     * @example
     * // Edit or Create permission overwrites for a message author
     * message.channel.permissionOverwrites.edit(message.author, {
     *   SEND_MESSAGES: false
     * })
     *   .then(channel => console.log(channel.permissionOverwrites.cache.get(message.author.id)))
     *   .catch(console.error);
     */
    edit(userOrRole: any, options: any, overwriteOptions: any): Promise<any>;
    /**
     * Deletes permission overwrites for a user or role in this channel.
     * @param {UserResolvable|RoleResolvable} userOrRole The user or role to delete
     * @param {string} [reason] The reason for deleting the overwrite
     * @returns {Promise<GuildChannel>}
     */
    delete(userOrRole: any, reason: any): Promise<any>;
}
export default PermissionOverwriteManager;
