import { Collection } from '@discordjs/collection';
import CachedManager from './CachedManager';
/**
 * Manages API methods for users who reacted to a reaction and stores their cache.
 * @extends {CachedManager}
 */
declare class ReactionUserManager extends CachedManager {
    constructor(reaction: any, iterable: any);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, User>}
     * @name ReactionUserManager#cache
     */
    /**
     * Options used to fetch users who gave a reaction.
     * @typedef {Object} FetchReactionUsersOptions
     * @property {ReactionType} [type='NORMAL'] The reaction type to fetch
     * @property {number} [limit=100] The maximum amount of users to fetch, defaults to `100`
     * @property {Snowflake} [after] Limit fetching users to those with an id greater than the supplied id
     */
    /**
     * Fetches all the users that gave this reaction. Resolves with a collection of users, mapped by their ids.
     * @param {FetchReactionUsersOptions} [options] Options for fetching the users
     * @returns {Promise<Collection<Snowflake, User>>}
     */
    fetch({ limit, after, type }?: {
        limit?: number;
        type?: string;
    }): Promise<Collection<unknown, unknown>>;
    /**
     * Removes a user from this reaction.
     * @param {UserResolvable} [user=this.client.user] The user to remove the reaction of
     * @returns {Promise<MessageReaction>}
     */
    remove(user?: any): Promise<any>;
}
export default ReactionUserManager;
