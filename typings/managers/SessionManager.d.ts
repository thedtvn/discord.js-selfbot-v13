import type { Collection } from '@discordjs/collection';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
import Session from '../structures/Session';
type RawSessionData = {
    id_hash: string;
    id?: string;
};
/**
 * Manages API methods for users and stores their cache.
 * @extends {CachedManager}
 */
declare class SessionManager extends CachedManager<string, Session, string | Session, RawSessionData> {
    currentSessionIdHash: string | null;
    constructor(client: Client, iterable?: Iterable<RawSessionData>);
    /**
     * The cache of Sessions
     * @type {Collection<string, Session>}
     * @name SessionManager#cache
     */
    /**
     * Fetch all sessions of the client.
     * @returns {Promise<Collection<string, Session>>}
     */
    fetch(): Promise<Collection<string, Session>>;
    /**
     * Logout all client (remote).
     * @returns {Promise<void>}
     */
    logoutAllDevices(): Promise<void>;
    /**
     * Get the current session of the client.
     * You must call `fetch()` first to populate the cache.
     * @type {?Session}
     */
    get currentSession(): Session | null;
}
export default SessionManager;
