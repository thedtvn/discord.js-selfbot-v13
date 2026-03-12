declare const fs: any;
declare const net: any;
declare const path: any;
declare const process: any;
declare let counter: number;
declare class UnixStream {
    constructor(stream: any, onSocket: any);
}
declare function StreamInput(stream: any): UnixStream;
declare function StreamOutput(stream: any): UnixStream;
