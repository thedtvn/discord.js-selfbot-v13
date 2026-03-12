import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with an {@link InviteFlags#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  IS_GUEST_INVITE: 1 << 0,
  IS_VIEWED: 1 << 1,
  IS_ENHANCED: 1 << 2,
  IS_APPLICATION_BYPASS: 1 << 3,
} as const;

export type InviteFlagsString = keyof typeof FLAGS;
export type InviteFlagsResolvable = BitFieldResolvable<InviteFlagsString>;

class InviteFlags extends BitField<InviteFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * @name InviteFlags
 * @kind constructor
 * @memberof InviteFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric the Discord invite flags. All available properties:
 * * `IS_GUEST_INVITE`
 * * `IS_VIEWED`
 * * `IS_ENHANCED`
 * * `IS_APPLICATION_BYPASS`
 * @type {Object}
 * @see {@link https://docs.discord.food/resources/invite#invite-flags}
 */
export default InviteFlags;
