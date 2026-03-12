import { type MessagePort } from 'node:worker_threads';
import type { BroadcastEvalOptions, MultipleShardRespawnOptions, ShardingManagerMode } from './ShardingManager';
type MessagePayload = Record<string, unknown>;
interface ShardClient {
    options: {
        shards: number[];
        shardCount: number;
    };
    _eval(script: string): Promise<unknown>;
    on(event: string, listener: (...args: unknown[]) => void): this;
    emit(event: string, ...args: unknown[]): boolean;
}
/**
 * Helper class for sharded clients spawned as a child process/worker, such as from a {@link ShardingManager}.
 * Utilizes IPC to send and receive data to/from the master process and other shards.
 * @deprecated
 */
declare class ShardClientUtil {
    private static _singleton;
    client: ShardClient;
    mode: ShardingManagerMode;
    parentPort: MessagePort | null;
    constructor(client: ShardClient, mode: ShardingManagerMode);
    /**
     * Array of shard ids of this client
     * @type {number[]}
     * @readonly
     */
    get ids(): number[];
    /**
     * Total number of shards
     * @type {number}
     * @readonly
     */
    get count(): number;
    /**
     * Sends a message to the master process.
     * @param {*} message Message to send
     * @returns {Promise<void>}
     * @emits Shard#message
     */
    send(message: unknown): Promise<void>;
    /**
     * Fetches a client property value of each shard, or a given shard.
     * @param {string} prop Name of the client property to get, using periods for nesting
     * @param {number} [shard] Shard to fetch property from, all if undefined
     * @returns {Promise<*|Array<*>>}
     * @example
     * client.shard.fetchClientValues('guilds.cache.size')
     *   .then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`))
     *   .catch(console.error);
     * @see {@link ShardingManager#fetchClientValues}
     */
    fetchClientValues(prop: string, shard?: number): Promise<unknown | unknown[]>;
    /**
     * Evaluates a script or function on all shards, or a given shard, in the context of the {@link Client}s.
     * @param {Function} script JavaScript to run on each shard
     * @param {BroadcastEvalOptions} [options={}] The options for the broadcast
     * @returns {Promise<*|Array<*>>} Results of the script execution
     * @example
     * client.shard.broadcastEval(client => client.guilds.cache.size)
     *   .then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`))
     *   .catch(console.error);
     * @see {@link ShardingManager#broadcastEval}
     */
    broadcastEval(script: (client: unknown, context: unknown) => unknown, options?: BroadcastEvalOptions): Promise<unknown | unknown[]>;
    /**
     * Requests a respawn of all shards.
     * @param {MultipleShardRespawnOptions} [options] Options for respawning shards
     * @returns {Promise<void>} Resolves upon the message being sent
     * @see {@link ShardingManager#respawnAll}
     */
    respawnAll({ shardDelay, respawnDelay, timeout }?: MultipleShardRespawnOptions): Promise<void>;
    /**
     * Handles an IPC message.
     * @param {*} message Message received
     * @private
     */
    _handleMessage(message: MessagePayload | null | undefined): Promise<void>;
    /**
     * Sends a message to the master process, emitting an error from the client upon failure.
     * @param {string} type Type of response to send
     * @param {*} message Message to send
     * @private
     */
    _respond(type: string, message: MessagePayload): void;
    /**
     * Creates/gets the singleton of this class.
     * @param {Client} client The client to use
     * @param {ShardingManagerMode} mode Mode the shard was spawned with
     * @returns {ShardClientUtil}
     */
    static singleton(client: ShardClient, mode: ShardingManagerMode): ShardClientUtil;
    /**
     * Get the shard id for a given guild id.
     * @param {Snowflake} guildId Snowflake guild id to get shard id for
     * @param {number} shardCount Number of shards
     * @returns {number}
     */
    static shardIdForGuildId(guildId: string, shardCount: number): number;
    /**
     * Increments max listeners by one for a given emitter, if they are not zero.
     * @param {EventEmitter|process} emitter The emitter that emits the events.
     * @private
     */
    incrementMaxListeners(emitter: any): void;
    /**
     * Decrements max listeners by one for a given emitter, if they are not zero.
     * @param {EventEmitter|process} emitter The emitter that emits the events.
     * @private
     */
    decrementMaxListeners(emitter: any): void;
}
export default ShardClientUtil;
