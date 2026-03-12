import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import BaseGuildEmojiManager from './BaseGuildEmojiManager';
type RawGuildEmojiData = {
    id: Snowflake;
};
type RoleResolvable = Snowflake | {
    id: Snowflake;
};
interface GuildEmojiCreateOptions {
    roles?: Collection<Snowflake, RoleResolvable> | RoleResolvable[];
    reason?: string;
}
interface GuildEmojiEditData {
    name?: string;
    roles?: RoleResolvable[];
}
/**
 * Manages API methods for GuildEmojis and stores their cache.
 * @extends {BaseGuildEmojiManager}
 */
declare class GuildEmojiManager extends BaseGuildEmojiManager {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawGuildEmojiData>);
    _add(data: RawGuildEmojiData, cache?: boolean): import("..").GuildEmoji;
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
    create(attachment: string | Buffer, name: string, { roles, reason }?: GuildEmojiCreateOptions): Promise<any>;
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
    fetch(id?: Snowflake, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<import("..").GuildEmoji | Collection<unknown, unknown>>;
    /**
     * Deletes an emoji.
     * @param {EmojiResolvable} emoji The Emoji resolvable to delete
     * @param {string} [reason] Reason for deleting the emoji
     * @returns {Promise<void>}
     */
    delete(emoji: Snowflake | {
        id: Snowflake;
    }, reason?: string): Promise<void>;
    /**
     * Edits an emoji.
     * @param {EmojiResolvable} emoji The Emoji resolvable to edit
     * @param {GuildEmojiEditData} data The new data for the emoji
     * @param {string} [reason] Reason for editing this emoji
     * @returns {Promise<GuildEmoji>}
     */
    edit(emoji: Snowflake | {
        id: Snowflake;
    }, data: GuildEmojiEditData, reason?: string): Promise<import("..").GuildEmoji>;
    /**
     * Fetches the author for this emoji
     * @param {EmojiResolvable} emoji The emoji to fetch the author of
     * @returns {Promise<User>}
     */
    fetchAuthor(emoji: Snowflake | {
        id: Snowflake;
    }): Promise<unknown>;
}
export default GuildEmojiManager;
