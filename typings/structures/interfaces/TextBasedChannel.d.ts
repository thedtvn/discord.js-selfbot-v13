import MessageCollector from '../MessageCollector';
/**
 * Interface for classes that have text-channel-like features.
 * @interface
 */
declare class TextBasedChannel {
    client: any;
    id: any;
    guild: any;
    edit: any;
    createDM: any;
    messages: any;
    lastMessageId: string | null;
    lastPinTimestamp: number | null;
    constructor();
    /**
     * The Message object of the last message in the channel, if one was sent
     * @type {?Message}
     * @readonly
     */
    get lastMessage(): any;
    /**
     * The date when the last pinned message was pinned, if there was one
     * @type {?Date}
     * @readonly
     */
    get lastPinAt(): Date | null;
    /**
     * Represents the data for a poll answer.
     * @typedef {Object} PollAnswerData
     * @property {string} text The text for the poll answer
     * @property {EmojiIdentifierResolvable} [emoji] The emoji for the poll answer
     */
    /**
     * Represents the data for a poll.
     * @typedef {Object} PollData
     * @property {PollQuestionMedia} question The question for the poll
     * @property {PollAnswerData[]} answers The answers for the poll
     * @property {number} duration The duration in hours for the poll
     * @property {boolean} allowMultiselect Whether the poll allows multiple answers
     * @property {PollLayoutType} [layoutType] The layout type for the poll
     */
    /**
     * Base options provided when sending.
     * @typedef {Object} BaseMessageOptions
     * @property {MessageActivity} [activity] Group activity
     * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
     * @property {string} [nonce=''] The nonce for the message
     * @property {string} [content=''] The content for the message
     * @property {Array<(MessageEmbed|APIEmbed)>} [embeds] The embeds for the message
     * (see [here](https://discord.com/developers/docs/resources/channel#embed-object) for more details)
     * @property {MessageMentionOptions} [allowedMentions] Which mentions should be parsed from the message content
     * (see [here](https://discord.com/developers/docs/resources/channel#allowed-mentions-object) for more details)
     * @property {Array<(FileOptions|BufferResolvable|MessageAttachment[])>} [files] Files to send with the message
     * @property {Array<(MessageActionRow|MessageActionRowOptions)>} [components]
     * Action rows containing interactive components for the message (buttons, select menus)
     * @property {MessageAttachment[]} [attachments] Attachments to send in the message
     */
    /**
     * The base message options for messages including a poll.
     * @typedef {BaseMessageOptions} BaseMessageOptionsWithPoll
     * @property {PollData} [poll] The poll to send with the message
     */
    /**
     * @typedef {Object} ForwardOptions
     * @property {MessageResolvable} message The originating message
     * @property {TextBasedChannelResolvable} [channel] The channel of the originating message
     * @property {GuildResolvable} [guild] The guild of the originating message
     */
    /**
     * Options provided when sending or editing a message.
     * @typedef {BaseMessageOptions} MessageOptions
     * @property {ReplyOptions} [reply] The options for replying to a message
     * @property {ForwardOptions} [forward] The options for forwarding a message
     * @property {StickerResolvable[]} [stickers=[]] Stickers to send in the message
     * @property {MessageFlags} [flags] Which flags to set for the message.
     * Only `SUPPRESS_EMBEDS`, `SUPPRESS_NOTIFICATIONS` and `IS_VOICE_MESSAGE` can be set.
     */
    /**
     * Options provided to control parsing of mentions by Discord
     * @typedef {Object} MessageMentionOptions
     * @property {MessageMentionTypes[]} [parse] Types of mentions to be parsed
     * @property {Snowflake[]} [users] Snowflakes of Users to be parsed as mentions
     * @property {Snowflake[]} [roles] Snowflakes of Roles to be parsed as mentions
     * @property {boolean} [repliedUser=true] Whether the author of the Message being replied to should be pinged
     */
    /**
     * Types of mentions to enable in MessageMentionOptions.
     * - `roles`
     * - `users`
     * - `everyone`
     * @typedef {string} MessageMentionTypes
     */
    /**
     * @typedef {Object} FileOptions
     * @property {BufferResolvable} attachment File to attach
     * @property {string} [name='file.jpg'] Filename of the attachment
     * @property {string} description The description of the file
     */
    /**
     * Options for sending a message with a reply.
     * @typedef {Object} ReplyOptions
     * @property {MessageResolvable} messageReference The message to reply to (must be in the same channel and not system)
     * @property {boolean} [failIfNotExists=true] Whether to error if the referenced message
     * does not exist (creates a standard message in this case when false)
     */
    /**
     * Sends a message to this channel.
     * @param {string|MessagePayload|MessageOptions} options The options to provide
     * @returns {Promise<Message>}
     * @example
     * // Send a basic message
     * channel.send('hello!')
     *   .then(message => console.log(`Sent message: ${message.content}`))
     *   .catch(console.error);
     * @example
     * // Send a remote file
     * channel.send({
     *   files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
     * })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Send a local file
     * channel.send({
     *   files: [{
     *     attachment: 'entire/path/to/file.jpg',
     *     name: 'file.jpg',
     *     description: 'A description of the file'
     *   }]
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    send(options: any): Promise<any>;
    searchInteractionFromGuildAndPrivateChannel(): any;
    searchInteractionUserApps(): any;
    searchInteraction(): Promise<{
        applications: any[];
        application_commands: any[];
    }>;
    sendSlash(botOrApplicationId: any, commandNameString: any, ...args: any[]): Promise<any>;
    /**
     * Sends a typing indicator in the channel.
     * @returns {Promise<{ message_send_cooldown_ms: number, thread_create_cooldown_ms: number }|void>} Resolves upon the typing status being sent
     * @example
     * // Start typing in a channel
     * channel.sendTyping();
     */
    sendTyping(): any;
    /**
     * Creates a Message Collector.
     * @param {MessageCollectorOptions} [options={}] The options to pass to the collector
     * @returns {MessageCollector}
     * @example
     * // Create a message collector
     * const filter = m => m.content.includes('discord');
     * const collector = channel.createMessageCollector({ filter, time: 15_000 });
     * collector.on('collect', m => console.log(`Collected ${m.content}`));
     * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
     */
    createMessageCollector(options?: any): MessageCollector;
    /**
     * An object containing the same properties as CollectorOptions, but a few more:
     * @typedef {MessageCollectorOptions} AwaitMessagesOptions
     * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
     */
    /**
     * Similar to createMessageCollector but in promise form.
     * Resolves with a collection of messages that pass the specified filter.
     * @param {AwaitMessagesOptions} [options={}] Optional options to pass to the internal collector
     * @returns {Promise<Collection<Snowflake, Message>>}
     * @example
     * // Await !vote messages
     * const filter = m => m.content.startsWith('!vote');
     * // Errors: ['time'] treats ending because of the time limit as an error
     * channel.awaitMessages({ filter, max: 4, time: 60_000, errors: ['time'] })
     *   .then(collected => console.log(collected.size))
     *   .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
     */
    awaitMessages(options?: any): Promise<any>;
    /**
     * Fetches all webhooks for the channel.
     * @returns {Promise<Collection<Snowflake, Webhook>>}
     * @example
     * // Fetch webhooks
     * channel.fetchWebhooks()
     *   .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
     *   .catch(console.error);
     */
    fetchWebhooks(): any;
    /**
     * Options used to create a {@link Webhook} in a guild text-based channel.
     * @typedef {Object} ChannelWebhookCreateOptions
     * @property {?(BufferResolvable|Base64Resolvable)} [avatar] Avatar for the webhook
     * @property {string} [reason] Reason for creating the webhook
     */
    /**
     * Creates a webhook for the channel.
     * @param {string} name The name of the webhook
     * @param {ChannelWebhookCreateOptions} [options] Options for creating the webhook
     * @returns {Promise<Webhook>} Returns the created Webhook
     * @example
     * // Create a webhook for the current channel
     * channel.createWebhook('Snek', {
     *   avatar: 'https://i.imgur.com/mI8XcpG.jpg',
     *   reason: 'Needed a cool new Webhook'
     * })
     *   .then(console.log)
     *   .catch(console.error)
     */
    createWebhook(name: string, options?: any): any;
    /**
     * Sets the rate limit per user (slowmode) for this channel.
     * @param {number} rateLimitPerUser The new rate limit in seconds
     * @param {string} [reason] Reason for changing the channel's rate limit
     * @returns {Promise<this>}
     */
    setRateLimitPerUser(rateLimitPerUser: number, reason?: string): any;
    /**
     * Sets whether this channel is flagged as NSFW.
     * @param {boolean} [nsfw=true] Whether the channel should be considered NSFW
     * @param {string} [reason] Reason for changing the channel's NSFW flag
     * @returns {Promise<this>}
     */
    setNSFW(nsfw?: boolean, reason?: string): any;
    static applyToClass(structure: any, full?: boolean, ignore?: string[]): void;
}
export default TextBasedChannel;
