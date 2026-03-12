import GuildChannel from './GuildChannel';
import GuildForumThreadManager from '../managers/GuildForumThreadManager';
/**
 * @typedef {Object} GuildForumTagEmoji
 * @property {?Snowflake} id The id of a guild's custom emoji
 * @property {?string} name The unicode character of the emoji
 */
/**
 * @typedef {Object} GuildForumTag
 * @property {Snowflake} id The id of the tag
 * @property {string} name The name of the tag
 * @property {boolean} moderated Whether this tag can only be added to or removed from threads
 * by a member with the `ManageThreads` permission
 * @property {?GuildForumTagEmoji} emoji The emoji of this tag
 */
/**
 * @typedef {Object} GuildForumTagData
 * @property {Snowflake} [id] The id of the tag
 * @property {string} name The name of the tag
 * @property {boolean} [moderated] Whether this tag can only be added to or removed from threads
 * by a member with the `ManageThreads` permission
 * @property {?GuildForumTagEmoji} [emoji] The emoji of this tag
 */
/**
 * @typedef {Object} DefaultReactionEmoji
 * @property {?Snowflake} id The id of a guild's custom emoji
 * @property {?string} name The unicode character of the emoji
 */
/**
 * Represents a channel that only contains threads
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 * @abstract
 */
declare class ThreadOnlyChannel extends GuildChannel {
    threads: GuildForumThreadManager;
    availableTags: any[];
    defaultReactionEmoji: any | null;
    defaultThreadRateLimitPerUser: number | null;
    rateLimitPerUser: number | null;
    defaultAutoArchiveDuration: number | null;
    nsfw: boolean;
    topic: string | null;
    defaultSortOrder: string | null;
    constructor(guild: any, data: any, client: any);
    _patch(data: any): any;
    /**
     * Sets the available tags for this forum channel
     * @param {GuildForumTagData[]} availableTags The tags to set as available in this channel
     * @param {string} [reason] Reason for changing the available tags
     * @returns {Promise<this>}
     */
    setAvailableTags(availableTags: any[], reason?: string): Promise<this>;
    /**
     * Sets the default reaction emoji for this channel
     * @param {?DefaultReactionEmoji} defaultReactionEmoji The emoji to set as the default reaction emoji
     * @param {string} [reason] Reason for changing the default reaction emoji
     * @returns {Promise<this>}
     */
    setDefaultReactionEmoji(defaultReactionEmoji: any, reason?: string): Promise<this>;
    /**
     * Sets the default rate limit per user (slowmode) for new threads in this channel
     * @param {number} defaultThreadRateLimitPerUser The rate limit to set on newly created threads in this channel
     * @param {string} [reason] Reason for changing the default rate limit
     * @returns {Promise<this>}
     */
    setDefaultThreadRateLimitPerUser(defaultThreadRateLimitPerUser: number, reason?: string): Promise<this>;
    /**
     * Sets the default sort order mode used to order posts
     * @param {?SortOrderType} defaultSortOrder The default sort order mode to set on this channel
     * @param {string} [reason] Reason for changing the default sort order
     * @returns {Promise<this>}
     */
    setDefaultSortOrder(defaultSortOrder: any, reason?: string): Promise<this>;
    /**
     * Creates an invite to this guild channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite
     * @returns {Promise<Invite>}
     * @example
     * // Create an invite to a channel
     * channel.createInvite()
     *   .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
     *   .catch(console.error);
     */
    createInvite(options?: any): Promise<any>;
    /**
     * Fetches a collection of invites to this guild channel.
     * Resolves with a collection mapping invites by their codes.
     * @param {boolean} [cache=true] Whether or not to cache the fetched invites
     * @returns {Promise<Collection<string, Invite>>}
     */
    fetchInvites(cache?: boolean): Promise<any>;
    /**
     * Sets the default auto archive duration for all newly created threads in this channel.
     * @param {ThreadAutoArchiveDuration} defaultAutoArchiveDuration The new default auto archive duration
     * @param {string} [reason] Reason for changing the channel's default auto archive duration
     * @returns {Promise<this>}
     */
    setDefaultAutoArchiveDuration(defaultAutoArchiveDuration: number | string, reason?: string): Promise<this>;
    /**
     * Sets a new topic for the guild channel.
     * @param {?string} topic The new topic for the guild channel
     * @param {string} [reason] Reason for changing the guild channel's topic
     * @returns {Promise<this>}
     * @example
     * // Set a new channel topic
     * channel.setTopic('needs more rate limiting')
     *   .then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`))
     *   .catch(console.error);
     */
    setTopic(topic: string | null, reason?: string): Promise<this>;
    createWebhook(..._args: any[]): any;
    fetchWebhooks(..._args: any[]): any;
    setNSFW(..._args: any[]): any;
    setRateLimitPerUser(..._args: any[]): any;
}
export default ThreadOnlyChannel;
