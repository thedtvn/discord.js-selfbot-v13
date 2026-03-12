import { Collection } from '@discordjs/collection';
import Base from './Base';
import { Sticker } from './Sticker';
import SnowflakeUtil from '../util/SnowflakeUtil';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';

/**
 * Represents a pack of standard stickers.
 * @extends {Base}
 */
class StickerPack extends Base {
  declare public id: Snowflake;
  public stickers: Collection<Snowflake, Sticker>;
  public name: string;
  public skuId: Snowflake;
  public coverStickerId: Snowflake | null;
  public description: string;
  public bannerId: Snowflake | null;

  constructor(client: Client, pack: any) {
    super(client);
    /**
     * The Sticker pack's id
     * @type {Snowflake}
     */
    this.id = pack.id;

    /**
     * The stickers in the pack
     * @type {Collection<Snowflake, Sticker>}
     */
    this.stickers = new Collection(pack.stickers.map(s => [s.id, new Sticker(client, s)]));

    /**
     * The name of the sticker pack
     * @type {string}
     */
    this.name = pack.name;

    /**
     * The id of the pack's SKU
     * @type {Snowflake}
     */
    this.skuId = pack.sku_id;

    /**
     * The id of a sticker in the pack which is shown as the pack's icon
     * @type {?Snowflake}
     */
    this.coverStickerId = pack.cover_sticker_id ?? null;

    /**
     * The description of the sticker pack
     * @type {string}
     */
    this.description = pack.description;

    /**
     * The id of the sticker pack's banner image
     * @type {?Snowflake}
     */
    this.bannerId = pack.banner_asset_id ?? null;
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
   * The sticker which is shown as the pack's icon
   * @type {?Sticker}
   * @readonly
   */
  get coverSticker(): Sticker | null {
    return this.coverStickerId && this.stickers.get(this.coverStickerId);
  }

  /**
   * The URL to this sticker pack's banner.
   * @param {StaticImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  bannerURL({ format, size }: { format?: string; size?: number } = {}): string | null {
    return this.bannerId && this.client.rest.cdn.StickerPackBanner(this.bannerId, format, size);
  }
}


export default StickerPack;
