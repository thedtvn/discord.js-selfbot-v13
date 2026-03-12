import BitField, { type BitFieldResolvable } from './BitField';

/**
 * Data structure that makes it easy to interact with a {@link VoiceConnection#speaking}
 * and {@link guildMemberSpeaking} event bitfields.
 * @extends {BitField}
 */
const FLAGS = {
  SPEAKING: 1 << 0,
  SOUNDSHARE: 1 << 1,
  PRIORITY_SPEAKING: 1 << 2,
} as const;

export type SpeakingString = keyof typeof FLAGS;
export type SpeakingResolvable = BitFieldResolvable<SpeakingString>;

class Speaking extends BitField<SpeakingString> {
  public static override FLAGS = FLAGS;
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
