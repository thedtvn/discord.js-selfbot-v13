import { Buffer } from 'buffer';
import { Transform, type TransformCallback } from 'stream';
declare class IvfTransformer extends Transform {
    headerSize: number;
    frameHeaderSize: number;
    header: any;
    buf: Buffer | null;
    retFullFrame: boolean;
    constructor(options?: any);
    _parseHeader(header: Buffer): void;
    _getFrameSize(buf: Buffer): number;
    _parseFrame(frame: Buffer): boolean;
    _appendChunkToBuf(chunk: Buffer): void;
    _updateBufLen(size: number): void;
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void;
}
export { IvfTransformer };
declare const _default: {
    IvfTransformer: typeof IvfTransformer;
};
export default _default;
