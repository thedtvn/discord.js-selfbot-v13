import process from 'node:process';
import Base from './Base';
import { Error } from '../errors';
import { StickerFormatTypes, StickerTypes } from '../util/Constants';
import SnowflakeUtil from '../util/SnowflakeUtil';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';

/**
 * @type {WeakSet<StageInstance>}
 * @private
 * @internal
 */
const deletedStickers: WeakSet<Sticker> = new WeakSet();
let deprecationEmittedForDeleted: boolean = false;

/**
 * Represents a Sticker.
 * @extends {Base}
 */
class Sticker extends Base {
  public id!: Snowflake;
  public description!: string | null;
  public type!: string | null;
  public format!: string;
  public name!: string;
  public packId!: Snowflake | null;
  public tags!: string[] | null;
  public available!: boolean | null;
  public guildId!: Snowflake | null;
  public user!: any | null;
  public sortValue!: number | null;

  constructor(client: Client, sticker: any) {
    super(client);

    this._patch(sticker);
  }

  _patch(sticker: any): void {
    /**
     * The sticker's id
     * @type {Snowflake}
     */
    this.id = sticker.id;

    if ('description' in sticker) {
      /**
       * The description of the sticker
       * @type {?string}
       */
      this.description = sticker.description;
    } else {
      this.description ??= null;
    }

    if ('type' in sticker) {
      /**
       * The type of the sticker
       * @type {?StickerType}
       */
      this.type = StickerTypes[sticker.type];
    } else {
      this.type ??= null;
    }

    if ('format_type' in sticker) {
      /**
       * The format of the sticker
       * @type {StickerFormatType}
       */
      this.format = StickerFormatTypes[sticker.format_type];
    }

    if ('name' in sticker) {
      /**
       * The name of the sticker
       * @type {string}
       */
      this.name = sticker.name;
    }

    if ('pack_id' in sticker) {
      /**
       * The id of the pack the sticker is from, for standard stickers
       * @type {?Snowflake}
       */
      this.packId = sticker.pack_id;
    } else {
      this.packId ??= null;
    }

    if ('tags' in sticker) {
      /**
       * An array of tags for the sticker
       * @type {?string[]}
       */
      this.tags = sticker.tags.split(', ');
    } else {
      this.tags ??= null;
    }

    if ('available' in sticker) {
      /**
       * Whether or not the guild sticker is available
       * @type {?boolean}
       */
      this.available = sticker.available;
    } else {
      this.available ??= null;
    }

    if ('guild_id' in sticker) {
      /**
       * The id of the guild that owns this sticker
       * @type {?Snowflake}
       */
      this.guildId = sticker.guild_id;
    } else {
      this.guildId ??= null;
    }

    if ('user' in sticker) {
      /**
       * The user that uploaded the guild sticker
       * @type {?User}
       */
      this.user = this.client.users._add(sticker.user);
    } else {
      this.user ??= null;
    }

    if ('sort_value' in sticker) {
      /**
       * The standard sticker's sort order within its pack
       * @type {?number}
       */
      this.sortValue = sticker.sort_value;
    } else {
      this.sortValue ??= null;
    }
  }

  /**
   * The timestamp the sticker was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp(): number {
    return SnowflakeUtil.timestampFrom(this.id);
  }

  /**
   * The time the sticker was created at
   * @type {Date}
   * @readonly
   */
  get createdAt(): Date {
    return new Date(this.createdTimestamp);
  }

  /**
   * Whether or not the sticker has been deleted
   * @type {boolean}
   * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
   */
  get deleted(): boolean {
    if (!deprecationEmittedForDeleted) {
      deprecationEmittedForDeleted = true;
      process.emitWarning(
        'Sticker#deleted is deprecated, see https://github.com/discordjs/discord.js/issues/7091.',
        'DeprecationWarning',
      );
    }

    return deletedStickers.has(this);
  }

  set deleted(value: boolean) {
    if (!deprecationEmittedForDeleted) {
      deprecationEmittedForDeleted = true;
      process.emitWarning(
        'Sticker#deleted is deprecated, see https://github.com/discordjs/discord.js/issues/7091.',
        'DeprecationWarning',
      );
    }

    if (value) deletedStickers.add(this);
    else deletedStickers.delete(this);
  }

  /**
   * Whether this sticker is partial
   * @type {boolean}
   * @readonly
   */
  get partial(): boolean {
    return !this.type;
  }

  /**
   * The guild that owns this sticker
   * @type {?Guild}
   * @readonly
   */
  get guild(): any {
    return this.client.guilds.resolve(this.guildId);
  }

  /**
   * A link to the sticker
   * <info>If the sticker's format is LOTTIE, it returns the URL of the Lottie JSON file.</info>
   * @type {string}
   */
  get url(): string {
    return this.client.rest.cdn.Sticker(this.id, this.format);
  }

  /**
   * Fetches this sticker.
   * @returns {Promise<Sticker>}
   */
  async fetch(): Promise<this> {
    const data = await this.client.api.stickers(this.id).get();
    this._patch(data);
    return this;
  }

  /**
   * Fetches the pack this sticker is part of from Discord, if this is a Nitro sticker.
   * @returns {Promise<?StickerPack>}
   */
  async fetchPack(): Promise<any | null> {
    return (this.packId && (await this.client.fetchPremiumStickerPacks()).get(this.packId)) ?? null;
  }

  /**
   * Fetches the user who uploaded this sticker, if this is a guild sticker.
   * @returns {Promise<?User>}
   */
  async fetchUser(): Promise<any | null> {
    if (this.partial) await this.fetch();
    if (!this.guildId) throw new Error('NOT_GUILD_STICKER');
    return this.guild.stickers.fetchUser(this);
  }

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
  edit(data?: any, reason?: string): Promise<Sticker> {
    return this.guild.stickers.edit(this, data, reason);
  }

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
  async delete(reason?: string): Promise<this> {
    await this.guild.stickers.delete(this, reason);
    return this;
  }

  /**
   * Whether this sticker is the same as another one.
   * @param {Sticker|APISticker} other The sticker to compare it to
   * @returns {boolean}
   */
  equals(other: any): boolean {
    if (other instanceof Sticker) {
      return (
        other.id === this.id &&
        other.description === this.description &&
        other.type === this.type &&
        other.format === this.format &&
        other.name === this.name &&
        other.packId === this.packId &&
        other.tags.length === this.tags.length &&
        other.tags.every(tag => this.tags.includes(tag)) &&
        other.available === this.available &&
        other.guildId === this.guildId &&
        other.sortValue === this.sortValue
      );
    } else {
      return (
        other.id === this.id &&
        other.description === this.description &&
        other.name === this.name &&
        other.tags === this.tags.join(', ')
      );
    }
  }
}


/**
 * @external APISticker
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object}
 */

export { Sticker, deletedStickers };
