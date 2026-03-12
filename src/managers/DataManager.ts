import type { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
import { Error } from '../errors';

type Constructable<T> = abstract new (...args: never[]) => T;

/**
 * Manages the API methods of a data model along with a collection of instances.
 * @extends {BaseManager}
 * @abstract
 */
class DataManager<K extends string = Snowflake, Holds extends { id: K } = { id: K }, Resolvable = K | Holds> extends BaseManager {
  public readonly holds: Constructable<Holds>;

  constructor(client: Client, holds: Constructable<Holds>) {
    super(client);

    /**
     * The data structure belonging to this manager.
     * @name DataManager#holds
     * @type {Function}
     * @private
     * @readonly
     */
    Object.defineProperty(this, 'holds', { value: holds });
  }

  /**
   * The cache of items for this manager.
   * @type {Collection}
   * @abstract
   */
  get cache(): Collection<K, Holds> {
    throw new Error('NOT_IMPLEMENTED', 'get cache', this.constructor.name);
  }

  /**
   * Resolves a data entry to a data Object.
   * @param {string|Object} idOrInstance The id or instance of something in this Manager
   * @returns {?Object} An instance from this Manager
   */
  resolve(idOrInstance: Resolvable | Holds): Holds | null {
    if (idOrInstance instanceof this.holds) return idOrInstance;
    if (typeof idOrInstance === 'string') return this.cache.get(idOrInstance as unknown as K) ?? null;
    return null;
  }

  /**
   * Resolves a data entry to an instance id.
   * @param {string|Object} idOrInstance The id or instance of something in this Manager
   * @returns {?Snowflake}
   */
  resolveId(idOrInstance: Resolvable | Holds): K | null {
    if (idOrInstance instanceof this.holds) return idOrInstance.id;
    if (typeof idOrInstance === 'string') return idOrInstance as unknown as K;
    return null;
  }

  valueOf(): Collection<K, Holds> {
    return this.cache;
  }
}

export default DataManager;
