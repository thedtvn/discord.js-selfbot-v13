import BaseGuildEmoji from './BaseGuildEmoji';
import GuildEmojiRoleManager from '../managers/GuildEmojiRoleManager';
/**
 * Represents a custom emoji.
 * @extends {BaseGuildEmoji}
 */
declare class GuildEmoji extends BaseGuildEmoji {
    constructor(client: any, data: any, guild: any);
    /**
     * The guild this emoji is part of
     * @type {Guild}
     * @name GuildEmoji#guild
     */
    _clone(): this;
    _patch(data: any): void;
    /**
     * Whether the emoji is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): any;
    /**
     * A manager for roles this emoji is active for.
     * @type {GuildEmojiRoleManager}
     * @readonly
     */
    get roles(): GuildEmojiRoleManager;
    /**
     * Fetches the author for this emoji
     * @returns {Promise<User>}
     */
    fetchAuthor(): any;
    /**
     * Data for editing an emoji.
     * @typedef {Object} GuildEmojiEditData
     * @property {string} [name] The name of the emoji
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] Roles to restrict emoji to
     */
    /**
     * Edits the emoji.
     * @param {GuildEmojiEditData} data The new data for the emoji
     * @param {string} [reason] Reason for editing this emoji
     * @returns {Promise<GuildEmoji>}
     * @example
     * // Edit an emoji
     * emoji.edit({ name: 'newemoji' })
     *   .then(e => console.log(`Edited emoji ${e}`))
     *   .catch(console.error);
     */
    edit(data: any, reason: any): Promise<this>;
    /**
     * Sets the name of the emoji.
     * @param {string} name The new name for the emoji
     * @param {string} [reason] Reason for changing the emoji's name
     * @returns {Promise<GuildEmoji>}
     */
    setName(name: any, reason: any): Promise<this>;
    /**
     * Deletes the emoji.
     * @param {string} [reason] Reason for deleting the emoji
     * @returns {Promise<GuildEmoji>}
     */
    delete(reason: any): Promise<this>;
    /**
     * Whether this emoji is the same as another one.
     * @param {GuildEmoji|APIEmoji} other The emoji to compare it to
     * @returns {boolean}
     */
    equals(other: any): any;
}
export default GuildEmoji;
