import { Collection } from '@discordjs/collection';
import { _cleanupSymbol } from './Constants';
export interface LimitedCollectionOptions<K = unknown, V = unknown> {
    maxSize?: number | null;
    keepOverLimit?: ((value: V, key: K, collection: LimitedCollection<K, V>) => boolean) | null;
    sweepFilter?: ((collection: LimitedCollection<K, V>) => ((value: V, key: K, collection: Collection<K, V>) => boolean) | null) | null;
    sweepInterval?: number | null;
}
/**
 * @typedef {Function} SweepFilter
 * @param {LimitedCollection} collection The collection being swept
 * @returns {Function|null} Return `null` to skip sweeping, otherwise a function passed to `sweep()`,
 * See {@link [Collection#sweep](https://discord.js.org/docs/packages/collection/stable/Collection:Class#sweep)}
 * for the definition of this function.
 */
/**
 * Options for defining the behavior of a LimitedCollection
 * @typedef {Object} LimitedCollectionOptions
 * @property {?number} [maxSize=Infinity] The maximum size of the Collection
 * @property {?Function} [keepOverLimit=null] A function, which is passed the value and key of an entry, ran to decide
 * to keep an entry past the maximum size
 * @property {?SweepFilter} [sweepFilter=null] DEPRECATED: There is no direct alternative to this,
 * however most of its purpose is fulfilled by {@link Client#sweepers}
 * A function ran every `sweepInterval` to determine how to sweep
 * @property {?number} [sweepInterval=0] DEPRECATED: There is no direct alternative to this,
 * however most of its purpose is fulfilled by {@link Client#sweepers}
 * How frequently, in seconds, to sweep the collection.
 */
/**
 * A Collection which holds a max amount of entries and sweeps periodically.
 * @extends {Collection}
 * @param {LimitedCollectionOptions} [options={}] Options for constructing the Collection.
 * @param {Iterable} [iterable=null] Optional entries passed to the Map constructor.
 */
declare class LimitedCollection<K = unknown, V = unknown> extends Collection<K, V> {
    maxSize: number;
    keepOverLimit: ((value: V, key: K, collection: LimitedCollection<K, V>) => boolean) | null;
    sweepFilter: ((collection: LimitedCollection<K, V>) => ((value: V, key: K, collection: Collection<K, V>) => boolean) | null) | null;
    interval: NodeJS.Timeout | null;
    constructor(options?: LimitedCollectionOptions<K, V>, iterable?: Iterable<readonly [K, V]>);
    set(key: K, value: V): this;
    /**
     * Create a sweepFilter function that uses a lifetime to determine sweepability.
     * @param {LifetimeFilterOptions} [options={}] The options used to generate the filter function
     * @deprecated Use {@link Sweepers.filterByLifetime} instead
     * @returns {SweepFilter}
     */
    static filterByLifetime<T>({ lifetime, getComparisonTimestamp, excludeFromSweep, }?: {
        lifetime?: number;
        getComparisonTimestamp?: (entry: T) => number | undefined;
        excludeFromSweep?: (entry: T) => boolean;
    }): () => (entry: any, key: any, coll: any) => boolean;
    [_cleanupSymbol](): (() => void) | null;
    static get [Symbol.species](): typeof Collection;
}
export default LimitedCollection;
