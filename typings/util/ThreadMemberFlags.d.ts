import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link ThreadMember#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {};
export type ThreadMemberFlagsString = keyof typeof FLAGS;
export type ThreadMemberFlagsResolvable = BitFieldResolvable<ThreadMemberFlagsString>;
declare class ThreadMemberFlags extends BitField<ThreadMemberFlagsString> {
    static FLAGS: {};
}
/**
 * @name ThreadMemberFlags
 * @kind constructor
 * @memberof ThreadMemberFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Bitfield of the packed bits
 * @type {number}
 * @name ThreadMemberFlags#bitfield
 */
/**
 * Numeric thread member flags. There are currently no bitflags relevant to bots for this.
 * @type {Object<string, number>}
 */
export default ThreadMemberFlags;
