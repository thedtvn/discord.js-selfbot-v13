import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';

type UserResolvableLike = { id?: Snowflake } | string;

/**
 * Manages API methods for Client and stores their cache.
 * @extends {BaseManager}
 */
class UserNoteManager extends BaseManager {
  public cache: Collection<Snowflake, string>;

  constructor(client: Client, data: Record<string, string> = {}) {
    super(client);
    /**
     * Cache User Note
     * @type {Collection<Snowflake, string>}
     */
    this.cache = new Collection(Object.entries(data));
  }

  _reload(data: Record<string, string> = {}): this {
    this.cache = new Collection(Object.entries(data));
    return this;
  }

  private resolveId(user: UserResolvableLike): Snowflake {
    if (typeof user === 'string') return user as Snowflake;
    return (user.id ?? '') as Snowflake;
  }

  async updateNote(id: Snowflake, note: string | null = null): Promise<this> {
    await this.client.api.users['@me'].notes(id).put({ data: { note } });
    if (!note) this.cache.delete(id);
    else this.cache.set(id, note);
    return this;
  }

  /**
   * Obtains a user from Discord, or the user cache if it's already available.
   * @param {UserResolvable} user The user to fetch
   * @param {BaseFetchOptions} [options] Additional options for this fetch
   * @returns {Promise<string>}
   */
  async fetch(user: UserResolvableLike, { cache = true, force = false }: { cache?: boolean; force?: boolean } = {}): Promise<string> {
    const id = this.resolveId(user);
    if (!force) {
      const existing = this.cache.get(id);
      if (existing) return existing;
    }
    const data = await this.client.api.users['@me'].notes[id]
      .get()
      .then(d => d.note)
      .catch(() => '');
    if (cache) this.cache.set(id, data);
    return data;
  }
}

export default UserNoteManager;
