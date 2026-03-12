import EventEmitter from 'node:events';
import type WebSocketManager from './WebSocketManager';
/**
 * Represents a Shard's WebSocket connection
 * @extends {EventEmitter}
 */
declare class WebSocketShard extends EventEmitter {
    manager: WebSocketManager;
    id: number;
    resumeURL: string | null;
    status: number;
    sequence: number;
    closeSequence: number;
    sessionId: string | null;
    ping: number;
    lastPingTimestamp: number;
    lastHeartbeatAcked: boolean;
    closeEmitted: boolean;
    ratelimit: {
        queue: any[];
        total: number;
        remaining: number;
        time: number;
        timer: NodeJS.Timeout | null;
    };
    connection: any | null;
    inflate: any | null;
    helloTimeout: NodeJS.Timeout | null;
    wsCloseTimeout: NodeJS.Timeout | null;
    eventsAttached: boolean;
    expectedGuilds: Set<string> | null;
    readyTimeout: NodeJS.Timeout | null;
    connectedAt: number;
    heartbeatInterval: NodeJS.Timeout | null;
    constructor(manager: WebSocketManager, id: number);
    /**
     * Emits a debug event.
     * @param {string} message The debug message
     * @private
     */
    debug(message: any): void;
    /**
     * Connects the shard to the gateway.
     * @private
     * @returns {Promise<void>} A promise that will resolve if the shard turns ready successfully,
     * or reject if we couldn't connect
     */
    connect(): Promise<void>;
    /**
     * Called whenever a connection is opened to the gateway.
     * @private
     */
    onOpen(): void;
    /**
     * Called whenever a message is received.
     * @param {MessageEvent} event Event received
     * @private
     */
    onMessage({ data }: {
        data: any;
    }): void;
    /**
     * Called whenever an error occurs with the WebSocket.
     * @param {ErrorEvent} event The error that occurred
     * @private
     */
    onError(event: any): void;
    /**
     * @external CloseEvent
     * @see {@link https://developer.mozilla.org/docs/Web/API/CloseEvent}
     */
    /**
     * @external ErrorEvent
     * @see {@link https://developer.mozilla.org/docs/Web/API/ErrorEvent}
     */
    /**
     * @external MessageEvent
     * @see {@link https://developer.mozilla.org/docs/Web/API/MessageEvent}
     */
    /**
     * Called whenever a connection to the gateway is closed.
     * @param {CloseEvent} event Close event that was received
     * @private
     */
    onClose(event: any): void;
    /**
     * This method is responsible to emit close event for this shard.
     * This method helps the shard reconnect.
     * @param {CloseEvent} [event] Close event that was received
     */
    emitClose(event?: {
        code: number;
        reason: string;
        wasClean: boolean;
    }): void;
    /**
     * Called whenever a packet is received.
     * @param {Object} packet The received packet
     * @private
     */
    onPacket(packet: any): void;
    /**
     * Checks if the shard can be marked as ready
     * @private
     */
    checkReady(): void;
    /**
     * Sets the HELLO packet timeout.
     * @param {number} [time] If set to -1, it will clear the hello timeout
     * @private
     */
    setHelloTimeout(time?: number): void;
    /**
     * Sets the WebSocket Close timeout.
     * This method is responsible for detecting any zombie connections if the WebSocket fails to close properly.
     * @param {number} [time] If set to -1, it will clear the timeout
     * @private
     */
    setWsCloseTimeout(time: any): void;
    /**
     * Sets the heartbeat timer for this shard.
     * @param {number} time If -1, clears the interval, any other number sets an interval
     * @private
     */
    setHeartbeatTimer(time: any): void;
    /**
     * Sends a heartbeat to the WebSocket.
     * If this shard didn't receive a heartbeat last time, it will destroy it and reconnect
     * @param {string} [tag='HeartbeatTimer'] What caused this heartbeat to be sent
     * @param {boolean} [ignoreHeartbeatAck] If we should send the heartbeat forcefully.
     * @private
     */
    sendHeartbeat(tag?: string, ignoreHeartbeatAck?: boolean): void;
    /**
     * Acknowledges a heartbeat.
     * @private
     */
    ackHeartbeat(): void;
    /**
     * Identifies the client on the connection.
     * @private
     * @returns {void}
     */
    identify(): void;
    /**
     * Identifies as a new connection on the gateway.
     * @private
     */
    identifyNew(): void;
    /**
     * Resumes a session on the gateway.
     * @private
     */
    identifyResume(): void;
    /**
     * Adds a packet to the queue to be sent to the gateway.
     * <warn>If you use this method, make sure you understand that you need to provide
     * a full [Payload](https://discord.com/developers/docs/topics/gateway-events#payload-structure).
     * Do not use this method if you don't know what you're doing.</warn>
     * @param {Object} data The full packet to send
     * @param {boolean} [important=false] If this packet should be added first in queue
     */
    send(data: any, important?: boolean): void;
    /**
     * Sends data, bypassing the queue.
     * @param {Object} data Packet to send
     * @returns {void}
     * @private
     */
    _send(data: any): void;
    /**
     * Processes the current WebSocket queue.
     * @returns {void}
     * @private
     */
    processQueue(): void;
    /**
     * Destroys this shard and closes its WebSocket connection.
     * @param {Object} [options={ closeCode: 1000, reset: false, emit: true, log: true }] Options for destroying the shard
     * @private
     */
    destroy({ closeCode, reset, emit, log }?: {
        closeCode?: number;
        reset?: boolean;
        emit?: boolean;
        log?: boolean;
    }): void;
    /**
     * Cleans up the WebSocket connection listeners.
     * @private
     */
    _cleanupConnection(): void;
    /**
     * Emits the DESTROYED event on the shard
     * @private
     */
    _emitDestroyed(): void;
}
export default WebSocketShard;
