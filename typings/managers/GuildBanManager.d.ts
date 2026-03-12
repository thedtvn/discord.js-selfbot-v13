import CachedManager from './CachedManager';
/**
 * Manages API methods for GuildBans and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildBanManager extends CachedManager {
    constructor(guild: any, iterable: any);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, GuildBan>}
     * @name GuildBanManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Data that resolves to give a GuildBan object. This can be:
     * * A GuildBan object
     * * A User resolvable
     * @typedef {GuildBan|UserResolvable} GuildBanResolvable
     */
    /**
     * Resolves a GuildBanResolvable to a GuildBan object.
     * @param {GuildBanResolvable} ban The ban that is in the guild
     * @returns {?GuildBan}
     */
    resolve(ban: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Options used to fetch a single ban from a guild.
     * @typedef {BaseFetchOptions} FetchBanOptions
     * @property {UserResolvable} user The ban to fetch
     */
    /**
     * Options used to fetch multiple bans from a guild.
     * @typedef {Object} FetchBansOptions
     * @property {number} [limit] The maximum number of bans to return
     * @property {Snowflake} [before] Consider only bans before this id
     * @property {Snowflake} [after] Consider only bans after this id
     * @property {boolean} [cache] Whether to cache the fetched bans
     */
    /**
     * Fetches ban(s) from Discord.
     * @param {UserResolvable|FetchBanOptions|FetchBansOptions} [options] Options for fetching guild ban(s)
     * @returns {Promise<GuildBan|Collection<Snowflake, GuildBan>>}
     * @example
     * // Fetch multiple bans from a guild
     * guild.bans.fetch()
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a maximum of 5 bans from a guild without caching
     * guild.bans.fetch({ limit: 5, cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single ban
     * guild.bans.fetch('351871113346809860')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single ban without checking cache
     * guild.bans.fetch({ user, force: true })
     *   .then(console.log)
     *   .catch(console.error)
     * @example
     * // Fetch a single ban without caching
     * guild.bans.fetch({ user, cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     */
    fetch(options: any): Promise<any>;
    _fetchSingle({ user, cache, force }: {
        user: any;
        cache: any;
        force?: boolean;
    }): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    _fetchMany(options?: {}): Promise<any>;
    /**
     * Options used to ban a user from a guild.
     * @typedef {Object} BanOptions
     * @property {number} [days=0] Number of days of messages to delete, must be between 0 and 7, inclusive
     * <warn>This property is deprecated. Use `deleteMessageSeconds` instead.</warn>
     * @property {number} [deleteMessageSeconds] Number of seconds of messages to delete,
     * must be between 0 and 604800 (7 days), inclusive
     * @property {string} [reason] The reason for the ban
     */
    /**
     * Bans a user from the guild.
     * @param {UserResolvable} user The user to ban
     * @param {BanOptions} [options] Options for the ban
     * @returns {Promise<GuildMember|User|Snowflake>} Result object will be resolved as specifically as possible.
     * If the GuildMember cannot be resolved, the User will instead be attempted to be resolved. If that also cannot
     * be resolved, the user id will be the result.
     * @example
     * // Ban a user by id (or with a user/guild member object)
     * guild.bans.create('84484653687267328')
     *   .then(banInfo => console.log(`Banned ${banInfo.user?.tag ?? banInfo.tag ?? banInfo}`))
     *   .catch(console.error);
     */
    create(user: any, options?: {}): Promise<any>;
    /**
     * Unbans a user from the guild.
     * @param {UserResolvable} user The user to unban
     * @param {string} [reason] Reason for unbanning user
     * @returns {Promise<?User>}
     * @example
     * // Unban a user by id (or with a user/guild member object)
     * guild.bans.remove('84484653687267328')
     *   .then(user => console.log(`Unbanned ${user.username} from ${guild.name}`))
     *   .catch(console.error);
     */
    remove(user: any, reason: any): Promise<any>;
    /**
     * Options used for bulk banning users from a guild.
     * @typedef {Object} BulkBanOptions
     * @property {number} [deleteMessageSeconds] Number of seconds of messages to delete,
     * must be between 0 and 604800 (7 days), inclusive
     * @property {string} [reason] The reason for the bans
     */
    /**
     * Result of bulk banning users from a guild.
     * @typedef {Object} BulkBanResult
     * @property {Snowflake[]} bannedUsers IDs of the banned users
     * @property {Snowflake[]} failedUsers IDs of the users that could not be banned or were already banned
     */
    /**
     * Bulk ban users from a guild, and optionally delete previous messages sent by them.
     * @param {Collection<Snowflake, UserResolvable>|UserResolvable[]} users The users to ban
     * @param {BulkBanOptions} [options] The options for bulk banning users
     * @returns {Promise<BulkBanResult>} Returns an object with `bannedUsers` key containing the IDs of the banned users
     * and the key `failedUsers` with the IDs that could not be banned or were already banned.
     * @example
     * // Bulk ban users by ids (or with user/guild member objects) and delete all their messages from the past 7 days
     * guild.bans.bulkCreate(['84484653687267328'], { deleteMessageSeconds: 7 * 24 * 60 * 60 })
     *   .then(result => {
     *     console.log(`Banned ${result.bannedUsers.length} users, failed to ban ${result.failedUsers.length} users.`)
     *   })
     *   .catch(console.error);
     * @deprecated This method will not be usable until an effective MFA implementation is in place.
     */
    bulkCreate(users: any, options?: {}): Promise<{
        bannedUsers: any;
        failedUsers: any;
    }>;
}
export default GuildBanManager;
