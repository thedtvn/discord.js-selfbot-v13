import { Buffer } from 'node:buffer';
import VideoDispatcher from './VideoDispatcher';
declare class VP8Dispatcher extends VideoDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: number);
    makeChunk(buffer: Buffer, isFirstPacket: boolean): Buffer;
    _codecCallback(chunk: Buffer): void;
}
export { VP8Dispatcher };
declare const _default: {
    VP8Dispatcher: typeof VP8Dispatcher;
};
export default _default;
