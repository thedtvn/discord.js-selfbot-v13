/**
 * Max bulk deletable message age
 * @typedef {number} MaxBulkDeletableMessageAge
 */
export declare const MaxBulkDeletableMessageAge = 1209600000;
export declare const UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9210 Chrome/134.0.6998.205 Electron/35.3.0 Safari/537.36";
/**
 * Chrome TLS ciphers
 * @see {@link https://tls.browserleaks.com/tls}
 * @see {@link https://github.com/yifeikong/curl-impersonate}
 * @typedef {Array<string>} Ciphers
 */
export declare const ciphers: string[];
/**
 * The types of WebSocket error codes:
 * * 1000: WS_CLOSE_REQUESTED
 * * 1011: INTERNAL_ERROR
 * * 4004: TOKEN_INVALID
 * * 4010: SHARDING_INVALID
 * * 4011: SHARDING_REQUIRED
 * * 4013: INVALID_INTENTS
 * * 4014: DISALLOWED_INTENTS
 * @typedef {Object<number, string>} WSCodes
 */
export declare const WSCodes: {
    1000: string;
    1011: string;
    4004: string;
    4010: string;
    4011: string;
    4013: string;
    4014: string;
};
/**
 * Options for Image URLs.
 * @typedef {StaticImageURLOptions} ImageURLOptions
 * @property {boolean} [dynamic=false] If true, the format will dynamically change to `gif` for animated avatars.
 */
/**
 * Options for static Image URLs.
 * @typedef {Object} StaticImageURLOptions
 * @property {string} [format='webp'] One of `webp`, `png`, `jpg`, `jpeg`.
 * @property {number} [size] One of `16`, `32`, `56`, `64`, `96`, `128`, `256`, `300`, `512`, `600`, `1024`, `2048`,
 * `4096`
 */
/**
 * An object containing functions that return certain endpoints on the API.
 * @typedef {Object<string, Function|string>} Endpoints
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-cdn-endpoints}
 */
export declare const Endpoints: {
    CDN(root: any): {
        Emoji: (emojiId: any, format?: string) => string;
        Asset: (name: any) => string;
        DefaultAvatar: (index: any) => string;
        Avatar: (userId: any, hash: any, format: any, size: any, dynamic?: boolean) => string;
        AvatarDecoration: (hash: any) => string;
        GuildTagBadge: (guildId: any, hash: any) => string;
        GuildMemberAvatar: (guildId: any, memberId: any, hash: any, format: string, size: any, dynamic?: boolean) => string;
        GuildMemberBanner: (guildId: any, memberId: any, hash: any, format: string, size: any, dynamic?: boolean) => string;
        Banner: (id: any, hash: any, format: any, size: any, dynamic?: boolean) => string;
        Icon: (guildId: any, hash: any, format: any, size: any, dynamic?: boolean) => string;
        AppIcon: (appId: any, hash: any, options: any) => string;
        AppAsset: (appId: any, hash: any, options: any) => string;
        StickerPackBanner: (bannerId: any, format: any, size: any) => string;
        GDMIcon: (channelId: any, hash: any, format: any, size: any) => string;
        Splash: (guildId: any, hash: any, format: any, size: any) => string;
        DiscoverySplash: (guildId: any, hash: any, format: any, size: any) => string;
        TeamIcon: (teamId: any, hash: any, options: any) => string;
        Sticker: (stickerId: any, stickerFormat: any) => string;
        RoleIcon: (roleId: any, hash: any, format: string, size: any) => string;
        GuildScheduledEventCover: (scheduledEventId: any, coverHash: any, format: any, size: any) => string;
    };
    invite: (root: string, code: string, eventId?: string) => string;
    scheduledEvent: (root: any, guildId: any, eventId: any) => string;
    botGateway: string;
};
/**
 * The current status of the client. Here are the available statuses:
 * * READY: 0
 * * CONNECTING: 1
 * * RECONNECTING: 2
 * * IDLE: 3
 * * NEARLY: 4
 * * DISCONNECTED: 5
 * * WAITING_FOR_GUILDS: 6
 * * IDENTIFYING: 7
 * * RESUMING: 8
 * @typedef {Object<string, number>} Status
 */
export declare const Status: {
    READY: number;
    CONNECTING: number;
    RECONNECTING: number;
    IDLE: number;
    NEARLY: number;
    DISCONNECTED: number;
    WAITING_FOR_GUILDS: number;
    IDENTIFYING: number;
    RESUMING: number;
};
/**
 * The current status of a voice connection. Here are the available statuses:
 * * CONNECTED: 0
 * * CONNECTING: 1
 * * AUTHENTICATING: 2
 * * RECONNECTING: 3
 * * DISCONNECTED: 4
 * @typedef {number} VoiceStatus
 */
export declare const VoiceStatus: {
    CONNECTED: number;
    CONNECTING: number;
    AUTHENTICATING: number;
    RECONNECTING: number;
    DISCONNECTED: number;
};
/**
 * The Opcodes sent to the Gateway:
 * * DISPATCH: 0
 * * HEARTBEAT: 1
 * * IDENTIFY: 2
 * * STATUS_UPDATE: 3
 * * VOICE_STATE_UPDATE: 4
 * * VOICE_GUILD_PING: 5
 * * RESUME: 6
 * * RECONNECT: 7
 * * REQUEST_GUILD_MEMBERS: 8
 * * INVALID_SESSION: 9
 * * HELLO: 10
 * * HEARTBEAT_ACK: 11
 * * GUILD_SYNC: 12 [Unused]
 * * DM_UPDATE: 13 #  Send => used to get dm features
 * * GUILD_SUBSCRIPTIONS: 14 #  Send => discord responds back with GUILD_MEMBER_LIST_UPDATE type SYNC...
 * * LOBBY_CONNECT: 15
 * * LOBBY_DISCONNECT: 16
 * * LOBBY_VOICE_STATE_UPDATE: 17 #  Receive
 * * STREAM_CREATE: 18
 * * STREAM_DELETE: 19
 * * STREAM_WATCH: 20
 * * STREAM_PING: 21 #  Send
 * * STREAM_SET_PAUSED: 22
 * * LFG_SUBSCRIPTIONS: 23 [Unused]
 * * REQUEST_GUILD_APPLICATION_COMMANDS: 24 [Unused]
 * * EMBEDDED_ACTIVITY_LAUNCH: 25 => Launch an embedded activity in a voice channel or call.
 * * EMBEDDED_ACTIVITY_CLOSE: 26 => Stop an embedded activity.
 * * EMBEDDED_ACTIVITY_UPDATE: 27 => Update an embedded activity.
 * * REQUEST_FORUM_UNREADS: 28 => Request forum channel unread counts.
 * * REMOTE_COMMAND: 29 => Send a remote command to an embedded (Xbox, PlayStation) voice session.
 * * GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH: 30 => Request deleted entity IDs not matching a given hash for a guild.
 * * REQUEST_SOUNDBOARD_SOUNDS: 31
 * * SPEED_TEST_CREATE: 32 => Create a voice speed test.
 * * SPEED_TEST_DELETE: 33 => Delete a voice speed test.
 * * REQUEST_LAST_MESSAGES: 34 => Request last messages for a guild's channels.
 * * SEARCH_RECENT_MEMBERS: 35 => ~ Opcode 8 (Member Safety)
 * * REQUEST_CHANNEL_STATUSES: 36 => Request Voice Channel status.
 * * GUILD_SUBSCRIPTIONS_BULK: 37 => ~ Opcode 14
 * @typedef {Object<string, number>} Opcodes
 */
export declare const Opcodes: {
    DISPATCH: number;
    HEARTBEAT: number;
    IDENTIFY: number;
    STATUS_UPDATE: number;
    VOICE_STATE_UPDATE: number;
    VOICE_GUILD_PING: number;
    RESUME: number;
    RECONNECT: number;
    REQUEST_GUILD_MEMBERS: number;
    INVALID_SESSION: number;
    HELLO: number;
    HEARTBEAT_ACK: number;
    GUILD_SYNC: number;
    DM_UPDATE: number;
    GUILD_SUBSCRIPTIONS: number;
    LOBBY_CONNECT: number;
    LOBBY_DISCONNECT: number;
    LOBBY_VOICE_STATE_UPDATE: number;
    STREAM_CREATE: number;
    STREAM_DELETE: number;
    STREAM_WATCH: number;
    STREAM_PING: number;
    STREAM_SET_PAUSED: number;
    REQUEST_GUILD_APPLICATION_COMMANDS: number;
    EMBEDDED_ACTIVITY_LAUNCH: number;
    EMBEDDED_ACTIVITY_CLOSE: number;
    EMBEDDED_ACTIVITY_UPDATE: number;
    REQUEST_FORUM_UNREADS: number;
    REMOTE_COMMAND: number;
    GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH: number;
    REQUEST_SOUNDBOARD_SOUNDS: number;
    SPEED_TEST_CREATE: number;
    SPEED_TEST_DELETE: number;
    REQUEST_LAST_MESSAGES: number;
    SEARCH_RECENT_MEMBERS: number;
    REQUEST_CHANNEL_STATUSES: number;
    GUILD_SUBSCRIPTIONS_BULK: number;
};
/**
 * @typedef {Opject<string, number>} VoiceOpcodes
 */
