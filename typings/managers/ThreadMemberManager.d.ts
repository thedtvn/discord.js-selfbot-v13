import CachedManager from './CachedManager';
import ThreadMember from '../structures/ThreadMember';
/**
 * Manages API methods for GuildMembers and stores their cache.
 * @extends {CachedManager}
 */
declare class ThreadMemberManager extends CachedManager {
    constructor(thread: any, iterable: any);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, ThreadMember>}
     * @name ThreadMemberManager#cache
     */
    _add(data: any, cache?: boolean): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    } | ThreadMember;
    /**
     * Fetches the client user as a ThreadMember of the thread.
     * @param {BaseFetchOptions} [options] The options for fetching the member
     * @returns {Promise<ThreadMember>}
     */
    fetchMe(options: any): Promise<any>;
    /**
     * The client user as a ThreadMember of this ThreadChannel
     * @type {?ThreadMember}
     * @readonly
     */
    get me(): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Data that resolves to give a ThreadMember object. This can be:
     * * A ThreadMember object
     * * A User resolvable
     * @typedef {ThreadMember|UserResolvable} ThreadMemberResolvable
     */
    /**
     * Resolves a {@link ThreadMemberResolvable} to a {@link ThreadMember} object.
     * @param {ThreadMemberResolvable} member The user that is part of the thread
     * @returns {?GuildMember}
     */
    resolve(member: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Resolves a {@link ThreadMemberResolvable} to a {@link ThreadMember} id string.
     * @param {ThreadMemberResolvable} member The user that is part of the guild
     * @returns {?Snowflake}
     */
    resolveId(member: any): any;
    /**
     * Adds a member to the thread.
     * @param {UserResolvable|'@me'} member The member to add
     * @param {string} [reason] The reason for adding this member
     * @returns {Promise<Snowflake>}
     */
    add(member: any, reason: any): Promise<any>;
    /**
     * Remove a user from the thread.
     * @param {Snowflake|'@me'} id The id of the member to remove
     * @param {string} [reason] The reason for removing this member from the thread
     * @returns {Promise<Snowflake>}
     */
    remove(id: any, reason: any): Promise<any>;
    _fetchOne(memberId: any, { cache, force, withMember }: {
        cache: any;
        force?: boolean;
        withMember: any;
    }): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    } | ThreadMember>;
    _fetchMany({ cache, limit, after, withMember }?: {}): Promise<any>;
    /**
     * Options used to fetch a thread member.
     * @typedef {BaseFetchOptions} FetchThreadMemberOptions
     * @property {boolean} [withMember] Whether to also return the guild member associated with this thread member
     */
    /**
     * Options used to fetch multiple thread members with guild member data.
     * <info>With `withMember` set to `true`, pagination is enabled.</info>
     * @typedef {Object} FetchThreadMembersWithGuildMemberDataOptions
     * @property {true} withMember Whether to also return the guild member data
     * @property {Snowflake} [after] Consider only thread members after this id
     * @property {number} [limit] The maximum number of thread members to return
     * @property {boolean} [cache] Whether to cache the fetched thread members and guild members
     */
    /**
     * Options used to fetch multiple thread members without guild member data.
     * @typedef {Object} FetchThreadMembersWithoutGuildMemberDataOptions
     * @property {false} [withMember] Whether to also return the guild member data
     * @property {boolean} [cache] Whether to cache the fetched thread members
     */
    /**
     * Options used to fetch multiple thread members.
     * @typedef {FetchThreadMembersWithGuildMemberDataOptions|
     * FetchThreadMembersWithoutGuildMemberDataOptions} FetchThreadMembersOptions
     */
    /**
     * Fetches member(s) for the thread from Discord.
     * @param {UserResolvable|FetchThreadMembersOptions|boolean} [member] The member to fetch. If `undefined`, all members
     * in the thread are fetched, and will be cached based on `options.cache`.
     * @param {FetchThreadMemberOptions|FetchThreadMembersOptions} [options] Additional options for this fetch
     * @returns {Promise<ThreadMember|Collection<Snowflake, ThreadMember>>}
     */
    fetch(member: any, options?: {
        cache: boolean;
        force: boolean;
    }): Promise<any>;
}
export default ThreadMemberManager;
