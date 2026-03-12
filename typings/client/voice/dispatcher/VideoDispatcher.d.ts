declare const BaseDispatcher: any;
/**
 * The class that sends video packet data to the voice connection.
 * ```js
 * // Obtained using:
 * client.voice.joinChannel(channel).then(connection => {
 *   // You can play a file or a stream here:
 *   const dispatcher = connection.playVideo('/home/hydrabolt/video.mp4', { fps: 60, preset: 'ultrafast' });
 * });
 * ```
 * @extends {BaseDispatcher}
 */
declare class VideoDispatcher extends BaseDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: any, payloadType: any);
    get TIMESTAMP_INC(): number;
    get FRAME_LENGTH(): number;
    /**
     * Get the type of the dispatcher
     * @returns {'video'}
     */
    getTypeDispatcher(): string;
    partitionMtu(data: any): any[];
    /**
     * Set FPS
     * @param {number} value fps
     */
    setFPSSource(value: any): void;
    _codecCallback(): void;
}
