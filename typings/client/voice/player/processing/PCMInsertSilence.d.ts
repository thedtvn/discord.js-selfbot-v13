import { Buffer } from 'node:buffer';
import { Transform, type TransformCallback } from 'node:stream';
declare class PCMInsertSilence extends Transform {
    sampleRate: number;
    channels: number;
    bytesPerFrame: number;
    lastChunkTime: number;
    silenceThresholdMs: number;
    constructor(options?: any);
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void;
}
export { PCMInsertSilence };
declare const _default: {
    PCMInsertSilence: typeof PCMInsertSilence;
};
export default _default;
