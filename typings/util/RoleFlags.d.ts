import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly IN_PROMPT: number;
};
export type RoleFlagsString = keyof typeof FLAGS;
export type RoleFlagsResolvable = BitFieldResolvable<RoleFlagsString>;
declare class RoleFlags extends BitField<RoleFlagsString> {
    static FLAGS: {
        readonly IN_PROMPT: number;
    };
}
/**
 * @name RoleFlags
 * @kind constructor
 * @memberof RoleFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Numeric guild member flags. All available properties:
 * * `IN_PROMPT`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export default RoleFlags;
