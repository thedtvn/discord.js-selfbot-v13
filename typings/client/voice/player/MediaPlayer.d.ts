import { EventEmitter } from 'events';
import { Readable as ReadableStream } from 'stream';
import AudioDispatcher from '../dispatcher/AudioDispatcher';
/**
 * Player for a Voice Connection.
 * @private
 * @extends {EventEmitter}
 */
declare class MediaPlayer extends EventEmitter {
    dispatcher: AudioDispatcher | null;
    videoDispatcher: any;
    voiceConnection: any;
    isScreenSharing: boolean;
    constructor(voiceConnection: any, isScreenSharing: boolean);
    destroy(): void;
    destroyDispatcher(): void;
    destroyVideoDispatcher(): void;
    playUnknown(input: ReadableStream | string, options: any, streams?: any): AudioDispatcher;
    playPCMStream(stream: any, options: any, streams?: any): AudioDispatcher;
    playOpusStream(stream: any, options: any, streams?: any): AudioDispatcher;
    playUnknownVideo(input: ReadableStream | string, options?: any): any;
    playIvfVideo(stream: any, options: any, streams: any): any;
    playAnnexBVideo(stream: any, options: any, streams: any, type: string): any;
    createDispatcher(options: any, streams: any): AudioDispatcher;
    /**
     * Create
     * @private
     * @param {Object} options any
     * @param {Object} streams any
     * @returns {VideoDispatcher}
     */
    createVideoDispatcher(options: any, streams: any): any;
}
export default MediaPlayer;