export declare const VoiceOpcodes: {
    IDENTIFY: number;
    SELECT_PROTOCOL: number;
    READY: number;
    HEARTBEAT: number;
    SESSION_DESCRIPTION: number;
    SPEAKING: number;
    HEARTBEAT_ACK: number;
    RESUME: number;
    HELLO: number;
    RESUMED: number;
    SOURCES: number;
    CLIENT_DISCONNECT: number;
    SESSION_UPDATE: number;
    MEDIA_SINK_WANTS: number;
    VOICE_BACKEND_VERSION: number;
    CHANNEL_OPTIONS_UPDATE: number;
};
/**
 * The types of events emitted by the Client:
 * * RATE_LIMIT: rateLimit
 * * INVALID_REQUEST_WARNING: invalidRequestWarning
 * * API_RESPONSE: apiResponse
 * * API_REQUEST: apiRequest
 * * CLIENT_READY: ready
 * * APPLICATION_COMMAND_CREATE: applicationCommandCreate (deprecated)
 * * APPLICATION_COMMAND_DELETE: applicationCommandDelete (deprecated)
 * * APPLICATION_COMMAND_UPDATE: applicationCommandUpdate (deprecated)
 * * APPLICATION_COMMAND_PERMISSIONS_UPDATE: applicationCommandPermissionsUpdate
 * * AUTO_MODERATION_ACTION_EXECUTION: autoModerationActionExecution
 * * AUTO_MODERATION_RULE_CREATE: autoModerationRuleCreate
 * * AUTO_MODERATION_RULE_DELETE: autoModerationRuleDelete
 * * AUTO_MODERATION_RULE_UPDATE: autoModerationRuleUpdate
 * * GUILD_AVAILABLE: guildAvailable
 * * GUILD_CREATE: guildCreate
 * * GUILD_DELETE: guildDelete
 * * GUILD_UPDATE: guildUpdate
 * * GUILD_UNAVAILABLE: guildUnavailable
 * * GUILD_MEMBER_ADD: guildMemberAdd
 * * GUILD_MEMBER_REMOVE: guildMemberRemove
 * * GUILD_MEMBER_UPDATE: guildMemberUpdate
 * * GUILD_MEMBER_AVAILABLE: guildMemberAvailable
 * * GUILD_MEMBERS_CHUNK: guildMembersChunk
 * * GUILD_INTEGRATIONS_UPDATE: guildIntegrationsUpdate
 * * GUILD_ROLE_CREATE: roleCreate
 * * GUILD_ROLE_DELETE: roleDelete
 * * INVITE_CREATE: inviteCreate
 * * INVITE_DELETE: inviteDelete
 * * GUILD_ROLE_UPDATE: roleUpdate
 * * GUILD_EMOJI_CREATE: emojiCreate
 * * GUILD_EMOJI_DELETE: emojiDelete
 * * GUILD_EMOJI_UPDATE: emojiUpdate
 * * GUILD_BAN_ADD: guildBanAdd
 * * GUILD_BAN_REMOVE: guildBanRemove
 * * CHANNEL_CREATE: channelCreate
 * * CHANNEL_DELETE: channelDelete
 * * CHANNEL_UPDATE: channelUpdate
 * * CHANNEL_PINS_UPDATE: channelPinsUpdate
 * * MESSAGE_CREATE: messageCreate
 * * MESSAGE_DELETE: messageDelete
 * * MESSAGE_UPDATE: messageUpdate
 * * MESSAGE_BULK_DELETE: messageDeleteBulk
 * * MESSAGE_REACTION_ADD: messageReactionAdd
 * * MESSAGE_REACTION_REMOVE: messageReactionRemove
 * * MESSAGE_REACTION_REMOVE_ALL: messageReactionRemoveAll
 * * MESSAGE_REACTION_REMOVE_EMOJI: messageReactionRemoveEmoji
 * * THREAD_CREATE: threadCreate
 * * THREAD_DELETE: threadDelete
 * * THREAD_UPDATE: threadUpdate
 * * THREAD_LIST_SYNC: threadListSync
 * * THREAD_MEMBER_UPDATE: threadMemberUpdate
 * * THREAD_MEMBERS_UPDATE: threadMembersUpdate
 * * USER_UPDATE: userUpdate
 * * PRESENCE_UPDATE: presenceUpdate
 * * VOICE_SERVER_UPDATE: voiceServerUpdate
 * * VOICE_STATE_UPDATE: voiceStateUpdate
 * * TYPING_START: typingStart
 * * WEBHOOKS_UPDATE: webhookUpdate
 * * ERROR: error
 * * WARN: warn
 * * DEBUG: debug
 * * CACHE_SWEEP: cacheSweep
 * * SHARD_DISCONNECT: shardDisconnect
 * * SHARD_ERROR: shardError
 * * SHARD_RECONNECTING: shardReconnecting
 * * SHARD_READY: shardReady
 * * SHARD_RESUME: shardResume
 * * INVALIDATED: invalidated
 * * RAW: raw
 * * STAGE_INSTANCE_CREATE: stageInstanceCreate
 * * STAGE_INSTANCE_UPDATE: stageInstanceUpdate
 * * STAGE_INSTANCE_DELETE: stageInstanceDelete
 * * GUILD_STICKER_CREATE: stickerCreate
 * * GUILD_STICKER_DELETE: stickerDelete
 * * GUILD_STICKER_UPDATE: stickerUpdate
 * * GUILD_SCHEDULED_EVENT_CREATE: guildScheduledEventCreate
 * * GUILD_SCHEDULED_EVENT_UPDATE: guildScheduledEventUpdate
 * * GUILD_SCHEDULED_EVENT_DELETE: guildScheduledEventDelete
 * * GUILD_SCHEDULED_EVENT_USER_ADD: guildScheduledEventUserAdd
 * * GUILD_SCHEDULED_EVENT_USER_REMOVE: guildScheduledEventUserRemove
 * * GUILD_AUDIT_LOG_ENTRY_CREATE: guildAuditLogEntryCreate
 * * UNHANDLED_PACKET: unhandledPacket
 * * RELATIONSHIP_ADD: relationshipAdd
 * * RELATIONSHIP_REMOVE: relationshipRemove
 * * RELATIONSHIP_UPDATE: relationshipUpdate
 * * CHANNEL_RECIPIENT_ADD: channelRecipientAdd
 * * CHANNEL_RECIPIENT_REMOVE: channelRecipientRemove
 * * INTERACTION_MODAL_CREATE: interactionModalCreate
 * * CALL_CREATE: callCreate
 * * CALL_UPDATE: callUpdate
 * * CALL_DELETE: callDelete
 * * VOICE_CHANNEL_EFFECT_SEND: voiceChannelEffectSend
 * @typedef {Object<string, string>} Events
 */
