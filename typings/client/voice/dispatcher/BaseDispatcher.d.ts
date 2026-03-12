import { Buffer } from 'node:buffer';
import { Writable } from 'node:stream';
/**
 * @external WritableStream
 * @see {@link https://nodejs.org/api/stream.html#stream_class_stream_writable}
 */
/**
 * @extends {Writable}
 */
declare class BaseDispatcher extends Writable {
    streams: any;
    player: any;
    payloadType: number;
    extensionEnabled: boolean;
    _nonce: number;
    _nonceBuffer: Buffer | null;
    pausedSince: number | null;
    _writeCallback: (() => void) | null;
    _pausedTime: number;
    _silentPausedTime: number;
    count: number;
    sequence: number;
    timestamp: number;
    _silence?: boolean;
    _syncDispatcher?: any;
    startTime?: number;
    constructor(player: any, highWaterMark: number, payloadType: number, extensionEnabled: boolean, streams?: any);
    getTypeDispatcher(): string;
    resetNonceBuffer(): void;
    getNewSequence(): number;
    _write(chunk: Buffer, enc: BufferEncoding, done: (error?: Error | null) => void): void;
    _destroy(err: Error | null, cb: (error?: Error | null) => void): void;
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
    get pausedTime(): number;
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
    _step(done: (error?: Error | null) => void): void;
    _final(callback: (error?: Error | null) => void): void;
    _playChunk(chunk: Buffer, isLastPacket?: boolean): void;
    /**
     * Creates a one-byte extension header
     * https://www.rfc-editor.org/rfc/rfc5285#section-4.2
     * @returns {Buffer} <Buffer be de 00 01>
     */
    createHeaderExtension(): Buffer;
    /**
     * Creates a one-byte extension header & a single extension of type playout-delay
     * @see https://docs.discord.food/topics/voice-connections#sending-and-receiving-voice
     * Discord expects a playout delay RTP extension header on every video packet.
     * @see https://webrtc.googlesource.com/src/+/refs/heads/main/docs/native-code/rtp-hdrext/playout-delay
     * @returns {Buffer} playout-delay extension <Buffer 51 00 00 00>
     */
    createPayloadExtension(): Buffer;
    _encrypt(buffer: Buffer, additionalData: Buffer): [Buffer, Buffer];
    _createPacket(buffer: Buffer, isLastPacket: boolean): Buffer;
    _sendPacket(packet: Buffer): void;
    _setSpeaking(value: number): void;
    _setVideoStatus(value: boolean): void;
    _setStreamStatus(value: boolean): void;
}
export default BaseDispatcher;
