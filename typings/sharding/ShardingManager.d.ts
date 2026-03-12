import { EventEmitter } from 'node:events';
import { Collection } from '@discordjs/collection';
import Shard from './Shard';
export type ShardingManagerMode = 'process' | 'worker';
export interface ShardingManagerOptions {
    totalShards?: number | 'auto';
    shardList?: number[] | 'auto';
    mode?: ShardingManagerMode;
    respawn?: boolean;
    shardArgs?: string[];
    execArgv?: string[];
    token?: string;
}
export interface MultipleShardSpawnOptions {
    amount?: number | 'auto';
    delay?: number;
    timeout?: number;
}
export interface BroadcastEvalOptions {
    shard?: number;
    context?: unknown;
}
export interface MultipleShardRespawnOptions {
    shardDelay?: number;
    respawnDelay?: number;
    timeout?: number;
}
/**
 * This is a utility class that makes multi-process sharding of a bot an easy and painless experience.
 * It works by spawning a self-contained {@link ChildProcess} or {@link Worker} for each individual shard, each
 * containing its own instance of your bot's {@link Client}. They all have a line of communication with the master
 * process, and there are several useful methods that utilize it in order to simplify tasks that are normally difficult
 * with sharding. It can spawn a specific number of shards or the amount that Discord suggests for the bot, and takes a
 * path to your main bot script to launch for each one.
 * @extends {EventEmitter}
 * @deprecated
 */
declare class ShardingManager extends EventEmitter {
    file: string;
    shardList: number[] | 'auto';
    totalShards: number | 'auto';
    mode: ShardingManagerMode;
    respawn: boolean;
    shardArgs: string[];
    execArgv: string[];
    token: string | null;
    shards: Collection<number, Shard>;
    /**
     * The mode to spawn shards with for a {@link ShardingManager}. Can be either one of:
     * * 'process' to use child processes
     * * 'worker' to use [Worker threads](https://nodejs.org/api/worker_threads.html)
     * @typedef {string} ShardingManagerMode
     */
    /**
     * The options to spawn shards with for a {@link ShardingManager}.
     * @typedef {Object} ShardingManagerOptions
     * @property {string|number} [totalShards='auto'] Number of total shards of all shard managers or "auto"
     * @property {string|number[]} [shardList='auto'] List of shards to spawn or "auto"
     * @property {ShardingManagerMode} [mode='process'] Which mode to use for shards
     * @property {boolean} [respawn=true] Whether shards should automatically respawn upon exiting
     * @property {string[]} [shardArgs=[]] Arguments to pass to the shard script when spawning
     * (only available when mode is set to 'process')
     * @property {string[]} [execArgv=[]] Arguments to pass to the shard script executable when spawning
     * (only available when mode is set to 'process')
     * @property {string} [token] Token to use for automatic shard count and passing to shards
     */
    /**
     * @param {string} file Path to your shard script file
     * @param {ShardingManagerOptions} [options] Options for the sharding manager
     */
    constructor(file: string, options?: ShardingManagerOptions);
    /**
     * Creates a single shard.
     * <warn>Using this method is usually not necessary if you use the spawn method.</warn>
     * @param {number} [id=this.shards.size] Id of the shard to create
     * <info>This is usually not necessary to manually specify.</info>
     * @returns {Shard} Note that the created shard needs to be explicitly spawned using its spawn method.
     */
    createShard(id?: number): Shard;
    /**
     * Options used to spawn multiple shards.
     * @typedef {Object} MultipleShardSpawnOptions
     * @property {number|string} [amount=this.totalShards] Number of shards to spawn
     * @property {number} [delay=5500] How long to wait in between spawning each shard (in milliseconds)
     * @property {number} [timeout=30000] The amount in milliseconds to wait until the {@link Client} has become ready
     */
    /**
     * Spawns multiple shards.
     * @param {MultipleShardSpawnOptions} [options] Options for spawning shards
     * @returns {Promise<Collection<number, Shard>>}
     */
    spawn({ amount, delay, timeout }?: MultipleShardSpawnOptions): Promise<Collection<number, Shard>>;
    /**
     * Sends a message to all shards.
     * @param {*} message Message to be sent to the shards
     * @returns {Promise<Shard[]>}
     */
    broadcast(message: unknown): Promise<Shard[]>;
    /**
     * Options for {@link ShardingManager#broadcastEval} and {@link ShardClientUtil#broadcastEval}.
     * @typedef {Object} BroadcastEvalOptions
     * @property {number} [shard] Shard to run script on, all if undefined
     * @property {*} [context] The JSON-serializable values to call the script with
     */
    /**
     * Evaluates a script on all shards, or a given shard, in the context of the {@link Client}s.
     * @param {Function} script JavaScript to run on each shard
     * @param {BroadcastEvalOptions} [options={}] The options for the broadcast
     * @returns {Promise<*|Array<*>>} Results of the script execution
     */
    broadcastEval(script: (client: unknown, context: unknown) => unknown, options?: BroadcastEvalOptions): Promise<unknown | unknown[]>;
    /**
     * Fetches a client property value of each shard, or a given shard.
     * @param {string} prop Name of the client property to get, using periods for nesting
     * @param {number} [shard] Shard to fetch property from, all if undefined
     * @returns {Promise<*|Array<*>>}
     * @example
     * manager.fetchClientValues('guilds.cache.size')
     *   .then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`))
     *   .catch(console.error);
     */
    fetchClientValues(prop: string, shard?: number): Promise<unknown | unknown[]>;
    /**
     * Runs a method with given arguments on all shards, or a given shard.
     * @param {string} method Method name to run on each shard
     * @param {Array<*>} args Arguments to pass through to the method call
     * @param {number} [shard] Shard to run on, all if undefined
     * @returns {Promise<*|Array<*>>} Results of the method execution
     * @private
     */
    _performOnShards(method: 'eval' | 'fetchClientValue', args: unknown[], shard?: number): Promise<unknown | unknown[]>;
    /**
     * Options used to respawn all shards.
     * @typedef {Object} MultipleShardRespawnOptions
     * @property {number} [shardDelay=5000] How long to wait between shards (in milliseconds)
     * @property {number} [respawnDelay=500] How long to wait between killing a shard's process and restarting it
     * (in milliseconds)
     * @property {number} [timeout=30000] The amount in milliseconds to wait for a shard to become ready before
     * continuing to another (`-1` or `Infinity` for no wait)
     */
    /**
     * Kills all running shards and respawns them.
     * @param {MultipleShardRespawnOptions} [options] Options for respawning shards
     * @returns {Promise<Collection<number, Shard>>}
     */
    respawnAll({ shardDelay, respawnDelay, timeout }?: MultipleShardRespawnOptions): Promise<Collection<number, Shard>>;
}
export default ShardingManager;
