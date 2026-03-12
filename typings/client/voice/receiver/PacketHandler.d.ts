declare const EventEmitter: any;
declare const Buffer: any;
declare const crypto: any;
declare const setTimeout: any;
declare const RtpPacket: any;
declare const Recorder: any;
declare const Speaking: any;
declare const Util: any;
declare const secretbox: any;
declare const SILENCE_FRAME: any;
declare const DISCORD_SPEAKING_DELAY = 250;
declare const UNPADDED_NONCE_LENGTH = 4;
declare const AUTH_TAG_LENGTH = 16;
declare const Readable_base: any;
declare class Readable extends Readable_base {
    _read(): void;
}
declare class PacketHandler extends EventEmitter {
    constructor(receiver: any);
    getNonceBuffer(): any;
    get connection(): any;
    _stoppedSpeaking(userId: any): void;
    makeStream(user: any, end: any): any;
    makeVideoStream(user: any, output: any): any;
    parseBuffer(buffer: any): any;
    audioReceiver(ssrc: any, userStat: any, opusPacket: any): void;
    audioReceiverForStream(ssrc: any, userStat: any, packet: any): void;
    /**
     * Test
     * @param {number} ssrc ssrc
     * @param {Object} userStat { userId, hasVideo }
     * @param {RtpPacket} packet RtpPacket
     * @returns {void}
     */
    videoReceiver(ssrc: any, userStat: any, packet: any): void;
    push(buffer: any): void;
    destroyAllStream(): void;
}
