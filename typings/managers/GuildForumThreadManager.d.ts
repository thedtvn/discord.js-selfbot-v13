import type { Snowflake } from 'discord-api-types/v10';
import type ThreadChannel from '../structures/ThreadChannel';
import ThreadManager from './ThreadManager';
import MessagePayload from '../structures/MessagePayload';
interface GuildForumThreadCreateOptions {
    name?: string;
    autoArchiveDuration?: number | 'MAX';
    message?: MessagePayload | Record<string, unknown>;
    reason?: string;
    rateLimitPerUser?: number;
    appliedTags?: Snowflake[];
}
/**
 * Manages API methods for threads in forum channels and stores their cache.
 * @extends {ThreadManager}
 */
declare class GuildForumThreadManager extends ThreadManager {
    /**
     * The channel this Manager belongs to
     * @name GuildForumThreadManager#channel
     * @type {ForumChannel|MediaChannel}
     */
    /**
     * @typedef {BaseMessageOptions} GuildForumThreadMessageCreateOptions
     * @property {StickerResolvable} [stickers] The stickers to send with the message
     * @property {BitFieldResolvable} [flags] The flags to send with the message.
     * Only `SUPPRESS_EMBEDS` and `SUPPRESS_NOTIFICATIONS` can be set.
     */
    /**
     * Options for creating a thread.
     * @typedef {StartThreadOptions} GuildForumThreadCreateOptions
     * @property {GuildForumThreadMessageCreateOptions|MessagePayload} message The message associated with the thread post
     * @property {Snowflake[]} [appliedTags] The tags to apply to the thread
     */
    /**
     * Creates a new thread in the channel.
     * @param {GuildForumThreadCreateOptions} [options] Options to create a new thread
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Create a new forum post
     * forum.threads
     *   .create({
     *     name: 'Food Talk',
     *     autoArchiveDuration: 60,
     *     message: {
     *      content: 'Discuss your favorite food!',
     *     },
     *     reason: 'Needed a separate thread for food',
     *   })
     *   .then(threadChannel => console.log(threadChannel))
     *   .catch(console.error);
     */
    create({ name, autoArchiveDuration, message, reason, rateLimitPerUser, appliedTags, }?: GuildForumThreadCreateOptions): Promise<ThreadChannel>;
}
export default GuildForumThreadManager;
