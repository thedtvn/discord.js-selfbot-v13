/**
 * @typedef {Function} GlobalSweepFilter
 * @returns {Function|null} Return `null` to skip sweeping, otherwise a function passed to `sweep()`,
 * See {@link [Collection#sweep](https://discord.js.org/docs/packages/collection/stable/Collection:Class#sweep)}
 * for the definition of this function.
 */
/**
 * A container for all cache sweeping intervals and their associated sweep methods.
 */
declare class Sweepers {
    readonly client: any;
    options: Record<string, any>;
    intervals: Record<string, NodeJS.Timeout | null>;
    constructor(client: any, options: Record<string, any>);
    /**
     * Sweeps all guild and global application commands and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which commands will be removed from the caches.
     * @returns {number} Amount of commands that were removed from the caches
     */
    sweepApplicationCommands(filter: (...args: unknown[]) => boolean): any;
    /**
     * Sweeps all auto moderation rules and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine
     * which auto moderation rules will be removed from the caches
     * @returns {number} Amount of auto moderation rules that were removed from the caches
     */
    sweepAutoModerationRules(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild bans and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which bans will be removed from the caches.
     * @returns {number} Amount of bans that were removed from the caches
     */
    sweepBans(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild emojis and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which emojis will be removed from the caches.
     * @returns {number} Amount of emojis that were removed from the caches
     */
    sweepEmojis(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild invites and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which invites will be removed from the caches.
     * @returns {number} Amount of invites that were removed from the caches
     */
    sweepInvites(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild members and removes the ones which are indicated by the filter.
     * <info>It is highly recommended to keep the client guild member cached</info>
     * @param {Function} filter The function used to determine which guild members will be removed from the caches.
     * @returns {number} Amount of guild members that were removed from the caches
     */
    sweepGuildMembers(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all text-based channels' messages and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which messages will be removed from the caches.
     * @returns {number} Amount of messages that were removed from the caches
     * @example
     * // Remove all messages older than 1800 seconds from the messages cache
     * const amount = sweepers.sweepMessages(
     *   Sweepers.filterByLifetime({
     *     lifetime: 1800,
     *     getComparisonTimestamp: m => m.editedTimestamp ?? m.createdTimestamp,
     *   })(),
     * );
     * console.log(`Successfully removed ${amount} messages from the cache.`);
     */
    sweepMessages(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all presences and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which presences will be removed from the caches.
     * @returns {number} Amount of presences that were removed from the caches
     */
    sweepPresences(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all message reactions and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which reactions will be removed from the caches.
     * @returns {number} Amount of reactions that were removed from the caches
     */
    sweepReactions(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild stage instances and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which stage instances will be removed from the caches.
     * @returns {number} Amount of stage instances that were removed from the caches
     */
    sweepStageInstances(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all guild stickers and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which stickers will be removed from the caches.
     * @returns {number} Amount of stickers that were removed from the caches
     */
    sweepStickers(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all thread members and removes the ones which are indicated by the filter.
     * <info>It is highly recommended to keep the client thread member cached</info>
     * @param {Function} filter The function used to determine which thread members will be removed from the caches.
     * @returns {number} Amount of thread members that were removed from the caches
     */
    sweepThreadMembers(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all threads and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which threads will be removed from the caches.
     * @returns {number} filter Amount of threads that were removed from the caches
     * @example
     * // Remove all threads archived greater than 1 day ago from all the channel caches
     * const amount = sweepers.sweepThreads(
     *   Sweepers.filterByLifetime({
     *     getComparisonTimestamp: t => t.archivedTimestamp,
     *     excludeFromSweep: t => !t.archived,
     *   })(),
     * );
     * console.log(`Successfully removed ${amount} threads from the cache.`);
     */
    sweepThreads(filter: (...args: unknown[]) => boolean): number;
    /**
     * Sweeps all users and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which users will be removed from the caches.
     * @returns {number} Amount of users that were removed from the caches
     */
    sweepUsers(filter: (...args: unknown[]) => boolean): any;
    /**
     * Sweeps all guild voice states and removes the ones which are indicated by the filter.
     * @param {Function} filter The function used to determine which voice states will be removed from the caches.
     * @returns {number} Amount of voice states that were removed from the caches
     */
    sweepVoiceStates(filter: (...args: unknown[]) => boolean): number;
    /**
     * Cancels all sweeping intervals
     * @returns {void}
     */
    destroy(): void;
    /**
     * Options for generating a filter function based on lifetime
     * @typedef {Object} LifetimeFilterOptions
     * @property {number} [lifetime=14400] How long, in seconds, an entry should stay in the collection
     * before it is considered sweepable.
     * @property {Function} [getComparisonTimestamp=e => e?.createdTimestamp] A function that takes an entry, key,
     * and the collection and returns a timestamp to compare against in order to determine the lifetime of the entry.
     * @property {Function} [excludeFromSweep=() => false] A function that takes an entry, key, and the collection
     * and returns a boolean, `true` when the entry should not be checked for sweepability.
     */
    /**
     * Create a sweepFilter function that uses a lifetime to determine sweepability.
     * @param {LifetimeFilterOptions} [options={}] The options used to generate the filter function
     * @returns {GlobalSweepFilter}
     */
    static filterByLifetime({ lifetime, getComparisonTimestamp, excludeFromSweep, }?: {
        lifetime?: number;
        getComparisonTimestamp?: (e: any, key?: any, coll?: any) => number | undefined;
        excludeFromSweep?: (...args: any[]) => boolean;
    }): () => (entry: any, key: any, coll: any) => boolean;
    /**
     * Creates a sweep filter that sweeps archived threads
     * @param {number} [lifetime=14400] How long a thread has to be archived to be valid for sweeping
     * @returns {GlobalSweepFilter}
     */
    static archivedThreadSweepFilter(lifetime?: number): () => (entry: any, key: any, coll: any) => boolean;
    /**
     * Creates a sweep filter that sweeps expired invites
     * @param {number} [lifetime=14400] How long ago an invite has to have expired to be valid for sweeping
     * @returns {GlobalSweepFilter}
     */
    static expiredInviteSweepFilter(lifetime?: number): () => (entry: any, key: any, coll: any) => boolean;
    /**
     * Creates a sweep filter that sweeps outdated messages (edits taken into account)
     * @param {number} [lifetime=3600] How long ago a message has to have been sent or edited to be valid for sweeping
     * @returns {GlobalSweepFilter}
     */
    static outdatedMessageSweepFilter(lifetime?: number): () => (entry: any, key: any, coll: any) => boolean;
    /**
     * Configuration options for emitting the cache sweep client event
     * @typedef {Object} SweepEventOptions
     * @property {boolean} [emit=true] Whether to emit the client event in this method
     * @property {string} [outputName] A name to output in the client event if it should differ from the key
     * @private
     */
    /**
     * Sweep a direct sub property of all guilds
     * @param {string} key The name of the property
     * @param {Function} filter Filter function passed to sweep
     * @param {SweepEventOptions} [eventOptions={}] Options for the Client event emitted here
     * @returns {Object} Object containing the number of guilds swept and the number of items swept
     * @private
     */
    _sweepGuildDirectProp(key: string, filter: (...args: unknown[]) => boolean, { emit, outputName }?: {
        emit?: boolean;
        outputName?: string;
    }): {
        guilds: number;
        items: number;
    };
    /**
     * Validates a set of properties
     * @param {string} key Key of the options object to check
     * @private
     */
    _validateProperties(key: string): void;
    /**
     * Initialize an interval for sweeping
     * @param {string} intervalKey The name of the property that stores the interval for this sweeper
     * @param {string} sweepKey The name of the function that sweeps the desired caches
     * @param {Object} opts Validated options for a sweep
     * @private
     */
    _initInterval(intervalKey: string, sweepKey: string, opts: {
        interval: number;
        filter: () => unknown;
    }): void;
}
export default Sweepers;
