import { Collection } from '@discordjs/collection';
import ApplicationCommand from './ApplicationCommand';
import AutoModerationRule from './AutoModerationRule';
import Integration from './Integration';
import Webhook from './Webhook';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from './Guild';
/**
 * The target type of an entry. Here are the available types:
 * * GUILD
 * * CHANNEL
 * * USER
 * * ROLE
 * * INVITE
 * * WEBHOOK
 * * EMOJI
 * * MESSAGE
 * * INTEGRATION
 * * STAGE_INSTANCE
 * * STICKER
 * * THREAD
 * * GUILD_SCHEDULED_EVENT
 * * APPLICATION_COMMAND
 * * AUTO_MODERATION
 * @typedef {string} AuditLogTargetType
 */
/**
 * Key mirror of all available audit log targets.
 * @name GuildAuditLogs.Targets
 * @type {Object<string, string>}
 */
declare const Targets: {
    ALL: string;
    GUILD: string;
    GUILD_SCHEDULED_EVENT: string;
    CHANNEL: string;
    USER: string;
    ROLE: string;
    INVITE: string;
    WEBHOOK: string;
    EMOJI: string;
    MESSAGE: string;
    INTEGRATION: string;
    STAGE_INSTANCE: string;
    STICKER: string;
    THREAD: string;
    APPLICATION_COMMAND: string;
    AUTO_MODERATION: string;
    SOUNDBOARD_SOUND: string;
    GUILD_ONBOARDING_PROMPT: string;
    GUILD_ONBOARDING: string;
    UNKNOWN: string;
};
/**
 * The action of an entry. Here are the available actions:
 * * ALL: null
 * * GUILD_UPDATE: 1
 * * CHANNEL_CREATE: 10
 * * CHANNEL_UPDATE: 11
 * * CHANNEL_DELETE: 12
 * * CHANNEL_OVERWRITE_CREATE: 13
 * * CHANNEL_OVERWRITE_UPDATE: 14
 * * CHANNEL_OVERWRITE_DELETE: 15
 * * MEMBER_KICK: 20
 * * MEMBER_PRUNE: 21
 * * MEMBER_BAN_ADD: 22
 * * MEMBER_BAN_REMOVE: 23
 * * MEMBER_UPDATE: 24
 * * MEMBER_ROLE_UPDATE: 25
 * * MEMBER_MOVE: 26
 * * MEMBER_DISCONNECT: 27
 * * BOT_ADD: 28,
 * * ROLE_CREATE: 30
 * * ROLE_UPDATE: 31
 * * ROLE_DELETE: 32
 * * INVITE_CREATE: 40
 * * INVITE_UPDATE: 41
 * * INVITE_DELETE: 42
 * * WEBHOOK_CREATE: 50
 * * WEBHOOK_UPDATE: 51
 * * WEBHOOK_DELETE: 52
 * * EMOJI_CREATE: 60
 * * EMOJI_UPDATE: 61
 * * EMOJI_DELETE: 62
 * * MESSAGE_DELETE: 72
 * * MESSAGE_BULK_DELETE: 73
 * * MESSAGE_PIN: 74
 * * MESSAGE_UNPIN: 75
 * * INTEGRATION_CREATE: 80
 * * INTEGRATION_UPDATE: 81
 * * INTEGRATION_DELETE: 82
 * * STAGE_INSTANCE_CREATE: 83
 * * STAGE_INSTANCE_UPDATE: 84
 * * STAGE_INSTANCE_DELETE: 85
 * * STICKER_CREATE: 90
 * * STICKER_UPDATE: 91
 * * STICKER_DELETE: 92
 * * GUILD_SCHEDULED_EVENT_CREATE: 100
 * * GUILD_SCHEDULED_EVENT_UPDATE: 101
 * * GUILD_SCHEDULED_EVENT_DELETE: 102
 * * THREAD_CREATE: 110
 * * THREAD_UPDATE: 111
 * * THREAD_DELETE: 112
 * * APPLICATION_COMMAND_PERMISSION_UPDATE: 121
 * * AUTO_MODERATION_RULE_CREATE: 140
 * * AUTO_MODERATION_RULE_UPDATE: 141
 * * AUTO_MODERATION_RULE_DELETE: 142
 * * AUTO_MODERATION_BLOCK_MESSAGE: 143
 * * AUTO_MODERATION_FLAG_TO_CHANNEL: 144
 * * AUTO_MODERATION_USER_COMMUNICATION_DISABLED: 145
 * @typedef {?(number|string)} AuditLogAction
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events}
 */
/**
 * All available actions keyed under their names to their numeric values.
 * @name GuildAuditLogs.Actions
 * @type {Object<string, number>}
 */
