import BaseGuild from './BaseGuild';
/**
 * Bundles common attributes and methods between {@link Guild} and {@link InviteGuild}
 * @extends {BaseGuild}
 * @abstract
 */
declare class AnonymousGuild extends BaseGuild {
    constructor(client: any, data: any, immediatePatch?: boolean);
    _patch(data: any): void;
    /**
     * The URL to this guild's banner.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    bannerURL({ format, size }?: {}): any;
    /**
     * The URL to this guild's invite splash image.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    splashURL({ format, size }?: {}): any;
}
export default AnonymousGuild;
