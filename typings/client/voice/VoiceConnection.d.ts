import { EventEmitter } from 'events';
import { setTimeout } from 'node:timers';
import { Collection } from '@discordjs/collection';
import MediaPlayer from './player/MediaPlayer';
import VoiceReceiver from './receiver/Receiver';
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
    voiceManager: any;
    channel: any;
    status: number;
    speaking: any;
    videoStatus: boolean | null;
    authentication: any;
    player: MediaPlayer;
    ssrcMap: Map<number, {
        userId: string;
        speaking: number | boolean;
        hasVideo: boolean;
    }>;
    _speaking: Map<string, any>;
    sockets: any;
    receiver: VoiceReceiver;
    videoCodec: string;
    streamConnection: StreamConnection | null;
    streamWatchConnection: Collection<string, StreamConnectionReadonly>;
    connectTimeout?: ReturnType<typeof setTimeout>;
    eventHook?: boolean;
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
    setVideoCodec(value: string): this;
    /**
     * Sets video status
     * @param {boolean} value Video on or off
     */
    setVideoStatus(value: boolean): void;
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
    sendVoiceStateUpdate(options?: any): any;
    /**
     * Set the token and endpoint required to connect to the voice servers.
     * @param {string} token The voice token
     * @param {string} endpoint The voice endpoint
     * @returns {void}
     * @private
     */
    setTokenAndEndpoint(token: string, endpoint: string): void;
    /**
     * Sets the Session ID for the connection.
     * @param {string} sessionId The voice session ID
     * @private
     */
    setSessionId(sessionId: string): void;
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
    authenticateFailed(reason: string): void;
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
    authenticate(options?: any): void;
    /**
     * Attempts to reconnect to the voice server (typically after a region change).
     * @param {string} token The voice token
     * @param {string} endpoint The voice endpoint
     * @private
     */
    reconnect(token: string, endpoint: string): void;
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
        user_id: string;
        ssrc: number;
        speaking: number;
    }): void;
    onStartStreaming({ video_ssrc, user_id, audio_ssrc }: {
        video_ssrc: number;
        user_id: string;
        audio_ssrc: number;
    }): void;
    /**
     * Invoked when a speaking event is received.
     * @param {Object} data The received data
     * @private
     */
    onSpeaking({ user_id, speaking }: {
        user_id: string;
        speaking: number;
    }): void;
    playAudio(..._args: any[]): any;
    playVideo(..._args: any[]): any;
    /**
     * Create new connection to screenshare stream
     * @returns {Promise<StreamConnection>}
     */
    createStreamConnection(): Promise<StreamConnection>;
    /**
     * Watch user stream
     * @param {UserResolvable} user Discord user
     * @returns {Promise<StreamConnectionReadonly>}
     */
    joinStreamConnection(user: any): Promise<StreamConnectionReadonly>;
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
    voiceConnection: VoiceConnection;
    serverId: string | null;
    isPaused: boolean | null;
    viewerIds: string[];
    region: string | null;
    /**
     * @param {ClientVoiceManager} voiceManager Voice manager
     * @param {Channel} channel any channel (joinable)
     * @param {VoiceConnection} voiceConnection parent
     */
    constructor(voiceManager: any, channel: any, voiceConnection: VoiceConnection);
    createStreamConnection(): Promise<StreamConnection>;
    joinStreamConnection(): never;
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
    voiceConnection: VoiceConnection;
    userId: string;
    serverId: string | null;
    isPaused: boolean;
    viewerIds: string[];
    region: string | null;
    /**
     * @param {ClientVoiceManager} voiceManager Voice manager
     * @param {Channel} channel any channel (joinable)
     * @param {VoiceConnection} voiceConnection parent
     * @param {Snowflake} userId User ID
     */
    constructor(voiceManager: any, channel: any, voiceConnection: VoiceConnection, userId: string);
    createStreamConnection(): never;
    joinStreamConnection(): Promise<this>;
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
export default VoiceConnection;
