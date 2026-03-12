declare const EventEmitter: any;
declare const getCiphers: any;
declare const setTimeout: any;
declare const Collection: any;
declare const VoiceUDP: any;
declare const VoiceWebSocket: any;
declare const MediaPlayer: any;
declare const VoiceReceiver: any;
declare const parseStreamKey: any;
declare const PlayInterface: any;
declare const Silence: any;
declare const Error: any;
declare const Opcodes: any, VoiceOpcodes: any, VoiceStatus: any, Events: any;
declare const Speaking: any;
declare const Util: any;
declare class SingleSilence extends Silence {
    _read(): void;
}
declare const SUPPORTED_MODES: string[];
declare const SUPPORTED_CODECS: string[];
/**
 * Represents a connection to a guild's voice server.
 * ```js
 * // Obtained using:
 * client.voice.joinChannel(channel)
 *   .then(connection => {
 *
 *   });
 * ```
 * @extends {EventEmitter}
 * @implements {PlayInterface}
 */
declare class VoiceConnection extends EventEmitter {
    constructor(voiceManager: any, channel: any);
    /**
     * The client that instantiated this connection
     * @type {Client}
     * @readonly
     */
    get client(): any;
    /**
     * The current audio dispatcher (if any)
     * @type {?AudioDispatcher}
     * @readonly
     */
    get dispatcher(): any;
    /**
     * The current video dispatcher (if any)
     * @type {?VideoDispatcher}
     * @readonly
     */
    get videoDispatcher(): any;
    /**
     * Sets whether the voice connection should display as "speaking", "soundshare" or "none".
     * @param {BitFieldResolvable} value The new speaking state
     */
    setSpeaking(value: any): void;
    /**
     * Set video codec before select protocol
     * @param {VideoCodec} value Codec
     * @returns {VoiceConnection}
     */
    setVideoCodec(value: any): this;
    /**
     * Sets video status
     * @param {boolean} value Video on or off
     */
    setVideoStatus(value: any): void;
    /**
     * The voice state of this connection
     * @type {?VoiceState}
     */
    get voice(): any;
    /**
     * Sends a request to the main gateway to join a voice channel.
     * @param {Object} [options] The options to provide
     * @returns {Promise<Shard>}
     * @private
     */
    sendVoiceStateUpdate(options?: {}): any;
    /**
     * Set the token and endpoint required to connect to the voice servers.
     * @param {string} token The voice token
     * @param {string} endpoint The voice endpoint
     * @returns {void}
     * @private
     */
    setTokenAndEndpoint(token: any, endpoint: any): void;
    /**
     * Sets the Session ID for the connection.
     * @param {string} sessionId The voice session ID
     * @private
     */
    setSessionId(sessionId: any): void;
    /**
     * Checks whether the voice connection is authenticated.
     * @private
     */
    checkAuthenticated(): void;
    /**
     * Invoked when we fail to initiate a voice connection.
     * @param {string} reason The reason for failure
     * @private
     */
    authenticateFailed(reason: any): void;
    /**
     * Move to a different voice channel in the same guild.
     * @param {VoiceChannel} channel The channel to move to
     * @private
     */
    updateChannel(channel: any): void;
    /**
     * Attempts to authenticate to the voice server.
     * @param {Object} options Join config
     * @private
     */
    authenticate(options?: {}): void;
    /**
     * Attempts to reconnect to the voice server (typically after a region change).
     * @param {string} token The voice token
     * @param {string} endpoint The voice endpoint
     * @private
     */
    reconnect(token: any, endpoint: any): void;
    /**
     * Disconnects the voice connection, causing a disconnect and closing event to be emitted.
     */
    disconnect(): void;
    /**
     * Internally disconnects (doesn't send disconnect packet).
     * @private
     */
    _disconnect(): void;
    /**
     * Cleans up after disconnect.
     * @private
     */
    cleanup(): void;
    /**
     * Connect the voice connection.
     * @private
     */
    connect(): void;
    /**
     * Invoked when the voice websocket is ready.
     * @param {Object} data The received data
     * @private
     */
    onReady(data: any): void;
    /**
     * Invoked when a session description is received.
     * @param {Object} data The received data
     * @private
     */
    onSessionDescription(data: any): void;
    onStartSpeaking({ user_id, ssrc, speaking }: {
        user_id: any;
        ssrc: any;
        speaking: any;
    }): void;
    onStartStreaming({ video_ssrc, user_id, audio_ssrc }: {
        video_ssrc: any;
        user_id: any;
        audio_ssrc: any;
    }): void;
    /**
     * Invoked when a speaking event is received.
     * @param {Object} data The received data
     * @private
     */
    onSpeaking({ user_id, speaking }: {
        user_id: any;
        speaking: any;
    }): void;
    playAudio(): void;
    playVideo(): void;
    /**
     * Create new connection to screenshare stream
     * @returns {Promise<StreamConnection>}
     */
    createStreamConnection(): Promise<unknown>;
    /**
     * Watch user stream
     * @param {UserResolvable} user Discord user
     * @returns {Promise<StreamConnectionReadonly>}
     */
    joinStreamConnection(user: any): Promise<unknown>;
}
/**
 * Represents a connection to a guild's voice server.
 * ```js
 * // Obtained using:
 * client.voice.joinChannel(channel)
 *   .then(connection => connection.createStreamConnection())
 *    .then(connection => {
 *
 *   });
 * ```
 * @extends {VoiceConnection}
 */
