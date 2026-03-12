import EventEmitter from 'node:events';
import { Collection } from '@discordjs/collection';
/**
 * Filter to be applied to the collector.
 * @typedef {Function} CollectorFilter
 * @param {...*} args Any arguments received by the listener
 * @param {Collection} collection The items collected by this collector
 * @returns {boolean|Promise<boolean>}
 */
/**
 * Options to be applied to the collector.
 * @typedef {Object} CollectorOptions
 * @property {CollectorFilter} [filter] The filter applied to this collector
 * @property {number} [time] How long to run the collector for in milliseconds
 * @property {number} [idle] How long to stop the collector after inactivity in milliseconds
 * @property {boolean} [dispose=false] Whether to dispose data when it's deleted
 */
/**
 * Abstract class for defining a new Collector.
 * @extends {EventEmitter}
 * @abstract
 */
declare class Collector extends EventEmitter {
    readonly client: any;
    filter: (...args: any[]) => boolean | Promise<boolean>;
    options: any;
    collected: Collection<any, any>;
    ended: boolean;
    private _timeout;
    private _idletimeout;
    constructor(client: any, options?: any);
    /**
     * Call this to handle an event as a collectable element. Accepts any event data as parameters.
     * @param {...*} args The arguments emitted by the listener
     * @returns {Promise<void>}
     * @emits Collector#collect
     */
    handleCollect(...args: any[]): Promise<void>;
    /**
     * Call this to remove an element from the collection. Accepts any event data as parameters.
     * @param {...*} args The arguments emitted by the listener
     * @returns {Promise<void>}
     * @emits Collector#dispose
     */
    handleDispose(...args: any[]): Promise<void>;
    /**
     * Returns a promise that resolves with the next collected element;
     * rejects with collected elements if the collector finishes without receiving a next element
     * @type {Promise}
     * @readonly
     */
    get next(): Promise<unknown>;
    /**
     * Stops this collector and emits the `end` event.
     * @param {string} [reason='user'] The reason this collector is ending
     * @emits Collector#end
     */
    stop(reason?: string): void;
    /**
     * Options used to reset the timeout and idle timer of a {@link Collector}.
     * @typedef {Object} CollectorResetTimerOptions
     * @property {number} [time] How long to run the collector for (in milliseconds)
     * @property {number} [idle] How long to wait to stop the collector after inactivity (in milliseconds)
     */
    /**
     * Resets the collector's timeout and idle timer.
     * @param {CollectorResetTimerOptions} [options] Options for resetting
     */
    resetTimer({ time, idle }?: {
        time?: number;
        idle?: number;
    }): void;
    /**
     * Checks whether the collector should end, and if so, ends it.
     * @returns {boolean} Whether the collector ended or not
     */
    checkEnd(): boolean;
    /**
     * Allows collectors to be consumed with for-await-of loops
     * @see {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for-await...of}
     */
    [Symbol.asyncIterator](): AsyncGenerator<any, void, unknown>;
    toJSON(): any;
    /**
     * The reason this collector has ended with, or null if it hasn't ended yet
     * @type {?string}
     * @readonly
     * @abstract
     */
    get endReason(): string | null;
    /**
     * Handles incoming events from the `handleCollect` function. Returns null if the event should not
     * be collected, or returns an object describing the data that should be stored.
     * @see Collector#handleCollect
     * @param {...*} args Any args the event listener emits
     * @returns {?(*|Promise<?*>)} Data to insert into collection, if any
     * @abstract
     */
    collect(...args: any[]): any;
    /**
     * Handles incoming events from the `handleDispose`. Returns null if the event should not
     * be disposed, or returns the key that should be removed.
     * @see Collector#handleDispose
     * @param {...*} args Any args the event listener emits
     * @returns {?*} Key to remove from the collection, if any
     * @abstract
     */
    dispose(...args: any[]): any;
}
export default Collector;
