declare const process: any;
declare const Error: any;
declare const Events: any;
declare const Util: any;
/**
 * Helper class for sharded clients spawned as a child process/worker, such as from a {@link ShardingManager}.
 * Utilizes IPC to send and receive data to/from the master process and other shards.
 * @deprecated
 */
declare class ShardClientUtil {
    constructor(client: any, mode: any);
    /**
     * Array of shard ids of this client
     * @type {number[]}
     * @readonly
     */
    get ids(): any;
    /**
     * Total number of shards
     * @type {number}
     * @readonly
     */
    get count(): any;
    /**
     * Sends a message to the master process.
     * @param {*} message Message to send
     * @returns {Promise<void>}
     * @emits Shard#message
     */
    send(message: any): Promise<unknown>;
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
    fetchClientValues(prop: any, shard: any): Promise<unknown>;
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
    broadcastEval(script: any, options?: {}): Promise<unknown>;
    /**
     * Requests a respawn of all shards.
     * @param {MultipleShardRespawnOptions} [options] Options for respawning shards
     * @returns {Promise<void>} Resolves upon the message being sent
     * @see {@link ShardingManager#respawnAll}
     */
    respawnAll({ shardDelay, respawnDelay, timeout }?: {
        shardDelay?: number;
        respawnDelay?: number;
        timeout?: number;
    }): Promise<unknown>;
    /**
     * Handles an IPC message.
     * @param {*} message Message received
     * @private
     */
    _handleMessage(message: any): Promise<void>;
    /**
     * Sends a message to the master process, emitting an error from the client upon failure.
     * @param {string} type Type of response to send
     * @param {*} message Message to send
     * @private
     */
    _respond(type: any, message: any): void;
    /**
     * Creates/gets the singleton of this class.
     * @param {Client} client The client to use
     * @param {ShardingManagerMode} mode Mode the shard was spawned with
     * @returns {ShardClientUtil}
     */
    static singleton(client: any, mode: any): any;
    /**
     * Get the shard id for a given guild id.
     * @param {Snowflake} guildId Snowflake guild id to get shard id for
     * @param {number} shardCount Number of shards
     * @returns {number}
     */
    static shardIdForGuildId(guildId: any, shardCount: any): number;
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
