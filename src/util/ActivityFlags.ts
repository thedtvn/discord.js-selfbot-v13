import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with an {@link Activity#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  INSTANCE: 1 << 0,
  JOIN: 1 << 1,
  SPECTATE: 1 << 2,
  JOIN_REQUEST: 1 << 3,
  SYNC: 1 << 4,
  PLAY: 1 << 5,
  PARTY_PRIVACY_FRIENDS: 1 << 6,
  PARTY_PRIVACY_VOICE_CHANNEL: 1 << 7,
  EMBEDDED: 1 << 8,
} as const;

export type ActivityFlagsString = keyof typeof FLAGS;
export type ActivityFlagsResolvable = BitFieldResolvable<ActivityFlagsString>;

class ActivityFlags extends BitField<ActivityFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * @name ActivityFlags
 * @kind constructor
 * @memberof ActivityFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric activity flags. All available properties:
 * * `INSTANCE`
 * * `JOIN`
 * * `SPECTATE`
 * * `JOIN_REQUEST`
 * * `SYNC`
 * * `PLAY`
 * * `PARTY_PRIVACY_FRIENDS`
 * * `PARTY_PRIVACY_VOICE_CHANNEL`
 * * `EMBEDDED`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
 */
export default ActivityFlags;
