import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
type UserResolvableLike = {
    id?: Snowflake;
} | string;
/**
 * Manages API methods for Client and stores their cache.
 * @extends {BaseManager}
 */
declare class UserNoteManager extends BaseManager {
    cache: Collection<Snowflake, string>;
    constructor(client: Client, data?: Record<string, string>);
    _reload(data?: Record<string, string>): this;
    private resolveId;
    updateNote(id: Snowflake, note?: string | null): Promise<this>;
    /**
     * Obtains a user from Discord, or the user cache if it's already available.
     * @param {UserResolvable} user The user to fetch
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<string>}
     */
    fetch(user: UserResolvableLike, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<string>;
}
export default UserNoteManager;