declare class StreamConnection extends VoiceConnection {
    #private;
    /**
     * @param {ClientVoiceManager} voiceManager Voice manager
     * @param {Channel} channel any channel (joinable)
     * @param {VoiceConnection} voiceConnection parent
     */
    constructor(voiceManager: any, channel: any, voiceConnection: any);
    createStreamConnection(): Promise<Awaited<this>>;
    joinStreamConnection(): void;
    get streamConnection(): this;
    set streamConnection(value: this);
    get streamWatchConnection(): any;
    set streamWatchConnection(value: any);
    disconnect(): void;
    /**
     * Create new stream connection (WS packet)
     * @returns {void}
     */
    sendSignalScreenshare(): any;
    /**
     * Send screenshare state... (WS)
     * @param {boolean} isPaused screenshare paused ?
     * @returns {void}
     */
    sendScreenshareState(isPaused?: boolean): void;
    /**
     * Stop screenshare, delete this connection (WS)
     * @returns {void}
     * @private Using StreamConnection#disconnect()
     */
    sendStopScreenshare(): void;
    update(data: any): void;
    /**
     * Current stream key
     * @type {string}
     */
    get streamKey(): string;
}
/**
 * Represents a connection to a guild's voice server.
 * ```js
 * // Obtained using:
 * client.voice.joinChannel(channel)
 *   .then(connection => connection.createStreamConnection())
 *    .then(connection => {
 *
 *   });
 * ```
 * @extends {VoiceConnection}
 */
declare class StreamConnectionReadonly extends VoiceConnection {
    #private;
    /**
     * @param {ClientVoiceManager} voiceManager Voice manager
     * @param {Channel} channel any channel (joinable)
     * @param {VoiceConnection} voiceConnection parent
     * @param {Snowflake} userId User ID
     */
    constructor(voiceManager: any, channel: any, voiceConnection: any, userId: any);
    createStreamConnection(): void;
    joinStreamConnection(): Promise<Awaited<this>>;
    get streamConnection(): any;
    set streamConnection(value: any);
    get streamWatchConnection(): any;
    set streamWatchConnection(value: any);
    disconnect(): void;
    /**
     * Create new stream connection (WS packet)
     * @returns {void}
     */
    sendSignalScreenshare(): any;
    /**
     * Stop screenshare, delete this connection (WS)
     * @returns {void}
     * @private Using StreamConnection#disconnect()
     */
    sendStopScreenshare(): void;
    update(data: any): void;
    /**
     * Current stream key
     * @type {string}
     */
    get streamKey(): string;
}
