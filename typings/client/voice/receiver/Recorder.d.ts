import { type ChildProcessWithoutNullStreams } from 'child_process';
import { type Socket } from 'dgram';
import { EventEmitter } from 'events';
import { Buffer } from 'node:buffer';
import { Writable } from 'stream';
import { RtpPacket } from 'werift-rtp';
import { type UnixStream } from '../util/Socket';
/**
 * Represents a FFmpeg handler
 * @extends {EventEmitter}
 */
declare class Recorder extends EventEmitter {
    receiver: any;
    userId: string;
    portUdpH264: number;
    portUdpH265: number | null;
    portUdpOpus: number;
    promise: Promise<void> | null;
    output: string | Writable;
    ready: boolean;
    socket: Socket;
    stream: ChildProcessWithoutNullStreams;
    outputStream?: UnixStream;
    constructor(receiver: any, { userId, portUdpH264, portUdpOpus, output }?: any);
    init(output: string | Writable): Promise<void>;
    /**
     * Send a payload to FFmpeg via UDP
     * @param {RtpPacket|string|Buffer} payload The payload
     * @param {*} callback Callback
     */
    feed(payload: RtpPacket | string | Buffer, callback?: (e: Error | null) => void): void;
    destroy(): void;
}
export default Recorder;