export declare const Events: {
    RATE_LIMIT: string;
    INVALID_REQUEST_WARNING: string;
    API_RESPONSE: string;
    API_REQUEST: string;
    CLIENT_READY: string;
    APPLICATION_COMMAND_CREATE: string;
    APPLICATION_COMMAND_DELETE: string;
    APPLICATION_COMMAND_UPDATE: string;
    APPLICATION_COMMAND_PERMISSIONS_UPDATE: string;
    AUTO_MODERATION_ACTION_EXECUTION: string;
    AUTO_MODERATION_RULE_CREATE: string;
    AUTO_MODERATION_RULE_DELETE: string;
    AUTO_MODERATION_RULE_UPDATE: string;
    GUILD_AVAILABLE: string;
    GUILD_CREATE: string;
    GUILD_DELETE: string;
    GUILD_UPDATE: string;
    GUILD_UNAVAILABLE: string;
    GUILD_MEMBER_ADD: string;
    GUILD_MEMBER_REMOVE: string;
    GUILD_MEMBER_UPDATE: string;
    GUILD_MEMBER_AVAILABLE: string;
    GUILD_MEMBERS_CHUNK: string;
    GUILD_INTEGRATIONS_UPDATE: string;
    GUILD_ROLE_CREATE: string;
    GUILD_ROLE_DELETE: string;
    INVITE_CREATE: string;
    INVITE_DELETE: string;
    GUILD_ROLE_UPDATE: string;
    GUILD_EMOJI_CREATE: string;
    GUILD_EMOJI_DELETE: string;
    GUILD_EMOJI_UPDATE: string;
    GUILD_BAN_ADD: string;
    GUILD_BAN_REMOVE: string;
    CHANNEL_CREATE: string;
    CHANNEL_DELETE: string;
    CHANNEL_UPDATE: string;
    CHANNEL_PINS_UPDATE: string;
    MESSAGE_CREATE: string;
    MESSAGE_DELETE: string;
    MESSAGE_UPDATE: string;
    MESSAGE_BULK_DELETE: string;
    MESSAGE_REACTION_ADD: string;
    MESSAGE_REACTION_REMOVE: string;
    MESSAGE_REACTION_REMOVE_ALL: string;
    MESSAGE_REACTION_REMOVE_EMOJI: string;
    THREAD_CREATE: string;
    THREAD_DELETE: string;
    THREAD_UPDATE: string;
    THREAD_LIST_SYNC: string;
    THREAD_MEMBER_UPDATE: string;
    THREAD_MEMBERS_UPDATE: string;
    USER_UPDATE: string;
    PRESENCE_UPDATE: string;
    VOICE_SERVER_UPDATE: string;
    VOICE_STATE_UPDATE: string;
    TYPING_START: string;
    WEBHOOKS_UPDATE: string;
    ERROR: string;
    WARN: string;
    DEBUG: string;
    CACHE_SWEEP: string;
    SHARD_DISCONNECT: string;
    SHARD_ERROR: string;
    SHARD_RECONNECTING: string;
    SHARD_READY: string;
    SHARD_RESUME: string;
    INVALIDATED: string;
    RAW: string;
    STAGE_INSTANCE_CREATE: string;
    STAGE_INSTANCE_UPDATE: string;
    STAGE_INSTANCE_DELETE: string;
    GUILD_STICKER_CREATE: string;
    GUILD_STICKER_DELETE: string;
    GUILD_STICKER_UPDATE: string;
    GUILD_SCHEDULED_EVENT_CREATE: string;
    GUILD_SCHEDULED_EVENT_UPDATE: string;
    GUILD_SCHEDULED_EVENT_DELETE: string;
    GUILD_SCHEDULED_EVENT_USER_ADD: string;
    GUILD_SCHEDULED_EVENT_USER_REMOVE: string;
    GUILD_AUDIT_LOG_ENTRY_CREATE: string;
    UNHANDLED_PACKET: string;
    RELATIONSHIP_ADD: string;
    RELATIONSHIP_UPDATE: string;
    RELATIONSHIP_REMOVE: string;
    CHANNEL_RECIPIENT_ADD: string;
    CHANNEL_RECIPIENT_REMOVE: string;
    INTERACTION_MODAL_CREATE: string;
    INTERACTION_CREATE: string;
    CALL_CREATE: string;
    CALL_UPDATE: string;
    CALL_DELETE: string;
    MESSAGE_POLL_VOTE_ADD: string;
    MESSAGE_POLL_VOTE_REMOVE: string;
    VOICE_CHANNEL_EFFECT_SEND: string;
    VOICE_BROADCAST_SUBSCRIBE: string;
    VOICE_BROADCAST_UNSUBSCRIBE: string;
};
/**
 * The types of events emitted by a Shard:
 * * CLOSE: close
 * * DESTROYED: destroyed
 * * INVALID_SESSION: invalidSession
 * * READY: ready
 * * RESUMED: resumed
 * * ALL_READY: allReady
 * @typedef {Object<string, string>} ShardEvents
 */
export declare const ShardEvents: {
    CLOSE: string;
    DESTROYED: string;
    INVALID_SESSION: string;
    READY: string;
    RESUMED: string;
    ALL_READY: string;
};
/**
 * The type of Structure allowed to be a partial:
 * * USER
 * * CHANNEL (only affects DMChannels)
 * * GUILD_MEMBER
 * * MESSAGE
 * * REACTION
 * * GUILD_SCHEDULED_EVENT
 * <warn>Partials require you to put checks in place when handling data. See the "Partial Structures" topic on the
 * [guide](https://discordjs.guide/popular-topics/partials.html) for more information.</warn>
 * @typedef {string} PartialType
 */
export declare const PartialTypes: any;
/**
 * The type of a WebSocket message event, e.g. `MESSAGE_CREATE`. Here are the available events:
 * * READY
 * * RESUMED
 * * APPLICATION_COMMAND_CREATE (deprecated)
 * * APPLICATION_COMMAND_DELETE (deprecated)
 * * APPLICATION_COMMAND_PERMISSIONS_UPDATE
 * * APPLICATION_COMMAND_UPDATE (deprecated)
 * * AUTO_MODERATION_ACTION_EXECUTION
 * * AUTO_MODERATION_RULE_CREATE
 * * AUTO_MODERATION_RULE_DELETE
 * * AUTO_MODERATION_RULE_UPDATE
 * * GUILD_CREATE
 * * GUILD_DELETE
 * * GUILD_UPDATE
 * * INVITE_CREATE
 * * INVITE_DELETE
 * * GUILD_MEMBER_ADD
 * * GUILD_MEMBER_REMOVE
 * * GUILD_MEMBER_UPDATE
 * * GUILD_MEMBERS_CHUNK
 * * GUILD_INTEGRATIONS_UPDATE
 * * GUILD_ROLE_CREATE
 * * GUILD_ROLE_DELETE
 * * GUILD_ROLE_UPDATE
 * * GUILD_BAN_ADD
 * * GUILD_BAN_REMOVE
 * * GUILD_EMOJIS_UPDATE
 * * CHANNEL_CREATE
 * * CHANNEL_DELETE
 * * CHANNEL_UPDATE
 * * CHANNEL_PINS_UPDATE
 * * MESSAGE_CREATE
 * * MESSAGE_DELETE
 * * MESSAGE_UPDATE
 * * MESSAGE_DELETE_BULK
 * * MESSAGE_REACTION_ADD
 * * MESSAGE_REACTION_REMOVE
 * * MESSAGE_REACTION_REMOVE_ALL
 * * MESSAGE_REACTION_REMOVE_EMOJI
 * * THREAD_CREATE
 * * THREAD_UPDATE
 * * THREAD_DELETE
 * * THREAD_LIST_SYNC
 * * THREAD_MEMBER_UPDATE
 * * THREAD_MEMBERS_UPDATE
 * * USER_UPDATE
 * * PRESENCE_UPDATE
 * * TYPING_START
 * * VOICE_STATE_UPDATE
 * * VOICE_SERVER_UPDATE
 * * WEBHOOKS_UPDATE
 * * STAGE_INSTANCE_CREATE
 * * STAGE_INSTANCE_UPDATE
 * * STAGE_INSTANCE_DELETE
 * * GUILD_STICKERS_UPDATE
 * * GUILD_SCHEDULED_EVENT_CREATE
 * * GUILD_SCHEDULED_EVENT_UPDATE
 * * GUILD_SCHEDULED_EVENT_DELETE
 * * GUILD_SCHEDULED_EVENT_USER_ADD
 * * GUILD_SCHEDULED_EVENT_USER_REMOVE
 * * GUILD_AUDIT_LOG_ENTRY_CREATE
 * @typedef {string} WSEventType
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#receive-events}
 */
export declare const WSEvents: any;
/**
 * A valid scope to request when generating an invite link.
 * <warn>Scopes that require whitelist are not considered valid for this generator</warn>
 * * `applications.builds.read`: allows reading build data for a users applications
 * * `applications.commands`: allows this bot to create commands in the server
 * * `applications.entitlements`: allows reading entitlements for a users applications
 * * `applications.store.update`: allows reading and updating of store data for a users applications
 * * `bot`: makes the bot join the selected guild
 * * `connections`: makes the endpoint for getting a users connections available
 * * `email`: allows the `/users/@me` endpoint return with an email
 * * `identify`: allows the `/users/@me` endpoint without an email
 * * `guilds`: makes the `/users/@me/guilds` endpoint available for a user
 * * `guilds.join`: allows the bot to join the user to any guild it is in using Guild#addMember
 * * `gdm.join`: allows joining the user to a group dm
 * * `webhook.incoming`: generates a webhook to a channel
 * * `role_connections.write`: allows your app to update a user's connection and metadata for the app
 * @typedef {string} InviteScope
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export declare const InviteScopes: string[];
/**
 * The behavior of expiring subscribers for Integrations. This can be:
 * * REMOVE_ROLE
 * * KICK
 * @typedef {string} IntegrationExpireBehavior
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors}
 */
