import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly DID_REJOIN: number;
    readonly COMPLETED_ONBOARDING: number;
    readonly BYPASSES_VERIFICATION: number;
    readonly STARTED_ONBOARDING: number;
};
export type GuildMemberFlagsString = keyof typeof FLAGS;
export type GuildMemberFlagsResolvable = BitFieldResolvable<GuildMemberFlagsString>;
declare class GuildMemberFlags extends BitField<GuildMemberFlagsString> {
    static FLAGS: {
        readonly DID_REJOIN: number;
        readonly COMPLETED_ONBOARDING: number;
        readonly BYPASSES_VERIFICATION: number;
        readonly STARTED_ONBOARDING: number;
    };
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
