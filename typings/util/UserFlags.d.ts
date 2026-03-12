import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link User#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly DISCORD_EMPLOYEE: number;
    readonly PARTNERED_SERVER_OWNER: number;
    readonly HYPESQUAD_EVENTS: number;
    readonly BUGHUNTER_LEVEL_1: number;
    readonly MFA_SMS: number;
    readonly PREMIUM_PROMO_DISMISSED: number;
    readonly HOUSE_BRAVERY: number;
    readonly HOUSE_BRILLIANCE: number;
    readonly HOUSE_BALANCE: number;
    readonly EARLY_SUPPORTER: number;
    readonly TEAM_USER: number;
    readonly INTERNAL_APPLICATION: number;
    readonly SYSTEM: number;
    readonly HAS_UNREAD_URGENT_MESSAGES: number;
    readonly BUGHUNTER_LEVEL_2: number;
    readonly UNDERAGE_DELETED: number;
    readonly VERIFIED_BOT: number;
    readonly EARLY_VERIFIED_BOT_DEVELOPER: number;
    readonly DISCORD_CERTIFIED_MODERATOR: number;
    readonly BOT_HTTP_INTERACTIONS: number;
    readonly SPAMMER: number;
    readonly DISABLE_PREMIUM: number;
    readonly ACTIVE_DEVELOPER: number;
    readonly HIGH_GLOBAL_RATE_LIMIT: number;
    readonly DELETED: number;
    readonly DISABLED_SUSPICIOUS_ACTIVITY: number;
    readonly SELF_DELETED: number;
    readonly PREMIUM_DISCRIMINATOR: number;
    readonly USED_DESKTOP_CLIENT: number;
    readonly USED_WEB_CLIENT: number;
    readonly USED_MOBILE_CLIENT: number;
    readonly DISABLED: number;
    readonly VERIFIED_EMAIL: number;
    readonly QUARANTINED: number;
    readonly COLLABORATOR: number;
    readonly RESTRICTED_COLLABORATOR: number;
};
export type UserFlagsString = keyof typeof FLAGS;
export type UserFlagsResolvable = BitFieldResolvable<UserFlagsString>;
declare class UserFlags extends BitField<UserFlagsString> {
    static FLAGS: {
        readonly DISCORD_EMPLOYEE: number;
        readonly PARTNERED_SERVER_OWNER: number;
        readonly HYPESQUAD_EVENTS: number;
        readonly BUGHUNTER_LEVEL_1: number;
        readonly MFA_SMS: number;
        readonly PREMIUM_PROMO_DISMISSED: number;
        readonly HOUSE_BRAVERY: number;
        readonly HOUSE_BRILLIANCE: number;
        readonly HOUSE_BALANCE: number;
        readonly EARLY_SUPPORTER: number;
        readonly TEAM_USER: number;
        readonly INTERNAL_APPLICATION: number;
        readonly SYSTEM: number;
        readonly HAS_UNREAD_URGENT_MESSAGES: number;
        readonly BUGHUNTER_LEVEL_2: number;
        readonly UNDERAGE_DELETED: number;
        readonly VERIFIED_BOT: number;
        readonly EARLY_VERIFIED_BOT_DEVELOPER: number;
        readonly DISCORD_CERTIFIED_MODERATOR: number;
        readonly BOT_HTTP_INTERACTIONS: number;
        readonly SPAMMER: number;
        readonly DISABLE_PREMIUM: number;
        readonly ACTIVE_DEVELOPER: number;
        readonly HIGH_GLOBAL_RATE_LIMIT: number;
        readonly DELETED: number;
        readonly DISABLED_SUSPICIOUS_ACTIVITY: number;
        readonly SELF_DELETED: number;
        readonly PREMIUM_DISCRIMINATOR: number;
        readonly USED_DESKTOP_CLIENT: number;
        readonly USED_WEB_CLIENT: number;
        readonly USED_MOBILE_CLIENT: number;
        readonly DISABLED: number;
        readonly VERIFIED_EMAIL: number;
        readonly QUARANTINED: number;
        readonly COLLABORATOR: number;
        readonly RESTRICTED_COLLABORATOR: number;
    };
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