export declare const IntegrationExpireBehaviors: Record<string, any>;
/**
 * The type of a message, e.g. `DEFAULT`. Here are the available types:
 * * DEFAULT
 * * RECIPIENT_ADD
 * * RECIPIENT_REMOVE
 * * CALL
 * * CHANNEL_NAME_CHANGE
 * * CHANNEL_ICON_CHANGE
 * * CHANNEL_PINNED_MESSAGE
 * * GUILD_MEMBER_JOIN
 * * USER_PREMIUM_GUILD_SUBSCRIPTION
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3
 * * CHANNEL_FOLLOW_ADD
 * * GUILD_DISCOVERY_DISQUALIFIED
 * * GUILD_DISCOVERY_REQUALIFIED
 * * GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
 * * GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
 * * THREAD_CREATED
 * * REPLY
 * * APPLICATION_COMMAND
 * * THREAD_STARTER_MESSAGE
 * * GUILD_INVITE_REMINDER
 * * CONTEXT_MENU_COMMAND
 * * AUTO_MODERATION_ACTION
 * * ROLE_SUBSCRIPTION_PURCHASE
 * * INTERACTION_PREMIUM_UPSELL
 * * STAGE_START
 * * STAGE_END
 * * STAGE_SPEAKER
 * * STAGE_RAISE_HAND
 * * STAGE_TOPIC
 * * GUILD_APPLICATION_PREMIUM_SUBSCRIPTION
 * * PREMIUM_REFERRAL
 * * GUILD_INCIDENT_ALERT_MODE_ENABLED
 * * GUILD_INCIDENT_ALERT_MODE_DISABLED
 * * GUILD_INCIDENT_REPORT_RAID
 * * GUILD_INCIDENT_REPORT_FALSE_ALARM
 * * GUILD_DEADCHAT_REVIVE_PROMPT
 * * CUSTOM_GIFT
 * * GUILD_GAMING_STATS_PROMPT
 * * PURCHASE_NOTIFICATION
 * * POLL_RESULT
 * * CHANGELOG
 * * NITRO_NOTIFICATION
 * @typedef {string} MessageType
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-types}
 * @see {@link https://docs.discord.food/resources/message#message-type}
 */
export declare const MessageTypes: string[];
/**
 * The type of a message reference, e.g. `DEFAULT`. Here are the available types:
 * * DEFAULT
 * * FORWARD
 * @typedef {string} MessageReferenceType
 * @see {@link https://discord.com/developers/docs/resources/message#message-reference-types}
 */
export declare const MessageReferenceTypes: Record<string, any>;
/**
 * The name of an item to be swept in Sweepers
 * * `applicationCommands` - both global and guild commands
 * * `autoModerationRules`
 * * `bans`
 * * `emojis`
 * * `invites` - accepts the `lifetime` property, using it will sweep based on expires timestamp
 * * `guildMembers`
 * * `messages` - accepts the `lifetime` property, using it will sweep based on edited or created timestamp
 * * `presences`
 * * `reactions`
 * * `stageInstances`
 * * `stickers`
 * * `threadMembers`
 * * `threads` - accepts the `lifetime` property, using it will sweep archived threads based on archived timestamp
 * * `users`
 * * `voiceStates`
 * @typedef {string} SweeperKey
 */
export declare const SweeperKeys: string[];
/**
 * The types of messages that are `System`. The available types are `MessageTypes` excluding:
 * * DEFAULT
 * * REPLY
 * * APPLICATION_COMMAND
 * * CONTEXT_MENU_COMMAND
 * @typedef {string} SystemMessageType
 */
export declare const SystemMessageTypes: string[];
/**
 * <info>Bots cannot set a `CUSTOM` activity type, it is only for custom statuses received from users</info>
 * The type of an activity of a user's presence. Here are the available types:
 * * PLAYING
 * * STREAMING
 * * LISTENING
 * * WATCHING
 * * CUSTOM
 * * COMPETING
 * * HANG
 * @typedef {string} ActivityType
 * @see {@link https://discord.com/developers/docs/game-sdk/activities#data-models-activitytype-enum}
 */
export declare const ActivityTypes: Record<string, any>;
/**
 * All available channel types:
 * * `GUILD_TEXT` - a guild text channel
 * * `DM` - a DM channel
 * * `GUILD_VOICE` - a guild voice channel
 * * `GROUP_DM` - a group DM channel
 * * `GUILD_CATEGORY` - a guild category channel
 * * `GUILD_NEWS` - a guild news channel
 * * `GUILD_STORE` - a guild store channel
 * <warn>Store channels are deprecated and will be removed from Discord in March 2022. See
 * [Self-serve Game Selling Deprecation](https://support-dev.discord.com/hc/en-us/articles/6309018858647)
 * for more information.</warn>
 * * `GUILD_NEWS_THREAD` - a guild news channel's public thread channel
 * * `GUILD_PUBLIC_THREAD` - a guild text channel's public thread channel
 * * `GUILD_PRIVATE_THREAD` - a guild text channel's private thread channel
 * * `GUILD_STAGE_VOICE` - a guild stage voice channel
 * * `GUILD_DIRECTORY` - the channel in a hub containing guilds
 * * `GUILD_FORUM` - a channel that can only contain threads
 * * `GUILD_MEDIA` - a channel that can only contain threads, similar to `GUILD_FORUM` channels
 * * `UNKNOWN` - a generic channel of unknown type, could be Channel or GuildChannel
 * @typedef {string} ChannelType
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types}
 */
export declare const ChannelTypes: Record<string, any>;
/**
 * The channels that are text-based.
 * * DMChannel
 * * TextChannel
 * * NewsChannel
 * * ThreadChannel
 * * VoiceChannel
 * * StageChannel
 * @typedef {DMChannel|TextChannel|NewsChannel|ThreadChannel|VoiceChannel|StageChannel} TextBasedChannels
 */
/**
 * Data that resolves to give a text-based channel. This can be:
 * * A text-based channel
 * * A snowflake
 * @typedef {TextBasedChannels|Snowflake} TextBasedChannelsResolvable
 */
/**
 * The types of channels that are text-based. The available types are:
 * * DM
 * * GUILD_TEXT
 * * GUILD_NEWS
 * * GUILD_NEWS_THREAD
 * * GUILD_PUBLIC_THREAD
 * * GUILD_PRIVATE_THREAD
 * * GUILD_VOICE
 * * GUILD_STAGE_VOICE
 * @typedef {string} TextBasedChannelTypes
 */
export declare const TextBasedChannelTypes: string[];
/**
 * The types of channels that are threads. The available types are:
 * * GUILD_NEWS_THREAD
 * * GUILD_PUBLIC_THREAD
 * * GUILD_PRIVATE_THREAD
 * @typedef {string} ThreadChannelTypes
 */
export declare const ThreadChannelTypes: string[];
/**
 * The types of channels that are voice-based. The available types are:
 * * GUILD_VOICE
 * * GUILD_STAGE_VOICE
 * @typedef {string} VoiceBasedChannelTypes
 */
export declare const VoiceBasedChannelTypes: string[];
/**
 * The types of assets of an application:
 * * SMALL: 1
 * * BIG: 2
 * @typedef {Object<string, number>} ClientApplicationAssetTypes
 */
export declare const ClientApplicationAssetTypes: {
    SMALL: number;
    BIG: number;
};
/**
 * A commonly used color:
 * * DEFAULT
 * * WHITE
 * * AQUA
 * * GREEN
 * * BLUE
 * * YELLOW
 * * PURPLE
 * * LUMINOUS_VIVID_PINK
 * * FUCHSIA
 * * GOLD
 * * ORANGE
 * * RED
 * * GREY
 * * NAVY
 * * DARK_AQUA
 * * DARK_GREEN
 * * DARK_BLUE
 * * DARK_PURPLE
 * * DARK_VIVID_PINK
 * * DARK_GOLD
 * * DARK_ORANGE
 * * DARK_RED
 * * DARK_GREY
 * * DARKER_GREY
 * * LIGHT_GREY
 * * DARK_NAVY
 * * BLURPLE
 * * GREYPLE
 * * DARK_BUT_NOT_BLACK
 * * NOT_QUITE_BLACK
 * @typedef {string} Color
 */
export declare const Colors: {
    DEFAULT: number;
    WHITE: number;
    AQUA: number;
    GREEN: number;
    BLUE: number;
    YELLOW: number;
    PURPLE: number;
    LUMINOUS_VIVID_PINK: number;
    FUCHSIA: number;
    GOLD: number;
    ORANGE: number;
    RED: number;
    GREY: number;
    NAVY: number;
    DARK_AQUA: number;
    DARK_GREEN: number;
    DARK_BLUE: number;
    DARK_PURPLE: number;
    DARK_VIVID_PINK: number;
    DARK_GOLD: number;
    DARK_ORANGE: number;
    DARK_RED: number;
    DARK_GREY: number;
    DARKER_GREY: number;
    LIGHT_GREY: number;
    DARK_NAVY: number;
    BLURPLE: number;
    GREYPLE: number;
    DARK_BUT_NOT_BLACK: number;
    NOT_QUITE_BLACK: number;
};
/**
 * Holographic color values for role styling.
 * When using `tertiaryColor`, the API enforces these specific values for holographic effect.
 *
 * * PRIMARY: 11127295 (0xA9FFFF)
 * * SECONDARY: 16759788 (0xFFCCCC)
 * * TERTIARY: 16761760 (0xFFE0A0)
 * @typedef {Object<string, number>} HolographicStyle
 */
