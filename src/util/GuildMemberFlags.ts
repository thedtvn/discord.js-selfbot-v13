import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with an {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  DID_REJOIN: 1 << 0,
  COMPLETED_ONBOARDING: 1 << 1,
  BYPASSES_VERIFICATION: 1 << 2,
  STARTED_ONBOARDING: 1 << 3,
} as const;

export type GuildMemberFlagsString = keyof typeof FLAGS;
export type GuildMemberFlagsResolvable = BitFieldResolvable<GuildMemberFlagsString>;

class GuildMemberFlags extends BitField<GuildMemberFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * @name GuildMemberFlags
 * @kind constructor
 * @memberof GuildMemberFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric guild member flags. All available properties:
 * * `DID_REJOIN`
 * * `COMPLETED_ONBOARDING`
 * * `BYPASSES_VERIFICATION`
 * * `STARTED_ONBOARDING`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags}
 */
export default GuildMemberFlags;
