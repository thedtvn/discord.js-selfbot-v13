import { Collection } from '@discordjs/collection';
import Collector from './interfaces/Collector';
/**
 * @typedef {CollectorOptions} ReactionCollectorOptions
 * @property {number} max The maximum total amount of reactions to collect
 * @property {number} maxEmojis The maximum number of emojis to collect
 * @property {number} maxUsers The maximum number of users to react
 */
/**
 * Collects reactions on messages.
 * Will automatically stop if the message ({@link Client#event:messageDelete messageDelete} or
 * {@link Client#event:messageDeleteBulk messageDeleteBulk}),
 * channel ({@link Client#event:channelDelete channelDelete}),
 * thread ({@link Client#event:threadDelete threadDelete}), or
 * guild ({@link Client#event:guildDelete guildDelete}) is deleted.
 * @extends {Collector}
 */
declare class ReactionCollector extends Collector {
    message: any;
    users: Collection<string, any>;
    total: number;
    /**
     * @param {Message} message The message upon which to collect reactions
     * @param {ReactionCollectorOptions} [options={}] The options to apply to this collector
     */
    constructor(message: any, options?: any);
    /**
     * Handles an incoming reaction for possible collection.
     * @param {MessageReaction} reaction The reaction to possibly collect
     * @param {User} user The user that added the reaction
     * @returns {?(Snowflake|string)}
     * @private
     */
    collect(reaction: any): string | null;
    /**
     * Handles a reaction deletion for possible disposal.
     * @param {MessageReaction} reaction The reaction to possibly dispose of
     * @param {User} user The user that removed the reaction
     * @returns {?(Snowflake|string)}
     */
    dispose(reaction: any, user: any): string | null;
    /**
     * Empties this reaction collector.
     */
    empty(): void;
    /**
     * The reason this collector has ended with, or null if it hasn't ended yet
     * @type {?string}
     * @readonly
     */
    get endReason(): string | null;
    /**
     * Handles checking if the message has been deleted, and if so, stops the collector with the reason 'messageDelete'.
     * @private
     * @param {Message} message The message that was deleted
     * @returns {void}
     */
    _handleMessageDeletion(message: any): void;
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
    /**
     * Gets the collector key for a reaction.
     * @param {MessageReaction} reaction The message reaction to get the key for
     * @returns {Snowflake|string}
     */
    static key(reaction: any): string;
}
export default ReactionCollector;