export declare const HolographicStyles: {
    PRIMARY: number;
    SECONDARY: number;
    TERTIARY: number;
};
/**
 * The value set for the explicit content filter levels for a guild:
 * * DISABLED
 * * MEMBERS_WITHOUT_ROLES
 * * ALL_MEMBERS
 * @typedef {string} ExplicitContentFilterLevel
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level}
 */
export declare const ExplicitContentFilterLevels: Record<string, any>;
/**
 * The value set for the verification levels for a guild:
 * * NONE
 * * LOW
 * * MEDIUM
 * * HIGH
 * * VERY_HIGH
 * @typedef {string} VerificationLevel
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level}
 */
export declare const VerificationLevels: Record<string, any>;
/**
 * An error encountered while performing an API request. Here are the potential errors:
 * * UNKNOWN_ACCOUNT
 * * UNKNOWN_APPLICATION
 * * UNKNOWN_CHANNEL
 * * UNKNOWN_GUILD
 * * UNKNOWN_INTEGRATION
 * * UNKNOWN_INVITE
 * * UNKNOWN_MEMBER
 * * UNKNOWN_MESSAGE
 * * UNKNOWN_OVERWRITE
 * * UNKNOWN_PROVIDER
 * * UNKNOWN_ROLE
 * * UNKNOWN_TOKEN
 * * UNKNOWN_USER
 * * UNKNOWN_EMOJI
 * * UNKNOWN_WEBHOOK
 * * UNKNOWN_WEBHOOK_SERVICE
 * * UNKNOWN_SESSION
 * * UNKNOWN_BAN
 * * UNKNOWN_SKU
 * * UNKNOWN_STORE_LISTING
 * * UNKNOWN_ENTITLEMENT
 * * UNKNOWN_BUILD
 * * UNKNOWN_LOBBY
 * * UNKNOWN_BRANCH
 * * UNKNOWN_STORE_DIRECTORY_LAYOUT
 * * UNKNOWN_REDISTRIBUTABLE
 * * UNKNOWN_GIFT_CODE
 * * UNKNOWN_STREAM
 * * UNKNOWN_PREMIUM_SERVER_SUBSCRIBE_COOLDOWN
 * * UNKNOWN_GUILD_TEMPLATE
 * * UNKNOWN_DISCOVERABLE_SERVER_CATEGORY
 * * UNKNOWN_STICKER
 * * UNKNOWN_INTERACTION
 * * UNKNOWN_APPLICATION_COMMAND
 * * UNKNOWN_APPLICATION_COMMAND_PERMISSIONS
 * * UNKNOWN_STAGE_INSTANCE
 * * UNKNOWN_GUILD_MEMBER_VERIFICATION_FORM
 * * UNKNOWN_GUILD_WELCOME_SCREEN
 * * UNKNOWN_GUILD_SCHEDULED_EVENT
 * * UNKNOWN_GUILD_SCHEDULED_EVENT_USER
 * * BOT_PROHIBITED_ENDPOINT
 * * BOT_ONLY_ENDPOINT
 * * CANNOT_SEND_EXPLICIT_CONTENT
 * * NOT_AUTHORIZED
 * * SLOWMODE_RATE_LIMIT
 * * ACCOUNT_OWNER_ONLY
 * * ANNOUNCEMENT_EDIT_LIMIT_EXCEEDED
 * * CHANNEL_HIT_WRITE_RATELIMIT
 * * SERVER_HIT_WRITE_RATELIMIT
 * * CONTENT_NOT_ALLOWED
 * * GUILD_PREMIUM_LEVEL_TOO_LOW
 * * MAXIMUM_GUILDS
 * * MAXIMUM_FRIENDS
 * * MAXIMUM_PINS
 * * MAXIMUM_RECIPIENTS
 * * MAXIMUM_ROLES
 * * MAXIMUM_WEBHOOKS
 * * MAXIMUM_EMOJIS
 * * MAXIMUM_REACTIONS
 * * MAXIMUM_CHANNELS
 * * MAXIMUM_ATTACHMENTS
 * * MAXIMUM_INVITES
 * * MAXIMUM_ANIMATED_EMOJIS
 * * MAXIMUM_SERVER_MEMBERS
 * * MAXIMUM_NUMBER_OF_SERVER_CATEGORIES
 * * GUILD_ALREADY_HAS_TEMPLATE
 * * MAXIMUM_THREAD_PARTICIPANTS
 * * MAXIMUM_NON_GUILD_MEMBERS_BANS
 * * MAXIMUM_BAN_FETCHES
 * * MAXIMUM_NUMBER_OF_UNCOMPLETED_GUILD_SCHEDULED_EVENTS_REACHED
 * * MAXIMUM_NUMBER_OF_STICKERS_REACHED
 * * MAXIMUM_PRUNE_REQUESTS
 * * MAXIMUM_GUILD_WIDGET_SETTINGS_UPDATE
 * * UNAUTHORIZED
 * * ACCOUNT_VERIFICATION_REQUIRED
 * * DIRECT_MESSAGES_TOO_FAST
 * * REQUEST_ENTITY_TOO_LARGE
 * * FEATURE_TEMPORARILY_DISABLED
 * * USER_BANNED
 * * TARGET_USER_NOT_CONNECTED_TO_VOICE
 * * ALREADY_CROSSPOSTED
 * * MISSING_ACCESS
 * * INVALID_ACCOUNT_TYPE
 * * CANNOT_EXECUTE_ON_DM
 * * EMBED_DISABLED
 * * CANNOT_EDIT_MESSAGE_BY_OTHER
 * * CANNOT_SEND_EMPTY_MESSAGE
 * * CANNOT_MESSAGE_USER
 * * CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL
 * * CHANNEL_VERIFICATION_LEVEL_TOO_HIGH
 * * OAUTH2_APPLICATION_BOT_ABSENT
 * * MAXIMUM_OAUTH2_APPLICATIONS
 * * INVALID_OAUTH_STATE
 * * MISSING_PERMISSIONS
 * * INVALID_AUTHENTICATION_TOKEN
 * * NOTE_TOO_LONG
 * * INVALID_BULK_DELETE_QUANTITY
 * * CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL
 * * INVALID_OR_TAKEN_INVITE_CODE
 * * CANNOT_EXECUTE_ON_SYSTEM_MESSAGE
 * * CANNOT_EXECUTE_ON_CHANNEL_TYPE
 * * INVALID_OAUTH_TOKEN
 * * MISSING_OAUTH_SCOPE
 * * INVALID_WEBHOOK_TOKEN
 * * INVALID_ROLE
 * * INVALID_RECIPIENTS
 * * BULK_DELETE_MESSAGE_TOO_OLD
 * * INVALID_FORM_BODY
 * * INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT
 * * INVALID_API_VERSION
 * * FILE_UPLOADED_EXCEEDS_MAXIMUM_SIZE
 * * INVALID_FILE_UPLOADED
 * * CANNOT_SELF_REDEEM_GIFT
 * * INVALID_GUILD
 * * INVALID_MESSAGE_TYPE
 * * PAYMENT_SOURCE_REQUIRED
 * * CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL
 * * INVALID_STICKER_SENT
 * * INVALID_OPERATION_ON_ARCHIVED_THREAD
 * * INVALID_THREAD_NOTIFICATION_SETTINGS
 * * PARAMETER_EARLIER_THAN_CREATION
 * * GUILD_NOT_AVAILABLE_IN_LOCATION
 * * GUILD_MONETIZATION_REQUIRED
 * * INSUFFICIENT_BOOSTS
 * * INVALID_JSON
 * * TWO_FACTOR_REQUIRED
 * * NO_USERS_WITH_DISCORDTAG_EXIST
 * * REACTION_BLOCKED
 * * RESOURCE_OVERLOADED
 * * STAGE_ALREADY_OPEN
 * * CANNOT_REPLY_WITHOUT_READ_MESSAGE_HISTORY_PERMISSION
 * * MESSAGE_ALREADY_HAS_THREAD
 * * THREAD_LOCKED
 * * MAXIMUM_ACTIVE_THREADS
 * * MAXIMUM_ACTIVE_ANNOUNCEMENT_THREADS
 * * INVALID_JSON_FOR_UPLOADED_LOTTIE_FILE
 * * UPLOADED_LOTTIES_CANNOT_CONTAIN_RASTERIZED_IMAGES
 * * STICKER_MAXIMUM_FRAMERATE_EXCEEDED
 * * STICKER_FRAME_COUNT_EXCEEDS_MAXIMUM_OF_1000_FRAMES
 * * LOTTIE_ANIMATION_MAXIMUM_DIMENSIONS_EXCEEDED
 * * STICKER_FRAME_RATE_IS_TOO_SMALL_OR_TOO_LARGE
 * * STICKER_ANIMATION_DURATION_EXCEEDS_MAXIMUM_OF_5_SECONDS
 * * CANNOT_UPDATE_A_FINISHED_EVENT
 * * FAILED_TO_CREATE_STAGE_NEEDED_FOR_STAGE_EVENT
 * @typedef {string} APIError
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes}
 * @see {@link https://gist.github.com/Dziurwa14/de2498e5ee28d2089f095aa037957cbb}
 */
