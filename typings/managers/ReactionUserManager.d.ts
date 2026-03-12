import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type MessageReaction from '../structures/MessageReaction';
import CachedManager from './CachedManager';
import User from '../structures/User';
import { ReactionTypes } from '../util/Constants';
type RawUserData = {
    id: Snowflake;
};
type UserResolvable = Snowflake | User | {
    id: Snowflake;
};
interface FetchReactionUsersOptions {
    type?: number | keyof typeof ReactionTypes;
    limit?: number;
    after?: Snowflake;
}
/**
 * Manages API methods for users who reacted to a reaction and stores their cache.
 * @extends {CachedManager}
 */
declare class ReactionUserManager extends CachedManager<Snowflake, User, UserResolvable, RawUserData> {
    readonly reaction: MessageReaction;
    constructor(reaction: MessageReaction, iterable?: Iterable<RawUserData>);
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
    fetch({ limit, after, type }?: FetchReactionUsersOptions): Promise<Collection<Snowflake, User>>;
    /**
     * Removes a user from this reaction.
     * @param {UserResolvable} [user=this.client.user] The user to remove the reaction of
     * @returns {Promise<MessageReaction>}
     */
    remove(user?: UserResolvable): Promise<MessageReaction>;
}
export default ReactionUserManager;
