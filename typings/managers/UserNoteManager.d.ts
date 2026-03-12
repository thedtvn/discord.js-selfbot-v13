import BaseManager from './BaseManager';
/**
 * Manages API methods for Client and stores their cache.
 * @extends {BaseManager}
 */
declare class UserNoteManager extends BaseManager {
    constructor(client: any, data?: {});
    _reload(data?: {}): this;
    updateNote(id: any, note?: any): Promise<this>;
    /**
     * Obtains a user from Discord, or the user cache if it's already available.
     * @param {UserResolvable} user The user to fetch
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<string>}
     */
    fetch(user: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<any>;
}
export default UserNoteManager;
