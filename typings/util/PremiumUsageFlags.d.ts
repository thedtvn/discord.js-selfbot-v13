import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link PremiumUsageFlags#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly PREMIUM_DISCRIMINATOR: number;
    readonly ANIMATED_AVATAR: number;
    readonly PROFILE_BANNER: number;
};
export type PremiumUsageFlagsString = keyof typeof FLAGS;
export type PremiumUsageFlagsResolvable = BitFieldResolvable<PremiumUsageFlagsString>;
declare class PremiumUsageFlags extends BitField<PremiumUsageFlagsString> {
    static FLAGS: {
        readonly PREMIUM_DISCRIMINATOR: number;
        readonly ANIMATED_AVATAR: number;
        readonly PROFILE_BANNER: number;
    };
}
/**
 * @name PremiumUsageFlags
 * @kind constructor
 * @memberof PremiumUsageFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Numeric the Discord premium usage flags. All available properties:
 * * `PREMIUM_DISCRIMINATOR`
 * * `ANIMATED_AVATAR`
 * * `PROFILE_BANNER`
 * @type {Object}
 */
export default PremiumUsageFlags;
