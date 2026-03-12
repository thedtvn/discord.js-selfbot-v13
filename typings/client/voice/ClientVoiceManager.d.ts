declare const VoiceConnection: any;
declare const Error: any;
declare const Events: any;
/**
 * Manages voice connections for the client
 * Feat: Support both lib & djs/voice
 */
declare class ClientVoiceManager {
    constructor(client: any);
    onVoiceServer(payload: any): void;
    onVoiceStateUpdate(payload: any): void;
    /**
     * @property {boolean} [selfMute=false]
     * @property {boolean} [selfDeaf=false]
     * @property {boolean} [selfVideo=false]
     * @property {VideoCodec} [videoCodec='H264']
     * @typedef {Object} JoinChannelConfig
     */
    /**
     * Sets up a request to join a voice channel.
     * @param {VoiceChannel | StageChannel | DMChannel | GroupDMChannel | Snowflake} channel The voice channel to join
     * @param {JoinChannelConfig} config Config to join voice channel
     * @returns {Promise<VoiceConnection>}
     */
    joinChannel(channel: any, config?: {}): Promise<unknown>;
}
