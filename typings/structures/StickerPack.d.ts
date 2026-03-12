import Base from './Base';
/**
 * Represents a pack of standard stickers.
 * @extends {Base}
 */
declare class StickerPack extends Base {
    constructor(client: any, pack: any);
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
    get coverSticker(): any;
    /**
     * The URL to this sticker pack's banner.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    bannerURL({ format, size }?: {}): any;
}
export default StickerPack;
