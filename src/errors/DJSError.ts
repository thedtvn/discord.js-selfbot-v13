// Heavily inspired by node's `internal/errors` module

const kCode = Symbol('code');

type MessageFactory = (...args: unknown[]) => string;
type MessageValue = string | MessageFactory;

const messages = new Map<string, MessageValue>();

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
export function makeDiscordjsError<T extends Error>(Base: ErrorClass<T>): DiscordjsErrorConstructor<T> {
  return class DiscordjsError extends (Base as any) {
    private [kCode]: string;

    public constructor(key: string, ...args: unknown[]) {
      super(message(key, args));
      this[kCode] = key;
      if ((Error as any).captureStackTrace) (Error as any).captureStackTrace(this, DiscordjsError);
    }

    public get name(): string {
      return `${super.name} [${this[kCode]}]`;
    }

    public get code(): string {
      return this[kCode];
    }
  } as unknown as DiscordjsErrorConstructor<T>;
}

/**
 * Format the message for an error.
 * @param {string} key Error key
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */
export function message(key: string, args: unknown[]): string {
  if (typeof key !== 'string') throw new Error('Error message key must be a string');
  const msg = messages.get(key);
  if (!msg) throw new Error(`An invalid error message key was used: ${key}.`);
  if (typeof msg === 'function') return msg(...args);
  if (!args?.length) return msg;
  args.unshift(msg);
  return String(...args);
}

/**
 * Register an error code and message.
 * @param {string} sym Unique name for the error
 * @param {*} val Value of the error
 */
export function register(sym: string, val: MessageValue): void {
  messages.set(sym, typeof val === 'function' ? val : String(val));
}

export const Error = makeDiscordjsError(globalThis.Error);
export const TypeError = makeDiscordjsError(globalThis.TypeError);
export const RangeError = makeDiscordjsError(globalThis.RangeError);

export default {
  register,
  Error,
  TypeError,
  RangeError,
};
