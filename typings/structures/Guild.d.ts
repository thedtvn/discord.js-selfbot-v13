import { Collection } from '@discordjs/collection';
import AnonymousGuild from './AnonymousGuild';
import GuildAuditLogs from './GuildAuditLogs';
import GuildPreview from './GuildPreview';
import GuildTemplate from './GuildTemplate';
import WelcomeScreen from './WelcomeScreen';
import AutoModerationRuleManager from '../managers/AutoModerationRuleManager';
import GuildBanManager from '../managers/GuildBanManager';
import GuildChannelManager from '../managers/GuildChannelManager';
import GuildEmojiManager from '../managers/GuildEmojiManager';
import GuildInviteManager from '../managers/GuildInviteManager';
import GuildMemberManager from '../managers/GuildMemberManager';
import GuildScheduledEventManager from '../managers/GuildScheduledEventManager';
import GuildSettingManager from '../managers/GuildSettingManager';
import GuildStickerManager from '../managers/GuildStickerManager';
import PresenceManager from '../managers/PresenceManager';
import RoleManager from '../managers/RoleManager';
import StageInstanceManager from '../managers/StageInstanceManager';
import VoiceStateManager from '../managers/VoiceStateManager';
import SystemChannelFlags from '../util/SystemChannelFlags';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * @type {WeakSet<Guild>}
 * @private
 * @internal
 */
declare const deletedGuilds: WeakSet<WeakKey>;
/**
 * Represents a guild (or a server) on Discord.
 * <info>It's recommended to see if a guild is available before performing operations or reading data from it. You can
 * check this with {@link Guild#available}.</info>
 * @extends {AnonymousGuild}
 */
