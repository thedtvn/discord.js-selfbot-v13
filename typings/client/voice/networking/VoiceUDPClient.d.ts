declare const udp: any;
declare const EventEmitter: any;
declare const isIP: any;
declare const Buffer: any;
declare const Error: any;
declare const VoiceOpcodes: any;
declare const Util: any;
/**
 * Represents a UDP client for a Voice Connection.
 * @extends {EventEmitter}
 * @private
 */
declare class VoiceConnectionUDPClient extends EventEmitter {
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
    send(packet: any): Promise<unknown>;
    createUDPSocket(address: any): Promise<void>;
}
declare function parseLocalPacket(message: any): {
    address: any;
    port: any;
    error?: undefined;
} | {
    error: any;
    address?: undefined;
    port?: undefined;
};
