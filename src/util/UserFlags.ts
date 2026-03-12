import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with a {@link User#flags} bitfield.
 * @extends {BitField}
 */
const FLAGS = {
  DISCORD_EMPLOYEE: 1 << 0,
  PARTNERED_SERVER_OWNER: 1 << 1,
  HYPESQUAD_EVENTS: 1 << 2,
  BUGHUNTER_LEVEL_1: 1 << 3,
  MFA_SMS: 1 << 4,
  PREMIUM_PROMO_DISMISSED: 1 << 5,
  HOUSE_BRAVERY: 1 << 6,
  HOUSE_BRILLIANCE: 1 << 7,
  HOUSE_BALANCE: 1 << 8,
  EARLY_SUPPORTER: 1 << 9,
  TEAM_USER: 1 << 10,
  INTERNAL_APPLICATION: 1 << 11,
  SYSTEM: 1 << 12,
  HAS_UNREAD_URGENT_MESSAGES: 1 << 13,
  BUGHUNTER_LEVEL_2: 1 << 14,
  UNDERAGE_DELETED: 1 << 15,
  VERIFIED_BOT: 1 << 16,
  EARLY_VERIFIED_BOT_DEVELOPER: 1 << 17,
  DISCORD_CERTIFIED_MODERATOR: 1 << 18,
  BOT_HTTP_INTERACTIONS: 1 << 19,
  SPAMMER: 1 << 20,
  DISABLE_PREMIUM: 1 << 21,
  ACTIVE_DEVELOPER: 1 << 22,
  HIGH_GLOBAL_RATE_LIMIT: Math.pow(2, 33),
  DELETED: Math.pow(2, 34),
  DISABLED_SUSPICIOUS_ACTIVITY: Math.pow(2, 35),
  SELF_DELETED: Math.pow(2, 36),
  PREMIUM_DISCRIMINATOR: Math.pow(2, 37),
  USED_DESKTOP_CLIENT: Math.pow(2, 38),
  USED_WEB_CLIENT: Math.pow(2, 39),
  USED_MOBILE_CLIENT: Math.pow(2, 40),
  DISABLED: Math.pow(2, 41),
  VERIFIED_EMAIL: Math.pow(2, 43),
  QUARANTINED: Math.pow(2, 44),
  COLLABORATOR: Math.pow(2, 50),
  RESTRICTED_COLLABORATOR: Math.pow(2, 51),
} as const;

export type UserFlagsString = keyof typeof FLAGS;
export type UserFlagsResolvable = BitFieldResolvable<UserFlagsString>;

class UserFlags extends BitField<UserFlagsString> {
  public static override FLAGS = FLAGS;
}

/**
 * @name UserFlags
 * @kind constructor
 * @memberof UserFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Bitfield of the packed bits
 * @type {number}
 * @name UserFlags#bitfield
 */

/**
 * Numeric user flags. All available properties:
 * * `DISCORD_EMPLOYEE`
 * * `PARTNERED_SERVER_OWNER`
 * * `HYPESQUAD_EVENTS`
 * * `BUGHUNTER_LEVEL_1`
 * * `MFA_SMS`
 * * `PREMIUM_PROMO_DISMISSED`
 * * `HOUSE_BRAVERY`
 * * `HOUSE_BRILLIANCE`
 * * `HOUSE_BALANCE`
 * * `EARLY_SUPPORTER`
 * * `TEAM_USER`
 * * `INTERNAL_APPLICATION`
 * * `SYSTEM`
 * * `HAS_UNREAD_URGENT_MESSAGES`
 * * `BUGHUNTER_LEVEL_2`
 * * `UNDERAGE_DELETED`
 * * `VERIFIED_BOT`
 * * `EARLY_VERIFIED_BOT_DEVELOPER`
 * * `DISCORD_CERTIFIED_MODERATOR`
 * * `BOT_HTTP_INTERACTIONS`
 * * `SPAMMER`
 * * `DISABLE_PREMIUM`
 * * `ACTIVE_DEVELOPER`
 * * `HIGH_GLOBAL_RATE_LIMIT`
 * * `DELETED`
 * * `DISABLED_SUSPICIOUS_ACTIVITY`
 * * `SELF_DELETED`
 * * `PREMIUM_DISCRIMINATOR`
 * * `USED_DESKTOP_CLIENT`
 * * `USED_WEB_CLIENT`
 * * `USED_MOBILE_CLIENT`
 * * `DISABLED`
 * * `VERIFIED_EMAIL`
 * * `QUARANTINED`
 * * `COLLABORATOR`
 * * `RESTRICTED_COLLABORATOR`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 * @see {@link https://github.com/LewisTehMinerz/discord-flags}
 */
export default UserFlags;
