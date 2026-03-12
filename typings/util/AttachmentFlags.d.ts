import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with an {@link GuildMember#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly IS_REMIX: number;
};
export type AttachmentFlagsString = keyof typeof FLAGS;
export type AttachmentFlagsResolvable = BitFieldResolvable<AttachmentFlagsString>;
declare class AttachmentFlags extends BitField<AttachmentFlagsString> {
    static FLAGS: {
        readonly IS_REMIX: number;
    };
}
/**
 * @name AttachmentFlags
 * @kind constructor
 * @memberof AttachmentFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Numeric guild member flags. All available properties:
 * * `IS_REMIX`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure-attachment-flags}
 */
export default AttachmentFlags;
