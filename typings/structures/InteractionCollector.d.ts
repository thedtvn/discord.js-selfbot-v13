import { Collection } from '@discordjs/collection';
import Collector from './interfaces/Collector';
/**
 * @typedef {CollectorOptions} InteractionCollectorOptions
 * @property {TextBasedChannelsResolvable} [channel] The channel to listen to interactions from
 * @property {MessageComponentType} [componentType] The type of component to listen for
 * @property {GuildResolvable} [guild] The guild to listen to interactions from
 * @property {InteractionType} [interactionType] The type of interaction to listen for
 * @property {number} [max] The maximum total amount of interactions to collect
 * @property {number} [maxComponents] The maximum number of components to collect
 * @property {number} [maxUsers] The maximum number of users to interact
 * @property {Message|APIMessage} [message] The message to listen to interactions from
 */
/**
 * Collects interactions.
 * Will automatically stop if the message ({@link Client#event:messageDelete messageDelete} or
 * {@link Client#event:messageDeleteBulk messageDeleteBulk}),
 * channel ({@link Client#event:channelDelete channelDelete}), or
 * guild ({@link Client#event:guildDelete guildDelete}) is deleted.
 * <info>Interaction collectors that do not specify `time` or `idle` may be prone to always running.
 * Ensure your interaction collectors end via either of these options or manual cancellation.</info>
 * @extends {Collector}
 */
declare class InteractionCollector extends Collector {
    messageId: string | null;
    channelId: string | null;
    guildId: string | null;
    interactionType: string | null;
    componentType: string | null;
    type: string | null;
    users: Collection<string, any>;
    total: number;
    /**
     * @param {Client} client The client on which to collect interactions
     * @param {InteractionCollectorOptions} [options={}] The options to apply to this collector
     */
    constructor(client: any, options?: any);
    /**
     * Handles an incoming interaction for possible collection.
     * @param {Interaction} interaction The interaction to possibly collect
     * @returns {?Snowflake}
     * @private
     */
    collect(interaction: any): string | null;
    /**
     * Handles an interaction for possible disposal.
     * @param {Interaction} interaction The interaction that could be disposed of
     * @returns {?Snowflake}
     */
    dispose(interaction: any): string | null;
    /**
     * Empties this interaction collector.
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
}
export default InteractionCollector;