export declare const APIErrors: {
    UNKNOWN_ACCOUNT: number;
    UNKNOWN_APPLICATION: number;
    UNKNOWN_CHANNEL: number;
    UNKNOWN_GUILD: number;
    UNKNOWN_INTEGRATION: number;
    UNKNOWN_INVITE: number;
    UNKNOWN_MEMBER: number;
    UNKNOWN_MESSAGE: number;
    UNKNOWN_OVERWRITE: number;
    UNKNOWN_PROVIDER: number;
    UNKNOWN_ROLE: number;
    UNKNOWN_TOKEN: number;
    UNKNOWN_USER: number;
    UNKNOWN_EMOJI: number;
    UNKNOWN_WEBHOOK: number;
    UNKNOWN_WEBHOOK_SERVICE: number;
    UNKNOWN_SESSION: number;
    UNKNOWN_BAN: number;
    UNKNOWN_SKU: number;
    UNKNOWN_STORE_LISTING: number;
    UNKNOWN_ENTITLEMENT: number;
    UNKNOWN_BUILD: number;
    UNKNOWN_LOBBY: number;
    UNKNOWN_BRANCH: number;
    UNKNOWN_STORE_DIRECTORY_LAYOUT: number;
    UNKNOWN_REDISTRIBUTABLE: number;
    UNKNOWN_GIFT_CODE: number;
    UNKNOWN_STREAM: number;
    UNKNOWN_PREMIUM_SERVER_SUBSCRIBE_COOLDOWN: number;
    UNKNOWN_GUILD_TEMPLATE: number;
    UNKNOWN_DISCOVERABLE_SERVER_CATEGORY: number;
    UNKNOWN_STICKER: number;
    UNKNOWN_INTERACTION: number;
    UNKNOWN_APPLICATION_COMMAND: number;
    UNKNOWN_APPLICATION_COMMAND_PERMISSIONS: number;
    UNKNOWN_STAGE_INSTANCE: number;
    UNKNOWN_GUILD_MEMBER_VERIFICATION_FORM: number;
    UNKNOWN_GUILD_WELCOME_SCREEN: number;
    UNKNOWN_GUILD_SCHEDULED_EVENT: number;
    UNKNOWN_GUILD_SCHEDULED_EVENT_USER: number;
    BOT_PROHIBITED_ENDPOINT: number;
    BOT_ONLY_ENDPOINT: number;
    CANNOT_SEND_EXPLICIT_CONTENT: number;
    NOT_AUTHORIZED: number;
    SLOWMODE_RATE_LIMIT: number;
    ACCOUNT_OWNER_ONLY: number;
    ANNOUNCEMENT_EDIT_LIMIT_EXCEEDED: number;
    CHANNEL_HIT_WRITE_RATELIMIT: number;
    SERVER_HIT_WRITE_RATELIMIT: number;
    CONTENT_NOT_ALLOWED: number;
    GUILD_PREMIUM_LEVEL_TOO_LOW: number;
    MAXIMUM_GUILDS: number;
    MAXIMUM_FRIENDS: number;
    MAXIMUM_PINS: number;
    MAXIMUM_RECIPIENTS: number;
    MAXIMUM_ROLES: number;
    MAXIMUM_WEBHOOKS: number;
    MAXIMUM_EMOJIS: number;
    MAXIMUM_REACTIONS: number;
    MAXIMUM_CHANNELS: number;
    MAXIMUM_ATTACHMENTS: number;
    MAXIMUM_INVITES: number;
    MAXIMUM_ANIMATED_EMOJIS: number;
    MAXIMUM_SERVER_MEMBERS: number;
    MAXIMUM_NUMBER_OF_SERVER_CATEGORIES: number;
    GUILD_ALREADY_HAS_TEMPLATE: number;
    MAXIMUM_THREAD_PARTICIPANTS: number;
    MAXIMUM_NON_GUILD_MEMBERS_BANS: number;
    MAXIMUM_BAN_FETCHES: number;
    MAXIMUM_NUMBER_OF_UNCOMPLETED_GUILD_SCHEDULED_EVENTS_REACHED: number;
    MAXIMUM_NUMBER_OF_STICKERS_REACHED: number;
    MAXIMUM_PRUNE_REQUESTS: number;
    MAXIMUM_GUILD_WIDGET_SETTINGS_UPDATE: number;
    MAXIMUM_NUMBER_OF_PREMIUM_EMOJIS: number;
    UNAUTHORIZED: number;
    ACCOUNT_VERIFICATION_REQUIRED: number;
    DIRECT_MESSAGES_TOO_FAST: number;
    REQUEST_ENTITY_TOO_LARGE: number;
    FEATURE_TEMPORARILY_DISABLED: number;
    USER_BANNED: number;
    TARGET_USER_NOT_CONNECTED_TO_VOICE: number;
    ALREADY_CROSSPOSTED: number;
    MISSING_ACCESS: number;
    INVALID_ACCOUNT_TYPE: number;
    CANNOT_EXECUTE_ON_DM: number;
    EMBED_DISABLED: number;
    CANNOT_EDIT_MESSAGE_BY_OTHER: number;
    CANNOT_SEND_EMPTY_MESSAGE: number;
    CANNOT_MESSAGE_USER: number;
    CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: number;
    CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: number;
    OAUTH2_APPLICATION_BOT_ABSENT: number;
    MAXIMUM_OAUTH2_APPLICATIONS: number;
    INVALID_OAUTH_STATE: number;
    MISSING_PERMISSIONS: number;
    INVALID_AUTHENTICATION_TOKEN: number;
    NOTE_TOO_LONG: number;
    INVALID_BULK_DELETE_QUANTITY: number;
    CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL: number;
    INVALID_OR_TAKEN_INVITE_CODE: number;
    CANNOT_EXECUTE_ON_SYSTEM_MESSAGE: number;
    CANNOT_EXECUTE_ON_CHANNEL_TYPE: number;
    INVALID_OAUTH_TOKEN: number;
    MISSING_OAUTH_SCOPE: number;
    INVALID_WEBHOOK_TOKEN: number;
    INVALID_ROLE: number;
    INVALID_RECIPIENTS: number;
    BULK_DELETE_MESSAGE_TOO_OLD: number;
    INVALID_FORM_BODY: number;
    INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT: number;
    INVALID_API_VERSION: number;
    FILE_UPLOADED_EXCEEDS_MAXIMUM_SIZE: number;
    INVALID_FILE_UPLOADED: number;
    CANNOT_SELF_REDEEM_GIFT: number;
    INVALID_GUILD: number;
    INVALID_MESSAGE_TYPE: number;
    PAYMENT_SOURCE_REQUIRED: number;
    CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL: number;
    INVALID_STICKER_SENT: number;
    INVALID_OPERATION_ON_ARCHIVED_THREAD: number;
    INVALID_THREAD_NOTIFICATION_SETTINGS: number;
    PARAMETER_EARLIER_THAN_CREATION: number;
    GUILD_NOT_AVAILABLE_IN_LOCATION: number;
    GUILD_MONETIZATION_REQUIRED: number;
    INSUFFICIENT_BOOSTS: number;
    INVALID_JSON: number;
    CANNOT_MIX_SUBSCRIPTION_AND_NON_SUBSCRIPTION_ROLES_FOR_EMOJI: number;
    CANNOT_CONVERT_PREMIUM_EMOJI_TO_NORMAL_EMOJI: number;
    VOICE_MESSAGES_DO_NOT_SUPPORT_ADDITIONAL_CONTENT: number;
    VOICE_MESSAGES_MUST_HAVE_A_SINGLE_AUDIO_ATTACHMENT: number;
    VOICE_MESSAGES_MUST_HAVE_SUPPORTING_METADATA: number;
    VOICE_MESSAGES_CANNOT_BE_EDITED: number;
    YOU_CANNOT_SEND_VOICE_MESSAGES_IN_THIS_CHANNEL: number;
    TWO_FACTOR_REQUIRED: number;
    NO_USERS_WITH_DISCORDTAG_EXIST: number;
    REACTION_BLOCKED: number;
    RESOURCE_OVERLOADED: number;
    STAGE_ALREADY_OPEN: number;
    CANNOT_REPLY_WITHOUT_READ_MESSAGE_HISTORY_PERMISSION: number;
    MESSAGE_ALREADY_HAS_THREAD: number;
    THREAD_LOCKED: number;
    MAXIMUM_ACTIVE_THREADS: number;
    MAXIMUM_ACTIVE_ANNOUNCEMENT_THREADS: number;
    INVALID_JSON_FOR_UPLOADED_LOTTIE_FILE: number;
    UPLOADED_LOTTIES_CANNOT_CONTAIN_RASTERIZED_IMAGES: number;
    STICKER_MAXIMUM_FRAMERATE_EXCEEDED: number;
    STICKER_FRAME_COUNT_EXCEEDS_MAXIMUM_OF_1000_FRAMES: number;
    LOTTIE_ANIMATION_MAXIMUM_DIMENSIONS_EXCEEDED: number;
    STICKER_FRAME_RATE_IS_TOO_SMALL_OR_TOO_LARGE: number;
    STICKER_ANIMATION_DURATION_EXCEEDS_MAXIMUM_OF_5_SECONDS: number;
    CANNOT_UPDATE_A_FINISHED_EVENT: number;
    FAILED_TO_CREATE_STAGE_NEEDED_FOR_STAGE_EVENT: number;
};
/**
 * The value set for a guild's default message notifications, e.g. `ALL_MESSAGES`. Here are the available types:
 * * ALL_MESSAGES
 * * ONLY_MENTIONS
 * @typedef {string} DefaultMessageNotificationLevel
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level}
 */
