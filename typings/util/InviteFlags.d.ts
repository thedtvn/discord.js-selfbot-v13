import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link InviteFlags#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly IS_GUEST_INVITE: number;
    readonly IS_VIEWED: number;
    readonly IS_ENHANCED: number;
    readonly IS_APPLICATION_BYPASS: number;
};
export type InviteFlagsString = keyof typeof FLAGS;
export type InviteFlagsResolvable = BitFieldResolvable<InviteFlagsString>;
declare class InviteFlags extends BitField<InviteFlagsString> {
    static FLAGS: {
        readonly IS_GUEST_INVITE: number;
        readonly IS_VIEWED: number;
        readonly IS_ENHANCED: number;
        readonly IS_APPLICATION_BYPASS: number;
    };
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
