declare const EventEmitter: any;
declare const ReadableStream: any;
declare const prism: any;
declare const H264NalSplitter: any, H265NalSplitter: any;
declare const IvfTransformer: any;
declare const H264Dispatcher: any;
declare const AudioDispatcher: any;
declare const VP8Dispatcher: any;
declare const FFMPEG_OUTPUT_PREFIX: string[];
declare const FFMPEG_INPUT_PREFIX: string[];
declare const FFMPEG_PCM_ARGUMENTS: string[];
declare const FFMPEG_VP8_ARGUMENTS: string[];
declare const FFMPEG_H264_ARGUMENTS: (options: any) => any[];
declare const FFMPEG_H265_ARGUMENTS: (options: any) => any[];
/**
 * Player for a Voice Connection.
 * @private
 * @extends {EventEmitter}
 */
declare class MediaPlayer extends EventEmitter {
    constructor(voiceConnection: any, isScreenSharing: any);
    destroy(): void;
    destroyDispatcher(): void;
    destroyVideoDispatcher(): void;
    playUnknown(input: any, options: any, streams?: {}): AudioDispatcher;
    playPCMStream(stream: any, options: any, streams?: {}): AudioDispatcher;
    playOpusStream(stream: any, options: any, streams?: {}): AudioDispatcher;
    playUnknownVideo(input: any, options?: {}): H264Dispatcher | VP8Dispatcher;
    playIvfVideo(stream: any, options: any, streams: any): H264Dispatcher | VP8Dispatcher;
    playAnnexBVideo(stream: any, options: any, streams: any, type: any): H264Dispatcher | VP8Dispatcher;
    createDispatcher(options: any, streams: any): AudioDispatcher;
    /**
     * Create
     * @private
     * @param {Object} options any
     * @param {Object} streams any
     * @returns {VideoDispatcher}
     */
    createVideoDispatcher(options: any, streams: any): H264Dispatcher | VP8Dispatcher;
}
