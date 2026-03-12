import type { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
type Constructable<T> = abstract new (...args: never[]) => T;
/**
 * Manages the API methods of a data model along with a collection of instances.
 * @extends {BaseManager}
 * @abstract
 */
declare class DataManager<K extends string = Snowflake, Holds extends {
    id: K;
} = {
    id: K;
}, Resolvable = K | Holds> extends BaseManager {
    readonly holds: Constructable<Holds>;
    constructor(client: Client, holds: Constructable<Holds>);
    /**
     * The cache of items for this manager.
     * @type {Collection}
     * @abstract
     */
    get cache(): Collection<K, Holds>;
    /**
     * Resolves a data entry to a data Object.
     * @param {string|Object} idOrInstance The id or instance of something in this Manager
     * @returns {?Object} An instance from this Manager
     */
    resolve(idOrInstance: Resolvable | Holds): Holds | null;
    /**
     * Resolves a data entry to an instance id.
     * @param {string|Object} idOrInstance The id or instance of something in this Manager
     * @returns {?Snowflake}
     */
    resolveId(idOrInstance: Resolvable | Holds): K | null;
    valueOf(): Collection<K, Holds>;
}
export default DataManager;
