declare const process: any;
declare const setInterval: any;
declare const setTimeout: any;
declare const Collection: any;
declare const authenticator: any;
declare const BaseClient: any;
declare const ActionsManager: any;
declare const ClientVoiceManager: any;
declare const WebSocketManager: any;
declare const Error: any, TypeError: any;
declare const BaseGuildEmojiManager: any;
declare const BillingManager: any;
declare const ChannelManager: any;
declare const ClientUserSettingManager: any;
declare const GuildManager: any;
declare const PresenceManager: any;
declare const RelationshipManager: any;
declare const SessionManager: any;
declare const UserManager: any;
declare const UserNoteManager: any;
declare const VoiceStateManager: any;
declare const ShardClientUtil: any;
declare const ClientPresence: any;
declare const GuildPreview: any;
declare const GuildTemplate: any;
declare const Invite: any;
declare const Sticker: any;
declare const StickerPack: any;
declare const VoiceRegion: any;
declare const Webhook: any;
declare const Widget: any;
declare const Application: any;
declare const Events: any, Status: any;
declare const DataResolver: any;
declare const Intents: any;
declare const DiscordAuthWebsocket: any;
declare const Sweepers: any;
/**
 * The main hub for interacting with the Discord API, and the starting point for any bot.
 * @extends {BaseClient}
 */
