import type Client from '../client/Client';
/**
 * Manages the API methods of a data model.
 * @abstract
 */
declare class BaseManager {
    readonly client: Client;
    constructor(client: Client);
}
export default BaseManager;
