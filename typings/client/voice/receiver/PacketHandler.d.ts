import { EventEmitter } from 'events';
import { Buffer } from 'node:buffer';
import { Readable as NodeReadable } from 'stream';
import { RtpPacket } from 'werift-rtp';
import Recorder from './Recorder';
declare class Readable extends NodeReadable {
    _read(): void;
}
declare class PacketHandler extends EventEmitter {
    receiver: any;
    streams: Map<string, {
        stream: Readable;
        end: string;
    }>;
    videoStreams: Map<string, Recorder>;
    speakingTimeouts: Map<number, NodeJS.Timeout>;
    constructor(receiver: any);
    getNonceBuffer(): Buffer;
    get connection(): any;
    _stoppedSpeaking(userId: string): void;
    makeStream(user: string, end: string): Readable;
    makeVideoStream(user: string, output: any): Recorder;
    parseBuffer(buffer: Buffer): RtpPacket | Error;
    audioReceiver(ssrc: number, userStat: any, opusPacket: RtpPacket | Error): void;
    audioReceiverForStream(ssrc: number, userStat: any, packet: RtpPacket | Error): void;
    /**
     * Test
     * @param {number} ssrc ssrc
     * @param {Object} userStat { userId, hasVideo }
     * @param {RtpPacket} packet RtpPacket
     * @returns {void}
     */
    videoReceiver(ssrc: number, userStat: any, packet: RtpPacket | Error): void;
    push(buffer: Buffer): void;
    destroyAllStream(): void;
}
export default PacketHandler;
