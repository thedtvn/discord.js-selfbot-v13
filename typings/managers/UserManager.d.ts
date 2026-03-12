import CachedManager from './CachedManager';
/**
 * Manages API methods for users and stores their cache.
 * @extends {CachedManager}
 */
declare class UserManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, User>}
     * @name UserManager#cache
     */
    /**
     * Data that resolves to give a User object. This can be:
     * * A User object
     * * A Snowflake
     * * A Message object (resolves to the message author)
     * * A GuildMember object
     * * A ThreadMember object
     * @typedef {User|Snowflake|Message|GuildMember|ThreadMember} UserResolvable
     */
    /**
     * The DM between the client's user and a user
     * @param {Snowflake} userId The user id
     * @returns {?DMChannel}
     * @private
     */
    dmChannel(userId: any): any;
    /**
     * Creates a {@link DMChannel} between the client and a user.
     * @param {UserResolvable} user The UserResolvable to identify
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<DMChannel>}
     */
    createDM(user: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<any>;
    /**
     * Deletes a {@link DMChannel} (if one exists) between the client and a user. Resolves with the channel if successful.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {Promise<DMChannel>}
     */
    deleteDM(user: any): Promise<any>;
    /**
     * Obtains a user from Discord, or the user cache if it's already available.
     * @param {UserResolvable} user The user to fetch
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<User>}
     */
    fetch(user: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Sends a message to a user.
     * @param {UserResolvable} user The UserResolvable to identify
     * @param {string|MessagePayload|MessageOptions} options The options to provide
     * @returns {Promise<Message>}
     */
    send(user: any, options: any): Promise<any>;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} object.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?User}
     */
    resolve(user: any): any;
    /**
     * Resolves a {@link UserResolvable} to a {@link User} id.
     * @param {UserResolvable} user The UserResolvable to identify
     * @returns {?Snowflake}
     */
    resolveId(user: any): any;
}
export default UserManager;
