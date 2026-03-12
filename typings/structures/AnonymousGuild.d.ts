import BaseGuild from './BaseGuild';
/**
 * Bundles common attributes and methods between {@link Guild} and {@link InviteGuild}
 * @extends {BaseGuild}
 * @abstract
 */
declare class AnonymousGuild extends BaseGuild {
    splash: string | null;
    banner: string | null;
    description: string | null;
    verificationLevel: string;
    vanityURLCode: string | null;
    nsfwLevel: string;
    premiumSubscriptionCount: number | null;
    constructor(client: any, data: any, immediatePatch?: boolean);
    _patch(data: any): any;
    /**
     * The URL to this guild's banner.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    bannerURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * The URL to this guild's invite splash image.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    splashURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
}
export default AnonymousGuild;
