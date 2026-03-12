import type { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import DataManager from './DataManager';
import { _cleanupSymbol } from '../util/Constants';

interface CachedManagerAddOptions<K extends string, Extras extends unknown[]> {
  id?: K;
  extras?: Extras;
}

/**
 * Manages the API methods of a data model with a mutable cache of instances.
 * @extends {DataManager}
 * @abstract
 */
class CachedManager<
  K extends string = Snowflake,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  Holds extends { id: K; _patch(data: unknown): void; _clone(): any } = any,
  Resolvable = K | Holds,
  RawData extends { id: K } = { id: K },
  Extras extends unknown[] = unknown[],
> extends DataManager<K, Holds, Resolvable> {
  public readonly _cache: Collection<K, Holds>;

  constructor(client: Client, holds: abstract new (...args: [Client, RawData, ...Extras]) => Holds, iterable?: Iterable<RawData>) {
    super(client, holds as unknown as abstract new (...args: never[]) => Holds);

    /**
     * The private cache of items for this manager.
     * @type {Collection}
     * @private
     * @readonly
     * @name CachedManager#_cache
     */
    Object.defineProperty(this, '_cache', { value: (this.client.options.makeCache as Function)(this.constructor, this.holds) });

    let cleanup = this._cache[_cleanupSymbol]?.();
    if (cleanup) {
      cleanup = cleanup.bind(this._cache);
      client._cleanups.add(cleanup);
      client._finalizers.register(this, {
        cleanup,
        message:
          `Garbage collection completed on ${this.constructor.name}, ` +
          `which had a ${this._cache.constructor.name} of ${this.holds.name}.`,
        name: this.constructor.name,
      });
    }

    if (iterable) {
      for (const item of iterable) {
        this._add(item);
      }
    }
  }

  /**
   * The cache of items for this manager.
   * @type {Collection}
   * @abstract
   */
  get cache(): Collection<K, Holds> {
    return this._cache;
  }

  _add(data: RawData, cache = true, { id, extras = [] as unknown as Extras }: CachedManagerAddOptions<K, Extras> = {}): Holds {
    const existing = this.cache.get(id ?? data.id);
    if (existing) {
      if (cache) {
        existing._patch(data);
        return existing;
      }
      const clone = existing._clone();
      clone._patch(data);
      return clone;
    }

    const entry = this.holds ? new (this.holds as unknown as new (client: Client, data: RawData, ...extras: Extras) => Holds)(this.client, data, ...extras) : (data as unknown as Holds);
    if (cache) this.cache.set(id ?? entry.id, entry);
    return entry;
  }
}

export default CachedManager;
