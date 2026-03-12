declare const EventEmitter: any;
declare const setTimeout: any, setInterval: any;
declare const WebSocket: any;
declare const Error: any;
declare const Opcodes: any, VoiceOpcodes: any;
/**
 * Represents a Voice Connection's WebSocket.
 * @extends {EventEmitter}
 * @private
 */
declare class VoiceWebSocket extends EventEmitter {
    constructor(connection: any);
    /**
     * The client of this voice WebSocket
     * @type {Client}
     * @readonly
     */
    get client(): any;
    shutdown(): void;
    /**
     * Resets the current WebSocket.
     */
    reset(): void;
    /**
     * Starts connecting to the Voice WebSocket Server.
     */
    connect(): void;
    /**
     * Sends data to the WebSocket if it is open.
     * @param {string} data The data to send to the WebSocket
     * @returns {Promise<string>}
     */
    send(data: any): Promise<unknown>;
    /**
     * JSON.stringify's a packet and then sends it to the WebSocket Server.
     * @param {Object} packet The packet to send
     * @returns {Promise<string>}
     */
    sendPacket(packet: any): Promise<unknown>;
    /**
     * Called whenever the WebSocket opens.
     */
    onOpen(): void;
    /**
     * Called whenever a message is received from the WebSocket.
     * @param {MessageEvent} event The message event that was received
     * @returns {void}
     */
    onMessage(event: any): void;
    /**
     * Called whenever the connection to the WebSocket server is lost.
     * @param {CloseEvent} event The WebSocket close event
     */
    onClose(event: any): void;
    /**
     * Called whenever an error occurs with the WebSocket.
     * @param {Error} error The error that occurred
     */
    onError(error: any): void;
    /**
     * Called whenever a valid packet is received from the WebSocket.
     * @param {Object} packet The received packet
     */
    onPacket(packet: any): void;
    /**
     * Sets an interval at which to send a heartbeat packet to the WebSocket.
     * @param {number} interval The interval at which to send a heartbeat packet
     */
    setHeartbeat(interval: any): void;
    /**
     * Clears a heartbeat interval, if one exists.
     */
    clearHeartbeat(): void;
    /**
     * Sends a heartbeat packet.
     */
    sendHeartbeat(): void;
}
