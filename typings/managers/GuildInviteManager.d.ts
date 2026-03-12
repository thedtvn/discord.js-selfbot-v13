import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import Invite from '../structures/Invite';
type InviteResolvable = string;
type RawInviteData = {
    code: string;
};
interface FetchInviteOptions {
    code?: InviteResolvable;
    cache?: boolean;
    force?: boolean;
    channelId?: Snowflake;
}
interface CreateInviteOptions {
    temporary?: boolean;
    maxAge?: number;
    maxUses?: number;
    unique?: boolean;
    targetUser?: Snowflake | {
        id?: Snowflake;
    };
    targetApplication?: {
        id?: Snowflake;
        applicationId?: Snowflake;
    } | Snowflake;
    targetType?: number;
    reason?: string;
}
/**
 * Manages API methods for GuildInvites and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildInviteManager extends CachedManager<string, Invite, InviteResolvable, RawInviteData> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawInviteData>);
    /**
     * The cache of this Manager
     * @type {Collection<string, Invite>}
     * @name GuildInviteManager#cache
     */
    _add(data: RawInviteData, cache?: boolean): Invite;
    /**
     * Data that resolves to give an Invite object. This can be:
     * * An invite code
     * * An invite URL
     * @typedef {string} InviteResolvable
     */
    /**
     * Data that can be resolved to a channel that an invite can be created on. This can be:
     * * TextChannel
     * * VoiceChannel
     * * NewsChannel
     * * StoreChannel
     * * StageChannel
     * * Snowflake
     * @typedef {TextChannel|VoiceChannel|NewsChannel|StoreChannel|StageChannel|Snowflake}
     * GuildInvitableChannelResolvable
     */
    /**
     * Resolves an InviteResolvable to an Invite object.
     * @method resolve
     * @memberof GuildInviteManager
     * @instance
     * @param {InviteResolvable} invite The invite resolvable to resolve
     * @returns {?Invite}
     */
    /**
     * Resolves an InviteResolvable to an invite code string.
     * @method resolveId
     * @memberof GuildInviteManager
     * @instance
     * @param {InviteResolvable} invite The invite resolvable to resolve
     * @returns {?string}
     */
    /**
     * Options used to fetch a single invite from a guild.
     * @typedef {Object} FetchInviteOptions
     * @property {InviteResolvable} code The invite to fetch
     * @property {boolean} [cache=true] Whether or not to cache the fetched invite
     * @property {boolean} [force=false] Whether to skip the cache check and request the API
     */
    /**
     * Options used to fetch all invites from a guild.
     * @typedef {Object} FetchInvitesOptions
     * @property {GuildInvitableChannelResolvable} [channelId]
     * The channel to fetch all invites from
     * @property {boolean} [cache=true] Whether or not to cache the fetched invites
     */
    /**
     * Fetches invite(s) from Discord.
     * @param {InviteResolvable|FetchInviteOptions|FetchInvitesOptions} [options] Options for fetching guild invite(s)
     * @returns {Promise<Invite|Collection<string, Invite>>}
     * @example
     * // Fetch all invites from a guild
     * guild.invites.fetch()
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch all invites from a guild without caching
     * guild.invites.fetch({ cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch all invites from a channel
     * guild.invites.fetch({ channelId: '222197033908436994' })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single invite
     * guild.invites.fetch('bRCvFy9')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single invite without checking cache
     * guild.invites.fetch({ code: 'bRCvFy9', force: true })
     *   .then(console.log)
     *   .catch(console.error)
     * @example
     * // Fetch a single invite without caching
     * guild.invites.fetch({ code: 'bRCvFy9', cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     */
    fetch(options?: InviteResolvable | FetchInviteOptions): Promise<Invite | Collection<string, Invite>>;
    _fetchSingle({ code, cache, force }: {
        code?: string;
        cache?: boolean;
        force?: boolean;
    }): Promise<Invite>;
    _fetchMany(cache?: boolean): Promise<Collection<string, Invite>>;
    _fetchChannelMany(channelId: Snowflake, cache?: boolean): Promise<Collection<string, Invite>>;
    /**
     * Create an invite to the guild from the provided channel.
     * @param {GuildInvitableChannelResolvable} channel The options for creating the invite from a channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite from a channel.
     * @returns {Promise<Invite>}
     * @example
     * // Create an invite to a selected channel
     * guild.invites.create('599942732013764608')
     *   .then(console.log)
     *   .catch(console.error);
     */
    create(channel: Snowflake | {
        id: Snowflake;
    }, { temporary, maxAge, maxUses, unique, targetUser, targetApplication, targetType, reason }?: CreateInviteOptions): Promise<Invite>;
    /**
     * Deletes an invite.
     * @param {InviteResolvable} invite The invite to delete
     * @param {string} [reason] Reason for deleting the invite
     * @returns {Promise<void>}
     */
    delete(invite: InviteResolvable, reason?: string): Promise<void>;
}
export default GuildInviteManager;
