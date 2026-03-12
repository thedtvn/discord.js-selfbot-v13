import { Collection } from '@discordjs/collection';
import BaseManager from './BaseManager';
/**
 * Manages API methods for Relationships and stores their cache.
 */
declare class RelationshipManager extends BaseManager {
    constructor(client: any, users: any);
    /**
     * Get all friends
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get friendCache(): Collection<unknown, unknown>;
    /**
     * Get all blocked users
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get blockedCache(): Collection<unknown, unknown>;
    /**
     * Get all ignored users
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get ignoredCache(): Collection<unknown, unknown>;
    /**
     * Get all incoming friend requests
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get incomingCache(): Collection<unknown, unknown>;
    /**
     * Get all outgoing friend requests
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get outgoingCache(): Collection<unknown, unknown>;
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
    toJSON(): any;
    /**
     * @private
     * @param {Array<User>} users An array of users to add to the cache
     * @returns {void}
     */
    _setup(users: any): void;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} id.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?Snowflake}
     */
    resolveId(user: any): any;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} username.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?string}
     */
    resolveUsername(user: any): any;
    /**
     * Obtains a user from Discord, or the user cache if it's already available.
     * @param {UserResolvable} [user] The user to fetch
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<RelationshipType|RelationshipManager>}
     */
    fetch(user: any, { force }?: {
        force?: boolean;
    }): Promise<any>;
    /**
     * Deletes a friend / blocked relationship with a client user or cancels a friend request.
     * @param {UserResolvable} user Target
     * @returns {Promise<boolean>}
     */
    deleteRelationship(user: any): Promise<boolean>;
    /**
     * Deletes an ignored relationship with a client user.
     * @param {UserResolvable} user Target
     * @returns {Promise<boolean>}
     */
    deleteIgnored(user: any): Promise<boolean>;
    /**
     * Sends a friend request.
     * @param {UserResolvable} options Target (User Object, Username, User Id)
     * @returns {Promise<boolean>}
     */
    sendFriendRequest(options: any): Promise<boolean>;
    /**
     * Accepts a friend request.
     * @param {UserResolvable} user The user to add as a friend
     * @returns {Promise<boolean>}
     */
    addFriend(user: any): Promise<boolean>;
    /**
     * Changes the nickname of a friend.
     * @param {UserResolvable} user The user to change the nickname
     * @param {?string} nickname New nickname
     * @returns {Promise<boolean>}
     */
    setNickname(user: any, nickname?: any): Promise<boolean>;
    /**
     * Blocks a user.
     * @param {UserResolvable} user User to block
     * @returns {Promise<boolean>}
     */
    addBlocked(user: any): Promise<boolean>;
    /**
     * Ignores a user.
     * @param {UserResolvable} user User to ignore
     * @returns {Promise<boolean>}
     */
    addIgnored(user: any): Promise<boolean>;
}
export default RelationshipManager;
