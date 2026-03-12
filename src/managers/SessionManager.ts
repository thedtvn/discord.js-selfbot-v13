import type { Collection } from '@discordjs/collection';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
import Session from '../structures/Session';

type RawSessionData = { id_hash: string; id?: string };

/**
 * Manages API methods for users and stores their cache.
 * @extends {CachedManager}
 */
// @ts-expect-error RawSessionData uses id_hash instead of id
class SessionManager extends CachedManager<string, Session, string | Session, RawSessionData> {
  public currentSessionIdHash: string | null;

  constructor(client: Client, iterable?: Iterable<RawSessionData>) {
    super(client, Session, iterable);

    /**
     * The current session ID hash of the client.
     * @type {string}
     */
    this.currentSessionIdHash = null;
  }
  /**
   * The cache of Sessions
   * @type {Collection<string, Session>}
   * @name SessionManager#cache
   */

  /**
   * Fetch all sessions of the client.
   * @returns {Promise<Collection<string, Session>>}
   */
  fetch(): Promise<Collection<string, Session>> {
    return this.client.api.auth.sessions.get().then(data => {
      const allData = data.user_sessions;
      this.cache.clear();
      for (const session of allData) {
        this._add(session, true, { id: session.id_hash });
      }
      return this.cache;
    });
  }

  /**
   * Logout all client (remote).
   * @returns {Promise<void>}
   */
  logoutAllDevices(): Promise<void> {
    return (this.client.api.auth.sessions as unknown as Record<string, (...args: unknown[]) => unknown>).logout({
      data: {
        session_id_hashes: this.cache.map(session => session.id),
      },
    }) as unknown as Promise<void>;
  }

  /**
   * Get the current session of the client.
   * You must call `fetch()` first to populate the cache.
   * @type {?Session}
   */
  get currentSession(): Session | null {
    if (!this.currentSessionIdHash) {
      return null;
    }
    return this.cache.get(this.currentSessionIdHash) || null;
  }
}

export default SessionManager;