declare class Guild extends AnonymousGuild {
    members: GuildMemberManager;
    channels: GuildChannelManager;
    bans: GuildBanManager;
    roles: RoleManager;
    presences: PresenceManager;
    voiceStates: VoiceStateManager;
    stageInstances: StageInstanceManager;
    invites: GuildInviteManager;
    scheduledEvents: GuildScheduledEventManager;
    autoModerationRules: AutoModerationRuleManager;
    settings: GuildSettingManager;
    available: boolean;
    shardId: number;
    id: Snowflake;
    name: string;
    icon: string | null;
    discoverySplash: string | null;
    memberCount: number;
    large: boolean;
    premiumProgressBarEnabled: boolean;
    applicationId: Snowflake | null;
    afkTimeout: number | null;
    afkChannelId: Snowflake | null;
    systemChannelId: Snowflake | null;
    premiumTier: string;
    widgetEnabled: boolean | null;
    widgetChannelId: string | null;
    explicitContentFilter: string;
    mfaLevel: string;
    joinedTimestamp: number;
    defaultMessageNotifications: string;
    systemChannelFlags: Readonly<SystemChannelFlags>;
    maximumMembers: number | null;
    maximumPresences: number | null;
    maxVideoChannelUsers: number | null;
    maxStageVideoChannelUsers: number | null;
    approximateMemberCount: number | null;
    approximatePresenceCount: number | null;
    vanityURLUses: number | null;
    rulesChannelId: Snowflake | null;
    publicUpdatesChannelId: Snowflake | null;
    preferredLocale: string;
    safetyAlertsChannelId: Snowflake | null;
    emojis: GuildEmojiManager;
    stickers: GuildStickerManager;
    ownerId: Snowflake;
    incidentsData: any;
    features: string[];
    vanityURLCode: string | null;
    constructor(client: Client, data: any);
    /**
     * Whether or not the structure has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * The Shard this Guild belongs to.
     * @type {WebSocketShard}
     * @readonly
     */
    get shard(): any;
    _patch(data: any): any;
    /**
     * The time the client user joined the guild
     * @type {Date}
     * @readonly
     */
    get joinedAt(): Date;
    /**
     * The URL to this guild's discovery splash image.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    discoverySplashURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * Fetches the owner of the guild.
     * If the member object isn't needed, use {@link Guild#ownerId} instead.
     * @param {BaseFetchOptions} [options] The options for fetching the member
     * @returns {Promise<GuildMember>}
     */
    fetchOwner(options?: any): Promise<any>;
    /**
     * AFK voice channel for this guild
     * @type {?VoiceChannel}
     * @readonly
     */
    get afkChannel(): any;
    /**
     * System channel for this guild
     * @type {?TextChannel}
     * @readonly
     */
    get systemChannel(): any;
    /**
     * Safety alerts channel for this guild
     * @type {?TextChannel}
     * @readonly
     */
    get safetyAlertsChannel(): any;
    /**
     * Widget channel for this guild
     * @type {?(TextChannel|NewsChannel|VoiceChannel|StageChannel|ForumChannel|MediaChannel)}
     * @readonly
     */
    get widgetChannel(): any;
    /**
     * Rules channel for this guild
     * @type {?TextChannel}
     * @readonly
     */
    get rulesChannel(): any;
    /**
     * Public updates channel for this guild
     * @type {?TextChannel}
     * @readonly
     */
    get publicUpdatesChannel(): any;
    /**
     * The client user as a GuildMember of this guild
     * @type {?GuildMember}
     * @deprecated Use {@link GuildMemberManager#me} instead.
     * @readonly
     */
    get me(): any;
    /**
     * The maximum bitrate available for this guild
     * @type {number}
     * @readonly
     */
    get maximumBitrate(): number;
    /**
     * Fetches a collection of integrations to this guild.
     * Resolves with a collection mapping integrations by their ids.
     * @returns {Promise<Collection<Snowflake|string, Integration>>}
     * @example
     * // Fetch integrations
     * guild.fetchIntegrations()
     *   .then(integrations => console.log(`Fetched ${integrations.size} integrations`))
     *   .catch(console.error);
     */
    fetchIntegrations(): Promise<Collection<string, any>>;
    /**
     * Fetches a collection of templates from this guild.
     * Resolves with a collection mapping templates by their codes.
     * @returns {Promise<Collection<string, GuildTemplate>>}
     */
    fetchTemplates(): Promise<Collection<string, GuildTemplate>>;
    /**
     * Fetches the welcome screen for this guild.
     * @returns {Promise<WelcomeScreen>}
     */
    fetchWelcomeScreen(): Promise<WelcomeScreen>;
    /**
     * Creates a template for the guild.
     * @param {string} name The name for the template
     * @param {string} [description] The description for the template
     * @returns {Promise<GuildTemplate>}
     */
    createTemplate(name: string, description?: string): Promise<GuildTemplate>;
    /**
     * Obtains a guild preview for this guild from Discord.
     * @returns {Promise<GuildPreview>}
     */
    fetchPreview(): Promise<GuildPreview>;
    /**
     * An object containing information about a guild's vanity invite.
     * @typedef {Object} Vanity
     * @property {?string} code Vanity invite code
     * @property {number} uses How many times this invite has been used
     */
    /**
     * Fetches the vanity URL invite object to this guild.
     * Resolves with an object containing the vanity URL invite code and the use count
     * @returns {Promise<Vanity>}
     * @example
     * // Fetch invite data
     * guild.fetchVanityData()
     *   .then(res => {
     *     console.log(`Vanity URL: https://discord.gg/${res.code} with ${res.uses} uses`);
     *   })
     *   .catch(console.error);
     */
    fetchVanityData(): Promise<any>;
    /**
     * Fetches all webhooks for the guild.
     * @returns {Promise<Collection<Snowflake, Webhook>>}
     * @example
     * // Fetch webhooks
     * guild.fetchWebhooks()
     *   .then(webhooks => console.log(`Fetched ${webhooks.size} webhooks`))
     *   .catch(console.error);
     */
    fetchWebhooks(): Promise<Collection<string, any>>;
    /**
     * Fetches the guild widget data, requires the widget to be enabled.
     * @returns {Promise<Widget>}
     * @example
     * // Fetches the guild widget data
     * guild.fetchWidget()
     *   .then(widget => console.log(`The widget shows ${widget.channels.size} channels`))
     *   .catch(console.error);
     */
    fetchWidget(): any;
    /**
     * Data for the Guild Widget Settings object
     * @typedef {Object} GuildWidgetSettings
     * @property {boolean} enabled Whether the widget is enabled
     * @property {?GuildChannel} channel The widget invite channel
     */
    /**
     * The Guild Widget Settings object
     * @typedef {Object} GuildWidgetSettingsData
     * @property {boolean} enabled Whether the widget is enabled
     * @property {?GuildChannelResolvable} channel The widget invite channel
     */
    /**
     * Fetches the guild widget settings.
     * @returns {Promise<GuildWidgetSettings>}
     * @example
     * // Fetches the guild widget settings
     * guild.fetchWidgetSettings()
     *   .then(widget => console.log(`The widget is ${widget.enabled ? 'enabled' : 'disabled'}`))
     *   .catch(console.error);
     */
    fetchWidgetSettings(): Promise<{
        enabled: boolean;
        channel: any;
    }>;
    /**
     * Options used to fetch audit logs.
     * @typedef {Object} GuildAuditLogsFetchOptions
     * @property {Snowflake|GuildAuditLogsEntry} [before] Consider only entries before this entry
     * @property {Snowflake|GuildAuditLogsEntry} [after] Consider only entries after this entry
     * @property {number} [limit] The number of entries to return
     * @property {UserResolvable} [user] Only return entries for actions made by this user
     * @property {AuditLogAction|number} [type] Only return entries for this action type
     */
    /**
     * Fetches audit logs for this guild.
     * @param {GuildAuditLogsFetchOptions} [options={}] Options for fetching audit logs
     * @returns {Promise<GuildAuditLogs>}
     * @example
     * // Output audit log entries
     * guild.fetchAuditLogs()
     *   .then(audit => console.log(audit.entries.first()))
     *   .catch(console.error);
     */
    fetchAuditLogs({ before, after, limit, user, type }?: {
        before?: any;
        after?: any;
        limit?: number;
        user?: any;
        type?: any;
    }): Promise<GuildAuditLogs>;
    /**
     * The data for editing a guild.
     * @typedef {Object} GuildEditData
     * @property {string} [name] The name of the guild
     * @property {?(VerificationLevel|number)} [verificationLevel] The verification level of the guild
     * @property {?(ExplicitContentFilterLevel|number)} [explicitContentFilter] The level of the explicit content filter
     * @property {?VoiceChannelResolvable} [afkChannel] The AFK channel of the guild
     * @property {?TextChannelResolvable} [systemChannel] The system channel of the guild
     * @property {number} [afkTimeout] The AFK timeout of the guild
     * @property {?(BufferResolvable|Base64Resolvable)} [icon] The icon of the guild
     * @property {GuildMemberResolvable} [owner] The owner of the guild
     * @property {?(BufferResolvable|Base64Resolvable)} [splash] The invite splash image of the guild
     * @property {?(BufferResolvable|Base64Resolvable)} [discoverySplash] The discovery splash image of the guild
     * @property {?(BufferResolvable|Base64Resolvable)} [banner] The banner of the guild
     * @property {?(DefaultMessageNotificationLevel|number)} [defaultMessageNotifications] The default message
     * notification level of the guild
     * @property {SystemChannelFlagsResolvable} [systemChannelFlags] The system channel flags of the guild
     * @property {?TextChannelResolvable} [rulesChannel] The rules channel of the guild
     * @property {?TextChannelResolvable} [publicUpdatesChannel] The community updates channel of the guild
     * @property {?string} [preferredLocale] The preferred locale of the guild
     * @property {?TextChannelResolvable} [safetyAlertsChannel] The safety alerts channel of the guild
     * @property {boolean} [premiumProgressBarEnabled] Whether the guild's premium progress bar is enabled
     * @property {?string} [description] The discovery description of the guild
     * @property {Features[]} [features] The features of the guild
     */
    /**
     * Data that can be resolved to a Text Channel object. This can be:
     * * A TextChannel
     * * A Snowflake
     * @typedef {TextChannel|Snowflake} TextChannelResolvable
     */
    /**
     * Data that can be resolved to a Voice Channel object. This can be:
     * * A VoiceChannel
     * * A Snowflake
     * @typedef {VoiceChannel|Snowflake} VoiceChannelResolvable
     */
    /**
     * Updates the guild with new information - e.g. a new name.
     * @param {GuildEditData} data The data to update the guild with
     * @param {string} [reason] Reason for editing this guild
     * @returns {Promise<Guild>}
     * @example
     * // Set the guild name
     * guild.edit({
     *   name: 'Discord Guild',
     * })
     *   .then(updated => console.log(`New guild name ${updated}`))
     *   .catch(console.error);
     */
    edit(data: any, reason?: string): Promise<Guild>;
    /**
     * Welcome channel data
     * @typedef {Object} WelcomeChannelData
     * @property {string} description The description to show for this welcome channel
     * @property {TextChannel|NewsChannel|StoreChannel|Snowflake} channel The channel to link for this welcome channel
     * @property {EmojiIdentifierResolvable} [emoji] The emoji to display for this welcome channel
     */
    /**
     * Welcome screen edit data
     * @typedef {Object} WelcomeScreenEditData
     * @property {boolean} [enabled] Whether the welcome screen is enabled
     * @property {string} [description] The description for the welcome screen
     * @property {WelcomeChannelData[]} [welcomeChannels] The welcome channel data for the welcome screen
     */
    /**
     * Data that can be resolved to a GuildTextChannel object. This can be:
     * * A TextChannel
     * * A NewsChannel
     * * A Snowflake
     * @typedef {TextChannel|NewsChannel|Snowflake} GuildTextChannelResolvable
     */
    /**
     * Data that can be resolved to a GuildVoiceChannel object. This can be:
     * * A VoiceChannel
     * * A StageChannel
     * * A Snowflake
     * @typedef {VoiceChannel|StageChannel|Snowflake} GuildVoiceChannelResolvable
     */
    /**
     * Updates the guild's welcome screen
     * @param {WelcomeScreenEditData} data Data to edit the welcome screen with
     * @returns {Promise<WelcomeScreen>}
     * @example
     * guild.editWelcomeScreen({
     *   description: 'Hello World',
     *   enabled: true,
     *   welcomeChannels: [
     *     {
     *       description: 'foobar',
     *       channel: '222197033908436994',
     *     }
     *   ],
     * })
     */
    editWelcomeScreen(data: any): Promise<WelcomeScreen>;
    /**
     * Edits the level of the explicit content filter.
     * @param {?(ExplicitContentFilterLevel|number)} explicitContentFilter The new level of the explicit content filter
     * @param {string} [reason] Reason for changing the level of the guild's explicit content filter
     * @returns {Promise<Guild>}
     */
    setExplicitContentFilter(explicitContentFilter: any, reason?: string): Promise<Guild>;
    /**
     * Edits the setting of the default message notifications of the guild.
     * @param {?(DefaultMessageNotificationLevel|number)} defaultMessageNotifications The new default message notification level of the guild
     * @param {string} [reason] Reason for changing the setting of the default message notifications
     * @returns {Promise<Guild>}
     */
    setDefaultMessageNotifications(defaultMessageNotifications: any, reason?: string): Promise<Guild>;
    /**
     * Edits the flags of the default message notifications of the guild.
     * @param {SystemChannelFlagsResolvable} systemChannelFlags The new flags for the default message notifications
     * @param {string} [reason] Reason for changing the flags of the default message notifications
     * @returns {Promise<Guild>}
     */
    setSystemChannelFlags(systemChannelFlags: any, reason?: string): Promise<Guild>;
    /**
     * Edits the name of the guild.
     * @param {string} name The new name of the guild
     * @param {string} [reason] Reason for changing the guild's name
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild name
     * guild.setName('Discord Guild')
     *  .then(updated => console.log(`Updated guild name to ${updated.name}`))
     *  .catch(console.error);
     */
    setName(name: string, reason?: string): Promise<Guild>;
    /**
     * Edits the verification level of the guild.
     * @param {?(VerificationLevel|number)} verificationLevel The new verification level of the guild
     * @param {string} [reason] Reason for changing the guild's verification level
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild verification level
     * guild.setVerificationLevel(1)
     *  .then(updated => console.log(`Updated guild verification level to ${guild.verificationLevel}`))
     *  .catch(console.error);
     */
    setVerificationLevel(verificationLevel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the AFK channel of the guild.
     * @param {?VoiceChannelResolvable} afkChannel The new AFK channel
     * @param {string} [reason] Reason for changing the guild's AFK channel
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild AFK channel
     * guild.setAFKChannel(channel)
     *  .then(updated => console.log(`Updated guild AFK channel to ${guild.afkChannel.name}`))
     *  .catch(console.error);
     */
    setAFKChannel(afkChannel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the system channel of the guild.
     * @param {?TextChannelResolvable} systemChannel The new system channel
     * @param {string} [reason] Reason for changing the guild's system channel
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild system channel
     * guild.setSystemChannel(channel)
     *  .then(updated => console.log(`Updated guild system channel to ${guild.systemChannel.name}`))
     *  .catch(console.error);
     */
    setSystemChannel(systemChannel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the AFK timeout of the guild.
     * @param {number} afkTimeout The time in seconds that a user must be idle to be considered AFK
     * @param {string} [reason] Reason for changing the guild's AFK timeout
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild AFK channel
     * guild.setAFKTimeout(60)
     *  .then(updated => console.log(`Updated guild AFK timeout to ${guild.afkTimeout}`))
     *  .catch(console.error);
     */
    setAFKTimeout(afkTimeout: number, reason?: string): Promise<Guild>;
    /**
     * Sets a new guild icon.
     * @param {?(Base64Resolvable|BufferResolvable)} icon The new icon of the guild
     * @param {string} [reason] Reason for changing the guild's icon
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild icon
     * guild.setIcon('./icon.png')
     *  .then(updated => console.log('Updated the guild icon'))
     *  .catch(console.error);
     */
    setIcon(icon: any, reason?: string): Promise<Guild>;
    /**
     * Sets a new owner of the guild.
     * @param {GuildMemberResolvable} owner The new owner of the guild
     * @param {string} [reason] Reason for setting the new owner
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild owner
     * guild.setOwner(guild.members.cache.first())
     *  .then(guild => guild.fetchOwner())
     *  .then(owner => console.log(`Updated the guild owner to ${owner.displayName}`))
     *  .catch(console.error);
     */
    setOwner(owner: any, reason?: string): Promise<Guild>;
    /**
     * Sets a new guild invite splash image.
     * @param {?(Base64Resolvable|BufferResolvable)} splash The new invite splash image of the guild
     * @param {string} [reason] Reason for changing the guild's invite splash image
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild splash
     * guild.setSplash('./splash.png')
     *  .then(updated => console.log('Updated the guild splash'))
     *  .catch(console.error);
     */
    setSplash(splash: any, reason?: string): Promise<Guild>;
    /**
     * Sets a new guild discovery splash image.
     * @param {?(Base64Resolvable|BufferResolvable)} discoverySplash The new discovery splash image of the guild
     * @param {string} [reason] Reason for changing the guild's discovery splash image
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild discovery splash
     * guild.setDiscoverySplash('./discoverysplash.png')
     *   .then(updated => console.log('Updated the guild discovery splash'))
     *   .catch(console.error);
     */
    setDiscoverySplash(discoverySplash: any, reason?: string): Promise<Guild>;
    /**
     * Sets a new guild banner.
     * @param {?(Base64Resolvable|BufferResolvable)} banner The new banner of the guild
     * @param {string} [reason] Reason for changing the guild's banner
     * @returns {Promise<Guild>}
     * @example
     * guild.setBanner('./banner.png')
     *  .then(updated => console.log('Updated the guild banner'))
     *  .catch(console.error);
     */
    setBanner(banner: any, reason?: string): Promise<Guild>;
    /**
     * Edits the rules channel of the guild.
     * @param {?TextChannelResolvable} rulesChannel The new rules channel
     * @param {string} [reason] Reason for changing the guild's rules channel
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild rules channel
     * guild.setRulesChannel(channel)
     *  .then(updated => console.log(`Updated guild rules channel to ${guild.rulesChannel.name}`))
     *  .catch(console.error);
     */
    setRulesChannel(rulesChannel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the community updates channel of the guild.
     * @param {?TextChannelResolvable} publicUpdatesChannel The new community updates channel
     * @param {string} [reason] Reason for changing the guild's community updates channel
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild community updates channel
     * guild.setPublicUpdatesChannel(channel)
     *  .then(updated => console.log(`Updated guild community updates channel to ${guild.publicUpdatesChannel.name}`))
     *  .catch(console.error);
     */
    setPublicUpdatesChannel(publicUpdatesChannel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the preferred locale of the guild.
     * @param {?string} preferredLocale The new preferred locale of the guild
     * @param {string} [reason] Reason for changing the guild's preferred locale
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild preferred locale
     * guild.setPreferredLocale('en-US')
     *  .then(updated => console.log(`Updated guild preferred locale to ${guild.preferredLocale}`))
     *  .catch(console.error);
     */
    setPreferredLocale(preferredLocale: string, reason?: string): Promise<Guild>;
    /**
     * Edits the safety alerts channel of the guild.
     * @param {?TextChannelResolvable} safetyAlertsChannel The new safety alerts channel
     * @param {string} [reason] Reason for changing the guild's safety alerts channel
     * @returns {Promise<Guild>}
     * @example
     * // Edit the guild safety alerts channel
     * guild.setSafetyAlertsChannel(channel)
     *  .then(updated => console.log(`Updated guild safety alerts channel to ${updated.safetyAlertsChannel.name}`))
     *  .catch(console.error);
     */
    setSafetyAlertsChannel(safetyAlertsChannel: any, reason?: string): Promise<Guild>;
    /**
     * Edits the enabled state of the guild's premium progress bar
     * @param {boolean} [enabled=true] The new enabled state of the guild's premium progress bar
     * @param {string} [reason] Reason for changing the state of the guild's premium progress bar
     * @returns {Promise<Guild>}
     */
    setPremiumProgressBarEnabled(enabled?: boolean, reason?: string): Promise<Guild>;
    /**
     * Data that can be resolved to give a Category Channel object. This can be:
     * * A CategoryChannel object
     * * A Snowflake
     * @typedef {CategoryChannel|Snowflake} CategoryChannelResolvable
     */
    /**
     * The data needed for updating a channel's position.
     * @typedef {Object} ChannelPosition
     * @property {GuildChannel|Snowflake} channel Channel to update
     * @property {number} [position] New position for the channel
     * @property {CategoryChannelResolvable} [parent] Parent channel for this channel
     * @property {boolean} [lockPermissions] If the overwrites should be locked to the parents overwrites
     */
    /**
     * Batch-updates the guild's channels' positions.
     * <info>Only one channel's parent can be changed at a time</info>
     * @param {ChannelPosition[]} channelPositions Channel positions to update
     * @returns {Promise<Guild>}
     * @deprecated Use {@link GuildChannelManager#setPositions} instead
     * @example
     * guild.setChannelPositions([{ channel: channelId, position: newChannelIndex }])
     *   .then(guild => console.log(`Updated channel positions for ${guild}`))
     *   .catch(console.error);
     */
    setChannelPositions(channelPositions: any[]): Promise<Guild>;
    /**
     * The data needed for updating a guild role's position
     * @typedef {Object} GuildRolePosition
     * @property {RoleResolvable} role The role's id
     * @property {number} position The position to update
     */
    /**
     * Batch-updates the guild's role positions
     * @param {GuildRolePosition[]} rolePositions Role positions to update
     * @returns {Promise<Guild>}
     * @deprecated Use {@link RoleManager#setPositions} instead
     * @example
     * guild.setRolePositions([{ role: roleId, position: updatedRoleIndex }])
     *  .then(guild => console.log(`Role positions updated for ${guild}`))
     *  .catch(console.error);
     */
    setRolePositions(rolePositions: any[]): Promise<Guild>;
    /**
     * Edits the guild's widget settings.
     * @param {GuildWidgetSettingsData} settings The widget settings for the guild
     * @param {string} [reason] Reason for changing the guild's widget settings
     * @returns {Promise<Guild>}
     */
    setWidgetSettings(settings: any, reason?: string): Promise<this>;
    /**
     * Sets whether this guild's invites are disabled.
     * @param {boolean} [disabled=true] Whether the invites are disabled
     * @returns {Promise<Guild>}
     */
    disableInvites(disabled?: boolean): Promise<Guild>;
    /**
     * Sets the incident actions for a guild.
     * @param {IncidentActionsEditOptions} incidentActions The incident actions to set
     * @returns {Promise<IncidentActions>}
     */
    setIncidentActions(incidentActions: any): any;
    /**
     * Leaves the guild.
     * @returns {Promise<Guild>}
     * @example
     * // Leave a guild
     * guild.leave()
     *   .then(guild => console.log(`Left the guild: ${guild.name}`))
     *   .catch(console.error);
     */
    leave(): Promise<Guild>;
    /**
     * Deletes the guild.
     * @returns {Promise<Guild>}
     * @example
     * // Delete a guild
     * guild.delete()
     *   .then(g => console.log(`Deleted the guild ${g}`))
     *   .catch(console.error);
     */
    delete(): Promise<Guild>;
    /**
     * Whether this guild equals another guild. It compares all properties, so for most operations
     * it is advisable to just compare `guild.id === guild2.id` as it is much faster and is often
     * what most users need.
     * @param {Guild} guild The guild to compare with
     * @returns {boolean}
     */
    equals(guild: Guild): boolean;
    toJSON(): unknown;
    /**
     * Marks the guild as read.
     * @returns {Promise<void>}
     * @example
     * const guild = client.guilds.cache.get('id');
     * guild.markAsRead();
     */
    markAsRead(): Promise<void>;
    /**
     * Set Community Feature.
     * @param {boolean} stats True / False to enable / disable Community Feature
     * @param {GuildTextChannelResolvable} [publicUpdatesChannel] The community updates channel of the guild
     * @param {GuildTextChannelResolvable} [rulesChannel] The new rules channel
     * @param {string} [reason] Reason for changing the community feature
     * @returns {Promise<Guild>}
     */
    setCommunity(stats?: boolean, publicUpdatesChannel?: any, rulesChannel?: any, reason?: string): Promise<Guild>;
    /**
     * Get the top emojis of this guild.
     * @returns {Promise<Collection<number, GuildEmoji>>}
     */
    topEmojis(): Promise<Collection<number, any>>;
    /**
     * Set the vanity URL to this guild.
     * Resolves with an object containing the vanity URL invite code and the use count.
     * @param {string} [code=''] Vanity URL code
     * @returns {Promise<Vanity>}
     * @example
     * // Set invite code
     * guild.setVanityCode('elysia', '123456')
     *   .then(res => {
     *     console.log(`Vanity URL: https://discord.gg/${res.code} with ${res.uses} uses`);
     *   })
     *   .catch(console.error);
     */
    setVanityCode(code?: string): Promise<any>;
    /**
     * The voice state adapter for this guild that can be used with @discordjs/voice to play audio in voice
     * and stage channels.
     * @type {Function}
     * @readonly
     */
    get voiceAdapterCreator(): (methods: any) => {
        sendPayload: (data: any) => boolean;
        destroy: () => void;
    };
    /**
     * Creates a collection of this guild's roles, sorted by their position and ids.
     * @returns {Collection<Snowflake, Role>}
     * @private
     */
    _sortedRoles(): Collection<string, any>;
    /**
     * Creates a collection of this guild's or a specific category's channels, sorted by their position and ids.
     * @param {GuildChannel} [channel] Category to get the channels of
     * @returns {Collection<Snowflake, GuildChannel>}
     * @private
     */
    _sortedChannels(channel: any): Collection<string, any>;
}
export { Guild };
export { deletedGuilds };
/**
 * @external APIGuild
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object}
 */
