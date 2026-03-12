import type { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
import { Presence } from '../structures/Presence';
type PresenceResolvable = Presence | Snowflake | string;
type RawPresenceData = {
    user: {
        id: Snowflake;
    };
};
/**
 * Manages API methods for Presences and holds their cache.
 * @extends {CachedManager}
 */
declare class PresenceManager extends CachedManager<Snowflake, Presence, PresenceResolvable, RawPresenceData> {
    constructor(client: Client, iterable?: Iterable<RawPresenceData>);
    /**
     * The cache of Presences
     * @type {Collection<Snowflake, Presence>}
     * @name PresenceManager#cache
     */
    _add(data: RawPresenceData, cache?: boolean): Presence;
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
    resolve(presence: PresenceResolvable): Presence | null;
    /**
     * Resolves a {@link PresenceResolvable} to a {@link Presence} id.
     * @param {PresenceResolvable} presence The presence resolvable to resolve
     * @returns {?Snowflake}
     */
    resolveId(presence: PresenceResolvable): Snowflake | null;
    /**
     * Fetches the overall user presence for all of the user's non-offline friends and implicit relationships.
     * @returns {Promise<Collection<Snowflake, Presence>>}
     */
    fetch(): Promise<Collection<Snowflake, Presence>>;
}
export default PresenceManager;
