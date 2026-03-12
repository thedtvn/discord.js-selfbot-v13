import ThreadManager from './ThreadManager';
/**
 * Manages API methods for {@link ThreadChannel} objects and stores their cache.
 * @extends {ThreadManager}
 */
declare class GuildTextThreadManager extends ThreadManager {
    /**
     * The channel this Manager belongs to
     * @name GuildTextThreadManager#channel
     * @type {TextChannel|NewsChannel}
     */
    /**
     * Options for creating a thread. <warn>Only one of `startMessage` or `type` can be defined.</warn>
     * @typedef {StartThreadOptions} GuildTextThreadCreateOptions
     * @property {MessageResolvable} [startMessage] The message to start a thread from. <warn>If this is defined then type
     * of thread gets automatically defined and cannot be changed. The provided `type` field will be ignored</warn>
     * @property {ThreadChannelTypes|number} [type] The type of thread to create. Defaults to `GUILD_PUBLIC_THREAD` if
     * created in a {@link TextChannel} <warn>When creating threads in a {@link NewsChannel} this is ignored and is always
     * `GUILD_NEWS_THREAD`</warn>
     * @property {boolean} [invitable] Whether non-moderators can add other non-moderators to the thread
     * <info>Can only be set when type will be `GUILD_PRIVATE_THREAD`</info>
     * @property {number} [rateLimitPerUser] The rate limit per user (slowmode) for the new channel in seconds
     */
    /**
     * Creates a new thread in the channel.
     * @param {GuildTextThreadCreateOptions} [options] Options to create a new thread
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Create a new public thread
     * channel.threads
     *   .create({
     *     name: 'food-talk',
     *     autoArchiveDuration: 60,
     *     reason: 'Needed a separate thread for food',
     *   })
     *   .then(threadChannel => console.log(threadChannel))
     *   .catch(console.error);
     * @example
     * // Create a new private thread
     * channel.threads
     *   .create({
     *      name: 'mod-talk',
     *      autoArchiveDuration: 60,
     *      type: 'GUILD_PRIVATE_THREAD',
     *      reason: 'Needed a separate thread for moderation',
     *    })
     *   .then(threadChannel => console.log(threadChannel))
     *   .catch(console.error);
     */
    create({ name, autoArchiveDuration, startMessage, type, invitable, reason, rateLimitPerUser, }?: {
        autoArchiveDuration?: any;
    }): Promise<any>;
}
export default GuildTextThreadManager;
