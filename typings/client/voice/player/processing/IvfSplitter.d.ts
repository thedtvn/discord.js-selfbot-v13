declare const Buffer: any;
declare const Transform: any;
declare class IvfTransformer extends Transform {
    constructor(options: any);
    _parseHeader(header: any): void;
    _getFrameSize(buf: any): any;
    _parseFrame(frame: any): any;
    _appendChunkToBuf(chunk: any): void;
    _updateBufLen(size: any): void;
    _transform(chunk: any, encoding: any, callback: any): void;
}
