import { Collection } from '@discordjs/collection';
import Base from './Base';
import { Sticker } from './Sticker';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents a pack of standard stickers.
 * @extends {Base}
 */
declare class StickerPack extends Base {
    id: Snowflake;
    stickers: Collection<Snowflake, Sticker>;
    name: string;
    skuId: Snowflake;
    coverStickerId: Snowflake | null;
    description: string;
    bannerId: Snowflake | null;
    constructor(client: Client, pack: any);
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
     * The sticker which is shown as the pack's icon
     * @type {?Sticker}
     * @readonly
     */
    get coverSticker(): Sticker | null;
    /**
     * The URL to this sticker pack's banner.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    bannerURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
}
export default StickerPack;
