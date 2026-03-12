import CachedManager from './CachedManager';
/**
 * Manages API methods for Presences and holds their cache.
 * @extends {CachedManager}
 */
declare class PresenceManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of Presences
     * @type {Collection<Snowflake, Presence>}
     * @name PresenceManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Data that can be resolved to a Presence object. This can be:
     * * A Presence
     * * A UserResolvable
     * * A Snowflake
     * @typedef {Presence|UserResolvable|Snowflake} PresenceResolvable
     */
    /**
     * Resolves a {@link PresenceResolvable} to a {@link Presence} object.
     * @param {PresenceResolvable} presence The presence resolvable to resolve
     * @returns {?Presence}
     */
    resolve(presence: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * Resolves a {@link PresenceResolvable} to a {@link Presence} id.
     * @param {PresenceResolvable} presence The presence resolvable to resolve
     * @returns {?Snowflake}
     */
    resolveId(presence: any): any;
    /**
     * Fetches the overall user presence for all of the user's non-offline friends and implicit relationships.
     * @returns {Promise<Collection<Snowflake, Presence>>}
     */
    fetch(): Promise<import("@discordjs/collection").Collection<string, {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>>;
}
export default PresenceManager;
