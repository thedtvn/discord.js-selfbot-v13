import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type MessageReaction from '../structures/MessageReaction';
import CachedManager from './CachedManager';
import { Error } from '../errors';
import User from '../structures/User';
import { ReactionTypes } from '../util/Constants';

type RawUserData = { id: Snowflake };
type UserResolvable = Snowflake | User | { id: Snowflake };

interface FetchReactionUsersOptions {
  type?: number | keyof typeof ReactionTypes;
  limit?: number;
  after?: Snowflake;
}

/**
 * Manages API methods for users who reacted to a reaction and stores their cache.
 * @extends {CachedManager}
 */
class ReactionUserManager extends CachedManager<Snowflake, User, UserResolvable, RawUserData> {
  public readonly reaction: MessageReaction;

  constructor(reaction: MessageReaction, iterable?: Iterable<RawUserData>) {
    super(reaction.client, User, iterable);

    /**
     * The reaction that this manager belongs to
     * @type {MessageReaction}
     */
    this.reaction = reaction;
  }

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
  async fetch({ limit = 100, after, type = 'NORMAL' }: FetchReactionUsersOptions = {}): Promise<Collection<Snowflake, User>> {
    const message = this.reaction.message;
    const data = await this.client.api.channels[message.channelId].messages[message.id].reactions[
      this.reaction.emoji.identifier
    ].get({ query: { limit, after, type: typeof type == 'number' ? type : ReactionTypes[type] } });
    const users = new Collection();
    for (const rawUser of data) {
      const user = this.client.users._add(rawUser);
      this.cache.set(user.id, user);
      users.set(user.id, user);
    }
    return users;
  }

  /**
   * Removes a user from this reaction.
   * @param {UserResolvable} [user=this.client.user] The user to remove the reaction of
   * @returns {Promise<MessageReaction>}
   */
  async remove(user: UserResolvable = this.client.user as UserResolvable): Promise<MessageReaction> {
    const userId = this.client.users.resolveId(user);
    if (!userId) throw new Error('REACTION_RESOLVE_USER');
    const message = this.reaction.message;
    await this.client.api.channels[message.channelId].messages[message.id].reactions[this.reaction.emoji.identifier][
      userId === this.client.user.id ? '@me' : userId
    ].delete();
    return this.reaction;
  }
}

export default ReactionUserManager;
