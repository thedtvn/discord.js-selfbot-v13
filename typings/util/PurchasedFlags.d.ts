import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link PurchasedFlags#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly NITRO_CLASSIC: number;
    readonly NITRO: number;
    readonly GUILD_BOOST: number;
    readonly NITRO_BASIC: number;
};
export type PurchasedFlagsString = keyof typeof FLAGS;
export type PurchasedFlagsResolvable = BitFieldResolvable<PurchasedFlagsString>;
declare class PurchasedFlags extends BitField<PurchasedFlagsString> {
    static FLAGS: {
        readonly NITRO_CLASSIC: number;
        readonly NITRO: number;
        readonly GUILD_BOOST: number;
        readonly NITRO_BASIC: number;
    };
}
/**
 * @name PurchasedFlags
 * @kind constructor
 * @memberof PurchasedFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Numeric the Discord purchased flags. All available properties:
 * * `NITRO_CLASSIC`
 * * `NITRO`
 * * `GUILD_BOOST`
 * * `NITRO_BASIC`
 * @type {Object}
 */
export default PurchasedFlags;
