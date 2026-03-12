'use strict';

import process from 'node:process';
import Base from './Base';
import SnowflakeUtil from '../util/SnowflakeUtil';
import type Client from '../client/Client';
import type { APIEmoji, Snowflake } from 'discord-api-types/v10';

/**
 * @type {WeakSet<Emoji>}
 * @private
 * @internal
 */
const deletedEmojis = new WeakSet();
let deprecationEmittedForDeleted = false;

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
class Emoji extends Base {
  public animated: boolean | null;
  public name: string | null;
  public id: Snowflake | null;

  constructor(client: Client, emoji: APIEmoji) {
    super(client);
    /**
     * Whether or not the emoji is animated
     * @type {?boolean}
     */
    this.animated = emoji.animated ?? null;

    /**
     * The emoji's name
     * @type {?string}
     */
    this.name = emoji.name ?? null;

    /**
     * The emoji's id
     * @type {?Snowflake}
     */
    this.id = emoji.id ?? null;
  }

  /**
   * Whether or not the structure has been deleted
   * @type {boolean}
   * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
   */
  get deleted(): boolean {
    if (!deprecationEmittedForDeleted) {
      deprecationEmittedForDeleted = true;
      process.emitWarning(
        'Emoji#deleted is deprecated, see https://github.com/discordjs/discord.js/issues/7091.',
        'DeprecationWarning',
      );
    }

    return deletedEmojis.has(this);
  }

  set deleted(value: boolean) {
    if (!deprecationEmittedForDeleted) {
      deprecationEmittedForDeleted = true;
      process.emitWarning(
        'Emoji#deleted is deprecated, see https://github.com/discordjs/discord.js/issues/7091.',
        'DeprecationWarning',
      );
    }

    if (value) deletedEmojis.add(this);
    else deletedEmojis.delete(this);
  }

  /**
   * The identifier of this emoji, used for message reactions
   * @type {string}
   * @readonly
   */
  get identifier(): string {
    if (this.id) return `${this.animated ? 'a:' : ''}${this.name}:${this.id}`;
    return encodeURIComponent(this.name);
  }

  /**
   * The URL to the emoji file if it's a custom emoji
   * @type {?string}
   * @readonly
   */
  get url(): string | null {
    return this.id && this.client.rest.cdn.Emoji(this.id, this.animated ? 'gif' : 'png');
  }

  /**
   * The timestamp the emoji was created at, or null if unicode
   * @type {?number}
   * @readonly
   */
  get createdTimestamp(): number | null {
    return this.id && SnowflakeUtil.timestampFrom(this.id);
  }

  /**
   * The time the emoji was created at, or null if unicode
   * @type {?Date}
   * @readonly
   */
  get createdAt(): Date | null {
    return this.id && new Date(this.createdTimestamp);
  }

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
  toString(): string {
    return this.id ? `<${this.animated ? 'a' : ''}:${this.name}:${this.id}>` : this.name;
  }

  toJSON(): unknown {
    return super.toJSON({
      guild: 'guildId',
      createdTimestamp: true,
      url: true,
      identifier: true,
    });
  }
}

export { Emoji };
export { deletedEmojis };

/**
 * @external APIEmoji
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object}
 */
