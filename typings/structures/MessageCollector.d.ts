import Collector from './interfaces/Collector';
/**
 * @typedef {CollectorOptions} MessageCollectorOptions
 * @property {number} max The maximum amount of messages to collect
 * @property {number} maxProcessed The maximum amount of messages to process
 */
/**
 * Collects messages on a channel.
 * Will automatically stop if the channel ({@link Client#event:channelDelete channelDelete}),
 * thread ({@link Client#event:threadDelete threadDelete}), or
 * guild ({@link Client#event:guildDelete guildDelete}) is deleted.
 * @extends {Collector}
 */
declare class MessageCollector extends Collector {
    channel: any;
    received: number;
    /**
     * @param {TextBasedChannels} channel The channel
     * @param {MessageCollectorOptions} options The options to be applied to this collector
     * @emits MessageCollector#message
     */
    constructor(channel: any, options?: any);
    /**
     * Handles a message for possible collection.
     * @param {Message} message The message that could be collected
     * @returns {?Snowflake}
     * @private
     */
    collect(message: any): string | null;
    /**
     * Handles a message for possible disposal.
     * @param {Message} message The message that could be disposed of
     * @returns {?Snowflake}
     */
    dispose(message: any): string | null;
    /**
     * The reason this collector has ended with, or null if it hasn't ended yet
     * @type {?string}
     * @readonly
     */
    get endReason(): string | null;
    /**
     * Handles checking if the channel has been deleted, and if so, stops the collector with the reason 'channelDelete'.
     * @private
     * @param {GuildChannel} channel The channel that was deleted
     * @returns {void}
     */
    _handleChannelDeletion(channel: any): void;
    /**
     * Handles checking if the thread has been deleted, and if so, stops the collector with the reason 'threadDelete'.
     * @private
     * @param {ThreadChannel} thread The thread that was deleted
     * @returns {void}
     */
    _handleThreadDeletion(thread: any): void;
    /**
     * Handles checking if the guild has been deleted, and if so, stops the collector with the reason 'guildDelete'.
     * @private
     * @param {Guild} guild The guild that was deleted
     * @returns {void}
     */
    _handleGuildDeletion(guild: any): void;
}
export default MessageCollector;
