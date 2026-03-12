import { Collection } from '@discordjs/collection';
import Base from './Base';
import MessageAttachment from './MessageAttachment';
import Embed from './MessageEmbed';
import Mentions from './MessageMentions';
import { Poll } from './Poll';
import { Sticker } from './Sticker';
import Application from './interfaces/Application';
import ReactionManager from '../managers/ReactionManager';
import MessageFlags from '../util/MessageFlags';
/**
 * @type {WeakSet<Message>}
 * @private
 * @internal
 */
declare const deletedMessages: WeakSet<WeakKey>;
/**
 * Represents a message on Discord.
 * @extends {Base}
 */
declare class Message extends Base {
    channelId: string;
    guildId: string | null;
    id: string;
    position: number | null;
    createdTimestamp: number;
    type: string | null;
    system: boolean | null;
    content: string | null;
    author: any;
    pinned: boolean | null;
    tts: boolean | null;
    nonce: string | null;
    embeds: Embed[];
    components: any[];
    attachments: Collection<string, MessageAttachment>;
    stickers: Collection<string, Sticker>;
    editedTimestamp: number | null;
    reactions: ReactionManager;
    mentions: Mentions;
    webhookId: string | null;
    poll: Poll | null;
    groupActivityApplication: Application | null;
    applicationId: string | null;
    activity: {
        partyId: string;
        type: number;
    } | null;
    flags: MessageFlags;
    reference: any;
    interaction: any;
    messageSnapshots: Collection<string, Message>;
    call: any;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * Whether or not the structure has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): any;
    set deleted(value: any);
    /**
     * The channel that the message was sent in
     * @type {TextBasedChannels}
     * @readonly
     */
    get channel(): any;
    /**
     * Whether or not this message is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): any;
    /**
     * Represents the author of the message as a guild member.
     * Only available if the message comes from a guild where the author is still a member
     * @type {?GuildMember}
     * @readonly
     */
    get member(): any;
    /**
     * The time the message was sent at
     * @type {Date}
     * @readonly
     */
    get createdAt(): any;
    /**
     * The time the message was last edited at (if applicable)
     * @type {?Date}
     * @readonly
     */
    get editedAt(): any;
    /**
     * The guild the message was sent in (if in a guild channel)
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * Whether this message has a thread associated with it
     * @type {boolean}
     * @readonly
     */
    get hasThread(): any;
    /**
     * The thread started by this message
     * <info>This property is not suitable for checking whether a message has a thread,
     * use {@link Message#hasThread} instead.</info>
     * @type {?ThreadChannel}
     * @readonly
     */
    get thread(): any;
    /**
     * The URL to jump to this message
     * @type {string}
     * @readonly
     */
    get url(): any;
    /**
     * The message contents with all mentions replaced by the equivalent text.
     * If mentions cannot be resolved to a name, the relevant mention in the message content will not be converted.
     * @type {?string}
     * @readonly
     */
    get cleanContent(): any;
    /**
     * Creates a reaction collector.
     * @param {ReactionCollectorOptions} [options={}] Options to send to the collector
     * @returns {ReactionCollector}
     * @example
     * // Create a reaction collector
     * const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someId';
     * const collector = message.createReactionCollector({ filter, time: 15_000 });
     * collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
     * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
     */
    createReactionCollector(options?: any): any;
    /**
     * An object containing the same properties as CollectorOptions, but a few more:
     * @typedef {ReactionCollectorOptions} AwaitReactionsOptions
     * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
     */
    /**
     * Similar to createReactionCollector but in promise form.
     * Resolves with a collection of reactions that pass the specified filter.
     * @param {AwaitReactionsOptions} [options={}] Optional options to pass to the internal collector
     * @returns {Promise<Collection<string | Snowflake, MessageReaction>>}
     * @example
     * // Create a reaction collector
     * const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someId'
     * message.awaitReactions({ filter, time: 15_000 })
     *   .then(collected => console.log(`Collected ${collected.size} reactions`))
     *   .catch(console.error);
     */
    awaitReactions(options?: any): any;
    /**
     * Whether the message is editable by the client user
     * @type {boolean}
     * @readonly
     */
    get editable(): any;
    /**
     * Whether the message is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): any;
    /**
     * Whether the message is bulk deletable by the client user
     * @type {boolean}
     * @readonly
     * @example
     * // Filter for bulk deletable messages
     * channel.bulkDelete(messages.filter(message => message.bulkDeletable));
     */
    get bulkDeletable(): any;
    /**
     * Whether the message is pinnable by the client user
     * @type {boolean}
     * @readonly
     */
    get pinnable(): any;
    /**
     * Fetches the Message this crosspost/reply/pin-add references, if available to the client
     * @returns {Promise<Message>}
     */
    fetchReference(): Promise<any>;
    /**
     * Whether the message is crosspostable by the client user
     * @type {boolean}
     * @readonly
     */
    get crosspostable(): any;
    /**
     * Options that can be passed into {@link Message#edit}.
     * @typedef {Object} MessageEditOptions
     * @property {?string} [content] Content to be edited
     * @property {MessageEmbed[]|APIEmbed[]} [embeds] Embeds to be added/edited
     * @property {MessageMentionOptions} [allowedMentions] Which mentions should be parsed from the message content
     * @property {MessageFlags} [flags] Which flags to set for the message. Only `SUPPRESS_EMBEDS` can be edited.
     * @property {MessageAttachment[]} [attachments] An array of attachments to keep,
     * all attachments will be kept if omitted
     * @property {FileOptions[]|BufferResolvable[]|MessageAttachment[]} [files] Files to add to the message
     * @property {MessageActionRow[]|MessageActionRowOptions[]} [components]
     * Action rows containing interactive components for the message (buttons, select menus)
     */
    /**
     * Edits the content of the message.
     * @param {string|MessagePayload|MessageEditOptions} options The options to provide
     * @returns {Promise<Message>}
     * @example
     * // Update the content of a message
     * message.edit('This is my new content!')
     *   .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
     *   .catch(console.error);
     */
    edit(options: any): Promise<Message>;
    /**
     * Publishes a message in an announcement channel to all channels following it.
     * @returns {Promise<Message>}
     * @example
     * // Crosspost a message
     * if (message.channel.type === 'GUILD_NEWS') {
     *   message.crosspost()
     *     .then(() => console.log('Crossposted message'))
     *     .catch(console.error);
     * }
     */
    crosspost(): Promise<any>;
    /**
     * Pins this message to the channel's pinned messages.
     * @param {string} [reason] Reason for pinning
     * @returns {Promise<Message>}
     * @example
     * // Pin a message
     * message.pin()
     *   .then(console.log)
     *   .catch(console.error)
     */
    pin(reason: any): Promise<any>;
    /**
     * Unpins this message from the channel's pinned messages.
     * @param {string} [reason] Reason for unpinning
     * @returns {Promise<Message>}
     * @example
     * // Unpin a message
     * message.unpin()
     *   .then(console.log)
     *   .catch(console.error)
     */
    unpin(reason: any): Promise<any>;
    /**
     * Adds a reaction to the message.
     * @param {EmojiIdentifierResolvable} emoji The emoji to react with
     * @param {boolean} [burst=false] Super Reactions
     * @returns {Promise<MessageReaction>}
     * @example
     * // React to a message with a unicode emoji
     * message.react('🤔')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // React to a message with a custom emoji
     * message.react(message.guild.emojis.cache.get('123456789012345678'))
     *   .then(console.log)
     *   .catch(console.error);
     */
    react(emoji: any, burst?: boolean): Promise<any>;
    /**
     * Deletes the message.
     * @returns {Promise<Message>}
     * @example
     * // Delete a message
     * message.delete()
     *   .then(msg => console.log(`Deleted message from ${msg.author.username}`))
     *   .catch(console.error);
     */
    delete(): Promise<Message>;
    /**
     * Options provided when sending a message as an inline reply.
     * @typedef {BaseMessageOptions} ReplyMessageOptions
     * @property {boolean} [failIfNotExists=true] Whether to error if the referenced message
     * does not exist (creates a standard message in this case when false)
     * @property {StickerResolvable[]} [stickers=[]] Stickers to send in the message
     */
    /**
     * Send an inline reply to this message.
     * @param {string|MessagePayload|ReplyMessageOptions} options The options to provide
     * @returns {Promise<Message>}
     * @example
     * // Reply to a message
     * message.reply('This is a reply!')
     *   .then(() => console.log(`Replied to message "${message.content}"`))
     *   .catch(console.error);
     */
    reply(options: any): Promise<Message>;
    /**
     * Forwards this message
     * @param {TextBasedChannelResolvable} channel The channel to forward this message to.
     * @returns {Promise<Message>}
     */
    forward(channel: any): any;
    /**
     * A number that is allowed to be the duration (in minutes) of inactivity after which a thread is automatically
     * archived. This can be:
     * * `60` (1 hour)
     * * `1440` (1 day)
     * * `4320` (3 days)
     * * `10080` (7 days)
     * * `'MAX'` (7 days)
     * <warn>This option is deprecated and will be removed in the next major version.</warn>
     * @typedef {number|string} ThreadAutoArchiveDuration
     */
    /**
     * Options for starting a thread on a message.
     * @typedef {Object} StartThreadOptions
     * @property {string} name The name of the new thread
     * @property {ThreadAutoArchiveDuration} [autoArchiveDuration=this.channel.defaultAutoArchiveDuration] The amount of
     * time (in minutes) after which the thread should automatically archive in case of no recent activity
     * @property {string} [reason] Reason for creating the thread
     * @property {number} [rateLimitPerUser] The rate limit per user (slowmode) for the thread in seconds
     */
    /**
     * Create a new public thread from this message
     * @see GuildTextThreadManager#create
     * @param {StartThreadOptions} [options] Options for starting a thread on this message
     * @returns {Promise<ThreadChannel>}
     */
    startThread(options?: any): Promise<any>;
    /**
     * Submits a poll vote for the current user. Returns a 204 empty response on success.
     * @param  {...number[]} ids ID of the answer
     * @returns {Promise<void>}
     * @example
     * // Vote multi choices
     * message.vote(1,2);
     * // Remove vote
     * message.vote();
     */
    vote(...ids: any[]): any;
    /**
     * Fetch this message.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<Message>}
     */
    fetch(force?: any): Promise<any>;
    /**
     * Fetches the webhook used to create this message.
     * @returns {Promise<?Webhook>}
     */
    fetchWebhook(): Promise<any>;
    /**
     * Suppresses or unsuppresses embeds on a message.
     * @param {boolean} [suppress=true] If the embeds should be suppressed or not
     * @returns {Promise<Message>}
     */
    suppressEmbeds(suppress?: any): any;
    /**
     * Removes the attachments from this message.
     * @returns {Promise<Message>}
     */
    removeAttachments(): any;
    /**
     * Resolves a component by a custom id.
     * @param {string} customId The custom id to resolve against
     * @returns {?MessageActionRowComponent}
     */
    resolveComponent(customId: any): any;
    /**
     * Used mainly internally. Whether two messages are identical in properties. If you want to compare messages
     * without checking all the properties, use `message.id === message2.id`, which is much more efficient. This
     * method allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.
     * @param {Message} message The message to compare it to
     * @param {APIMessage} rawData Raw data passed through the WebSocket about this message
     * @returns {boolean}
     */
    equals(message: any, rawData: any): any;
    /**
     * Whether this message is from a guild.
     * @returns {boolean}
     */
    inGuild(): any;
    /**
     * When concatenated with a string, this automatically concatenates the message's content instead of the object.
     * @returns {string}
     * @example
     * // Logs: Message: This is a message!
     * console.log(`Message: ${message}`);
     */
    toString(): any;
    toJSON(): any;
    /**
     * Check data
     * @type {boolean}
     * @readonly
     */
    get isMessage(): any;
    /**
     * Click a specified button in the message based on the button's CustomID
     * @param {string} buttonid customId of the button to click
     *
     * To be compatible with Components V2, the following methods have been removed in this version:
     * - Clicking by coordinates (using ActionRow)
     * - Clicking the first button in the message
     *
     * Currently, only clicking by CustomID is supported.
     * @returns {Promise<Message|Modal>}
     */
    clickButton(buttonid: any): any;
    /**
     * Select specific menu
     * @param {number|string} menu Target
     * @param {Array<UserResolvable | RoleResolvable | ChannelResolvable | string>} values Any value
     * @returns {Promise<Message|Modal>}
     */
    selectMenu(menu: any, values?: any): any;
    /**
     * Marks the message as unread.
     * @returns {Promise<void>}
     */
    markUnread(): any;
    /**
     * Marks the message as read.
     * @returns {Promise<void>}
     */
    markRead(): any;
    /**
     * Report Message
     * @param {Arrray<number>} breadcrumbs Options for reporting
     * @param {Object} [elements={}] Metadata
     * @returns {Promise<{ report_id: Snowflake }>}
     * @example
     * // GET https://discord.com/api/v9/reporting/menu/message?variant=4
     * // Report Category
     * // - <hidden>MESSAGE_WELCOME (3)</hidden>
     * // - Something else (28)
     * // - Hacks, cheats, phishing or malicious links (72)
     * message.report([3, 28, 72]).then(console.log);
     * // { "report_id": "1199663489988440124" }
     */
    report(breadcrumbs: any, elements?: any): any;
}
export { Message, deletedMessages };
