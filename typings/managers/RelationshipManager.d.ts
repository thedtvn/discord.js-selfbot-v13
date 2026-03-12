import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
import { GuildMember } from '../structures/GuildMember';
import { Message } from '../structures/Message';
import ThreadMember from '../structures/ThreadMember';
import User from '../structures/User';
/**
 * Manages API methods for Relationships and stores their cache.
 */
declare class RelationshipManager extends BaseManager {
    cache: Collection<Snowflake, number>;
    friendNicknames: Collection<Snowflake, string>;
    sinceCache: Collection<Snowflake, Date>;
    constructor(client: Client, users?: Array<Record<string, unknown>>);
    /**
     * Get all friends
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get friendCache(): Collection<Snowflake, User>;
    /**
     * Get all blocked users
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get blockedCache(): Collection<Snowflake, User>;
    /**
     * Get all ignored users
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get ignoredCache(): Collection<Snowflake, User>;
    /**
     * Get all incoming friend requests
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get incomingCache(): Collection<Snowflake, User>;
    /**
     * Get all outgoing friend requests
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get outgoingCache(): Collection<Snowflake, User>;
    /**
     * @typedef {Object} RelationshipJSONData
     * @property {Snowflake} id The ID of the target user
     * @property {RelationshipType} type The type of relationship
     * @property {string | null} nickname The nickname of the user in this relationship (1-32 characters)
     * @property {string} since When the user requested a relationship (ISO8601 timestamp)
     */
    /**
     * Return array of cache
     * @returns {RelationshipJSONData[]}
     */
    toJSON(): Array<{
        id: Snowflake;
        type: string;
        nickname: string | undefined;
        since: string;
    }>;
    /**
     * @private
     * @param {Array<User>} users An array of users to add to the cache
     * @returns {void}
     */
    _setup(users?: Array<Record<string, unknown>>): void;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} id.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?Snowflake}
     */
    resolveId(user: ThreadMember | GuildMember | Message | User | string): Snowflake | null;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} username.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?string}
     */
    resolveUsername(user: ThreadMember | GuildMember | Message | User | string): string | null;
    /**
     * Obtains a user from Discord, or the user cache if it's already available.
     * @param {UserResolvable} [user] The user to fetch
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<RelationshipType|RelationshipManager>}
     */
    fetch(user?: ThreadMember | GuildMember | Message | User | string, { force }?: {
        force?: boolean;
    }): Promise<number | undefined | this>;
    /**
     * Deletes a friend / blocked relationship with a client user or cancels a friend request.
     * @param {UserResolvable} user Target
     * @returns {Promise<boolean>}
     */
    deleteRelationship(user: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
    /**
     * Deletes an ignored relationship with a client user.
     * @param {UserResolvable} user Target
     * @returns {Promise<boolean>}
     */
    deleteIgnored(user: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
    /**
     * Sends a friend request.
     * @param {UserResolvable} options Target (User Object, Username, User Id)
     * @returns {Promise<boolean>}
     */
    sendFriendRequest(options: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
    /**
     * Accepts a friend request.
     * @param {UserResolvable} user The user to add as a friend
     * @returns {Promise<boolean>}
     */
    addFriend(user: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
    /**
     * Changes the nickname of a friend.
     * @param {UserResolvable} user The user to change the nickname
     * @param {?string} nickname New nickname
     * @returns {Promise<boolean>}
     */
    setNickname(user: ThreadMember | GuildMember | Message | User | string, nickname?: string | null): Promise<boolean>;
    /**
     * Blocks a user.
     * @param {UserResolvable} user User to block
     * @returns {Promise<boolean>}
     */
    addBlocked(user: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
    /**
     * Ignores a user.
     * @param {UserResolvable} user User to ignore
     * @returns {Promise<boolean>}
     */
    addIgnored(user: ThreadMember | GuildMember | Message | User | string): Promise<boolean>;
}
export default RelationshipManager;
