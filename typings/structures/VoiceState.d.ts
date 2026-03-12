import Base from './Base';
/**
 * Represents the voice state for a Guild Member.
 * @extends {Base}
 */
declare class VoiceState extends Base {
    guild: any;
    id: any;
    serverDeaf: any;
    serverMute: any;
    selfDeaf: any;
    selfMute: any;
    selfVideo: any;
    sessionId: any;
    streaming: any;
    channelId: any;
    suppress: any;
    requestToSpeakTimestamp: any;
    constructor(guild: any, data: any);
    _patch(data: any): any;
    /**
     * The member that this voice state belongs to
     * @type {?GuildMember}
     * @readonly
     */
    get member(): any;
    /**
     * The user that this voice state belongs to
     * @type {?User}
     * @readonly
     */
    get user(): any;
    /**
     * The channel that the member is connected to
     * @type {?(VoiceChannel|StageChannel|DMChannel|GroupDMChannel)}
     * @readonly
     */
    get channel(): any;
    /**
     * Whether this member is either self-deafened or server-deafened
     * @type {?boolean}
     * @readonly
     */
    get deaf(): any;
    /**
     * Whether this member is either self-muted or server-muted
     * @type {?boolean}
     * @readonly
     */
    get mute(): any;
    /**
     * Mutes/unmutes the member of this voice state.
     * @param {boolean} [mute=true] Whether or not the member should be muted
     * @param {string} [reason] Reason for muting or unmuting
     * @returns {Promise<GuildMember>}
     */
    setMute(mute: any, reason: any): any;
    /**
     * Deafens/undeafens the member of this voice state.
     * @param {boolean} [deaf=true] Whether or not the member should be deafened
     * @param {string} [reason] Reason for deafening or undeafening
     * @returns {Promise<GuildMember>}
     */
    setDeaf(deaf: any, reason: any): any;
    /**
     * Disconnects the member from the channel.
     * @param {string} [reason] Reason for disconnecting the member from the channel
     * @returns {Promise<GuildMember>}
     */
    disconnect(reason: any): any;
    /**
     * Moves the member to a different channel, or disconnects them from the one they're in.
     * @param {GuildVoiceChannelResolvable|null} channel Channel to move the member to, or `null` if you want to
     * disconnect them from voice.
     * @param {string} [reason] Reason for moving member to another channel or disconnecting
     * @returns {Promise<GuildMember>}
     */
    setChannel(channel: any, reason: any): any;
    /**
     * Toggles the request to speak in the channel.
     * Only applicable for stage channels and for the client's own voice state.
     * @param {boolean} [request=true] Whether or not the client is requesting to become a speaker.
     * @example
     * // Making the client request to speak in a stage channel (raise its hand)
     * guild.members.me.voice.setRequestToSpeak(true);
     * @example
     * // Making the client cancel a request to speak
     * guild.members.me.voice.setRequestToSpeak(false);
     * @returns {Promise<void>}
     */
    setRequestToSpeak(request?: any): Promise<any>;
    /**
     * Suppress/unsuppress the user. Only applicable for stage channels.
     * @param {boolean} [suppressed=true] Whether or not the user should be suppressed.
     * @example
     * // Making the client a speaker
     * guild.members.me.voice.setSuppressed(false);
     * @example
     * // Making the client an audience member
     * guild.members.me.voice.setSuppressed(true);
     * @example
     * // Inviting another user to speak
     * voiceState.setSuppressed(false);
     * @example
     * // Moving another user to the audience, or cancelling their invite to speak
     * voiceState.setSuppressed(true);
     * @returns {Promise<void>}
     */
    setSuppressed(suppressed?: any): Promise<any>;
    /**
     * Sets the status of the voice channel
     * @param {string} [status=""] The message to set the channel status to
     * @example
     * // Setting the status to something
     * guild.members.me.voice.setStatus("something")
     * @example
     * // Removing the status
     * guild.members.me.voice.setStatus()
     * @returns {Promise<void>}
     */
    setStatus(status?: any): any;
    /**
     * Get URL Image of the user's streaming video (NOT STREAMING !!!)
     * @returns {Promise<string>} URL Image of the user's streaming video
     */
    getPreview(): Promise<any>;
    /**
     * Post Preview Image to the client user's streaming video
     * @param {string} base64Image Base64 URI (data:image/jpeg;base64,data)
     * @returns {Promise<void>}
     */
    postPreview(base64Image: any): any;
    /**
     * Fetches this voice state.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<VoiceState>}
     */
    fetch(force?: any): any;
    toJSON(): any;
}
export default VoiceState;