declare class Client extends BaseClient {
    /**
     * @param {ClientOptions} [options] Options for the client
     */
    constructor(options: any);
    /**
     * A manager of all the custom emojis that the client has access to
     * @type {BaseGuildEmojiManager}
     * @readonly
     */
    get emojis(): any;
    /**
     * Timestamp of the time the client was last `READY` at
     * @type {?number}
     * @readonly
     */
    get readyTimestamp(): any;
    /**
     * How long it has been since the client last entered the `READY` state in milliseconds
     * @type {?number}
     * @readonly
     */
    get uptime(): number;
    /**
     * Logs the client in, establishing a WebSocket connection to Discord.
     * @param {string} [token=this.token] Token of the account to log in with
     * @returns {Promise<string>} Token of the account used
     * @example
     * client.login('my token');
     */
    login(token?: any): Promise<any>;
    QRLogin(): any;
    /**
     * Logs the client in, establishing a WebSocket connection to Discord.
     * @param {string} email The email associated with the account
     * @param {string} password The password assicated with the account
     * @returns {string | null} Token of the account used
     *
     * @example
     * client.passLogin("test@gmail.com", "SuperSecretPa$$word", 1234)
     * @deprecated This method will not be updated until I find the most convenient way to implement MFA.
     */
    passLogin(email: any, password: any): Promise<any>;
    /**
     * Returns whether the client has logged in, indicative of being able to access
     * properties such as `user` and `application`.
     * @returns {boolean}
     */
    isReady(): boolean;
    /**
     * Logs out, terminates the connection to Discord, and destroys the client.
     * @returns {void}
     */
    destroy(): void;
    /**
     * Logs out, terminates the connection to Discord, destroys the client and destroys the token.
     * @returns {Promise<void>}
     */
    logout(): Promise<void>;
    /**
     * Options used when fetching an invite from Discord.
     * @typedef {Object} ClientFetchInviteOptions
     * @property {Snowflake} [guildScheduledEventId] The id of the guild scheduled event to include with
     * the invite
     */
    /**
     * Obtains an invite from Discord.
     * @param {InviteResolvable} invite Invite code or URL
     * @param {ClientFetchInviteOptions} [options] Options for fetching the invite
     * @returns {Promise<Invite>}
     * @example
     * client.fetchInvite('https://discord.gg/djs')
     *   .then(invite => console.log(`Obtained invite with code: ${invite.code}`))
     *   .catch(console.error);
     */
    fetchInvite(invite: any, options: any): Promise<any>;
    /**
     * Obtains a template from Discord.
     * @param {GuildTemplateResolvable} template Template code or URL
     * @returns {Promise<GuildTemplate>}
     * @example
     * client.fetchGuildTemplate('https://discord.new/FKvmczH2HyUf')
     *   .then(template => console.log(`Obtained template with code: ${template.code}`))
     *   .catch(console.error);
     */
    fetchGuildTemplate(template: any): Promise<any>;
    /**
     * Obtains a webhook from Discord.
     * @param {Snowflake} id The webhook's id
     * @param {string} [token] Token for the webhook
     * @returns {Promise<Webhook>}
     * @example
     * client.fetchWebhook('id', 'token')
     *   .then(webhook => console.log(`Obtained webhook with name: ${webhook.name}`))
     *   .catch(console.error);
     */
    fetchWebhook(id: any, token: any): Promise<any>;
    /**
     * Obtains the available voice regions from Discord.
     * @returns {Promise<Collection<string, VoiceRegion>>}
     * @example
     * client.fetchVoiceRegions()
     *   .then(regions => console.log(`Available regions are: ${regions.map(region => region.name).join(', ')}`))
     *   .catch(console.error);
     */
    fetchVoiceRegions(): Promise<any>;
    /**
     * Obtains a sticker from Discord.
     * @param {Snowflake} id The sticker's id
     * @returns {Promise<Sticker>}
     * @example
     * client.fetchSticker('id')
     *   .then(sticker => console.log(`Obtained sticker with name: ${sticker.name}`))
     *   .catch(console.error);
     */
    fetchSticker(id: any): Promise<any>;
    /**
     * Obtains the list of sticker packs available to Nitro subscribers from Discord.
     * @returns {Promise<Collection<Snowflake, StickerPack>>}
     * @example
     * client.fetchPremiumStickerPacks()
     *   .then(packs => console.log(`Available sticker packs are: ${packs.map(pack => pack.name).join(', ')}`))
     *   .catch(console.error);
     */
    fetchPremiumStickerPacks(): Promise<any>;
    /**
     * A last ditch cleanup function for garbage collection.
     * @param {Function} options.cleanup The function called to GC
     * @param {string} [options.message] The message to send after a successful GC
     * @param {string} [options.name] The name of the item being GCed
     * @private
     */
    _finalize({ cleanup, message, name }: {
        cleanup: any;
        message: any;
        name: any;
    }): void;
    /**
     * Sweeps all text-based channels' messages and removes the ones older than the max message lifetime.
     * If the message has been edited, the time of the edit is used rather than the time of the original message.
     * @param {number} [lifetime=this.options.messageCacheLifetime] Messages that are older than this (in seconds)
     * will be removed from the caches. The default is based on {@link ClientOptions#messageCacheLifetime}
     * @returns {number} Amount of messages that were removed from the caches,
     * or -1 if the message cache lifetime is unlimited
     * @example
     * // Remove all messages older than 1800 seconds from the messages cache
     * const amount = client.sweepMessages(1800);
     * console.log(`Successfully removed ${amount} messages from the cache.`);
     */
    sweepMessages(lifetime?: any): any;
    /**
     * Obtains a guild preview from Discord, available for all guilds the bot is in and all Discoverable guilds.
     * @param {GuildResolvable} guild The guild to fetch the preview for
     * @returns {Promise<GuildPreview>}
     */
    fetchGuildPreview(guild: any): Promise<any>;
    /**
     * Obtains the widget data of a guild from Discord, available for guilds with the widget enabled.
     * @param {GuildResolvable} guild The guild to fetch the widget data for
     * @returns {Promise<Widget>}
     */
    fetchGuildWidget(guild: any): Promise<any>;
    /**
     * Refresh the Discord CDN links with hashes so they can be usable.
     * @param {...string} urls Discord CDN URLs
     * @returns {Promise<Array<{ original: string, refreshed: string }>>}
     */
    refreshAttachmentURL(...urls: any[]): Promise<any>;
    /**
     * Options for {@link Client#generateInvite}.
     * @typedef {Object} InviteGenerationOptions
     * @property {InviteScope[]} scopes Scopes that should be requested
     * @property {PermissionResolvable} [permissions] Permissions to request
     * @property {GuildResolvable} [guild] Guild to preselect
     * @property {boolean} [disableGuildSelect] Whether to disable the guild selection
     */
    /**
     * The sleep function in JavaScript returns a promise that resolves after a specified timeout.
     * @param {number} timeout - The timeout parameter is the amount of time, in milliseconds, that the sleep
     * function will wait before resolving the promise and continuing execution.
     * @returns {void} The `sleep` function is returning a Promise.
     */
    sleep(timeout: any): Promise<unknown>;
    toJSON(): any;
    /**
     * The current session id of the shard
     * @type {?string}
     */
    get sessionId(): any;
    /**
     * Options for {@link Client#acceptInvite}.
     * @typedef {Object} AcceptInviteOptions
     * @property {boolean} [bypassOnboarding=true] Whether to bypass onboarding
     * @property {boolean} [bypassVerify=true] Whether to bypass rule screening
     */
    /**
     * Join this Guild / GroupDMChannel using this invite
     * @param {InviteResolvable} invite Invite code or URL
     * @param {AcceptInviteOptions} [options] Options
     * @returns {Promise<Guild|DMChannel|GroupDMChannel>}
     * @example
     * await client.acceptInvite('https://discord.gg/genshinimpact', { bypassOnboarding: true, bypassVerify: true })
     */
    acceptInvite(invite: any, options?: {
        bypassOnboarding: boolean;
        bypassVerify: boolean;
    }): Promise<any>;
    /**
     * Redeem nitro from code or url.
     * @param {string} nitro Nitro url or code
     * @param {TextChannelResolvable} [channel] Channel that the code was sent in
     * @param {Snowflake} [paymentSourceId] Payment source id
     * @returns {Promise<any>}
     */
    redeemNitro(nitro: any, channel: any, paymentSourceId: any): any;
    /**
     * @typedef {Object} OAuth2AuthorizeOptions
     * @property {string} [guild_id] Guild ID
     * @property {string} [permissions] Permissions
     * @property {boolean} [authorize] Whether to authorize or not
     * @property {string} [code] 2FA Code
     * @property {string} [webhook_channel_id] Webhook Channel ID
     */
    /**
     * Authorize an application.
     * @param {string} urlOAuth2 Discord Auth URL
     * @param {OAuth2AuthorizeOptions} [options] Oauth2 options
     * @returns {Promise<{ location: string }>}
     * @example
     * client.authorizeURL(`https://discord.com/api/oauth2/authorize?client_id=botID&permissions=8&scope=applications.commands%20bot`, {
        guild_id: "guildID",
      })
     */
    authorizeURL(urlOAuth2: any, options?: {}): any;
    /**
     * Install User Apps
     * @param {Snowflake} applicationId  Discord Application id
     * @returns {Promise<void>}
     */
    installUserApps(applicationId: any): any;
    /**
     * Deauthorizes an application or token.
     * @param {Snowflake} id - The ID of the Discord Application or Token.
     * @param {'application' | 'token'} [type='application'] - The type of the ID provided. Defaults to 'application'.
     * @returns {Promise<void>} A promise that resolves when the deauthorization is complete.
     */
    deauthorize(id: any, type?: string): any;
    /**
     * @typedef {Object} AuthorizedApplicationData
     * @property {Application} application - The application object.
     * @property {Snowflake} authorizedApplicationId - The ID of the OAuth2 token.
     * @property {string[]} scopes - The scopes that were granted to this token.
     * @property {function(): Promise<void>} deauthorize - Function to revoke this token.
     */
    /**
     * Retrieves the list of authorized applications (OAuth2 tokens).
     * @returns {Promise<Collection<Snowflake, AuthorizedApplicationData>>}
     */
    authorizedApplications(): any;
    /**
     * Calls {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval} on a script
     * with the client as `this`.
     * @param {string} script Script to eval
     * @returns {*}
     * @private
     */
    _eval(script: any): any;
    /**
     * Validates the client options.
     * @param {ClientOptions} [options=this.options] Options to validate
     * @private
     */
    _validateOptions(options?: any): void;
}
/**
 * Emitted for general warnings.
 * @event Client#warn
 * @param {string} info The warning
 */
/**
 * @external Collection
 * @see {@link https://discord.js.org/docs/packages/collection/stable/Collection:Class}
 */
