import Base from './Base';
import type Client from '../client/Client';
import type { APIEmoji, Snowflake } from 'discord-api-types/v10';
/**
 * @type {WeakSet<Emoji>}
 * @private
 * @internal
 */
declare const deletedEmojis: WeakSet<WeakKey>;
/**
 * Represents raw emoji data from the API
 * @typedef {APIEmoji} RawEmoji
 * @property {?Snowflake} id The emoji's id
 * @property {?string} name The emoji's name
 * @property {?boolean} animated Whether the emoji is animated
 */
/**
 * Represents an emoji, see {@link GuildEmoji} and {@link ReactionEmoji}.
 * @extends {Base}
 */
declare class Emoji extends Base {
    animated: boolean | null;
    name: string | null;
    id: Snowflake | null;
    constructor(client: Client, emoji: APIEmoji);
    /**
     * Whether or not the structure has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * The identifier of this emoji, used for message reactions
     * @type {string}
     * @readonly
     */
    get identifier(): string;
    /**
     * The URL to the emoji file if it's a custom emoji
     * @type {?string}
     * @readonly
     */
    get url(): string | null;
    /**
     * The timestamp the emoji was created at, or null if unicode
     * @type {?number}
     * @readonly
     */
    get createdTimestamp(): number | null;
    /**
     * The time the emoji was created at, or null if unicode
     * @type {?Date}
     * @readonly
     */
    get createdAt(): Date | null;
    /**
     * When concatenated with a string, this automatically returns the text required to form a graphical emoji on Discord
     * instead of the Emoji object.
     * @returns {string}
     * @example
     * // Send a custom emoji from a guild:
     * const emoji = guild.emojis.cache.first();
     * msg.channel.send(`Hello! ${emoji}`);
     * @example
     * // Send the emoji used in a reaction to the channel the reaction is part of
     * reaction.message.channel.send(`The emoji used was: ${reaction.emoji}`);
     */
    toString(): string;
    toJSON(): unknown;
}
export { Emoji };
export { deletedEmojis };
/**
 * @external APIEmoji
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object}
 */
