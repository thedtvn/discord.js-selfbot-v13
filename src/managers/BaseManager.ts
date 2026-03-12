import type Client from '../client/Client';

/**
 * Manages the API methods of a data model.
 * @abstract
 */
class BaseManager {
  public readonly client: Client;

  constructor(client: Client) {
    /**
     * The client that instantiated this Manager
     * @name BaseManager#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
  }
}

export default BaseManager;
