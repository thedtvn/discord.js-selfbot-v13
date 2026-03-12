import { EventEmitter } from 'node:events';
import { type ChildProcess } from 'node:child_process';
import { Worker } from 'node:worker_threads';
import type ShardingManager from './ShardingManager';
export interface ShardRespawnOptions {
    delay?: number;
    timeout?: number;
}
type Child = ChildProcess | Worker;
type MessagePayload = Record<string, unknown>;
/**
 * A self-contained shard created by the {@link ShardingManager}. Each one has a {@link ChildProcess} that contains
 * an instance of the bot and its {@link Client}. When its child process/worker exits for any reason, the shard will
 * spawn a new one to replace it as necessary.
 * @extends {EventEmitter}
 * @deprecated
 */
declare class Shard extends EventEmitter {
    manager: ShardingManager;
    id: number;
    args: string[];
    execArgv: string[];
    env: NodeJS.ProcessEnv;
    ready: boolean;
    process: ChildProcess | null;
    worker: Worker | null;
    private _evals;
    private _fetches;
    private _exitListener;
    constructor(manager: ShardingManager, id: number);
    /**
     * Forks a child process or creates a worker thread for the shard.
     * <warn>You should not need to call this manually.</warn>
     * @param {number} [timeout=30000] The amount in milliseconds to wait until the {@link Client} has become ready
     * before resolving (`-1` or `Infinity` for no wait)
     * @returns {Promise<ChildProcess>}
     */
    spawn(timeout?: number): Promise<Child>;
    /**
     * Immediately kills the shard's process/worker and does not restart it.
     */
    kill(): void;
    /**
     * Options used to respawn a shard.
     * @typedef {Object} ShardRespawnOptions
     * @property {number} [delay=500] How long to wait between killing the process/worker and
     * restarting it (in milliseconds)
     * @property {number} [timeout=30000] The amount in milliseconds to wait until the {@link Client}
     * has become ready before resolving (`-1` or `Infinity` for no wait)
     */
    /**
     * Kills and restarts the shard's process/worker.
     * @param {ShardRespawnOptions} [options] Options for respawning the shard
     * @returns {Promise<ChildProcess>}
     */
    respawn({ delay, timeout }?: ShardRespawnOptions): Promise<Child>;
    /**
     * Sends a message to the shard's process/worker.
     * @param {*} message Message to send to the shard
     * @returns {Promise<Shard>}
     */
    send(message: unknown): Promise<Shard>;
    /**
     * Fetches a client property value of the shard.
     * @param {string} prop Name of the client property to get, using periods for nesting
     * @returns {Promise<*>}
     * @example
     * shard.fetchClientValue('guilds.cache.size')
     *   .then(count => console.log(`${count} guilds in shard ${shard.id}`))
     *   .catch(console.error);
     */
    fetchClientValue(prop: string): Promise<unknown>;
    /**
     * Evaluates a script or function on the shard, in the context of the {@link Client}.
     * @param {string|Function} script JavaScript to run on the shard
     * @param {*} [context] The context for the eval
     * @returns {Promise<*>} Result of the script execution
     */
    eval(script: string | ((client: unknown, context: unknown) => unknown), context?: unknown): Promise<unknown>;
    /**
     * Handles a message received from the child process/worker.
     * @param {*} message Message received
     * @private
     */
    _handleMessage(message: MessagePayload | null | undefined): void;
    /**
     * Handles the shard's process/worker exiting.
     * @param {boolean} [respawn=this.manager.respawn] Whether to spawn the shard again
     * @param {number} [timeout] The amount in milliseconds to wait until the {@link Client}
     * has become ready (`-1` or `Infinity` for no wait)
     * @private
     */
    _handleExit(respawn?: boolean, timeout?: number): void;
    /**
     * Increments max listeners by one for a given emitter, if they are not zero.
     * @param {EventEmitter|process} emitter The emitter that emits the events.
     * @private
     */
    incrementMaxListeners(emitter: EventEmitter): void;
    /**
     * Decrements max listeners by one for a given emitter, if they are not zero.
     * @param {EventEmitter|process} emitter The emitter that emits the events.
     * @private
     */
    decrementMaxListeners(emitter: EventEmitter): void;
}
export default Shard;
