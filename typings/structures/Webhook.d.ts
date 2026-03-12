/**
 * Represents a webhook.
 */
declare class Webhook {
    client: any;
    name: string;
    token: string | null;
    avatar: string | null;
    id: string;
    type: string;
    guildId: string;
    channelId: string;
    owner: any;
    sourceGuild: any;
    sourceChannel: any;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * Options that can be passed into send.
     * @typedef {BaseMessageOptionsWithPoll} WebhookMessageOptions
     * @property {string} [username=this.name] Username override for the message
     * @property {string} [avatarURL] Avatar URL override for the message
     * @property {Snowflake} [threadId] The id of the thread in the channel to send to.
     * <info>For interaction webhooks, this property is ignored</info>
     * @property {string} [threadName] Name of the thread to create (only available if webhook is in a forum channel)
     * @property {MessageFlags} [flags] Which flags to set for the message. Only `SUPPRESS_EMBEDS` can be set.
     * @property {Snowflake[]} [appliedTags]
     * The tags to apply to the created thread (only available if the webhook is in a forum channel)
     * @property {boolean} [withComponents] Whether to allow sending non-interactive components in the message.
     * <info>For application-owned webhooks, this property is ignored</info>
     */
    /**
     * Options that can be passed into editMessage.
     * @typedef {Object} WebhookEditMessageOptions
     * @property {MessageEmbed[]|APIEmbed[]} [embeds] See {@link WebhookMessageOptions#embeds}
     * @property {string} [content] See {@link BaseMessageOptions#content}
     * @property {FileOptions[]|BufferResolvable[]|MessageAttachment[]} [files] See {@link BaseMessageOptions#files}
     * @property {MessageMentionOptions} [allowedMentions] See {@link BaseMessageOptions#allowedMentions}
     * @property {MessageAttachment[]} [attachments] Attachments to send with the message
     * @property {MessageActionRow[]|MessageActionRowOptions[]} [components]
     * Action rows containing interactive components for the message (buttons, select menus)
     * @property {Snowflake} [threadId] The id of the thread this message belongs to
     * <info>For interaction webhooks, this property is ignored</info>
     * @property {boolean} [withComponents] Whether to allow sending non-interactive components in the message.
     * <info>For application-owned webhooks, this property is ignored</info>
     */
    /**
     * Sends a message with this webhook.
     * @param {string|MessagePayload|WebhookMessageOptions} options The options to provide
     * @returns {Promise<Message|APIMessage>}
     * @example
     * // Send a basic message
     * webhook.send('hello!')
     *   .then(message => console.log(`Sent message: ${message.content}`))
     *   .catch(console.error);
     * @example
     * // Send a basic message in a thread
     * webhook.send({ content: 'hello!', threadId: '836856309672348295' })
     *   .then(message => console.log(`Sent message: ${message.content}`))
     *   .catch(console.error);
     * @example
     * // Send a remote file
     * webhook.send({
     *   files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
     * })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Send a local file
     * webhook.send({
     *   files: [{
     *     attachment: 'entire/path/to/file.jpg',
     *     name: 'file.jpg'
     *   }]
     * })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Send an embed with a local image inside
     * webhook.send({
     *   content: 'This is an embed',
     *   embeds: [{
     *     thumbnail: {
     *          url: 'attachment://file.jpg'
     *       }
     *    }],
     *    files: [{
     *       attachment: 'entire/path/to/file.jpg',
     *       name: 'file.jpg'
     *    }]
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    send(options: any): Promise<any>;
    /**
     * Sends a raw slack message with this webhook.
     * @param {Object} body The raw body to send
     * @returns {Promise<boolean>}
     * @example
     * // Send a slack message
     * webhook.sendSlackMessage({
     *   'username': 'Wumpus',
     *   'attachments': [{
     *     'pretext': 'this looks pretty cool',
     *     'color': '#F0F',
     *     'footer_icon': 'http://snek.s3.amazonaws.com/topSnek.png',
     *     'footer': 'Powered by sneks',
     *     'ts': Date.now() / 1_000
     *   }]
     * }).catch(console.error);
     * @see {@link https://api.slack.com/messaging/webhooks}
     */
    sendSlackMessage(body: any): Promise<boolean>;
    /**
     * Options used to edit a {@link Webhook}.
     * @typedef {Object} WebhookEditData
     * @property {string} [name=this.name] The new name for the webhook
     * @property {?(BufferResolvable)} [avatar] The new avatar for the webhook
     * @property {GuildTextChannelResolvable|VoiceChannel|StageChannel|ForumChannel|MediaChannel} [channel]
     * The new channel for the webhook
     */
    /**
     * Edits this webhook.
     * @param {WebhookEditData} options Options for editing the webhook
     * @param {string} [reason] Reason for editing the webhook
     * @returns {Promise<Webhook>}
     */
    edit({ name, avatar, channel }: {
        name?: string;
        avatar?: any;
        channel?: any;
    }, reason?: string): Promise<this>;
    /**
     * Options that can be passed into fetchMessage.
     * @typedef {options} WebhookFetchMessageOptions
     * @property {boolean} [cache=true] Whether to cache the message.
     * @property {Snowflake} [threadId] The id of the thread this message belongs to.
     * <info>For interaction webhooks, this property is ignored</info>
     */
    /**
     * Gets a message that was sent by this webhook.
     * @param {Snowflake|'@original'} message The id of the message to fetch
     * @param {WebhookFetchMessageOptions|boolean} [cacheOrOptions={}] The options to provide to fetch the message.
     * <warn>A **deprecated** boolean may be passed instead to specify whether to cache the message.</warn>
     * @returns {Promise<Message|APIMessage>} Returns the raw message data if the webhook was instantiated as a
     * {@link WebhookClient} or if the channel is uncached, otherwise a {@link Message} will be returned
     */
    fetchMessage(message: string, cacheOrOptions?: {
        cache?: boolean;
        threadId?: string;
    } | boolean): Promise<any>;
    /**
     * Edits a message that was sent by this webhook.
     * @param {MessageResolvable|'@original'} message The message to edit
     * @param {string|MessagePayload|WebhookEditMessageOptions} options The options to provide
     * @returns {Promise<Message|APIMessage>} Returns the raw message data if the webhook was instantiated as a
     * {@link WebhookClient} or if the channel is uncached, otherwise a {@link Message} will be returned
     */
    editMessage(message: any, options: any): Promise<any>;
    /**
     * Deletes the webhook.
     * @param {string} [reason] Reason for deleting this webhook
     * @returns {Promise<void>}
     */
    delete(reason?: string): Promise<void>;
    /**
     * Delete a message that was sent by this webhook.
     * @param {MessageResolvable|'@original'} message The message to delete
     * @param {Snowflake} [threadId] The id of the thread this message belongs to
     * @returns {Promise<void>}
     */
    deleteMessage(message: any, threadId?: string): Promise<void>;
    /**
     * The channel the webhook belongs to
     * @type {?(TextChannel|VoiceChannel|NewsChannel|ForumChannel|MediaChannel)}
     * @readonly
     */
    get channel(): any;
    /**
     * The timestamp the webhook was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the webhook was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The URL of this webhook
     * @type {string}
     * @readonly
     */
    get url(): string;
    /**
     * A link to the webhook's avatar.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    avatarURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * Whether or not this webhook is a channel follower webhook.
     * @returns {boolean}
     */
    isChannelFollower(): boolean;
    /**
     * Whether or not this webhook is an incoming webhook.
     * @returns {boolean}
     */
    isIncoming(): boolean;
    static applyToClass(structure: any, ignore?: string[]): void;
}
export default Webhook;
