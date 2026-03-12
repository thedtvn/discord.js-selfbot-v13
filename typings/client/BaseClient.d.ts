import { EventEmitter } from 'node:events';
import RESTManager from '../rest/RESTManager';
export interface ClientOptions extends Record<string, unknown> {
    intents?: unknown;
}
/**
 * The base class for all clients.
 * @extends {EventEmitter}
 */
declare class BaseClient extends EventEmitter {
    options: ClientOptions;
    rest: RESTManager;
    constructor(options?: ClientOptions);
    /**
     * API shortcut
     * @type {Object}
     * @readonly
     * @private
     */
    get api(): unknown;
    /**
     * Destroys all assets used by the base client.
     * @returns {void}
     */
    destroy(): void;
    /**
     * Increments max listeners by one, if they are not zero.
     * @private
     */
    incrementMaxListeners(): void;
    /**
     * Decrements max listeners by one, if they are not zero.
     * @private
     */
    decrementMaxListeners(): void;
    toJSON(...props: unknown[]): Record<string, unknown>;
}
export default BaseClient;
/**
 * Emitted for general debugging information.
 * @event BaseClient#debug
 * @param {string} info The debug information
 */
