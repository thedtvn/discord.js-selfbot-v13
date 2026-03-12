declare const spawn: any;
declare const createSocket: any;
declare const EventEmitter: any;
declare const Buffer: any;
declare const Writable: any;
declare const find: any;
declare const kill: any;
declare const RtpPacket: any;
declare const Util: any;
declare const randomPorts: any;
declare const StreamOutput: any;
/**
 * Represents a FFmpeg handler
 * @extends {EventEmitter}
 */
declare class Recorder extends EventEmitter {
    constructor(receiver: any, { userId, portUdpH264, portUdpOpus, output }?: {});
    init(output: any): Promise<void>;
    /**
     * Send a payload to FFmpeg via UDP
     * @param {RtpPacket|string|Buffer} payload The payload
     * @param {*} callback Callback
     */
    feed(payload: any, callback?: (e: any) => void): void;
    destroy(): void;
}
