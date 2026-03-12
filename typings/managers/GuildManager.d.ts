import CachedManager from './CachedManager';
/**
 * Manages API methods for Guilds and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, Guild>}
     * @name GuildManager#cache
     */
    /**
     * Data that resolves to give a Guild object. This can be:
     * * A Guild object
     * * A GuildChannel object
     * * A GuildEmoji object
     * * A Role object
     * * A Snowflake
     * * An Invite object
     * @typedef {Guild|GuildChannel|GuildMember|GuildEmoji|Role|Snowflake|Invite} GuildResolvable
     */
    /**
     * Partial data for a Role.
     * @typedef {Object} PartialRoleData
     * @property {Snowflake|number} [id] The role's id, used to set channel overrides,
     * this is a placeholder and will be replaced by the API after consumption
     * @property {string} [name] The name of the role
     * @property {ColorResolvable} [color] The color of the role, either a hex string or a base 10 number
     * @property {boolean} [hoist] Whether or not the role should be hoisted
     * @property {number} [position] The position of the role
     * @property {PermissionResolvable} [permissions] The permissions of the role
     * @property {boolean} [mentionable] Whether or not the role should be mentionable
     */
    /**
     * Partial overwrite data.
     * @typedef {Object} PartialOverwriteData
     * @property {Snowflake|number} id The id of the {@link Role} or {@link User} this overwrite belongs to
     * @property {OverwriteType} [type] The type of this overwrite
     * @property {PermissionResolvable} [allow] The permissions to allow
     * @property {PermissionResolvable} [deny] The permissions to deny
     */
    /**
     * Partial data for a Channel.
     * @typedef {Object} PartialChannelData
     * @property {Snowflake|number} [id] The channel's id, used to set its parent,
     * this is a placeholder and will be replaced by the API after consumption
     * @property {Snowflake|number} [parentId] The parent id for this channel
     * @property {ChannelType|number} [type] The type of the channel
     * @property {string} name The name of the channel
     * @property {string} [topic] The topic of the text channel
     * @property {boolean} [nsfw] Whether the channel is NSFW
     * @property {number} [bitrate] The bitrate of the voice channel
     * @property {number} [userLimit] The user limit of the channel
     * @property {?string} [rtcRegion] The RTC region of the channel
     * @property {VideoQualityMode|number} [videoQualityMode] The camera video quality mode of the channel
     * @property {PartialOverwriteData[]} [permissionOverwrites]
     * Overwrites of the channel
     * @property {number} [rateLimitPerUser] The rate limit per user (slowmode) of the channel in seconds
     */
    /**
     * Resolves a GuildResolvable to a Guild object.
     * @method resolve
     * @memberof GuildManager
     * @instance
     * @param {GuildResolvable} guild The guild resolvable to identify
     * @returns {?Guild}
     */
    resolve(guild: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Resolves a {@link GuildResolvable} to a {@link Guild} id string.
     * @method resolveId
     * @memberof GuildManager
     * @instance
     * @param {GuildResolvable} guild The guild resolvable to identify
     * @returns {?Snowflake}
     */
    resolveId(guild: any): string;
    /**
     * Options used to create a guild.
     * @typedef {Object} GuildCreateOptions
     * @property {Snowflake|number} [afkChannelId] The AFK channel's id
     * @property {number} [afkTimeout] The AFK timeout in seconds
     * @property {PartialChannelData[]} [channels=[]] The channels for this guild
     * @property {DefaultMessageNotificationLevel|number} [defaultMessageNotifications] The default message notifications
     * for the guild
     * @property {ExplicitContentFilterLevel} [explicitContentFilter] The explicit content filter level for the guild
     * @property {?(BufferResolvable|Base64Resolvable)} [icon=null] The icon for the guild
     * @property {PartialRoleData[]} [roles=[]] The roles for this guild,
     * the first element of this array is used to change properties of the guild's everyone role.
     * @property {Snowflake|number} [systemChannelId] The system channel's id
     * @property {SystemChannelFlagsResolvable} [systemChannelFlags] The flags of the system channel
     * @property {VerificationLevel} [verificationLevel] The verification level for the guild
     */
    /**
     * Creates a guild.
     * @param {string} name The name of the guild
     * @param {GuildCreateOptions} [options] Options for creating the guild
     * @returns {Promise<Guild>} The guild that was created
     */
    create(name: any, { afkChannelId, afkTimeout, channels, defaultMessageNotifications, explicitContentFilter, icon, roles, systemChannelId, systemChannelFlags, verificationLevel, }?: {
        channels?: any[];
        icon?: any;
        roles?: any[];
    }): Promise<any>;
    /**
     * Options used to fetch a single guild.
     * @typedef {BaseFetchOptions} FetchGuildOptions
     * @property {GuildResolvable} guild The guild to fetch
     * @property {boolean} [withCounts=true] Whether the approximate member and presence counts should be returned
     */
    /**
     * Options used to fetch multiple guilds.
     * @typedef {Object} FetchGuildsOptions
     * @property {Snowflake} [before] Get guilds before this guild id
     * @property {Snowflake} [after] Get guilds after this guild id
     * @property {number} [limit=200] Maximum number of guilds to request (1-200)
     */
    /**
     * Obtains one or multiple guilds from Discord, or the guild cache if it's already available.
     * @param {GuildResolvable|FetchGuildOptions|FetchGuildsOptions} [options] The guild's id or options
     * @returns {Promise<Guild|Collection<Snowflake, OAuth2Guild>>}
     */
    fetch(options?: {}): Promise<any>;
    /**
     * Options used to set incident actions. Supplying `null` to any option will disable the action.
     * @typedef {Object} IncidentActionsEditOptions
     * @property {?DateResolvable} [invitesDisabledUntil] When invites should be enabled again
     * @property {?DateResolvable} [dmsDisabledUntil] When direct messages should be enabled again
     */
    /**
     * Sets the incident actions for a guild.
     * @param {GuildResolvable} guild The guild
     * @param {IncidentActionsEditOptions} incidentActions The incident actions to set
     * @returns {Promise<IncidentActions>}
     */
    setIncidentActions(guild: any, { invitesDisabledUntil, dmsDisabledUntil }: {
        invitesDisabledUntil: any;
        dmsDisabledUntil: any;
    }): Promise<{
        invitesDisabledUntil: Date;
        dmsDisabledUntil: Date;
        dmSpamDetectedAt: Date;
        raidDetectedAt: Date;
    }>;
}
export default GuildManager;
