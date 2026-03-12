import { EventEmitter } from 'node:events';
import process from 'node:process';
import RESTManager from '../rest/RESTManager';
import type { APIRouteProxy } from '../rest/APIRouter';
import Options from '../util/Options';
import Util from '../util/Util';

export interface ClientOptions extends Record<string, unknown> {
  intents?: unknown;
}

/**
 * The base class for all clients.
 * @extends {EventEmitter}
 */
class BaseClient extends EventEmitter {
  public options: ClientOptions;

  public rest: RESTManager;

  constructor(options: ClientOptions = {}) {
    super({ captureRejections: true });

    if (options.intents) {
      process.emitWarning('Intents is not available.', 'DeprecationWarning');
    }

    /**
     * The options the client was instantiated with
     * @type {ClientOptions}
     */
    this.options = Util.mergeDefault(Options.createDefault(), options);

    /**
     * The REST manager of the client
     * @type {RESTManager}
     * @private
     */
    this.rest = new RESTManager(this);
  }

  /**
   * API shortcut
   * @type {Object}
   * @readonly
   * @private
   */
  get api(): APIRouteProxy {
    return this.rest.api;
  }

  /**
   * Destroys all assets used by the base client.
   * @returns {void}
   */
  destroy(): void {
    if (this.rest.sweepInterval) clearInterval(this.rest.sweepInterval);
  }

  /**
   * Increments max listeners by one, if they are not zero.
   * @private
   */
  incrementMaxListeners(): void {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners + 1);
    }
  }

  /**
   * Decrements max listeners by one, if they are not zero.
   * @private
   */
  decrementMaxListeners(): void {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners - 1);
    }
  }

  toJSON(...props: Record<string, boolean | string>[]): Record<string, unknown> {
    return Util.flatten(this as any, { domain: false }, ...props);
  }
}

export default BaseClient;

/**
 * Emitted for general debugging information.
 * @event BaseClient#debug
 * @param {string} info The debug information
 */
