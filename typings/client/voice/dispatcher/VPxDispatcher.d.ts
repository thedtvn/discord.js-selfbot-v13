declare const Buffer: any;
declare const VideoDispatcher: any;
declare const Util: any;
declare class VP8Dispatcher extends VideoDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: any);
    makeChunk(buffer: any, isFirstPacket: any): any;
    _codecCallback(chunk: any): void;
}
