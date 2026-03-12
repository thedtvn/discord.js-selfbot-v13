import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
import { Error } from '../errors';
import { GuildMember } from '../structures/GuildMember';
import { Message } from '../structures/Message';
import ThreadMember from '../structures/ThreadMember';
import User from '../structures/User';

type RawUserData = { id: Snowflake };
type UserResolvable = User | Snowflake | Message | GuildMember | ThreadMember;
type DMChannelLike = { id: Snowflake; type: string; recipient: { id: Snowflake }; partial?: boolean; sync(): void; send(options: unknown): Promise<Message> };

/**
 * Manages API methods for users and stores their cache.
 * @extends {CachedManager}
 */
class UserManager extends CachedManager<Snowflake, User, UserResolvable, RawUserData> {
  constructor(client: Client, iterable?: Iterable<RawUserData>) {
    super(client, User, iterable);
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, User>}
   * @name UserManager#cache
   */

  /**
   * Data that resolves to give a User object. This can be:
   * * A User object
   * * A Snowflake
   * * A Message object (resolves to the message author)
   * * A GuildMember object
   * * A ThreadMember object
   * @typedef {User|Snowflake|Message|GuildMember|ThreadMember} UserResolvable
   */

  /**
   * The DM between the client's user and a user
   * @param {Snowflake} userId The user id
   * @returns {?DMChannel}
   * @private
   */
  dmChannel(userId: Snowflake): DMChannelLike | null {
    return this.client.channels.cache.find(c => c.type === 'DM' && c.recipient.id === userId) ?? null;
  }

  /**
   * Creates a {@link DMChannel} between the client and a user.
   * @param {UserResolvable} user The UserResolvable to identify
   * @param {BaseFetchOptions} [options] Additional options for this fetch
   * @returns {Promise<DMChannel>}
   */
  async createDM(user: UserResolvable, { cache = true, force = false }: { cache?: boolean; force?: boolean } = {}): Promise<DMChannelLike> {
    const id = this.resolveId(user);

    if (!force) {
      const dmChannel = this.dmChannel(id);
      if (dmChannel && !dmChannel.partial) return dmChannel;
    }

    const data = await this.client.api.users['@me'].channels.post({
      data: {
        recipients: [id],
      },
      DiscordContext: {},
    });

    const dm_channel = await this.client.channels._add(data, null, { cache });
    dm_channel.sync();
    return dm_channel;
  }

  /**
   * Deletes a {@link DMChannel} (if one exists) between the client and a user. Resolves with the channel if successful.
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {Promise<DMChannel>}
   */
  async deleteDM(user: UserResolvable): Promise<DMChannelLike> {
    const id = this.resolveId(user);
    const dmChannel = this.dmChannel(id);
    if (!dmChannel) throw new Error('USER_NO_DM_CHANNEL');
    await this.client.api.channels(dmChannel.id).delete();
    this.client.channels._remove(dmChannel.id);
    return dmChannel;
  }

  /**
   * Obtains a user from Discord, or the user cache if it's already available.
   * @param {UserResolvable} user The user to fetch
   * @param {BaseFetchOptions} [options] Additional options for this fetch
   * @returns {Promise<User>}
   */
  async fetch(user: UserResolvable, { cache = true, force = false }: { cache?: boolean; force?: boolean } = {}): Promise<User> {
    const id = this.resolveId(user);
    if (!force) {
      const existing = this.cache.get(id);
      if (existing && !existing.partial) return existing;
    }

    const data = await this.client.api.users(id).get();
    return this._add(data, cache);
  }

  /**
   * Sends a message to a user.
   * @param {UserResolvable} user The UserResolvable to identify
   * @param {string|MessagePayload|MessageOptions} options The options to provide
   * @returns {Promise<Message>}
   */
  async send(user: UserResolvable, options: unknown): Promise<Message> {
    return (await this.createDM(user)).send(options);
  }

  /**
   * Resolves a {@link UserResolvable} to a {@link User} object.
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?User}
   */
  resolve(user: UserResolvable): User | null {
    if (user instanceof GuildMember || user instanceof ThreadMember) return user.user;
    if (user instanceof Message) return user.author;
    return super.resolve(user);
  }

  /**
   * Resolves a {@link UserResolvable} to a {@link User} id.
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?Snowflake}
   */
  resolveId(user: UserResolvable): Snowflake | null {
    if (user instanceof ThreadMember) return user.id;
    if (user instanceof GuildMember) return user.user.id;
    if (user instanceof Message) return user.author.id;
    return super.resolveId(user);
  }
}

export default UserManager;
