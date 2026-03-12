import BaseGuildVoiceChannel from './BaseGuildVoiceChannel';
/**
 * Represents a guild voice channel on Discord.
 * @extends {BaseGuildVoiceChannel}
 */
declare class VoiceChannel extends BaseGuildVoiceChannel {
    /**
     * Whether the channel is editable by the client user
     * @type {boolean}
     * @readonly
     * @deprecated Use {@link VoiceChannel#manageable} instead
     */
    get editable(): boolean;
    /**
     * Whether the channel is joinable by the client user
     * @type {boolean}
     * @readonly
     */
    get joinable(): boolean;
    /**
     * Checks if the client has permission to send audio to the voice channel
     * @type {boolean}
     * @readonly
     */
    get speakable(): boolean;
}
export default VoiceChannel;
