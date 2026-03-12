import { Collection } from '@discordjs/collection';
import { Channel } from './Channel';
import Invite from './Invite';
/**
 * Represents a Group DM Channel on Discord.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */
declare class GroupDMChannel extends Channel {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The URL to this channel's icon.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size }?: {}): any;
    /**
     * The recipients of this Group DM Channel.
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get recipients(): Collection<unknown, unknown>;
    /**
     * The owner of this Group DM Channel
     * @type {?User}
     * @readonly
     */
    get owner(): any;
    /**
     * Whether this DMChannel is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * Leave this Group DM Channel.
     * @param {?boolean} slient Leave without notifying other members
     * @returns {Promise<GroupDMChannel>}
     * @example
     * // Delete the channel
     * channel.delete()
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(slient?: boolean): Promise<this>;
    /**
     * When concatenated with a string, this automatically returns the recipient's mention instead of the
     * GroupDMChannel object.
     * @returns {string}
     * @example
     * // Logs: Hello from Group Test!
     * console.log(`Hello from ${channel}!`);
     */
    toString(): any;
    toJSON(): unknown;
    /**
     * The data for editing a channe;.
     * @typedef {Object} GroupDMChannelEditData
     * @property {string} [name] The name of the channel
     * @property {?(BufferResolvable|Base64Resolvable)} [icon] The icon of the channel
     * @property {GuildMemberResolvable} [owner] The owner of the channel
     */
    /**
     * Edit channel data
     * @param {GroupDMChannelEditData} data Data
     * @returns {Promise<GroupDMChannel>}
     * @example
     * // Set the channel name
     * channel.edit({
     *   name: 'Group Test',
     * })
     *   .then(updated => console.log(`New channel name ${updated}`))
     *   .catch(console.error);
     */
    edit(data: any): Promise<any>;
    /**
     * Renames this Group DM Channel.
     * @param {?string} name Name of the channel
     * @returns {Promise<GroupDMChannel>}
     */
    setName(name: any): Promise<any>;
    /**
     * Sets the icon of this Group DM Channel.
     * @param {?(Base64Resolvable|BufferResolvable)} icon Icon of the channel
     * @returns {Promise<GroupDMChannel>}
     */
    setIcon(icon: any): Promise<any>;
    /**
     * Changes the owner of this Group DM Channel.
     * @param {UserResolvable} user User to transfer ownership to
     * @returns {Promise<GroupDMChannel>}
     */
    setOwner(user: any): Promise<any>;
    /**
     * Adds a user to this Group DM Channel.
     * @param {UserResolvable} user User to add to the group
     * @returns {Promise<GroupDMChannel>}
     */
    addUser(user: any): Promise<this>;
    /**
     * Removes a user from this Group DM Channel.
     * @param {UserResolvable} user User to remove from the group
     * @returns {Promise<GroupDMChannel>}
     */
    removeUser(user: any): Promise<this>;
    /**
     * Gets the invite for this Group DM Channel.
     * @returns {Promise<Invite>}
     */
    getInvite(): Promise<Invite>;
    /**
     * Get all the invites for this Group DM Channel.
     * @returns {Promise<Collection<string, Invite>>}
     */
    fetchAllInvite(): Promise<Collection<unknown, unknown>>;
    /**
     * Delete invites from this Group DM Channel.
     * @param {InviteResolvable} invite Invite to add to the channel
     * @returns {Promise<GroupDMChannel>}
     */
    removeInvite(invite: any): Promise<this>;
    /**
     * Ring the user's phone / PC (call)
     * @param {UserResolvable[]} [recipients] Array of recipients
     * @returns {Promise<void>}
     */
    ring(recipients: any): any;
    /**
     * Sync VoiceState of this Group DMChannel.
     * @returns {undefined}
     */
    sync(): void;
    /**
     * The user in this voice-based channel
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get voiceUsers(): Collection<unknown, unknown>;
    /**
     * Get current shard
     * @type {WebSocketShard}
     * @readonly
     */
    get shard(): any;
    /**
     * The voice state adapter for this client that can be used with @discordjs/voice to play audio in DM / Group DM channels.
     * @type {?Function}
     * @readonly
     */
    get voiceAdapterCreator(): (methods: any) => {
        sendPayload: (data: any) => boolean;
        destroy: () => void;
    };
    get lastMessage(): void;
    get lastPinAt(): void;
    send(): void;
    sendTyping(): void;
    createMessageCollector(): void;
    awaitMessages(): void;
}
export default GroupDMChannel;
