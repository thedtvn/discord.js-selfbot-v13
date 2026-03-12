import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with a {@link Channel#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  PINNED: 1 << 1,
  REQUIRE_TAG: 1 << 4,
} as const;

export type ChannelFlagsString = keyof typeof FLAGS;
export type ChannelFlagsResolvable = BitFieldResolvable<ChannelFlagsString>;

class ChannelFlags extends BitField<ChannelFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * Numeric guild channel flags. All available properties:
 * * `PINNED`
 * * `REQUIRE_TAG`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-flags}
 */
export default ChannelFlags;
