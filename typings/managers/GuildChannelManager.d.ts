import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
import GuildChannel from '../structures/GuildChannel';
import ThreadChannel from '../structures/ThreadChannel';
import Webhook from '../structures/Webhook';
import type { Snowflake } from 'discord-api-types/v10';
import { Guild } from '../structures/Guild';
type GuildChannelResolvable = GuildChannel | ThreadChannel | Snowflake;
type RawGuildChannelData = {
    id: Snowflake;
} & Record<string, unknown>;
interface GuildChannelCreateOptions {
    type?: string | number;
    topic?: string;
    nsfw?: boolean;
    bitrate?: number;
    userLimit?: number;
    parent?: unknown;
    permissionOverwrites?: unknown[];
    position?: number;
    rateLimitPerUser?: number;
    rtcRegion?: string | null;
    videoQualityMode?: string | number;
    availableTags?: unknown[];
    defaultReactionEmoji?: unknown;
    defaultSortOrder?: string | number | null;
    defaultForumLayout?: string | number;
    defaultThreadRateLimitPerUser?: number;
    reason?: string;
}
interface ChannelWebhookCreateOptions {
    avatar?: unknown;
    reason?: string;
}
interface ChannelData {
    name?: string;
    type?: string | number;
    position?: number;
    topic?: string;
    nsfw?: boolean;
    bitrate?: number;
    userLimit?: number;
    parent?: unknown;
    lockPermissions?: boolean;
    permissionOverwrites?: unknown[];
    rateLimitPerUser?: number;
    defaultAutoArchiveDuration?: number | string;
    rtcRegion?: string | null;
    videoQualityMode?: string | number;
    flags?: unknown;
    availableTags?: unknown[];
    defaultReactionEmoji?: unknown;
    defaultThreadRateLimitPerUser?: number;
    defaultSortOrder?: string | number | null;
    [key: string]: unknown;
}
interface SetChannelPositionOptions {
    relative?: boolean;
    reason?: string;
}
interface ChannelPosition {
    channel: GuildChannelResolvable;
    position?: number;
    parent?: unknown;
    lockPermissions?: boolean;
}
/**
 * Manages API methods for GuildChannels and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildChannelManager extends CachedManager<Snowflake, GuildChannel, GuildChannelResolvable, RawGuildChannelData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawGuildChannelData>);
    /**
     * The number of channels in this managers cache excluding thread channels
     * that do not count towards a guild's maximum channels restriction.
     * @type {number}
     * @readonly
     */
    get channelCountWithoutThreads(): number;
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, GuildChannel|ThreadChannel>}
     * @name GuildChannelManager#cache
     */
    _add(channel: GuildChannel | RawGuildChannelData, cache?: boolean): GuildChannel;
    /**
     * Data that can be resolved to give a Guild Channel object. This can be:
     * * A GuildChannel object
     * * A ThreadChannel object
     * * A Snowflake
     * @typedef {GuildChannel|ThreadChannel|Snowflake} GuildChannelResolvable
     */
    /**
     * Resolves a GuildChannelResolvable to a Channel object.
     * @param {GuildChannelResolvable} channel The GuildChannel resolvable to resolve
     * @returns {?(GuildChannel|ThreadChannel)}
     */
    resolve(channel: GuildChannelResolvable): GuildChannel | null;
    /**
     * Resolves a GuildChannelResolvable to a channel id.
     * @param {GuildChannelResolvable} channel The GuildChannel resolvable to resolve
     * @returns {?Snowflake}
     */
    resolveId(channel: GuildChannelResolvable): Snowflake | null;
    /**
     * Options used to create a new channel in a guild.
     * @typedef {CategoryCreateChannelOptions} GuildChannelCreateOptions
     * @property {CategoryChannelResolvable} [parent] Parent of the new channel
     */
    /**
     * Creates a new channel in the guild.
     * @param {string} name The name of the new channel
     * @param {GuildChannelCreateOptions} [options={}] Options for creating the new channel
     * @returns {Promise<GuildChannel>}
     * @example
     * // Create a new text channel
     * guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Create a new channel with permission overwrites
     * guild.channels.create('new-voice', {
     *   type: 'GUILD_VOICE',
     *   permissionOverwrites: [
     *      {
     *        id: message.author.id,
     *        deny: [Permissions.FLAGS.VIEW_CHANNEL],
     *     },
     *   ],
     * })
     */
    create(name: string, { type, topic, nsfw, bitrate, userLimit, parent, permissionOverwrites, position, rateLimitPerUser, rtcRegion, videoQualityMode, availableTags, defaultReactionEmoji, defaultSortOrder, defaultForumLayout, defaultThreadRateLimitPerUser, reason, }?: GuildChannelCreateOptions): Promise<any>;
    /**
     * Creates a webhook for the channel.
     * @param {GuildChannelResolvable} channel The channel to create the webhook for
     * @param {string} name The name of the webhook
     * @param {ChannelWebhookCreateOptions} [options] Options for creating the webhook
     * @returns {Promise<Webhook>} Returns the created Webhook
     * @example
     * // Create a webhook for the current channel
     * guild.channels.createWebhook('222197033908436994', 'Snek', {
     *   avatar: 'https://i.imgur.com/mI8XcpG.jpg',
     *   reason: 'Needed a cool new Webhook'
     * })
     *   .then(console.log)
     *   .catch(console.error)
     */
    createWebhook(channel: GuildChannelResolvable, name: string, { avatar, reason }?: ChannelWebhookCreateOptions): Promise<Webhook>;
    /**
     * Adds the target channel to a channel's followers.
     * @param {NewsChannel|Snowflake} channel The channel to follow
     * @param {TextChannelResolvable} targetChannel The channel where published announcements will be posted at
     * @param {string} [reason] Reason for creating the webhook
     * @returns {Promise<Snowflake>} Returns created target webhook id.
     */
    addFollower(channel: GuildChannelResolvable, targetChannel: GuildChannelResolvable, reason?: string): Promise<Snowflake>;
    /**
     * The data for a guild channel.
     * @typedef {Object} ChannelData
     * @property {string} [name] The name of the channel
     * @property {ChannelType} [type] The type of the channel (only conversion between text and news is supported)
     * @property {number} [position] The position of the channel
     * @property {string} [topic] The topic of the text channel
     * @property {boolean} [nsfw] Whether the channel is NSFW
     * @property {number} [bitrate] The bitrate of the voice channel
     * @property {number} [userLimit] The user limit of the voice channel
     * @property {?CategoryChannelResolvable} [parent] The parent of the channel
     * @property {boolean} [lockPermissions]
     * Lock the permissions of the channel to what the parent's permissions are
     * @property {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} [permissionOverwrites]
     * Permission overwrites for the channel
     * @property {number} [rateLimitPerUser] The rate limit per user (slowmode) for the channel in seconds
     * @property {ThreadAutoArchiveDuration} [defaultAutoArchiveDuration]
     * The default auto archive duration for all new threads in this channel
     * @property {?string} [rtcRegion] The RTC region of the channel
     * @property {?VideoQualityMode|number} [videoQualityMode] The camera video quality mode of the channel
     * @property {ChannelFlagsResolvable} [flags] The flags to set on the channel
     * @property {GuildForumTagData[]} [availableTags] The tags to set as available in a forum channel
     * @property {?DefaultReactionEmoji} [defaultReactionEmoji] The emoji to set as the default reaction emoji
     * @property {number} [defaultThreadRateLimitPerUser] The rate limit per user (slowmode) to set on forum posts
     * @property {?SortOrderType} [defaultSortOrder] The default sort order mode to set on the channel
     */
    /**
     * Edits the channel.
     * @param {GuildChannelResolvable} channel The channel to edit
     * @param {ChannelData} data The new data for the channel
     * @param {string} [reason] Reason for editing this channel
     * @returns {Promise<GuildChannel>}
     * @example
     * // Edit a channel
     * guild.channels.edit('222197033908436994', { name: 'new-channel' })
     *   .then(console.log)
     *   .catch(console.error);
     */
    edit(channel: GuildChannelResolvable, data: ChannelData, reason?: string): Promise<GuildChannel>;
    /**
     * Sets a new position for the guild channel.
     * @param {GuildChannelResolvable} channel The channel to set the position for
     * @param {number} position The new position for the guild channel
     * @param {SetChannelPositionOptions} [options] Options for setting position
     * @returns {Promise<GuildChannel>}
     * @example
     * // Set a new channel position
     * guild.channels.setPosition('222078374472843266', 2)
     *   .then(newChannel => console.log(`Channel's new position is ${newChannel.position}`))
     *   .catch(console.error);
     */
    setPosition(channel: GuildChannelResolvable, position: number, { relative, reason }?: SetChannelPositionOptions): Promise<GuildChannel>;
    /**
     * Obtains one or more guild channels from Discord, or the channel cache if they're already available.
     * @param {Snowflake} [id] The channel's id
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<?GuildChannel|ThreadChannel|Collection<Snowflake, ?GuildChannel>>}
     * @example
     * // Fetch all channels from the guild (excluding threads)
     * message.guild.channels.fetch()
     *   .then(channels => console.log(`There are ${channels.size} channels.`))
     *   .catch(console.error);
     * @example
     * // Fetch a single channel
     * message.guild.channels.fetch('222197033908436994')
     *   .then(channel => console.log(`The channel name is: ${channel.name}`))
     *   .catch(console.error);
     */
    fetch(id?: Snowflake, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<GuildChannel | ThreadChannel | null | Collection<Snowflake, GuildChannel>>;
    /**
     * Fetches all webhooks for the channel.
     * @param {GuildChannelResolvable} channel The channel to fetch webhooks for
     * @returns {Promise<Collection<Snowflake, Webhook>>}
     * @example
     * // Fetch webhooks
     * guild.channels.fetchWebhooks('769862166131245066')
     *   .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
     *   .catch(console.error);
     */
    fetchWebhooks(channel: GuildChannelResolvable): Promise<Collection<Snowflake, Webhook>>;
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
     * @example
     * guild.channels.setPositions([{ channel: channelId, position: newChannelIndex }])
     *   .then(guild => console.log(`Updated channel positions for ${guild}`))
     *   .catch(console.error);
     */
    setPositions(channelPositions: ChannelPosition[]): Promise<Guild>;
    /**
     * Deletes the channel.
     * @param {GuildChannelResolvable} channel The channel to delete
     * @param {string} [reason] Reason for deleting this channel
     * @returns {Promise<void>}
     * @example
     * // Delete the channel
     * guild.channels.delete('858850993013260338', 'making room for new channels')
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(channel: GuildChannelResolvable, reason?: string): Promise<void>;
}
export default GuildChannelManager;
