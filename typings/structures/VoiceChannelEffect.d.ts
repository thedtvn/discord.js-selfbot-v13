import { Emoji } from './Emoji';
/**
 * Represents an effect used in a {@link VoiceChannel}.
 */
declare class VoiceChannelEffect {
    guild: any;
    channelId: string;
    userId: string;
    emoji: Emoji | null;
    animationType: number | null;
    animationId: number | null;
    soundId: string | number | null;
    soundVolume: number | null;
    constructor(data: any, guild: any);
    /**
     * The channel the effect was sent in.
     * @type {?VoiceChannel}
     * @readonly
     */
    get channel(): any;
}
export default VoiceChannelEffect;
