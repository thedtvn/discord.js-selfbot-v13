import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
import { GuildMember } from '../structures/GuildMember';
import type { Snowflake } from 'discord-api-types/v10';
import { Guild } from '../structures/Guild';
/**
 * Manages API methods for GuildMembers and stores their cache.
 * @extends {CachedManager}
 */
type GuildMemberResolvable = GuildMember | Snowflake;
type RawGuildMemberData = {
    id: Snowflake;
    user: {
        id: Snowflake;
    };
} & Record<string, unknown>;
interface AddGuildMemberOptions {
    accessToken: string;
    nick?: string;
    roles?: Collection<Snowflake, unknown> | unknown[];
    mute?: boolean;
    deaf?: boolean;
    force?: boolean;
    fetchWhenExisting?: boolean;
}
interface FetchMemberOptions {
    user: unknown;
    cache?: boolean;
    force?: boolean;
}
interface FetchMembersOptions {
    user?: unknown;
    query?: string | null;
    limit?: number;
    withPresences?: boolean;
    time?: number;
    nonce?: string;
    force?: boolean;
}
interface GuildSearchMembersOptions {
    query?: string;
    limit?: number;
    cache?: boolean;
}
interface GuildMemberEditData {
    nick?: string | null;
    roles?: unknown[] | Collection<Snowflake, unknown>;
    mute?: boolean;
    deaf?: boolean;
    channel?: unknown;
    communicationDisabledUntil?: unknown;
    flags?: unknown;
    avatar?: unknown;
    banner?: unknown;
    bio?: string | null;
    [key: string]: unknown;
}
interface GuildPruneMembersOptions {
    days?: number;
    dry?: boolean;
    count?: boolean;
    roles?: unknown[];
    reason?: string;
}
interface BanOptions {
    days?: number;
    deleteMessageSeconds?: number;
    reason?: string;
}
interface BulkBanOptions {
    deleteMessageSeconds?: number;
    reason?: string;
}
declare class GuildMemberManager extends CachedManager<Snowflake, GuildMember, GuildMemberResolvable, RawGuildMemberData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawGuildMemberData>);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, GuildMember>}
     * @name GuildMemberManager#cache
     */
    _add(data: RawGuildMemberData, cache?: boolean): GuildMember;
    /**
     * Data that resolves to give a GuildMember object. This can be:
     * * A GuildMember object
     * * A User resolvable
     * @typedef {GuildMember|UserResolvable} GuildMemberResolvable
     */
    /**
     * Resolves a {@link GuildMemberResolvable} to a {@link GuildMember} object.
     * @param {GuildMemberResolvable} member The user that is part of the guild
     * @returns {?GuildMember}
     */
    resolve(member: GuildMemberResolvable): GuildMember | null;
    /**
     * Resolves a {@link GuildMemberResolvable} to a member id.
     * @param {GuildMemberResolvable} member The user that is part of the guild
     * @returns {?Snowflake}
     */
    resolveId(member: GuildMemberResolvable): Snowflake | null;
    /**
     * Options used to add a user to a guild using OAuth2.
     * @typedef {Object} AddGuildMemberOptions
     * @property {string} accessToken An OAuth2 access token for the user with the `guilds.join` scope granted to the
     * bot's application
     * @property {string} [nick] The nickname to give to the member (requires `MANAGE_NICKNAMES`)
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] The roles to add to the member
     * (requires `MANAGE_ROLES`)
     * @property {boolean} [mute] Whether the member should be muted (requires `MUTE_MEMBERS`)
     * @property {boolean} [deaf] Whether the member should be deafened (requires `DEAFEN_MEMBERS`)
     * @property {boolean} [force] Whether to skip the cache check and call the API directly
     * @property {boolean} [fetchWhenExisting=true] Whether to fetch the user if not cached and already a member
     */
    /**
     * Adds a user to the guild using OAuth2. Requires the `CREATE_INSTANT_INVITE` permission.
     * @param {UserResolvable} user The user to add to the guild
     * @param {AddGuildMemberOptions} options Options for adding the user to the guild
     * @returns {Promise<GuildMember|null>}
     */
    add(user: string | GuildMember, options: AddGuildMemberOptions): Promise<GuildMember | null>;
    /**
     * The client user as a GuildMember of this guild
     * @type {?GuildMember}
     * @readonly
     */
    get me(): GuildMember | null;
    /**
     * Options used to fetch a single member from a guild.
     * @typedef {BaseFetchOptions} FetchMemberOptions
     * @property {UserResolvable} user The user to fetch
     */
    /**
     * Options used to fetch multiple members from a guild.
     * @typedef {Object} FetchMembersOptions
     * @property {UserResolvable|UserResolvable[]} user The user(s) to fetch
     * @property {?string} query Limit fetch to members with similar usernames
     * @property {number} [limit=0] Maximum number of members to request
     * @property {boolean} [withPresences=false] Whether or not to include the presences
     * @property {number} [time=120e3] Timeout for receipt of members
     * @property {?string} nonce Nonce for this request (32 characters max - default to base 16 now timestamp)
     * @property {boolean} [force=false] Whether to skip the cache check and request the API
     */
    /**
     * Fetches member(s) from Discord, even if they're offline.
     * @param {UserResolvable|FetchMemberOptions|FetchMembersOptions} [options] If a UserResolvable, the user to fetch.
     * If undefined, fetches all members.
     * If a query, it limits the results to users with similar usernames.
     * @returns {Promise<GuildMember|Collection<Snowflake, GuildMember>>}
     * @example
     * // Fetch all members from a guild
     * guild.members.fetch()
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single member
     * guild.members.fetch('66564597481480192')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single member without checking cache
     * guild.members.fetch({ user, force: true })
     *   .then(console.log)
     *   .catch(console.error)
     * @example
     * // Fetch a single member without caching
     * guild.members.fetch({ user, cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch by an array of users including their presences
     * guild.members.fetch({ user: ['66564597481480192', '191615925336670208'], withPresences: true })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch by query
     * guild.members.fetch({ query: 'hydra', limit: 1 })
     *   .then(console.log)
     *   .catch(console.error);
     */
    fetch(options?: string | FetchMemberOptions | FetchMembersOptions): Promise<GuildMember | Collection<Snowflake, GuildMember>>;
    /**
     * Fetches the client user as a GuildMember of the guild.
     * @param {BaseFetchOptions} [options] The options for fetching the member
     * @returns {Promise<GuildMember>}
     */
    fetchMe(options?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<GuildMember>;
    /**
     * Options used for searching guild members.
     * @typedef {Object} GuildSearchMembersOptions
     * @property {string} query Filter members whose username or nickname start with this query
     * @property {number} [limit=1] Maximum number of members to search
     * @property {boolean} [cache=true] Whether or not to cache the fetched member(s)
     */
    /**
     * Searches for members in the guild based on a query.
     * @param {GuildSearchMembersOptions} options Options for searching members
     * @returns {Promise<Collection<Snowflake, GuildMember>>}
     */
    search({ query, limit, cache }?: GuildSearchMembersOptions): Promise<Collection<Snowflake, GuildMember>>;
    /**
     * The data for editing a guild member.
     * @typedef {Object} GuildMemberEditData
     * @property {?string} [nick] The nickname to set for the member
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] The roles or role ids to apply
     * @property {boolean} [mute] Whether or not the member should be muted
     * @property {boolean} [deaf] Whether or not the member should be deafened
     * @property {GuildVoiceChannelResolvable|null} [channel] Channel to move the member to
     * (if they are connected to voice), or `null` if you want to disconnect them from voice
     * @property {DateResolvable|null} [communicationDisabledUntil] The date or timestamp
     * for the member's communication to be disabled until. Provide `null` to enable communication again.
     * @property {GuildMemberFlagsResolvable} [flags] The flags to set for the member
     * @property {?(BufferResolvable|Base64Resolvable)} [avatar] The new guild avatar
     * @property {?(BufferResolvable|Base64Resolvable)} [banner] The new guild banner
     * @property {?string} [bio] The new guild about me
     */
    /**
     * Edits a member of the guild.
     * <info>The user must be a member of the guild</info>
     * @param {UserResolvable} user The member to edit
     * @param {GuildMemberEditData} data The data to edit the member with
     * @param {string} [reason] Reason for editing this user
     * @returns {Promise<GuildMember>}
     */
    edit(user: string | GuildMember, data: GuildMemberEditData, reason?: string): Promise<GuildMember>;
    /**
     * Options used for pruning guild members.
     * <info>It's recommended to set {@link GuildPruneMembersOptions#count options.count}
     * to `false` for large guilds.</info>
     * @typedef {Object} GuildPruneMembersOptions
     * @property {number} [days=7] Number of days of inactivity required to kick
     * @property {boolean} [dry=false] Get the number of users that will be kicked, without actually kicking them
     * @property {boolean} [count=true] Whether or not to return the number of users that have been kicked.
     * @property {RoleResolvable[]} [roles] Array of roles to bypass the "...and no roles" constraint when pruning
     * @property {string} [reason] Reason for this prune
     */
    /**
     * Prunes members from the guild based on how long they have been inactive.
     * @param {GuildPruneMembersOptions} [options] Options for pruning
     * @returns {Promise<number|null>} The number of members that were/will be kicked
     * @example
     * // See how many members will be pruned
     * guild.members.prune({ dry: true })
     *   .then(pruned => console.log(`This will prune ${pruned} people!`))
     *   .catch(console.error);
     * @example
     * // Actually prune the members
     * guild.members.prune({ days: 1, reason: 'too many people!' })
     *   .then(pruned => console.log(`I just pruned ${pruned} people!`))
     *   .catch(console.error);
     * @example
     * // Include members with a specified role
     * guild.members.prune({ days: 7, roles: ['657259391652855808'] })
     *    .then(pruned => console.log(`I just pruned ${pruned} people!`))
     *    .catch(console.error);
     */
    prune({ days, dry, count: compute_prune_count, roles, reason }?: GuildPruneMembersOptions): Promise<number | null>;
    /**
     * Kicks a user from the guild.
     * <info>The user must be a member of the guild</info>
     * @param {UserResolvable} user The member to kick
     * @param {string} [reason] Reason for kicking
     * @returns {Promise<GuildMember|User|Snowflake>} Result object will be resolved as specifically as possible.
     * If the GuildMember cannot be resolved, the User will instead be attempted to be resolved. If that also cannot
     * be resolved, the user's id will be the result.
     * @example
     * // Kick a user by id (or with a user/guild member object)
     * guild.members.kick('84484653687267328')
     *   .then(kickInfo => console.log(`Kicked ${kickInfo.user?.tag ?? kickInfo.tag ?? kickInfo}`))
     *   .catch(console.error);
     */
    kick(user: string | GuildMember, reason?: string): Promise<GuildMember | unknown>;
    /**
     * Bans a user from the guild.
     * @param {UserResolvable} user The user to ban
     * @param {BanOptions} [options] Options for the ban
     * @returns {Promise<GuildMember|User|Snowflake>} Result object will be resolved as specifically as possible.
     * If the GuildMember cannot be resolved, the User will instead be attempted to be resolved. If that also cannot
     * be resolved, the user id will be the result.
     * Internally calls the GuildBanManager#create method.
     * @example
     * // Ban a user by id (or with a user/guild member object)
     * guild.members.ban('84484653687267328')
     *   .then(banInfo => console.log(`Banned ${banInfo.user?.tag ?? banInfo.tag ?? banInfo}`))
     *   .catch(console.error);
     */
    ban(user: unknown, options?: BanOptions): Promise<unknown>;
    /**
     * Unbans a user from the guild. Internally calls the {@link GuildBanManager#remove} method.
     * @param {UserResolvable} user The user to unban
     * @param {string} [reason] Reason for unbanning user
     * @returns {Promise<?User>} The user that was unbanned
     * @example
     * // Unban a user by id (or with a user/guild member object)
     * guild.members.unban('84484653687267328')
     *   .then(user => console.log(`Unbanned ${user.username} from ${guild.name}`))
     *   .catch(console.error);
     */
    unban(user: unknown, reason?: string): Promise<unknown>;
    _fetchSingle({ user, cache, force }: {
        user: Snowflake;
        cache?: boolean;
        force?: boolean;
    }): Promise<GuildMember>;
    /**
     * Adds a role to a member.
     * @param {GuildMemberResolvable} user The user to add the role from
     * @param {RoleResolvable} role The role to add
     * @param {string} [reason] Reason for adding the role
     * @returns {Promise<GuildMember|User|Snowflake>}
     */
    addRole(user: string | GuildMember, role: unknown, reason?: string): Promise<unknown>;
    /**
     * Removes a role from a member.
     * @param {UserResolvable} user The user to remove the role from
     * @param {RoleResolvable} role The role to remove
     * @param {string} [reason] Reason for removing the role
     * @returns {Promise<GuildMember|User|Snowflake>}
     */
    removeRole(user: string | GuildMember, role: unknown, reason?: string): Promise<unknown>;
    /**
     * Experimental method to fetch members from the guild.
     * <info>Lists up to 10000 members of the guild.</info>
     * @param {number} [timeout=15_000] Timeout for receipt of members in ms
     * @returns {Promise<Collection<Snowflake, GuildMember>>}
     */
    fetchByMemberSafety(timeout?: number): Promise<Collection<Snowflake, GuildMember>>;
    _fetchMany(options?: FetchMembersOptions): Promise<GuildMember | Collection<Snowflake, GuildMember>>;
    /**
     * Bulk ban users from a guild, and optionally delete previous messages sent by them.
     * @param {Collection<Snowflake, UserResolvable>|UserResolvable[]} users The users to ban
     * @param {BulkBanOptions} [options] The options for bulk banning users
     * @returns {Promise<BulkBanResult>} Returns an object with `bannedUsers` key containing the IDs of the banned users
     * and the key `failedUsers` with the IDs that could not be banned or were already banned.
     * Internally calls the GuildBanManager#bulkCreate method.
     * @example
     * // Bulk ban users by ids (or with user/guild member objects) and delete all their messages from the past 7 days
     * guild.members.bulkBan(['84484653687267328'], { deleteMessageSeconds: 7 * 24 * 60 * 60 })
     *   .then(result => {
     *     console.log(`Banned ${result.bannedUsers.length} users, failed to ban ${result.failedUsers.length} users.`)
     *   })
     *   .catch(console.error);
     * @deprecated This method will not be usable until an effective MFA implementation is in place.
     */
    bulkBan(users: Collection<Snowflake, unknown> | unknown[], options?: BulkBanOptions): Promise<{
        bannedUsers: Snowflake[];
        failedUsers: Snowflake[];
    }>;
}
export default GuildMemberManager;
