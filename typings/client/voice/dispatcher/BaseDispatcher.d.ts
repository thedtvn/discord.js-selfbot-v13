declare const Buffer: any;
declare const crypto: any;
declare const Writable: any;
declare const setTimeout: any;
declare const secretbox: any;
declare const MAX_UINT_16: number;
declare const MAX_UINT_32: number;
declare const extensions: {
    id: number;
    length: number;
    value: number;
}[];
/**
 * @external WritableStream
 * @see {@link https://nodejs.org/api/stream.html#stream_class_stream_writable}
 */
/**
 * @extends {Writable}
 */
declare class BaseDispatcher extends Writable {
    constructor(player: any, highWaterMark: number, payloadType: any, extensionEnabled: any, streams?: {});
    getTypeDispatcher(): string;
    resetNonceBuffer(): void;
    getNewSequence(): any;
    _write(chunk: any, enc: any, done: any): void;
    _destroy(err: any, cb: any): void;
    _cleanup(): void;
    /**
     * Pauses playback
     * @param {boolean} [silence=false] Whether to play silence while paused to prevent audio glitches
     */
    pause(silence?: boolean): void;
    /**
     * Whether or not playback is paused
     * @type {boolean}
     * @readonly
     */
    get paused(): boolean;
    /**
     * Total time that this dispatcher has been paused in milliseconds
     * @type {number}
     * @readonly
     */
    get pausedTime(): any;
    /**
     * Resumes playback
     */
    resume(): void;
    /**
     * The time (in milliseconds) that the dispatcher has been playing audio for, taking into account skips and pauses
     * @type {number}
     * @readonly
     */
    get totalStreamTime(): number;
    _step(done: any): void;
    _final(callback: any): void;
    _playChunk(chunk: any, isLastPacket?: boolean): void;
    /**
     * Creates a one-byte extension header
     * https://www.rfc-editor.org/rfc/rfc5285#section-4.2
     * @returns {Buffer} <Buffer be de 00 01>
     */
    createHeaderExtension(): any;
    /**
     * Creates a one-byte extension header & a single extension of type playout-delay
     * @see https://docs.discord.food/topics/voice-connections#sending-and-receiving-voice
     * Discord expects a playout delay RTP extension header on every video packet.
     * @see https://webrtc.googlesource.com/src/+/refs/heads/main/docs/native-code/rtp-hdrext/playout-delay
     * @returns {Buffer} playout-delay extension <Buffer 51 00 00 00>
     */
    createPayloadExtension(): any;
    _encrypt(buffer: any, additionalData: any): any[];
    _createPacket(buffer: any, isLastPacket: any): any;
    _sendPacket(packet: any): void;
    _setSpeaking(value: any): void;
    _setVideoStatus(value: any): void;
    _setStreamStatus(value: any): void;
}
