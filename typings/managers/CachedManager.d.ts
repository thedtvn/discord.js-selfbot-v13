import type { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import DataManager from './DataManager';
interface CachedManagerAddOptions<K extends string, Extras extends unknown[]> {
    id?: K;
    extras?: Extras;
}
/**
 * Manages the API methods of a data model with a mutable cache of instances.
 * @extends {DataManager}
 * @abstract
 */
declare class CachedManager<K extends string = Snowflake, Holds extends {
    id: K;
    _patch(data: unknown): void;
    _clone(): any;
} = any, Resolvable = K | Holds, RawData extends {
    id: K;
} = {
    id: K;
}, Extras extends unknown[] = unknown[]> extends DataManager<K, Holds, Resolvable> {
    readonly _cache: Collection<K, Holds>;
    constructor(client: Client, holds: abstract new (...args: [Client, RawData, ...Extras]) => Holds, iterable?: Iterable<RawData>);
    /**
     * The cache of items for this manager.
     * @type {Collection}
     * @abstract
     */
    get cache(): Collection<K, Holds>;
    _add(data: RawData, cache?: boolean, { id, extras }?: CachedManagerAddOptions<K, Extras>): Holds;
}
export default CachedManager;
