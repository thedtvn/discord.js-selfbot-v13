import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with an {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  IS_REMIX: 1 << 2,
} as const;

export type AttachmentFlagsString = keyof typeof FLAGS;
export type AttachmentFlagsResolvable = BitFieldResolvable<AttachmentFlagsString>;

class AttachmentFlags extends BitField<AttachmentFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * @name AttachmentFlags
 * @kind constructor
 * @memberof AttachmentFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/* eslint-disable max-len */
/**
 * Numeric guild member flags. All available properties:
 * * `IS_REMIX`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure-attachment-flags}
 */
export default AttachmentFlags;
