import CachedManager from './CachedManager';
/**
 * Holds methods to resolve GuildEmojis and stores their cache.
 * @extends {CachedManager}
 */
declare class BaseGuildEmojiManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of GuildEmojis
     * @type {Collection<Snowflake, GuildEmoji>}
     * @name BaseGuildEmojiManager#cache
     */
    /**
     * Data that can be resolved into a GuildEmoji object. This can be:
     * * A Snowflake
     * * A GuildEmoji object
     * * A ReactionEmoji object
     * @typedef {Snowflake|GuildEmoji|ReactionEmoji} EmojiResolvable
     */
    /**
     * Resolves an EmojiResolvable to an Emoji object.
     * @param {EmojiResolvable} emoji The Emoji resolvable to identify
     * @returns {?GuildEmoji}
     */
    resolve(emoji: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Resolves an EmojiResolvable to an Emoji id string.
     * @param {EmojiResolvable} emoji The Emoji resolvable to identify
     * @returns {?Snowflake}
     */
    resolveId(emoji: any): string;
    /**
     * Data that can be resolved to give an emoji identifier. This can be:
     * * An EmojiResolvable
     * * The `<a:name:id>`, `<:name:id>`, `a:name:id` or `name:id` emoji identifier string of an emoji
     * * The Unicode representation of an emoji
     * @typedef {string|EmojiResolvable} EmojiIdentifierResolvable
     */
    /**
     * Resolves an EmojiResolvable to an emoji identifier.
     * @param {EmojiIdentifierResolvable} emoji The emoji resolvable to resolve
     * @returns {?string}
     */
    resolveIdentifier(emoji: any): any;
}
export default BaseGuildEmojiManager;
