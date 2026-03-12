'use strict';

import Util from '../util/Util';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';

/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @abstract
 */
class Base {
  public declare readonly client: Client;

  constructor(client: Client) {
    /**
     * The client that instantiated this
     * @name Base#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
  }

  _clone(): this {
    return Object.assign(Object.create(this), this);
  }

  _patch<T>(data: T): T {
    return data;
  }

  _update<T>(data: T): this {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }

  toJSON(...props: any[]): any {
    return Util.flatten(this, ...props);
  }

  valueOf(): string | undefined {
    return (this as any).id;
  }
}

export default Base;
