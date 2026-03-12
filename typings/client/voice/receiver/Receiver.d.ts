import { EventEmitter } from 'events';
import PacketHandler from './PacketHandler';
/**
 * Receives audio packets from a voice connection.
 * @example
 * const receiver = connection.createReceiver();
 * // opusStream is a ReadableStream - that means you could play it back to a voice channel if you wanted to!
 * const opusStream = receiver.createStream(user);
 */
declare class VoiceReceiver extends EventEmitter {
    connection: any;
    packets: PacketHandler;
    constructor(connection: any);
    /**
     * Options passed to `VoiceReceiver#createStream`.
     * @typedef {Object} ReceiveStreamOptions
     * @property {string} [mode='opus'] The mode for audio output. This defaults to opus, meaning discord.js won't decode
     * the packets for you. You can set this to 'pcm' so that the stream's output will be 16-bit little-endian stereo
     * audio
     * @property {string} [end='silence'] When the stream should be destroyed. If `silence`, this will be when the user
     * stops talking. Otherwise, if `manual`, this should be handled by you.
     * @property {boolean} [paddingSilence=false] Whether to add silence padding
     * If 'end' is set to 'silence', this property automatically defaults to `false`
     */
    /**
     * Creates a new audio receiving stream. If a stream already exists for a user, then that stream will be returned
     * rather than generating a new one.
     * @param {UserResolvable} user The user to start listening to.
     * @param {ReceiveStreamOptions} options Options.
     * @returns {ReadableStream}
     */
    createStream(user: any, { mode, end, paddingSilence }?: any): any;
    /**
     * Creates a new video receiving stream. If a stream already exists for a user, then that stream will be returned
     * rather than generating a new one.
     * <info>Proof of concept - Requires a very good internet connection</info>
     * @param {UserResolvable} user The user to start listening to.
     * @param {WritableStream|string} output Output stream or file path to write the video stream to.
     * @returns {Recorder} The video stream for the specified user.
     */
    createVideoStream(user: any, output: any): any;
}
export default VoiceReceiver;
