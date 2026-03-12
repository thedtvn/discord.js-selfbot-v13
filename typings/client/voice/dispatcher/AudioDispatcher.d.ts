import BaseDispatcher from './BaseDispatcher';
/**
 * @external WritableStream
 * @see {@link https://nodejs.org/api/stream.html#stream_class_stream_writable}
 */
/**
 * The class that sends voice packet data to the voice connection.
 * ```js
 * // Obtained using:
 * client.voice.joinChannel(channel).then(connection => {
 *   // You can play a file or a stream here:
 *   const dispatcher = connection.playAudio('/home/hydrabolt/audio.mp3');
 * });
 * ```
 * @implements {VolumeInterface}
 * @extends {BaseDispatcher}
 */
declare class AudioDispatcher extends BaseDispatcher {
    streamOptions: any;
    constructor(player: any, { seek, volume, fec, plp, bitrate, highWaterMark }: any, streams: any);
    get TIMESTAMP_INC(): number;
    get FRAME_LENGTH(): number;
    /**
     * Get the type of the dispatcher
     * @returns {'audio'}
     */
    getTypeDispatcher(): string;
    /**
     * Set the bitrate of the current Opus encoder if using a compatible Opus stream.
     * @param {number} value New bitrate, in kbps
     * If set to 'auto', the voice channel's bitrate will be used
     * @returns {boolean} true if the bitrate has been successfully changed.
     */
    setBitrate(value: number | 'auto'): boolean;
    /**
     * Sets the expected packet loss percentage if using a compatible Opus stream.
     * @param {number} value between 0 and 1
     * @returns {boolean} Returns true if it was successfully set.
     */
    setPLP(value: number): boolean;
    /**
     * Enables or disables forward error correction if using a compatible Opus stream.
     * @param {boolean} enabled true to enable
     * @returns {boolean} Returns true if it was successfully set.
     */
    setFEC(enabled: boolean): boolean;
    get volumeEditable(): boolean;
    /**
     * Whether or not the Opus bitrate of this stream is editable
     * @type {boolean}
     * @readonly
     */
    get bitrateEditable(): any;
    get volume(): any;
    setVolume(value: number): boolean;
    /**
     * Sync with another video dispatcher to ensure that the audio and video are played at the same time.
     * @param {VideoDispatcher} otherDispatcher The video dispatcher to sync with
     */
    setSyncVideoDispatcher(otherDispatcher: any): void;
    get volumeDecibels(): any;
    get volumeLogarithmic(): any;
    setVolumeDecibels(): void;
    setVolumeLogarithmic(): void;
}
export default AudioDispatcher;
