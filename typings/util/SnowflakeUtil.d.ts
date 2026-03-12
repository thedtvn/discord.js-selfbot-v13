export type Snowflake = string;
export interface DeconstructedSnowflake {
    timestamp: number;
    date: Date;
    workerId: number;
    processId: number;
    increment: number;
    binary: string;
}
/**
 * A container for useful snowflake-related methods.
 */
declare class SnowflakeUtil extends null {
    /**
     * A {@link https://docs.x.com/resources/fundamentals/x-ids Twitter snowflake},
     * except the epoch is 2015-01-01T00:00:00.000Z.
     *
     * If we have a snowflake '266241948824764416' we can represent it as binary:
     * ```
     * 64                                          22     17     12          0
     *  000000111011000111100001101001000101000000  00001  00000  000000000000
     *  number of milliseconds since Discord epoch  worker  pid    increment
     * ```
     * @typedef {string} Snowflake
     */
    /**
     * Generates a Discord snowflake.
     * <info>This hardcodes the worker's id as 1 and the process's id as 0.</info>
     * @param {number|Date} [timestamp=Date.now()] Timestamp or date of the snowflake to generate
     * @returns {Snowflake} The generated snowflake
     */
    static generate(timestamp?: number | Date): Snowflake;
    /**
     * A deconstructed snowflake.
     * @typedef {Object} DeconstructedSnowflake
     * @property {number} timestamp Timestamp the snowflake was created
     * @property {Date} date Date the snowflake was created
     * @property {number} workerId The worker's id in the snowflake
     * @property {number} processId The process's id in the snowflake
     * @property {number} increment Increment in the snowflake
     * @property {string} binary Binary representation of the snowflake
     */
    /**
     * Deconstructs a Discord snowflake.
     * @param {Snowflake} snowflake Snowflake to deconstruct
     * @returns {DeconstructedSnowflake}
     */
    static deconstruct(snowflake: Snowflake): DeconstructedSnowflake;
    /**
     * Retrieves the timestamp field's value from a Discord snowflake.
     * @param {Snowflake} snowflake Snowflake to get the timestamp value from
     * @returns {number}
     */
    static timestampFrom(snowflake: Snowflake): number;
    /**
     * Discord's epoch value (2015-01-01T00:00:00.000Z).
     * @type {number}
     * @readonly
     */
    static get EPOCH(): number;
}
export default SnowflakeUtil;
