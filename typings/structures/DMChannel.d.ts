import { Channel } from './Channel';
import MessageManager from '../managers/MessageManager';
/**
 * Represents a direct message channel between two users.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */
declare class DMChannel extends Channel {
    messages: MessageManager;
    recipient: any;
    lastMessageId: string | null;
    lastPinTimestamp: number | null;
    messageRequest: boolean | null;
    messageRequestTimestamp: number | null;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * Accept this DMChannel.
     * @returns {Promise<DMChannel>}
     */
    acceptMessageRequest(): Promise<any>;
    /**
     * Cancel this DMChannel.
     * @returns {Promise<DMChannel>}
     */
    cancelMessageRequest(): Promise<this>;
    /**
     * Whether this DMChannel is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * Fetch this DMChannel.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<DMChannel>}
     */
    fetch(force?: boolean): any;
    /**
     * When concatenated with a string, this automatically returns the recipient's mention instead of the
     * DMChannel object.
     * @returns {string}
     * @example
     * // Logs: Hello from <@123456789012345678>!
     * console.log(`Hello from ${channel}!`);
     */
    toString(): string;
    /**
     * Sync VoiceState of this DMChannel.
     * @returns {undefined}
     */
    sync(): void;
    /**
     * Ring the user's phone / PC (call)
     * @returns {Promise<void>}
     */
    ring(): any;
    /**
     * The user in this voice-based channel
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get voiceUsers(): any;
    /**
     * Get current shard
     * @type {WebSocketShard}
     * @readonly
     */
    get shard(): any;
    /**
     * The voice state adapter for this client that can be used with @discordjs/voice to play audio in DM / Group DM channels.
     * @type {?Function}
     * @readonly
     */
    get voiceAdapterCreator(): (methods: any) => {
        sendPayload: (data: any) => boolean;
        destroy: () => void;
    };
    get lastMessage(): any;
    get lastPinAt(): any;
    send(): void;
    sendTyping(): void;
    createMessageCollector(): void;
    awaitMessages(): void;
}
export default DMChannel;
