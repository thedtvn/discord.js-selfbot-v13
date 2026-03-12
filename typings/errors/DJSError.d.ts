type MessageFactory = (...args: unknown[]) => string;
type MessageValue = string | MessageFactory;
export interface DiscordjsErrorLike extends Error {
    code: string;
}
type ErrorClass<T extends Error = Error> = abstract new (...args: unknown[]) => T;
export interface DiscordjsErrorConstructor<T extends Error = Error> {
    new (key: string, ...args: unknown[]): T & DiscordjsErrorLike;
}
/**
 * Extend an error of some sort into a DiscordjsError.
 * @param {Error} Base Base error to extend
 * @returns {DiscordjsError}
 */
export declare function makeDiscordjsError<T extends Error>(Base: ErrorClass<T>): DiscordjsErrorConstructor<T>;
/**
 * Format the message for an error.
 * @param {string} key Error key
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */
export declare function message(key: string, args: unknown[]): string;
/**
 * Register an error code and message.
 * @param {string} sym Unique name for the error
 * @param {*} val Value of the error
 */
export declare function register(sym: string, val: MessageValue): void;
export declare const Error: DiscordjsErrorConstructor<Error>;
export declare const TypeError: DiscordjsErrorConstructor<Error>;
export declare const RangeError: DiscordjsErrorConstructor<Error>;
declare const _default: {
    register: typeof register;
    Error: DiscordjsErrorConstructor<Error>;
    TypeError: DiscordjsErrorConstructor<Error>;
    RangeError: DiscordjsErrorConstructor<Error>;
};
export default _default;
