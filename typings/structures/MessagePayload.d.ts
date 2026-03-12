import { Buffer } from 'node:buffer';
/**
 * Represents a message to be sent to the API.
 */
declare class MessagePayload {
    /**
     * @param {MessageTarget} target The target for this message to be sent to
     * @param {MessageOptions|WebhookMessageOptions} options Options passed in from send
     */
    constructor(target: any, options: any);
    /**
     * Whether or not the target is a {@link Webhook} or a {@link WebhookClient}
     * @type {boolean}
     * @readonly
     */
    get isWebhook(): boolean;
    /**
     * Whether or not the target is a {@link User}
     * @type {boolean}
     * @readonly
     */
    get isUser(): boolean;
    /**
     * Whether or not the target is a {@link Message}
     * @type {boolean}
     * @readonly
     */
    get isMessage(): boolean;
    /**
     * Whether or not the target is a {@link MessageManager}
     * @type {boolean}
     * @readonly
     */
    get isMessageManager(): boolean;
    /**
     * Whether or not the target is an {@link Interaction} or an {@link InteractionWebhook}
     * @type {boolean}
     * @readonly
     */
    get isInteraction(): boolean;
    /**
     * Makes the content of this message.
     * @returns {?string}
     */
    makeContent(): any;
    /**
     * Resolves data.
     * @returns {MessagePayload}
     */
    resolveData(): this;
    /**
     * Resolves files.
     * @returns {Promise<MessagePayload>}
     */
    resolveFiles(): Promise<this>;
    /**
     * Resolves a single file into an object sendable to the API.
     * @param {BufferResolvable|Stream|FileOptions|MessageAttachment} fileLike Something that could be resolved to a file
     * @returns {Promise<MessageFile>}
     */
    static resolveFile(fileLike: any): Promise<{
        attachment: any;
        name: any;
        file: Buffer<ArrayBufferLike> | import("stream").Readable;
        description: any;
        duration_secs: any;
        waveform: any;
    }>;
    /**
     * Creates a {@link MessagePayload} from user-level arguments.
     * @param {MessageTarget} target Target to send to
     * @param {string|MessageOptions|WebhookMessageOptions} options Options or content to use
     * @param {MessageOptions|WebhookMessageOptions} [extra={}] Extra options to add onto specified options
     * @returns {MessagePayload}
     */
    static create(target: any, options: any, extra?: {}): MessagePayload;
}
/**
 * A target for a message.
 * @typedef {TextBasedChannels|User|GuildMember|Webhook|WebhookClient|Interaction|InteractionWebhook|
 * Message|MessageManager} MessageTarget
 */
/**
 * @external APIMessage
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object}
 */
export default MessagePayload;
