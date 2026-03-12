import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link VoiceConnection#speaking}
 * and {@link guildMemberSpeaking} event bitfields.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly SPEAKING: number;
    readonly SOUNDSHARE: number;
    readonly PRIORITY_SPEAKING: number;
};
export type SpeakingString = keyof typeof FLAGS;
export type SpeakingResolvable = BitFieldResolvable<SpeakingString>;
declare class Speaking extends BitField<SpeakingString> {
    static FLAGS: {
        readonly SPEAKING: number;
        readonly SOUNDSHARE: number;
        readonly PRIORITY_SPEAKING: number;
    };
}
/**
 * @name Speaking
 * @kind constructor
 * @memberof Speaking
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Numeric speaking flags. All available properties:
 * * `SPEAKING`
 * * `SOUNDSHARE`
 * * `PRIORITY_SPEAKING`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export default Speaking;
