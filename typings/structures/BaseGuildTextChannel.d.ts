import GuildChannel from './GuildChannel';
import GuildTextThreadManager from '../managers/GuildTextThreadManager';
import MessageManager from '../managers/MessageManager';
/**
 * Represents a text-based guild channel on Discord.
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 */
declare class BaseGuildTextChannel extends GuildChannel {
    messages: MessageManager;
    threads: GuildTextThreadManager;
    nsfw: boolean;
    topic: string | null;
    lastMessageId: string | null;
    lastPinTimestamp: number | null;
    defaultAutoArchiveDuration: number | null;
    defaultThreadRateLimitPerUser: number | null;
    constructor(guild: any, data: any, client: any);
    _patch(data: any): any;
    /**
     * Sets the default auto archive duration for all newly created threads in this channel.
     * @param {ThreadAutoArchiveDuration} defaultAutoArchiveDuration The new default auto archive duration
     * @param {string} [reason] Reason for changing the channel's default auto archive duration
     * @returns {Promise<TextChannel>}
     */
    setDefaultAutoArchiveDuration(defaultAutoArchiveDuration: any, reason?: string): any;
    /**
     * Sets the type of this channel (only conversion between text and news is supported)
     * @param {string} type The new channel type
     * @param {string} [reason] Reason for changing the channel's type
     * @returns {Promise<GuildChannel>}
     */
    setType(type: any, reason?: string): any;
    /**
     * Sets a new topic for the guild channel.
     * @param {?string} topic The new topic for the guild channel
     * @param {string} [reason] Reason for changing the guild channel's topic
     * @returns {Promise<GuildChannel>}
     * @example
     * // Set a new channel topic
     * channel.setTopic('needs more rate limiting')
     *   .then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`))
     *   .catch(console.error);
     */
    setTopic(topic: any, reason?: string): any;
    /**
     * Data that can be resolved to an Application. This can be:
     * * An Application
     * * An Activity with associated Application
     * * A Snowflake
     * @typedef {Application|Snowflake} ApplicationResolvable
     */
    /**
     * Options used to create an invite to a guild channel.
     * @typedef {Object} CreateInviteOptions
     * @property {boolean} [temporary=false] Whether members that joined via the invite should be automatically
     * kicked after 24 hours if they have not yet received a role
     * @property {number} [maxAge=86400] How long the invite should last (in seconds, 0 for forever)
     * @property {number} [maxUses=0] Maximum number of uses
     * @property {boolean} [unique=false] Create a unique invite, or use an existing one with similar settings
     * @property {UserResolvable} [targetUser] The user whose stream to display for this invite,
     * required if `targetType` is 1, the user must be streaming in the channel
     * @property {ApplicationResolvable} [targetApplication] The embedded application to open for this invite,
     * required if `targetType` is 2, the application must have the `EMBEDDED` flag
     * @property {TargetType} [targetType] The type of the target for this voice channel invite
     * @property {string} [reason] The reason for creating the invite
     */
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
    createInvite(options?: any): any;
    /**
     * Fetches a collection of invites to this guild channel.
     * Resolves with a collection mapping invites by their codes.
     * @param {boolean} [cache=true] Whether or not to cache the fetched invites
     * @returns {Promise<Collection<string, Invite>>}
     */
    fetchInvites(cache?: boolean): any;
    get lastMessage(): any;
    get lastPinAt(): any;
    send(): void;
    sendTyping(): void;
    createMessageCollector(): void;
    awaitMessages(): void;
    fetchWebhooks(): void;
    createWebhook(): void;
    setRateLimitPerUser(..._args: any[]): any;
    setNSFW(): void;
}
export default BaseGuildTextChannel;
