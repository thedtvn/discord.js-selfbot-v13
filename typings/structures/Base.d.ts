import type Client from '../client/Client';
/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @abstract
 */
declare class Base {
    readonly client: Client;
    constructor(client: Client);
    _clone(): this;
    _patch<T>(data: T): T;
    _update<T>(data: T): this;
    toJSON(...props: any[]): any;
    valueOf(): string | undefined;
}
export default Base;
