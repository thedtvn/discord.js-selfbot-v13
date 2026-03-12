import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import ThreadChannel from '../structures/ThreadChannel';
type ThreadParentChannel = {
    id: Snowflake;
    guild?: Guild;
    client: Client;
};
type RawThreadMemberData = {
    id: Snowflake;
};
type RawMessageData = {
    id: Snowflake;
};
type RawThreadData = {
    id: Snowflake;
    parentId?: Snowflake | null;
};
type RawThreadsResponse = {
    threads: RawThreadData[];
    members: RawThreadMemberData[];
    first_messages?: RawMessageData[] | null;
    has_more?: boolean;
};
interface FetchChannelThreadsOptions {
    archived?: boolean;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    limit?: number;
    offset?: number;
}
interface FetchedThreads {
    threads: Collection<Snowflake, ThreadChannel>;
    hasMore: boolean;
}
/**
 * Manages API methods for {@link ThreadChannel} objects and stores their cache.
 * @extends {CachedManager}
 */
declare class ThreadManager extends CachedManager<Snowflake, ThreadChannel, Snowflake | ThreadChannel, RawThreadData> {
    readonly channel: ThreadParentChannel;
    constructor(channel: ThreadParentChannel, iterable?: Iterable<RawThreadData>);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, ThreadChannel>}
     * @name ThreadManager#cache
     */
    _add(thread: ThreadChannel): ThreadChannel;
    /**
     * Data that can be resolved to a Thread Channel object. This can be:
     * * A ThreadChannel object
     * * A Snowflake
     * @typedef {ThreadChannel|Snowflake} ThreadChannelResolvable
     */
    /**
     * Resolves a {@link ThreadChannelResolvable} to a {@link ThreadChannel} object.
     * @method resolve
     * @memberof ThreadManager
     * @instance
     * @param {ThreadChannelResolvable} thread The ThreadChannel resolvable to resolve
     * @returns {?ThreadChannel}
     */
    /**
     * Resolves a {@link ThreadChannelResolvable} to a {@link ThreadChannel} id.
     * @method resolveId
     * @memberof ThreadManager
     * @instance
     * @param {ThreadChannelResolvable} thread The ThreadChannel resolvable to resolve
     * @returns {?Snowflake}
     */
    /**
     * Options for fetching multiple threads.
     * @typedef {Object} FetchThreadsOptions
     * @property {FetchArchivedThreadOptions} [archived] The options used to fetch archived threads
     */
    /**
     * Obtains a thread from Discord, or the channel cache if it's already available.
     * @param {ThreadChannelResolvable|FetchChannelThreadsOptions|FetchThreadsOptions} [options] The options to fetch threads. If it is a
     * ThreadChannelResolvable then the specified thread will be fetched. Fetches all active threads if `undefined`
     * @param {BaseFetchOptions} [cacheOptions] Additional options for this fetch. <warn>The `force` field gets ignored
     * if `options` is not a {@link ThreadChannelResolvable}</warn>
     * @returns {Promise<?(ThreadChannel|FetchedThreads)>}
     * @example
     * // Fetch a thread by its id
     * channel.threads.fetch('831955138126104859')
     *   .then(channel => console.log(channel.name))
     *   .catch(console.error);
     */
    fetch(options?: Snowflake | FetchChannelThreadsOptions | {
        archived?: FetchChannelThreadsOptions;
    }, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<ThreadChannel | FetchedThreads | null>;
    /**
     * Data that can be resolved to a Date object. This can be:
     * * A Date object
     * * A number representing a timestamp
     * * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string
     * @typedef {Date|number|string} DateResolvable
     */
    /**
     * The options used to fetch archived threads.
     * @typedef {Object} FetchArchivedThreadOptions
     * @property {string} [type='public'] The type of threads to fetch, either `public` or `private`
     * @property {boolean} [fetchAll=false] Whether to fetch **all** archived threads when type is `private`.
     * Requires `MANAGE_THREADS` if true
     * @property {DateResolvable|ThreadChannelResolvable} [before] Only return threads that were archived before this Date
     * or Snowflake. <warn>Must be a {@link ThreadChannelResolvable} when type is `private` and fetchAll is `false`</warn>
     * @property {number} [limit] Maximum number of threads to return
     */
    /**
     * The data returned from a thread fetch that returns multiple threads.
     * @typedef {Object} FetchedThreads
     * @property {Collection<Snowflake, ThreadChannel>} threads The threads that were fetched, with any members returned
     * @property {?boolean} hasMore Whether there are potentially additional threads that require a subsequent call
     */
    /**
     * Obtains a set of archived threads from Discord, requires `READ_MESSAGE_HISTORY` in the parent channel.
     * @param {FetchChannelThreadsOptions} [options] The options to fetch archived threads
     * @param {boolean} [cache=true] Whether to cache the new thread objects if they aren't already
     * @returns {Promise<FetchedThreads>}
     */
    fetchArchived(options?: FetchChannelThreadsOptions, cache?: boolean): Promise<FetchedThreads>;
    /**
     * Discord.js self-bot specific options field for fetching active threads.
     * @typedef {Object} FetchChannelThreadsOptions
     * @property {boolean} [archived] Whether to fetch archived threads (default is false)
     * @property {string} [sortBy] The order in which the threads should be fetched in (default is last_message_time)
     * @property {string} [sortOrder] How the threads should be ordered (default is desc)
     * @property {number} [limit] The maximum number of threads to return (default is 25)
     * @property {number} [offset] The number of threads to offset fetching (useful when making multiple fetches) (default is 0)
     */
    /**
     * Obtains the accessible active threads from Discord, requires `READ_MESSAGE_HISTORY` in the parent channel.
     * @param {boolean} [cache=true] Whether to cache the new thread objects if they aren't already
     * @param {FetchChannelThreadsOptions} [options] Options for self-bots where advanced users can specify further options
     * @returns {Promise<FetchedThreads>}
     */
    fetchActive(cache?: boolean, options?: FetchChannelThreadsOptions): Promise<FetchedThreads>;
    static _mapThreads(rawThreads: RawThreadsResponse, client: Client, { parent, guild, cache }: {
        parent?: ThreadParentChannel;
        guild?: Guild;
        cache?: boolean;
    }): FetchedThreads;
}
export default ThreadManager;
