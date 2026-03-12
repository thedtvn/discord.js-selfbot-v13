import { Collection } from '@discordjs/collection';
import BaseGuildEmojiManager from './BaseGuildEmojiManager';
/**
 * Manages API methods for GuildEmojis and stores their cache.
 * @extends {BaseGuildEmojiManager}
 */
declare class GuildEmojiManager extends BaseGuildEmojiManager {
    constructor(guild: any, iterable: any);
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Options used for creating an emoji in a guild.
     * @typedef {Object} GuildEmojiCreateOptions
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] The roles to limit the emoji to
     * @property {string} [reason] The reason for creating the emoji
     */
    /**
     * Creates a new custom emoji in the guild.
     * @param {BufferResolvable|Base64Resolvable} attachment The image for the emoji
     * @param {string} name The name for the emoji
     * @param {GuildEmojiCreateOptions} [options] Options for creating the emoji
     * @returns {Promise<Emoji>} The created emoji
     * @example
     * // Create a new emoji from a URL
     * guild.emojis.create('https://i.imgur.com/w3duR07.png', 'rip')
     *   .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
     *   .catch(console.error);
     * @example
     * // Create a new emoji from a file on your computer
     * guild.emojis.create('./memes/banana.png', 'banana')
     *   .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
     *   .catch(console.error);
     */
    create(attachment: any, name: any, { roles, reason }?: {}): Promise<any>;
    /**
     * Obtains one or more emojis from Discord, or the emoji cache if they're already available.
     * @param {Snowflake} [id] The emoji's id
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<GuildEmoji|Collection<Snowflake, GuildEmoji>>}
     * @example
     * // Fetch all emojis from the guild
     * message.guild.emojis.fetch()
     *   .then(emojis => console.log(`There are ${emojis.size} emojis.`))
     *   .catch(console.error);
     * @example
     * // Fetch a single emoji
     * message.guild.emojis.fetch('222078108977594368')
     *   .then(emoji => console.log(`The emoji name is: ${emoji.name}`))
     *   .catch(console.error);
     */
    fetch(id: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<Collection<unknown, unknown> | {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Deletes an emoji.
     * @param {EmojiResolvable} emoji The Emoji resolvable to delete
     * @param {string} [reason] Reason for deleting the emoji
     * @returns {Promise<void>}
     */
    delete(emoji: any, reason: any): Promise<void>;
    /**
     * Edits an emoji.
     * @param {EmojiResolvable} emoji The Emoji resolvable to edit
     * @param {GuildEmojiEditData} data The new data for the emoji
     * @param {string} [reason] Reason for editing this emoji
     * @returns {Promise<GuildEmoji>}
     */
    edit(emoji: any, data: any, reason: any): Promise<any>;
    /**
     * Fetches the author for this emoji
     * @param {EmojiResolvable} emoji The emoji to fetch the author of
     * @returns {Promise<User>}
     */
    fetchAuthor(emoji: any): Promise<any>;
}
export default GuildEmojiManager;
