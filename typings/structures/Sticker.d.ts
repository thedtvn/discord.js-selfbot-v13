import Base from './Base';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * @type {WeakSet<StageInstance>}
 * @private
 * @internal
 */
declare const deletedStickers: WeakSet<Sticker>;
/**
 * Represents a Sticker.
 * @extends {Base}
 */
declare class Sticker extends Base {
    id: Snowflake;
    description: string | null;
    type: string | null;
    format: string;
    name: string;
    packId: Snowflake | null;
    tags: string[] | null;
    available: boolean | null;
    guildId: Snowflake | null;
    user: any | null;
    sortValue: number | null;
    constructor(client: Client, sticker: any);
    _patch(sticker: any): any;
    /**
     * The timestamp the sticker was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the sticker was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Whether or not the sticker has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * Whether this sticker is partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * The guild that owns this sticker
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * A link to the sticker
     * <info>If the sticker's format is LOTTIE, it returns the URL of the Lottie JSON file.</info>
     * @type {string}
     */
    get url(): string;
    /**
     * Fetches this sticker.
     * @returns {Promise<Sticker>}
     */
    fetch(): Promise<this>;
    /**
     * Fetches the pack this sticker is part of from Discord, if this is a Nitro sticker.
     * @returns {Promise<?StickerPack>}
     */
    fetchPack(): Promise<any | null>;
    /**
     * Fetches the user who uploaded this sticker, if this is a guild sticker.
     * @returns {Promise<?User>}
     */
    fetchUser(): Promise<any | null>;
    /**
     * Data for editing a sticker.
     * @typedef {Object} GuildStickerEditData
     * @property {string} [name] The name of the sticker
     * @property {?string} [description] The description of the sticker
     * @property {string} [tags] The Discord name of a unicode emoji representing the sticker's expression
     */
    /**
     * Edits the sticker.
     * @param {GuildStickerEditData} [data] The new data for the sticker
     * @param {string} [reason] Reason for editing this sticker
     * @returns {Promise<Sticker>}
     * @example
     * // Update the name of a sticker
     * sticker.edit({ name: 'new name' })
     *   .then(s => console.log(`Updated the name of the sticker to ${s.name}`))
     *   .catch(console.error);
     */
    edit(data?: any, reason?: string): Promise<Sticker>;
    /**
     * Deletes the sticker.
     * @returns {Promise<Sticker>}
     * @param {string} [reason] Reason for deleting this sticker
     * @example
     * // Delete a message
     * sticker.delete()
     *   .then(s => console.log(`Deleted sticker ${s.name}`))
     *   .catch(console.error);
     */
    delete(reason?: string): Promise<this>;
    /**
     * Whether this sticker is the same as another one.
     * @param {Sticker|APISticker} other The sticker to compare it to
     * @returns {boolean}
     */
    equals(other: any): boolean;
}
/**
 * @external APISticker
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object}
 */
export { Sticker, deletedStickers };
