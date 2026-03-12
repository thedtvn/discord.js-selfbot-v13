import { type Socket } from 'net';
import type { Writable } from 'stream';
declare class UnixStream {
    socketPath: string;
    url: string;
    constructor(stream: Writable, onSocket: (socket: Socket) => void);
}
declare function StreamInput(stream: Writable): UnixStream;
declare function StreamOutput(stream: Writable): UnixStream;
export { StreamOutput, StreamInput, UnixStream };
declare const _default: {
    StreamOutput: typeof StreamOutput;
    StreamInput: typeof StreamInput;
    UnixStream: typeof UnixStream;
};
export default _default;
