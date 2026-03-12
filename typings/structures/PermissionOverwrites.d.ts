import Base from './Base';
import Permissions from '../util/Permissions';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents a permission overwrite for a role or member in a guild channel.
 * @extends {Base}
 */
declare class PermissionOverwrites extends Base {
    readonly channel: any;
    id: Snowflake;
    type: string;
    deny: Readonly<Permissions>;
    allow: Readonly<Permissions>;
    constructor(client: Client, data: any, channel: any);
    _patch(data: any): any;
    /**
     * Edits this Permission Overwrite.
     * @param {PermissionOverwriteOptions} options The options for the update
     * @param {string} [reason] Reason for creating/editing this overwrite
     * @returns {Promise<PermissionOverwrites>}
     * @example
     * // Update permission overwrites
     * permissionOverwrites.edit({
     *   SEND_MESSAGES: false
     * })
     *   .then(channel => console.log(channel.permissionOverwrites.get(message.author.id)))
     *   .catch(console.error);
     */
    edit(options: any, reason?: string): Promise<this>;
    /**
     * Deletes this Permission Overwrite.
     * @param {string} [reason] Reason for deleting this overwrite
     * @returns {Promise<PermissionOverwrites>}
     */
    delete(reason?: string): Promise<this>;
    toJSON(): {
        id: Snowflake;
        type: any;
        allow: Readonly<Permissions>;
        deny: Readonly<Permissions>;
    };
    /**
     * An object mapping permission flags to `true` (enabled), `null` (unset) or `false` (disabled).
     * ```js
     * {
     *  'SEND_MESSAGES': true,
     *  'EMBED_LINKS': null,
     *  'ATTACH_FILES': false,
     * }
     * ```
     * @typedef {Object} PermissionOverwriteOptions
     */
    /**
     * @typedef {Object} ResolvedOverwriteOptions
     * @property {Permissions} allow The allowed permissions
     * @property {Permissions} deny The denied permissions
     */
    /**
     * Resolves bitfield permissions overwrites from an object.
     * @param {PermissionOverwriteOptions} options The options for the update
     * @param {ResolvedOverwriteOptions} initialPermissions The initial permissions
     * @returns {ResolvedOverwriteOptions}
     */
    static resolveOverwriteOptions(options: any, { allow, deny }?: {
        allow?: any;
        deny?: any;
    }): {
        allow: Permissions;
        deny: Permissions;
    };
    /**
     * The raw data for a permission overwrite
     * @typedef {Object} RawOverwriteData
     * @property {Snowflake} id The id of the {@link Role} or {@link User} this overwrite belongs to
     * @property {string} allow The permissions to allow
     * @property {string} deny The permissions to deny
     * @property {number} type The type of this OverwriteData
     */
    /**
     * Data that can be resolved into {@link RawOverwriteData}. This can be:
     * * PermissionOverwrites
     * * OverwriteData
     * @typedef {PermissionOverwrites|OverwriteData} OverwriteResolvable
     */
    /**
     * Data that can be used for a permission overwrite
     * @typedef {Object} OverwriteData
     * @property {GuildMemberResolvable|RoleResolvable} id Member or role this overwrite is for
     * @property {PermissionResolvable} [allow] The permissions to allow
     * @property {PermissionResolvable} [deny] The permissions to deny
     * @property {OverwriteType} [type] The type of this OverwriteData
     */
    /**
     * Resolves an overwrite into {@link RawOverwriteData}.
     * @param {OverwriteResolvable} overwrite The overwrite-like data to resolve
     * @param {Guild} [guild] The guild to resolve from
     * @returns {RawOverwriteData}
     */
    static resolve(overwrite: any, guild?: any): {
        id: string;
        type: any;
        allow: any;
        deny: any;
    };
}
export default PermissionOverwrites;
