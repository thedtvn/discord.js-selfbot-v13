import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
/**
 * Manages API methods for Guild Stickers and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildStickerManager extends CachedManager {
    constructor(guild: any, iterable: any);
    /**
     * The cache of Guild Stickers
     * @type {Collection<Snowflake, Sticker>}
     * @name GuildStickerManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Options for creating a guild sticker.
     * @typedef {Object} GuildStickerCreateOptions
     * @property {?string} [description] The description for the sticker
     * @property {string} [reason] Reason for creating the sticker
     */
    /**
     * Creates a new custom sticker in the guild.
     * @param {BufferResolvable|Stream|FileOptions|MessageAttachment} file The file for the sticker
     * @param {string} name The name for the sticker
     * @param {string} tags The Discord name of a unicode emoji representing the sticker's expression
     * @param {GuildStickerCreateOptions} [options] Options
     * @returns {Promise<Sticker>} The created sticker
     * @example
     * // Create a new sticker from a URL
     * guild.stickers.create('https://i.imgur.com/w3duR07.png', 'rip', 'headstone')
     *   .then(sticker => console.log(`Created new sticker with name ${sticker.name}!`))
     *   .catch(console.error);
     * @example
     * // Create a new sticker from a file on your computer
     * guild.stickers.create('./memes/banana.png', 'banana', 'banana')
     *   .then(sticker => console.log(`Created new sticker with name ${sticker.name}!`))
     *   .catch(console.error);
     */
    create(file: any, name: any, tags: any, { description, reason }?: {}): Promise<any>;
    /**
     * Data that resolves to give a Sticker object. This can be:
     * * A Sticker object
     * * A Snowflake
     * @typedef {Sticker|Snowflake} StickerResolvable
     */
    /**
     * Resolves a StickerResolvable to a Sticker object.
     * @method resolve
     * @memberof GuildStickerManager
     * @instance
     * @param {StickerResolvable} sticker The Sticker resolvable to identify
     * @returns {?Sticker}
     */
    /**
     * Resolves a StickerResolvable to a Sticker id string.
     * @method resolveId
     * @memberof GuildStickerManager
     * @instance
     * @param {StickerResolvable} sticker The Sticker resolvable to identify
     * @returns {?Snowflake}
     */
    /**
     * Edits a sticker.
     * @param {StickerResolvable} sticker The sticker to edit
     * @param {GuildStickerEditData} [data] The new data for the sticker
     * @param {string} [reason] Reason for editing this sticker
     * @returns {Promise<Sticker>}
     */
    edit(sticker: any, data: any, reason: any): Promise<any>;
    /**
     * Deletes a sticker.
     * @param {StickerResolvable} sticker The sticker to delete
     * @param {string} [reason] Reason for deleting this sticker
     * @returns {Promise<void>}
     */
    delete(sticker: any, reason: any): Promise<void>;
    /**
     * Obtains one or more stickers from Discord, or the sticker cache if they're already available.
     * @param {Snowflake} [id] The Sticker's id
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<Sticker|Collection<Snowflake, Sticker>>}
     * @example
     * // Fetch all stickers from the guild
     * message.guild.stickers.fetch()
     *   .then(stickers => console.log(`There are ${stickers.size} stickers.`))
     *   .catch(console.error);
     * @example
     * // Fetch a single sticker
     * message.guild.stickers.fetch('222078108977594368')
     *   .then(sticker => console.log(`The sticker name is: ${sticker.name}`))
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
     * Fetches the user who uploaded this sticker, if this is a guild sticker.
     * @param {StickerResolvable} sticker The sticker to fetch the user for
     * @returns {Promise<?User>}
     */
    fetchUser(sticker: any): Promise<any>;
}
export default GuildStickerManager;
