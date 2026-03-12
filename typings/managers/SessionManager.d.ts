import CachedManager from './CachedManager';
/**
 * Manages API methods for users and stores their cache.
 * @extends {CachedManager}
 */
declare class SessionManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of Sessions
     * @type {Collection<string, Session>}
     * @name SessionManager#cache
     */
    /**
     * Fetch all sessions of the client.
     * @returns {Promise<Collection<string, Session>>}
     */
    fetch(): any;
    /**
     * Logout all client (remote).
     * @returns {Promise<void>}
     */
    logoutAllDevices(): any;
    /**
     * Get the current session of the client.
     * You must call `fetch()` first to populate the cache.
     * @type {?Session}
     */
    get currentSession(): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
}
export default SessionManager;
