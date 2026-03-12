import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
import GuildEmoji from '../structures/GuildEmoji';
import ReactionEmoji from '../structures/ReactionEmoji';
import Util from '../util/Util';

type EmojiResolvable = Snowflake | GuildEmoji | ReactionEmoji;
type EmojiIdentifierResolvable = string | EmojiResolvable;
type RawGuildEmojiData = { id: Snowflake };

/**
 * Holds methods to resolve GuildEmojis and stores their cache.
 * @extends {CachedManager}
 */
class BaseGuildEmojiManager extends CachedManager<Snowflake, GuildEmoji, EmojiResolvable, RawGuildEmojiData> {
  constructor(client: Client, iterable?: Iterable<RawGuildEmojiData>) {
    super(client, GuildEmoji, iterable);
  }

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
  resolve(emoji: EmojiResolvable): GuildEmoji | null {
    if (emoji instanceof ReactionEmoji) return this.cache.get(emoji.id) ?? null;
    return super.resolve(emoji);
  }

  /**
   * Resolves an EmojiResolvable to an Emoji id string.
   * @param {EmojiResolvable} emoji The Emoji resolvable to identify
   * @returns {?Snowflake}
   */
  resolveId(emoji: EmojiResolvable): Snowflake | null {
    if (emoji instanceof ReactionEmoji) return emoji.id;
    return super.resolveId(emoji);
  }

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
  resolveIdentifier(emoji: EmojiIdentifierResolvable): string | null {
    const emojiResolvable = this.resolve(emoji);
    if (emojiResolvable) return emojiResolvable.identifier;
    if (emoji instanceof ReactionEmoji) return emoji.identifier;
    if (typeof emoji === 'string') {
      const res = Util.parseEmoji(emoji);
      if (res?.name.length) {
        emoji = `${res.animated ? 'a:' : ''}${res.name}${res.id ? `:${res.id}` : ''}`;
      }
      if (!emoji.includes('%')) return encodeURIComponent(emoji);
      return emoji;
    }
    return null;
  }
}

export default BaseGuildEmojiManager;
