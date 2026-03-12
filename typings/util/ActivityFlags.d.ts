import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link Activity#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly INSTANCE: number;
    readonly JOIN: number;
    readonly SPECTATE: number;
    readonly JOIN_REQUEST: number;
    readonly SYNC: number;
    readonly PLAY: number;
    readonly PARTY_PRIVACY_FRIENDS: number;
    readonly PARTY_PRIVACY_VOICE_CHANNEL: number;
    readonly EMBEDDED: number;
};
export type ActivityFlagsString = keyof typeof FLAGS;
export type ActivityFlagsResolvable = BitFieldResolvable<ActivityFlagsString>;
declare class ActivityFlags extends BitField<ActivityFlagsString> {
    static FLAGS: {
        readonly INSTANCE: number;
        readonly JOIN: number;
        readonly SPECTATE: number;
        readonly JOIN_REQUEST: number;
        readonly SYNC: number;
        readonly PLAY: number;
        readonly PARTY_PRIVACY_FRIENDS: number;
        readonly PARTY_PRIVACY_VOICE_CHANNEL: number;
        readonly EMBEDDED: number;
    };
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
