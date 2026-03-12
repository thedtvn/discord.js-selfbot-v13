import CachedManager from './CachedManager';
import Invite from '../structures/Invite';
/**
 * Manages API methods for GuildInvites and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildInviteManager extends CachedManager {
    constructor(guild: any, iterable: any);
    /**
     * The cache of this Manager
     * @type {Collection<string, Invite>}
     * @name GuildInviteManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
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
    fetch(options: any): Promise<any>;
    _fetchSingle({ code, cache, force }: {
        code: any;
        cache: any;
        force?: boolean;
    }): Promise<any>;
    _fetchMany(cache: any): Promise<any>;
    _fetchChannelMany(channelId: any, cache: any): Promise<any>;
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
    create(channel: any, { temporary, maxAge, maxUses, unique, targetUser, targetApplication, targetType, reason }?: {
        temporary?: boolean;
        maxAge?: number;
        maxUses?: number;
    }): Promise<Invite>;
    /**
     * Deletes an invite.
     * @param {InviteResolvable} invite The invite to delete
     * @param {string} [reason] Reason for deleting the invite
     * @returns {Promise<void>}
     */
    delete(invite: any, reason: any): Promise<void>;
}
export default GuildInviteManager;