export declare const DefaultMessageNotificationLevels: Record<string, any>;
/**
 * The value set for a team member's membership state:
 * * INVITED
 * * ACCEPTED
 * @typedef {string} MembershipState
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export declare const MembershipStates: Record<string, any>;
/**
 * The value set for a webhook's type:
 * * Incoming
 * * Channel Follower
 * * Application
 * @typedef {string} WebhookType
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export declare const WebhookTypes: Record<string, any>;
/**
 * The value set for a sticker's type:
 * * STANDARD
 * * GUILD
 * @typedef {string} StickerType
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export declare const StickerTypes: Record<string, any>;
/**
 * The value set for a sticker's format type:
 * * PNG
 * * APNG
 * * LOTTIE
 * * GIF
 * @typedef {string} StickerFormatType
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export declare const StickerFormatTypes: Record<string, any>;
/**
 * An overwrite type:
 * * role
 * * member
 * @typedef {string} OverwriteType
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export declare const OverwriteTypes: Record<string, any>;
/**
 * The type of an {@link ApplicationCommand} object:
 * * CHAT_INPUT
 * * USER
 * * MESSAGE
 * @typedef {string} ApplicationCommandType
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types}
 */
export declare const ApplicationCommandTypes: Record<string, any>;
/**
 * The type of an {@link ApplicationCommandOption} object:
 * * SUB_COMMAND
 * * SUB_COMMAND_GROUP
 * * STRING
 * * INTEGER
 * * BOOLEAN
 * * USER
 * * CHANNEL
 * * ROLE
 * * MENTIONABLE
 * * NUMBER
 * * ATTACHMENT
 * @typedef {string} ApplicationCommandOptionType
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
 */
export declare const ApplicationCommandOptionTypes: Record<string, any>;
/**
 * The type of an {@link ApplicationCommandPermissions} object:
 * * ROLE
 * * USER
 * @typedef {string} ApplicationCommandPermissionType
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export declare const ApplicationCommandPermissionTypes: Record<string, any>;
/**
 * Each metadata type offers a comparison operation that allows
 * guilds to configure role requirements based on metadata values stored by the bot.
 * Bots specify a metadata value for each user and guilds specify
 * the required guild's configured value within the guild role settings.
 * All available channel types:
 * * INTEGER_LESS_THAN_OR_EQUAL
 * * INTEGER_GREATER_THAN_OR_EQUAL
 * * INTEGER_EQUAL
 * * INTEGER_NOT_EQUAL
 * * DATATIME_LESS_THAN_OR_EQUAL
 * * DATATIME_GREATER_THAN_OR_EQUAL
 * * BOOLEAN_EQUAL
 * * BOOLEAN_NOT_EQUAL
 * @typedef {string} ApplicationRoleConnectionMetadataType
 * @see{@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export declare const ApplicationRoleConnectionMetadataTypes: Record<string, any>;
/**
 * The type of an {@link AutoModerationRuleTriggerTypes} object:
 * * KEYWORD
 * * SPAM
 * * KEYWORD_PRESET
 * * MENTION_SPAM
 * @typedef {string} AutoModerationRuleTriggerType
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types}
 */
export declare const AutoModerationRuleTriggerTypes: Record<string, any>;
/**
 * The type of an {@link AutoModerationRuleKeywordPresetTypes} object:
 * * KEYWORD
 * * SPAM
 * * KEYWORD_PRESET
 * * MENTION_SPAM
 * @typedef {string} AutoModerationRuleKeywordPresetType
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types}
 */
export declare const AutoModerationRuleKeywordPresetTypes: Record<string, any>;
/**
 * The type of an {@link AutoModerationActionTypes} object:
 * * BLOCK_MESSAGE
 * * SEND_ALERT_MESSAGE
 * * TIMEOUT
 * @typedef {string} AutoModerationActionType
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types}
 */
export declare const AutoModerationActionTypes: Record<string, any>;
/**
 * The type of an {@link AutoModerationRuleEventTypes} object:
 * * MESSAGE_SEND
 * @typedef {string} AutoModerationRuleEventType
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types}
 */
export declare const AutoModerationRuleEventTypes: Record<string, any>;
/**
 * The type of an {@link Interaction} object:
 * * PING
 * * APPLICATION_COMMAND
 * * MESSAGE_COMPONENT
 * * APPLICATION_COMMAND_AUTOCOMPLETE
 * * MODAL_SUBMIT
 * @typedef {string} InteractionType
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export declare const InteractionTypes: Record<string, any>;
/**
 * The type of an interaction response:
 * * PONG
 * * CHANNEL_MESSAGE_WITH_SOURCE
 * * DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE
 * * DEFERRED_MESSAGE_UPDATE
 * * UPDATE_MESSAGE
 * * APPLICATION_COMMAND_AUTOCOMPLETE_RESULT
 * * MODAL
 * @typedef {string} InteractionResponseType
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
export declare const InteractionResponseTypes: Record<string, any>;
/**
 * The type of a message component
 * * ACTION_ROW
 * * BUTTON
 * * STRING_SELECT
 * * TEXT_INPUT
 * * USER_SELECT
 * * ROLE_SELECT
 * * MENTIONABLE_SELECT
 * * CHANNEL_SELECT
 * @typedef {string} MessageComponentType
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export declare const MessageComponentTypes: Record<string, any>;
/**
 * The types of components that are select menus. The available types are:
 * * STRING_MENU
 * * USER_SELECT
 * * ROLE_SELECT
 * * MENTIONABLE_SELECT
 * * CHANNEL_SELECT
 * @typedef {string} SelectMenuComponentType
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export declare const SelectMenuComponentTypes: Record<string, any>;
/**
 * The style of a message button
 * * PRIMARY
 * * SECONDARY
 * * SUCCESS
 * * DANGER
 * * LINK
 * @typedef {string} MessageButtonStyle
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export declare const MessageButtonStyles: Record<string, any>;
/**
 * The required MFA level for a guild
 * * NONE
 * * ELEVATED
 * @typedef {string} MFALevel
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level}
 */
export declare const MFALevels: Record<string, any>;
/**
 * NSFW level of a Guild:
 * * DEFAULT
 * * EXPLICIT
 * * SAFE
 * * AGE_RESTRICTED
 * @typedef {string} NSFWLevel
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level}
 */
export declare const NSFWLevels: Record<string, any>;
/**
 * Privacy level of a {@link StageInstance} object:
 * * PUBLIC
 * * GUILD_ONLY
 * @typedef {string} PrivacyLevel
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export declare const PrivacyLevels: Record<string, any>;
/**
 * The style of a text input component
 * * SHORT
 * * PARAGRAPH
 * @typedef {string} TextInputStyle
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles}
 */
export declare const TextInputStyles: Record<string, any>;
/**
 * Privacy level of a {@link GuildScheduledEvent} object:
 * * GUILD_ONLY
 * @typedef {string} GuildScheduledEventPrivacyLevel
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export declare const GuildScheduledEventPrivacyLevels: Record<string, any>;
/**
 * The premium tier (Server Boost level) of a guild:
 * * NONE
 * * TIER_1
 * * TIER_2
 * * TIER_3
 * @typedef {string} PremiumTier
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier}
 */
