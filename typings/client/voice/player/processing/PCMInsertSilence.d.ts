declare const Buffer: any;
declare const Transform: any;
declare class PCMInsertSilence extends Transform {
    constructor(options: any);
    _transform(chunk: any, encoding: any, callback: any): void;
}
