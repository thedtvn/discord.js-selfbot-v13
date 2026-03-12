import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link Channel#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly PINNED: number;
    readonly REQUIRE_TAG: number;
};
export type ChannelFlagsString = keyof typeof FLAGS;
export type ChannelFlagsResolvable = BitFieldResolvable<ChannelFlagsString>;
declare class ChannelFlags extends BitField<ChannelFlagsString> {
    static FLAGS: {
        readonly PINNED: number;
        readonly REQUIRE_TAG: number;
    };
}
/**
 * Numeric guild channel flags. All available properties:
 * * `PINNED`
 * * `REQUIRE_TAG`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-flags}
 */
export default ChannelFlags;
