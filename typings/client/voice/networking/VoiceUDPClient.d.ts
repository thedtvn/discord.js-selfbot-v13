import { type Socket } from 'dgram';
import { EventEmitter } from 'events';
import { Buffer } from 'node:buffer';
/**
 * Represents a UDP client for a Voice Connection.
 * @extends {EventEmitter}
 * @private
 */
declare class VoiceConnectionUDPClient extends EventEmitter {
    voiceConnection: any;
    socket: Socket | null;
    discordAddress: string | null;
    localAddress: string | null;
    localPort: number | null;
    constructor(voiceConnection: any);
    shutdown(): void;
    /**
     * The port of the Discord voice server
     * @type {number}
     * @readonly
     */
    get discordPort(): any;
    /**
     * Send a packet to the UDP client.
     * @param {Object} packet The packet to send
     * @returns {Promise<Object>}
     */
    send(packet: Buffer): Promise<Buffer>;
    createUDPSocket(address: string): Promise<void>;
}
export default VoiceConnectionUDPClient;
