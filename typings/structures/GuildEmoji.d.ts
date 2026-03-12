import BaseGuildEmoji from './BaseGuildEmoji';
import GuildEmojiRoleManager from '../managers/GuildEmojiRoleManager';
import type Client from '../client/Client';
import type { Guild } from './Guild';
import type User from './User';
import type { Role } from './Role';
import type { APIEmoji, Snowflake } from 'discord-api-types/v10';
/**
 * Represents a custom emoji.
 * @extends {BaseGuildEmoji}
 */
declare class GuildEmoji extends BaseGuildEmoji {
    author: User | null;
    _roles: Snowflake[];
    constructor(client: Client, data: APIEmoji & {
        roles?: Snowflake[];
        user?: unknown;
    }, guild: Guild);
    /**
     * The guild this emoji is part of
     * @type {Guild}
     * @name GuildEmoji#guild
     */
    _clone(): this;
    _patch(data: APIEmoji & {
        roles?: Snowflake[];
        user?: unknown;
    }): any;
    /**
     * Whether the emoji is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): boolean;
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
    fetchAuthor(): Promise<User>;
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
    edit(data: {
        name?: string;
        roles?: Array<Role | Snowflake>;
    }, reason?: string): Promise<this>;
    /**
     * Sets the name of the emoji.
     * @param {string} name The new name for the emoji
     * @param {string} [reason] Reason for changing the emoji's name
     * @returns {Promise<GuildEmoji>}
     */
    setName(name: string, reason?: string): Promise<this>;
    /**
     * Deletes the emoji.
     * @param {string} [reason] Reason for deleting the emoji
     * @returns {Promise<GuildEmoji>}
     */
    delete(reason?: string): Promise<this>;
    /**
     * Whether this emoji is the same as another one.
     * @param {GuildEmoji|APIEmoji} other The emoji to compare it to
     * @returns {boolean}
     */
    equals(other: GuildEmoji | (APIEmoji & {
        roles?: Snowflake[];
    })): boolean;
}
export default GuildEmoji;
