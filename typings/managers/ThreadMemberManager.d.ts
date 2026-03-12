import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type ThreadChannel from '../structures/ThreadChannel';
import CachedManager from './CachedManager';
import ThreadMember from '../structures/ThreadMember';
type UserResolvableLike = Snowflake | {
    id?: Snowflake;
};
type ThreadMemberResolvable = ThreadMember | UserResolvableLike;
type RawThreadMemberData = {
    user_id: Snowflake;
} & Record<string, unknown>;
interface FetchThreadMemberOptions {
    cache?: boolean;
    force?: boolean;
    withMember?: boolean;
    limit?: number;
    after?: Snowflake;
}
/**
 * Manages API methods for GuildMembers and stores their cache.
 * @extends {CachedManager}
 */
declare class ThreadMemberManager extends CachedManager<Snowflake, ThreadMember, ThreadMemberResolvable, RawThreadMemberData> {
    readonly thread: ThreadChannel;
    constructor(thread: ThreadChannel, iterable?: Iterable<RawThreadMemberData>);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, ThreadMember>}
     * @name ThreadMemberManager#cache
     */
    _add(data: RawThreadMemberData, cache?: boolean): ThreadMember;
    /**
     * Fetches the client user as a ThreadMember of the thread.
     * @param {BaseFetchOptions} [options] The options for fetching the member
     * @returns {Promise<ThreadMember>}
     */
    fetchMe(options?: FetchThreadMemberOptions): Promise<ThreadMember | Collection<Snowflake, ThreadMember>>;
    /**
     * The client user as a ThreadMember of this ThreadChannel
     * @type {?ThreadMember}
     * @readonly
     */
    get me(): ThreadMember | null;
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
    resolve(member: ThreadMemberResolvable): ThreadMember | null;
    /**
     * Resolves a {@link ThreadMemberResolvable} to a {@link ThreadMember} id string.
     * @param {ThreadMemberResolvable} member The user that is part of the guild
     * @returns {?Snowflake}
     */
    resolveId(member: ThreadMemberResolvable): Snowflake | null;
    /**
     * Adds a member to the thread.
     * @param {UserResolvable|'@me'} member The member to add
     * @param {string} [reason] The reason for adding this member
     * @returns {Promise<Snowflake>}
     */
    add(member: UserResolvableLike | '@me', reason?: string): Promise<Snowflake | '@me'>;
    /**
     * Remove a user from the thread.
     * @param {Snowflake|'@me'} id The id of the member to remove
     * @param {string} [reason] The reason for removing this member from the thread
     * @returns {Promise<Snowflake>}
     */
    remove(id: Snowflake | '@me', reason?: string): Promise<Snowflake | '@me'>;
    _fetchOne(memberId: Snowflake, { cache, force, withMember }: FetchThreadMemberOptions): Promise<ThreadMember>;
    _fetchMany({ cache, limit, after, withMember }?: FetchThreadMemberOptions): Promise<Collection<Snowflake, ThreadMember>>;
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
    fetch(member?: ThreadMemberResolvable | boolean, options?: FetchThreadMemberOptions): Promise<ThreadMember | Collection<Snowflake, ThreadMember>>;
}
export default ThreadMemberManager;