export declare const PremiumTiers: Record<string, any>;
/**
 * The status of a {@link GuildScheduledEvent}:
 * * SCHEDULED
 * * ACTIVE
 * * COMPLETED
 * * CANCELED
 * @typedef {string} GuildScheduledEventStatus
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export declare const GuildScheduledEventStatuses: Record<string, any>;
/**
 * The entity type of a {@link GuildScheduledEvent}:
 * * NONE
 * * STAGE_INSTANCE
 * * VOICE
 * * EXTERNAL
 * @typedef {string} GuildScheduledEventEntityType
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export declare const GuildScheduledEventEntityTypes: Record<string, any>;
/**
 * The camera video quality mode of a {@link VoiceChannel}:
 * * AUTO
 * * FULL
 * @typedef {string} VideoQualityMode
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
 */
export declare const VideoQualityModes: Record<string, any>;
/**
 * The type of reaction
 * * NORMAL
 * * BURST
 * @typedef {string} ReactionType
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
 */
export declare const ReactionTypes: Record<string, any>;
/**
 * Sort {@link ThreadOnlyChannel} posts by creation time or activity
 * * LATEST_ACTIVITY
 * * CREATION_DATE
 * @typedef {string} SortOrderType
 * @see {@link https://discord.com/developers/docs/resources/channel/#channel-object-sort-order-types}
 */
export declare const SortOrderTypes: Record<string, any>;
/**
 * The default forum layout to set on the {@link ForumChannel}
 * * NOT_SET
 * * LIST_VIEW
 * * GALLERY_VIEW
 * @typedef {string} ForumLayoutType
 * @see {@link https://discord.com/developers/docs/resources/channel/#channel-object-forum-layout-types}
 */
export declare const ForumLayoutTypes: Record<string, any>;
/**
 * Different layouts for {@link MessagePoll} will come in the future. For now though, this value will always be `DEFAULT`.
 * * DEFAULT
 * * IMAGE_ONLY_ANSWERS
 * @typedef {string} PollLayoutType
 * @see {@link https://docs.discord.food/resources/message#poll-layout-type}
 */
export declare const PollLayoutTypes: Record<string, any>;
/**
 * Relationship Enums:
 * * 0: IGNORED
 * * 1: FRIEND
 * * 2: BLOCKED
 * * 3: PENDING_INCOMING
 * * 4: PENDING_OUTGOING
 * * 5: IMPLICIT
 * * 6: NONE
 * @typedef {string} RelationshipType
 * @see {@link https://luna.gitlab.io/discord-unofficial-docs/relationships.html}
 */
export declare const RelationshipTypes: Record<string, any>;
export declare const SeparatorSpacingSizes: Record<string, any>;
export declare const _cleanupSymbol: unique symbol;
/**
 * @typedef {Object} Constants Constants that can be used in an enum or object-like way.
 * @property {Object<ActivityType, number>} ActivityTypes The type of an activity of a users presence.
 * @property {Object<APIError, number>} APIErrors An error encountered while performing an API request.
 * @property {Object<ApplicationCommandOptionType, number>} ApplicationCommandOptionTypes
 * The type of an {@link ApplicationCommandOption} object.
 * @property {Object<ApplicationCommandPermissionType, number>} ApplicationCommandPermissionTypes
 * The type of an {@link ApplicationCommandPermissions} object.
 * @property {Object<ApplicationCommandType, number>} ApplicationCommandTypes
 * The type of an {@link ApplicationCommand} object.
 * @property {Object<ApplicationRoleConnectionMetadataType, number>} ApplicationRoleConnectionMetadataTypes
 * The type of an {@link ApplicationRoleConnectionMetadata} object.
 * @property {Object<AutoModerationActionType, number>} AutoModerationActionTypes
 * A type of an action which executes whenever a rule is triggered.
 * @property {Object<AutoModerationRuleEventType, number>} AutoModerationRuleEventTypes Indicates in what event context
 * a rule should be checked.
 * @property {Object<AutoModerationRuleKeywordPresetType, number>} AutoModerationRuleKeywordPresetTypes
 * The internally pre-defined wordsetswhich will be searched for in content
 * @property {Object<AutoModerationRuleTriggerType, number>} AutoModerationRuleTriggerTypes Characterizes the type
 * of content which can trigger the rule.
 * @property {Object<ChannelType, number>} ChannelTypes All available channel types.
 * @property {ClientApplicationAssetTypes} ClientApplicationAssetTypes The types of an {@link ApplicationAsset} object.
 * @property {Object<Color, number>} Colors An object with regularly used colors.
 * @property {Object<DefaultMessageNotificationLevel, number>} DefaultMessageNotificationLevels
 * The value set for a guilds default message notifications.
 * @property {Endpoints} Endpoints Object containing functions that return certain endpoints on the API.
 * @property {Events} Events The types of events emitted by the Client.
 * @property {Object<ExplicitContentFilterLevel, number>} ExplicitContentFilterLevels
 * The value set for the explicit content filter levels for a guild.
 * @property {Object<GuildScheduledEventEntityType, number>} GuildScheduledEventEntityTypes
 * The entity type of a {@link GuildScheduledEvent} object.
 * @property {Object<GuildScheduledEventPrivacyLevel, number>} GuildScheduledEventPrivacyLevels
 * Privacy level of a {@link GuildScheduledEvent} object.
 * @property {Object<GuildScheduledEventStatus, number>} GuildScheduledEventStatuses
 * The status of a {@link GuildScheduledEvent} object.
 * @property {Object<IntegrationExpireBehavior, number>} IntegrationExpireBehaviors
 * The behavior of expiring subscribers for Integrations.
 * @property {Object<InteractionResponseType, number>} InteractionResponseTypes The type of an interaction response.
 * @property {Object<InteractionType, number>} InteractionTypes The type of an {@link Interaction} object.
 * @property {InviteScope[]} InviteScopes The scopes of an invite.
 * @property {Object<RelationshipType, number>} RelationshipTypes Relationship Enums
 * @property {Object<SeparatorSpacingSize, number>} SeparatorSpacingSize Size of separator padding (Enums)
 * @property {Object<MembershipState, number>} MembershipStates The value set for a team members membership state.
 * @property {Object<MessageButtonStyle, number>} MessageButtonStyles The style of a message button.
 * @property {Object<MessageComponentType, number>} MessageComponentTypes The type of a message component.
 * @property {MessageType[]} MessageTypes The type of a {@link Message} object.
 * @property {Object<MFALevel, number>} MFALevels The required MFA level for a guild.
 * @property {Object<NSFWLevel, number>} NSFWLevels NSFW level of a guild.
 * @property {Opcodes} Opcodes The types of Opcodes sent to the Gateway.
 * @property {Object<OverwriteType, number>} OverwriteTypes An overwrite type.
 * @property {Object} Package The package.json of the library.
 * @property {Object<PartialType, PartialType>} PartialTypes The type of Structure allowed to be a partial.
 * @property {Object<PremiumTier, number>} PremiumTiers The premium tier (Server Boost level) of a guild.
 * @property {Object<PrivacyLevel, number>} PrivacyLevels Privacy level of a {@link StageInstance} object.
 * @property {ShardEvents} ShardEvents The type of events emitted by a Shard.
 * @property {Status} Status The available statuses of the client.
 * @property {Object<SelectMenuComponentType, number>} SelectMenuComponentTypes The type of any select menu.
 * @property {Object<StickerFormatType, number>} StickerFormatTypes The value set for a stickers format type.
 * @property {Object<StickerType, number>} StickerTypes The value set for a stickers type.
 * @property {SweeperKey[]} SweeperKeys The name of an item to be swept in Sweepers.
 * @property {SystemMessageType[]} SystemMessageTypes The types of messages that are `System`.
 * @property {Object<TextInputStyle, number>} TextInputStyles The style of a text input component.
 * @property {ThreadChannelTypes[]} ThreadChannelTypes The type of a {@link ThreadChannel} object.
 * @property {string} UserAgent The user agent used for requests.
 * @property {Object<VerificationLevel, number>} VerificationLevels
 * The value set for the verification levels for a guild.
 * @property {Object<VideoQualityMode, number>} VideoQualityModes
 * The camera video quality mode for a {@link VoiceChannel}.
 * @property {Object<WebhookType, number>} WebhookTypes The value set for a webhooks type.
 * @property {WSCodes} WSCodes The types of WebSocket error codes.
 * @property {Object<WSEventType, WSEventType>} WSEvents The type of a WebSocket message event.
 * @property {HolographicStyle} HolographicStyles Holographic color values for role styling.
 */
