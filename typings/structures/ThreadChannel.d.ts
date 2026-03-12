import { Channel } from './Channel';
/**
 * Represents a thread channel on Discord.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */
declare class ThreadChannel extends Channel {
    constructor(guild: any, data: any, client: any);
    _patch(data: any, partial?: boolean): void;
    /**
     * The timestamp when this thread was created. This isn't available for threads
     * created before 2022-01-09
     * @type {?number}
     * @readonly
     */
    get createdTimestamp(): any;
    /**
     * A collection of associated guild member objects of this thread's members
     * @type {Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get guildMembers(): any;
    /**
     * The time at which this thread's archive status was last changed
     * <info>If the thread was never archived or unarchived, this is the time at which the thread was created</info>
     * @type {?Date}
     * @readonly
     */
    get archivedAt(): Date;
    /**
     * The time the thread was created at
     * @type {?Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The parent channel of this thread
     * @type {?(NewsChannel|TextChannel|ForumChannel|MediaChannel)}
     * @readonly
     */
    get parent(): any;
    /**
     * Makes the client user join the thread.
     * @returns {Promise<ThreadChannel>}
     */
    join(): Promise<this>;
    /**
     * Makes the client user leave the thread.
     * @returns {Promise<ThreadChannel>}
     */
    leave(): Promise<this>;
    /**
     * Gets the overall set of permissions for a member or role in this thread's parent channel, taking overwrites into
     * account.
     * @param {GuildMemberResolvable|RoleResolvable} memberOrRole The member or role to obtain the overall permissions for
     * @param {boolean} [checkAdmin=true] Whether having `ADMINISTRATOR` will return all permissions
     * @returns {?Readonly<Permissions>}
     */
    permissionsFor(memberOrRole: any, checkAdmin: any): any;
    /**
     * Fetches the owner of this thread. If the thread member object isn't needed,
     * use {@link ThreadChannel#ownerId} instead.
     * @param {BaseFetchOptions} [options] The options for fetching the member
     * @returns {Promise<?ThreadMember>}
     */
    fetchOwner({ cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<any>;
    /**
     * Fetches the message that started this thread, if any.
     * <info>The `Promise` will reject if the original message in a forum post is deleted
     * or when the original message in the parent channel is deleted.
     * If you just need the id of that message, use {@link ThreadChannel#id} instead.</info>
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<Message|null>}
     */
    fetchStarterMessage(options: any): Promise<any>;
    /**
     * The options used to edit a thread channel
     * @typedef {Object} ThreadEditData
     * @property {string} [name] The new name for the thread
     * @property {boolean} [archived] Whether the thread is archived
     * @property {ThreadAutoArchiveDuration} [autoArchiveDuration] The amount of time (in minutes) after which the thread
     * should automatically archive in case of no recent activity
     * @property {number} [rateLimitPerUser] The rate limit per user (slowmode) for the thread in seconds
     * @property {boolean} [locked] Whether the thread is locked
     * @property {boolean} [invitable] Whether non-moderators can add other non-moderators to a thread
     * <info>Can only be edited on `GUILD_PRIVATE_THREAD`</info>
     * @property {Snowflake[]} [appliedTags] The tags to apply to the thread
     * @property {ChannelFlagsResolvable} [flags] The flags to set on the channel
     */
    /**
     * Edits this thread.
     * @param {ThreadEditData} data The new data for this thread
     * @param {string} [reason] Reason for editing this thread
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Edit a thread
     * thread.edit({ name: 'new-thread' })
     *   .then(editedThread => console.log(editedThread))
     *   .catch(console.error);
     */
    edit(data: any, reason: any): Promise<any>;
    /**
     * Sets whether the thread is archived.
     * @param {boolean} [archived=true] Whether the thread is archived
     * @param {string} [reason] Reason for archiving or unarchiving
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Archive the thread
     * thread.setArchived(true)
     *   .then(newThread => console.log(`Thread is now ${newThread.archived ? 'archived' : 'active'}`))
     *   .catch(console.error);
     */
    setArchived(archived: boolean, reason: any): Promise<any>;
    /**
     * Sets the duration after which the thread will automatically archive in case of no recent activity.
     * @param {ThreadAutoArchiveDuration} autoArchiveDuration The amount of time (in minutes) after which the thread
     * should automatically archive in case of no recent activity
     * @param {string} [reason] Reason for changing the auto archive duration
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Set the thread's auto archive time to 1 hour
     * thread.setAutoArchiveDuration(60)
     *   .then(newThread => {
     *     console.log(`Thread will now archive after ${newThread.autoArchiveDuration} minutes of inactivity`);
     *    });
     *   .catch(console.error);
     */
    setAutoArchiveDuration(autoArchiveDuration: any, reason: any): Promise<any>;
    /**
     * Sets whether members without the `MANAGE_THREADS` permission can invite other members without the
     * `MANAGE_THREADS` permission to this thread.
     * @param {boolean} [invitable=true] Whether non-moderators can invite non-moderators to this thread
     * @param {string} [reason] Reason for changing invite
     * @returns {Promise<ThreadChannel>}
     */
    setInvitable(invitable: boolean, reason: any): Promise<any>;
    /**
     * Sets whether the thread can be **unarchived** by anyone with `SEND_MESSAGES` permission.
     * When a thread is locked only members with `MANAGE_THREADS` can unarchive it.
     * @param {boolean} [locked=true] Whether the thread is locked
     * @param {string} [reason] Reason for locking or unlocking the thread
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Set the thread to locked
     * thread.setLocked(true)
     *   .then(newThread => console.log(`Thread is now ${newThread.locked ? 'locked' : 'unlocked'}`))
     *   .catch(console.error);
     */
    setLocked(locked: boolean, reason: any): Promise<any>;
    /**
     * Sets a new name for this thread.
     * @param {string} name The new name for the thread
     * @param {string} [reason] Reason for changing the thread's name
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Change the thread's name
     * thread.setName('not_general')
     *   .then(newThread => console.log(`Thread's new name is ${newThread.name}`))
     *   .catch(console.error);
     */
    setName(name: any, reason: any): Promise<any>;
    /**
     * Sets the rate limit per user (slowmode) for this thread.
     * @param {number} rateLimitPerUser The new rate limit in seconds
     * @param {string} [reason] Reason for changing the thread's rate limit
     * @returns {Promise<ThreadChannel>}
     */
    setRateLimitPerUser(rateLimitPerUser: any, reason: any): Promise<any>;
    /**
     * Pins this thread from the forum channel.
     * @param {string} [reason] Reason for pinning
     * @returns {Promise<ThreadChannel>}
     */
    pin(reason: any): Promise<any>;
    /**
     * Unpins this thread from the forum channel.
     * @param {string} [reason] Reason for unpinning
     * @returns {Promise<ThreadChannel>}
     */
    unpin(reason: any): Promise<any>;
    /**
     * Set the applied tags for this channel (only applicable to forum threads)
     * @param {Snowflake[]} appliedTags The tags to set for this channel
     * @param {string} [reason] Reason for changing the thread's applied tags
     * @returns {Promise<ThreadChannel>}
     */
    setAppliedTags(appliedTags: any, reason: any): Promise<any>;
    /**
     * Whether the client user is a member of the thread.
     * @type {boolean}
     * @readonly
     */
    get joined(): any;
    /**
     * Whether the thread is editable by the client user (name, archived, autoArchiveDuration)
     * @type {boolean}
     * @readonly
     */
    get editable(): any;
    /**
     * Whether the thread is joinable by the client user
     * @type {boolean}
     * @readonly
     */
    get joinable(): any;
    /**
     * Whether the thread is manageable by the client user, for deleting or editing rateLimitPerUser or locked.
     * @type {boolean}
     * @readonly
     */
    get manageable(): any;
    /**
     * Whether the thread is viewable by the client user
     * @type {boolean}
     * @readonly
     */
    get viewable(): any;
    /**
     * Whether the client user can send messages in this thread
     * @type {boolean}
     * @readonly
     */
    get sendable(): boolean;
    /**
     * Whether the thread is unarchivable by the client user
     * @type {boolean}
     * @readonly
     */
    get unarchivable(): any;
    /**
     * Whether this thread is a private thread
     * @returns {boolean}
     */
    isPrivate(): boolean;
    /**
     * Deletes this thread.
     * @param {string} [reason] Reason for deleting this thread
     * @returns {Promise<ThreadChannel>}
     * @example
     * // Delete the thread
     * thread.delete('cleaning out old threads')
     *   .then(deletedThread => console.log(deletedThread))
     *   .catch(console.error);
     */
    delete(reason: any): Promise<this>;
    get lastMessage(): void;
    get lastPinAt(): void;
    send(): void;
    sendTyping(): void;
    createMessageCollector(): void;
    awaitMessages(): void;
}
export default ThreadChannel;
