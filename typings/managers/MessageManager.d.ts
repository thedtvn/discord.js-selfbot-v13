import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
import { Message } from '../structures/Message';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Manages API methods for Messages and holds their cache.
 * @extends {CachedManager}
 */
type MessageResolvable = Message | Snowflake;
type RawMessageData = {
    id: Snowflake;
} & Record<string, unknown>;
interface ChannelLogsQueryOptions {
    limit?: number;
    before?: Snowflake;
    after?: Snowflake;
    around?: Snowflake;
}
interface MessageSearchOptions {
    authors?: unknown[];
    mentions?: unknown[];
    content?: string;
    maxId?: Snowflake | null;
    minId?: Snowflake | null;
    channels?: unknown[];
    pinned?: boolean;
    has?: string[];
    nsfw?: boolean;
    offset?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
}
interface MessageSearchResult {
    messages: Collection<Snowflake, Message>;
    total: number;
}
interface FetchPollAnswerVotersOptions {
    messageId: Snowflake;
    answerId: number;
    after?: Snowflake;
    limit?: number;
}
interface TextBasedChannel {
    id: Snowflake;
    client: import('../client/Client').default;
    guildId?: Snowflake | null;
    guild?: {
        channels: {
            cache: {
                get: (id: Snowflake) => unknown;
            };
        };
    };
    [key: string]: unknown;
}
declare class MessageManager extends CachedManager<Snowflake, Message, MessageResolvable, RawMessageData> {
    constructor(channel: TextBasedChannel, iterable?: Iterable<RawMessageData>);
    /**
     * The cache of Messages
     * @type {Collection<Snowflake, Message>}
     * @name MessageManager#cache
     */
    readonly channel: TextBasedChannel;
    _add(data: RawMessageData, cache?: boolean): Message;
    /**
     * The parameters to pass in when requesting previous messages from a channel. `around`, `before` and
     * `after` are mutually exclusive. All the parameters are optional.
     * @typedef {Object} ChannelLogsQueryOptions
     * @property {number} [limit=50] Number of messages to acquire
     * @property {Snowflake} [before] The message's id to get the messages that were posted before it
     * @property {Snowflake} [after] The message's id to get the messages that were posted after it
     * @property {Snowflake} [around] The message's id to get the messages that were posted around it
     */
    /**
     * Gets a message, or messages, from this channel.
     * <info>The returned Collection does not contain reaction users of the messages if they were not cached.
     * Those need to be fetched separately in such a case.</info>
     * @param {Snowflake|ChannelLogsQueryOptions} [message] The id of the message to fetch, or query parameters.
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<Message|Collection<Snowflake, Message>>}
     * @example
     * // Get message
     * channel.messages.fetch('99539446449315840')
     *   .then(message => console.log(message.content))
     *   .catch(console.error);
     * @example
     * // Get messages
     * channel.messages.fetch({ limit: 10 })
     *   .then(messages => console.log(`Received ${messages.size} messages`))
     *   .catch(console.error);
     * @example
     * // Get messages and filter by user id
     * channel.messages.fetch()
     *   .then(messages => console.log(`${messages.filter(m => m.author.id === '84484653687267328').size} messages`))
     *   .catch(console.error);
     */
    fetch(message?: Snowflake | ChannelLogsQueryOptions, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<Message | Collection<Snowflake, Message>>;
    /**
     * Fetches the pinned messages of this channel and returns a collection of them.
     * <info>The returned Collection does not contain any reaction data of the messages.
     * Those need to be fetched separately.</info>
     * @param {boolean} [cache=true] Whether to cache the message(s)
     * @returns {Promise<Collection<Snowflake, Message>>}
     * @example
     * // Get pinned messages
     * channel.messages.fetchPinned()
     *   .then(messages => console.log(`Received ${messages.size} messages`))
     *   .catch(console.error);
     */
    fetchPinned(cache?: boolean): Promise<Collection<Snowflake, Message>>;
    /**
     * Data that can be resolved to a Message object. This can be:
     * * A Message
     * * A Snowflake
     * @typedef {Message|Snowflake} MessageResolvable
     */
    /**
     * Resolves a {@link MessageResolvable} to a {@link Message} object.
     * @method resolve
     * @memberof MessageManager
     * @instance
     * @param {MessageResolvable} message The message resolvable to resolve
     * @returns {?Message}
     */
    /**
     * Resolves a {@link MessageResolvable} to a {@link Message} id.
     * @method resolveId
     * @memberof MessageManager
     * @instance
     * @param {MessageResolvable} message The message resolvable to resolve
     * @returns {?Snowflake}
     */
    /**
     * Edits a message, even if it's not cached.
     * @param {MessageResolvable} message The message to edit
     * @param {string|MessageEditOptions|MessagePayload} options The options to edit the message
     * @returns {Promise<Message>}
     */
    edit(message: MessageResolvable, options: unknown): Promise<Message>;
    /**
     * Publishes a message in an announcement channel to all channels following it, even if it's not cached.
     * @param {MessageResolvable} message The message to publish
     * @returns {Promise<Message>}
     */
    crosspost(message: MessageResolvable): Promise<Message>;
    /**
     * Pins a message to the channel's pinned messages, even if it's not cached.
     * @param {MessageResolvable} message The message to pin
     * @param {string} [reason] Reason for pinning
     * @returns {Promise<void>}
     */
    pin(message: MessageResolvable, reason?: string): Promise<void>;
    /**
     * Unpins a message from the channel's pinned messages, even if it's not cached.
     * @param {MessageResolvable} message The message to unpin
     * @param {string} [reason] Reason for unpinning
     * @returns {Promise<void>}
     */
    unpin(message: MessageResolvable, reason?: string): Promise<void>;
    /**
     * Adds a reaction to a message, even if it's not cached.
     * @param {MessageResolvable} message The message to react to
     * @param {EmojiIdentifierResolvable} emoji The emoji to react with
     * @param {boolean} [burst=false] Super Reactions (Discord Nitro only)
     * @returns {Promise<void>}
     */
    react(message: MessageResolvable, emoji: unknown, burst?: boolean): Promise<void>;
    /**
     * Deletes a message, even if it's not cached.
     * @param {MessageResolvable} message The message to delete
     * @returns {Promise<void>}
     */
    delete(message: MessageResolvable): Promise<void>;
    _fetchId(messageId: Snowflake, cache: boolean, force: boolean): Message | Promise<Message>;
    /**
     * @typedef {object} MessageSearchOptions
     * @property {Array<UserResolvable>} [authors] An array of author to filter by
     * @property {Array<UserResolvable>} [mentions] An array of user (mentioned) to filter by
     * @property {string} [content] A messageContent to filter by
     * @property {Snowflake} [maxId] The maximum Message ID to filter by
     * @property {Snowflake} [minId] The minimum Message ID to filter by
     * @property {Array<TextChannelResolvable>} [channels] An array of channel to filter by
     * @property {boolean} [pinned] Whether to filter by pinned messages
     * @property {Array<string>} [has] Message has: `link`, `embed`, `file`, `video`, `image`, or `sound`
     * @property {boolean} [nsfw=false] Whether to filter by NSFW channels
     * @property {number} [offset=0] The number of messages to skip (for pagination, 25 results per page)
     * @property {number} [limit=25] The number of messages to fetch
     * <info>The maximum limit allowed is 25.</info>
     * @property {string} [sortBy] The order to sort by (`timestamp` or `relevance`)
     * @property {string} [sortOrder] The order to return results in (`asc` or `desc`)
     * <info>The default sort is <code>timestamp</code> in descending order <code>desc</code> (newest first).</info>
     */
    /**
     * @typedef {object} MessageSearchResult
     * @property {Collection<Snowflake, Message>} messages A collection of found messages
     * @property {number} total The total number of messages that match the search criteria
     */
    /**
     * Search Messages in the channel.
     * @param {MessageSearchOptions} options Performs a search within the channel.
     * @returns {MessageSearchResult}
     */
    search(options?: MessageSearchOptions): Promise<MessageSearchResult>;
    _fetchMany(options?: ChannelLogsQueryOptions, cache?: boolean): Promise<Collection<Snowflake, Message>>;
    /**
     * Ends a poll.
     * @param {Snowflake} messageId The id of the message
     * @returns {Promise<Message>}
     */
    endPoll(messageId: Snowflake): Promise<Message>;
    /**
     * Options used for fetching voters of an answer in a poll.
     * @typedef {BaseFetchPollAnswerVotersOptions} FetchPollAnswerVotersOptions
     * @param {Snowflake} messageId The id of the message
     * @param {number} answerId The id of the answer
     */
    /**
     * Fetches the users that voted for a poll answer.
     * @param {FetchPollAnswerVotersOptions} options The options for fetching the poll answer voters
     * @returns {Promise<Collection<Snowflake, User>>}
     */
    fetchPollAnswerVoters({ messageId, answerId, after, limit }: FetchPollAnswerVotersOptions): Promise<Collection<Snowflake, unknown>>;
}
export default MessageManager;
