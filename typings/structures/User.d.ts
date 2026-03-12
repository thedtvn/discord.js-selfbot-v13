import Base from './Base';
/**
 * Represents a user on Discord.
 * @implements {TextBasedChannel}
 * @extends {Base}
 */
declare class User extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The primary clan the user is in
     * @type {?PrimaryGuild}
     * @deprecated Use `primaryGuild` instead
     */
    get clan(): any;
    /**
     * The user avatar decoration's hash
     * @type {?string}
     * @deprecated Use `avatarDecorationData` instead
     * Removed in v4
     */
    get avatarDecoration(): any;
    /**
     * Whether this User is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * The timestamp the user was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the user was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * A link to the user's avatar.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    avatarURL({ format, size, dynamic }?: {}): any;
    /**
     * A link to the user's avatar decoration.
     * @returns {?string}
     */
    avatarDecorationURL(): any;
    /**
     * A link to the user's guild tag badge.
     * @returns {?string}
     * @deprecated
     */
    clanBadgeURL(): any;
    /**
     * A link to the user's guild tag badge.
     * @returns {?string}
     */
    guildTagBadgeURL(): any;
    /**
     * A link to the user's default avatar
     * @type {string}
     * @readonly
     */
    get defaultAvatarURL(): any;
    /**
     * A link to the user's avatar if they have one.
     * Otherwise a link to their default avatar will be returned.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {string}
     */
    displayAvatarURL(options: any): any;
    /**
     * The hexadecimal version of the user accent color, with a leading hash
     * <info>The user must be force fetched for this property to be present</info>
     * @type {?string}
     * @readonly
     */
    get hexAccentColor(): any;
    /**
     * A link to the user's banner.
     * <info>This method will throw an error if called before the user is force fetched.
     * See {@link User#banner} for more info</info>
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    bannerURL({ format, size, dynamic }?: {}): any;
    /**
     * The tag of this user
     * <info>This user's username, or their legacy tag (e.g. `hydrabolt#0001`)
     * if they're using the legacy username system</info>
     * @type {?string}
     * @readonly
     */
    get tag(): any;
    /**
     * The global name of this user, or their username if they don't have one
     * @type {?string}
     * @readonly
     */
    get displayName(): any;
    /**
     * The DM between the client's user and this user
     * @type {?DMChannel}
     * @readonly
     */
    get dmChannel(): any;
    /**
     * Creates a DM channel between the client and the user.
     * @param {boolean} [force=false] Whether to skip the cache check and request the API
     * @returns {Promise<DMChannel>}
     */
    createDM(force?: boolean): any;
    /**
     * Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
     * @returns {Promise<DMChannel>}
     */
    deleteDM(): any;
    /**
     * Checks if the user is equal to another.
     * It compares id, username, discriminator, avatar, banner, accent color, and bot flags.
     * It is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.
     * @param {User} user User to compare with
     * @returns {boolean}
     */
    equals(user: any): boolean;
    /**
     * Compares the user with an API user object
     * @param {APIUser} user The API user object to compare
     * @returns {boolean}
     * @private
     */
    _equals(user: any): boolean;
    /**
     * Fetches this user.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<User>}
     */
    fetch(force?: boolean): any;
    /**
     * Returns a user profile object for a given user ID.
     * <info>This endpoint requires one of the following:
     * - The user is a bot
     * - The user shares a mutual guild with the current user
     * - The user is a friend of the current user
     * - The user is a friend suggestion of the current user
     * - The user has an outgoing friend request to the current user</info>
     * @param {Snowflake} [guildId] The guild ID to get the user's member profile in
     * @returns {Promise<Object>}
     * @see {@link https://discord-userdoccers.vercel.app/resources/user#response-body}
     */
    getProfile(guildId: any): any;
    /**
     * When concatenated with a string, this automatically returns the user's mention instead of the User object.
     * @returns {string}
     * @example
     * // Logs: Hello from <@123456789012345678>!
     * console.log(`Hello from ${user}!`);
     */
    toString(): string;
    toJSON(...props: any[]): unknown;
    /**
     * The function updates the note of a user and returns the updated user.
     * @param {string|null|undefined} [note=null] - The `note` parameter is the new value that you want to set for the note of the
     * user. It is an optional parameter and its default value is `null`.
     * @returns {Promise<User>} The `setNote` method is returning the `User` object.
     */
    setNote(note?: any): Promise<this>;
    /**
     * The function returns the note associated with a specific client ID from a cache.
     * @type {?string} The note that corresponds to the given id.
     */
    get note(): any;
    /**
     * The voice state of this member
     * @type {VoiceState}
     * @readonly
     */
    get voice(): any;
    /**
     * Send Friend Request to the user
     * @type {boolean}
     * @returns {Promise<boolean>}
     */
    sendFriendRequest(): any;
    /**
     * Unblock / Unfriend / Cancels a friend request
     * @type {boolean}
     * @returns {Promise<boolean>}
     */
    deleteRelationship(): any;
    /**
     * Check relationship status (Client -> User)
     * @type {RelationshipType}
     * @readonly
     */
    get relationship(): any;
    /**
     * Get friend nickname
     * @type {?string}
     * @readonly
     */
    get friendNickname(): any;
}
/**
 * @external APIUser
 * @see {@link https://discord.com/developers/docs/resources/user#user-object}
 */
export default User;