declare const Actions: {
    ALL: any;
    GUILD_UPDATE: number;
    CHANNEL_CREATE: number;
    CHANNEL_UPDATE: number;
    CHANNEL_DELETE: number;
    CHANNEL_OVERWRITE_CREATE: number;
    CHANNEL_OVERWRITE_UPDATE: number;
    CHANNEL_OVERWRITE_DELETE: number;
    MEMBER_KICK: number;
    MEMBER_PRUNE: number;
    MEMBER_BAN_ADD: number;
    MEMBER_BAN_REMOVE: number;
    MEMBER_UPDATE: number;
    MEMBER_ROLE_UPDATE: number;
    MEMBER_MOVE: number;
    MEMBER_DISCONNECT: number;
    BOT_ADD: number;
    ROLE_CREATE: number;
    ROLE_UPDATE: number;
    ROLE_DELETE: number;
    INVITE_CREATE: number;
    INVITE_UPDATE: number;
    INVITE_DELETE: number;
    WEBHOOK_CREATE: number;
    WEBHOOK_UPDATE: number;
    WEBHOOK_DELETE: number;
    EMOJI_CREATE: number;
    EMOJI_UPDATE: number;
    EMOJI_DELETE: number;
    MESSAGE_DELETE: number;
    MESSAGE_BULK_DELETE: number;
    MESSAGE_PIN: number;
    MESSAGE_UNPIN: number;
    INTEGRATION_CREATE: number;
    INTEGRATION_UPDATE: number;
    INTEGRATION_DELETE: number;
    STAGE_INSTANCE_CREATE: number;
    STAGE_INSTANCE_UPDATE: number;
    STAGE_INSTANCE_DELETE: number;
    STICKER_CREATE: number;
    STICKER_UPDATE: number;
    STICKER_DELETE: number;
    GUILD_SCHEDULED_EVENT_CREATE: number;
    GUILD_SCHEDULED_EVENT_UPDATE: number;
    GUILD_SCHEDULED_EVENT_DELETE: number;
    THREAD_CREATE: number;
    THREAD_UPDATE: number;
    THREAD_DELETE: number;
    APPLICATION_COMMAND_PERMISSION_UPDATE: number;
    AUTO_MODERATION_RULE_CREATE: number;
    AUTO_MODERATION_RULE_UPDATE: number;
    AUTO_MODERATION_RULE_DELETE: number;
    AUTO_MODERATION_BLOCK_MESSAGE: number;
    AUTO_MODERATION_FLAG_TO_CHANNEL: number;
    AUTO_MODERATION_USER_COMMUNICATION_DISABLED: number;
};
/**
 * Audit logs entries are held in this class.
 */
declare class GuildAuditLogs {
    webhooks: Collection<Snowflake, Webhook>;
    integrations: Collection<Snowflake | string, Integration>;
    applicationCommands: Collection<Snowflake, ApplicationCommand>;
    autoModerationRules: Collection<Snowflake, AutoModerationRule>;
    entries: Collection<Snowflake, GuildAuditLogsEntry>;
    static Actions: typeof Actions;
    static Targets: typeof Targets;
    static Entry: typeof GuildAuditLogsEntry;
    constructor(guild: Guild, data: any);
    /**
     * Handles possible promises for entry targets.
     * @returns {Promise<GuildAuditLogs>}
     */
    static build(...args: [Guild, any]): Promise<GuildAuditLogs>;
    /**
     * The target of an entry. It can be one of:
     * * A guild
     * * A channel
     * * A user
     * * A role
     * * An invite
     * * A webhook
     * * An emoji
     * * A message
     * * An integration
     * * A stage instance
     * * A sticker
     * * A guild scheduled event
     * * A thread
     * * An application command
     * * An auto moderation rule
     * * An object with an id key if target was deleted
     * * An object where the keys represent either the new value or the old value
     * @typedef {?(Object|Guild|Channel|User|Role|Invite|Webhook|GuildEmoji|Message|Integration|StageInstance|Sticker|
     * GuildScheduledEvent|ApplicationCommand|AutoModerationRule)} AuditLogEntryTarget
     */
    /**
     * Finds the target type from the entry action.
     * @param {AuditLogAction} target The action target
     * @returns {AuditLogTargetType}
     */
    static targetType(target: number): string;
    /**
     * The action type of an entry, e.g. `CREATE`. Here are the available types:
     * * CREATE
     * * DELETE
     * * UPDATE
     * * ALL
     * @typedef {string} AuditLogActionType
     */
    /**
     * Finds the action type from the entry action.
     * @param {AuditLogAction} action The action target
     * @returns {AuditLogActionType}
     */
    static actionType(action: number): 'CREATE' | 'DELETE' | 'UPDATE' | 'ALL';
    toJSON(): unknown;
}
/**
 * Audit logs entry.
 */
declare class GuildAuditLogsEntry {
    targetType: string;
    actionType: string;
    action: string | undefined;
    reason: string | null;
    executorId: Snowflake | null;
    executor: any;
    changes: {
        key: string;
        old?: any;
        new?: any;
    }[];
    id: Snowflake;
    extra: any;
    targetId: Snowflake | null;
    target: any;
    constructor(guild: Guild, data: any, logs: GuildAuditLogs);
    /**
     * The timestamp this entry was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time this entry was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    toJSON(): unknown;
}
export default GuildAuditLogs;
