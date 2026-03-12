/**
 * Represents an effect used in a {@link VoiceChannel}.
 */
declare class VoiceChannelEffect {
    constructor(data: any, guild: any);
    /**
     * The channel the effect was sent in.
     * @type {?VoiceChannel}
     * @readonly
     */
    get channel(): any;
}
export default VoiceChannelEffect;
