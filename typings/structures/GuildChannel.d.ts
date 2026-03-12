import { Channel } from './Channel';
/**
 * Represents a guild channel from any of the following:
 * - {@link TextChannel}
 * - {@link VoiceChannel}
 * - {@link CategoryChannel}
 * - {@link NewsChannel}
 * - {@link StoreChannel}
 * - {@link StageChannel}
 * - {@link ForumChannel}
 * - {@link MediaChannel}
 * @extends {Channel}
 * @abstract
 */
declare class GuildChannel extends Channel {
    constructor(guild: any, data: any, client: any, immediatePatch?: boolean);
    _patch(data: any): void;
    _clone(): this;
    /**
     * The category parent of this channel
     * @type {?CategoryChannel}
     * @readonly
     */
    get parent(): any;
    /**
     * If the permissionOverwrites match the parent channel, null if no parent
     * @type {?boolean}
     * @readonly
     */
    get permissionsLocked(): boolean;
    /**
     * The position of the channel
     * @type {number}
     * @readonly
     */
    get position(): number;
    /**
     * Gets the overall set of permissions for a member or role in this channel, taking into account channel overwrites.
     * @param {GuildMemberResolvable|RoleResolvable} memberOrRole The member or role to obtain the overall permissions for
     * @param {boolean} [checkAdmin=true] Whether having `ADMINISTRATOR` will return all permissions
     * @returns {?Readonly<Permissions>}
     */
    permissionsFor(memberOrRole: any, checkAdmin?: boolean): Readonly<import("../util/BitField").default<"CREATE_INSTANT_INVITE" | "KICK_MEMBERS" | "BAN_MEMBERS" | "ADMINISTRATOR" | "MANAGE_CHANNELS" | "MANAGE_GUILD" | "ADD_REACTIONS" | "VIEW_AUDIT_LOG" | "PRIORITY_SPEAKER" | "STREAM" | "VIEW_CHANNEL" | "SEND_MESSAGES" | "SEND_TTS_MESSAGES" | "MANAGE_MESSAGES" | "EMBED_LINKS" | "ATTACH_FILES" | "READ_MESSAGE_HISTORY" | "MENTION_EVERYONE" | "USE_EXTERNAL_EMOJIS" | "VIEW_GUILD_INSIGHTS" | "CONNECT" | "SPEAK" | "MUTE_MEMBERS" | "DEAFEN_MEMBERS" | "MOVE_MEMBERS" | "USE_VAD" | "CHANGE_NICKNAME" | "MANAGE_NICKNAMES" | "MANAGE_ROLES" | "MANAGE_WEBHOOKS" | "MANAGE_EMOJIS_AND_STICKERS" | "USE_APPLICATION_COMMANDS" | "REQUEST_TO_SPEAK" | "MANAGE_EVENTS" | "MANAGE_THREADS" | "USE_PUBLIC_THREADS" | "CREATE_PUBLIC_THREADS" | "USE_PRIVATE_THREADS" | "CREATE_PRIVATE_THREADS" | "USE_EXTERNAL_STICKERS" | "SEND_MESSAGES_IN_THREADS" | "START_EMBEDDED_ACTIVITIES" | "MODERATE_MEMBERS" | "VIEW_CREATOR_MONETIZATION_ANALYTICS" | "USE_SOUNDBOARD" | "CREATE_GUILD_EXPRESSIONS" | "CREATE_EVENTS" | "USE_EXTERNAL_SOUNDS" | "SEND_VOICE_MESSAGES" | "USE_CLYDE_AI" | "SET_VOICE_CHANNEL_STATUS" | "SEND_POLLS" | "USE_EXTERNAL_APPS", bigint>>;
    overwritesFor(member: any, verified?: boolean, roles?: any): any[] | {
        everyone: any;
        roles: any[];
        member: any;
    };
    /**
     * Gets the overall set of permissions for a member in this channel, taking into account channel overwrites.
     * @param {GuildMember} member The member to obtain the overall permissions for
     * @param {boolean} checkAdmin=true Whether having `ADMINISTRATOR` will return all permissions
     * @returns {Readonly<Permissions>}
     * @private
     */
    memberPermissions(member: any, checkAdmin: any): Readonly<import("../util/BitField").default<"CREATE_INSTANT_INVITE" | "KICK_MEMBERS" | "BAN_MEMBERS" | "ADMINISTRATOR" | "MANAGE_CHANNELS" | "MANAGE_GUILD" | "ADD_REACTIONS" | "VIEW_AUDIT_LOG" | "PRIORITY_SPEAKER" | "STREAM" | "VIEW_CHANNEL" | "SEND_MESSAGES" | "SEND_TTS_MESSAGES" | "MANAGE_MESSAGES" | "EMBED_LINKS" | "ATTACH_FILES" | "READ_MESSAGE_HISTORY" | "MENTION_EVERYONE" | "USE_EXTERNAL_EMOJIS" | "VIEW_GUILD_INSIGHTS" | "CONNECT" | "SPEAK" | "MUTE_MEMBERS" | "DEAFEN_MEMBERS" | "MOVE_MEMBERS" | "USE_VAD" | "CHANGE_NICKNAME" | "MANAGE_NICKNAMES" | "MANAGE_ROLES" | "MANAGE_WEBHOOKS" | "MANAGE_EMOJIS_AND_STICKERS" | "USE_APPLICATION_COMMANDS" | "REQUEST_TO_SPEAK" | "MANAGE_EVENTS" | "MANAGE_THREADS" | "USE_PUBLIC_THREADS" | "CREATE_PUBLIC_THREADS" | "USE_PRIVATE_THREADS" | "CREATE_PRIVATE_THREADS" | "USE_EXTERNAL_STICKERS" | "SEND_MESSAGES_IN_THREADS" | "START_EMBEDDED_ACTIVITIES" | "MODERATE_MEMBERS" | "VIEW_CREATOR_MONETIZATION_ANALYTICS" | "USE_SOUNDBOARD" | "CREATE_GUILD_EXPRESSIONS" | "CREATE_EVENTS" | "USE_EXTERNAL_SOUNDS" | "SEND_VOICE_MESSAGES" | "USE_CLYDE_AI" | "SET_VOICE_CHANNEL_STATUS" | "SEND_POLLS" | "USE_EXTERNAL_APPS", bigint>>;
    /**
     * Gets the overall set of permissions for a role in this channel, taking into account channel overwrites.
     * @param {Role} role The role to obtain the overall permissions for
     * @param {boolean} checkAdmin Whether having `ADMINISTRATOR` will return all permissions
     * @returns {Readonly<Permissions>}
     * @private
     */
    rolePermissions(role: any, checkAdmin: any): Readonly<import("../util/BitField").default<"CREATE_INSTANT_INVITE" | "KICK_MEMBERS" | "BAN_MEMBERS" | "ADMINISTRATOR" | "MANAGE_CHANNELS" | "MANAGE_GUILD" | "ADD_REACTIONS" | "VIEW_AUDIT_LOG" | "PRIORITY_SPEAKER" | "STREAM" | "VIEW_CHANNEL" | "SEND_MESSAGES" | "SEND_TTS_MESSAGES" | "MANAGE_MESSAGES" | "EMBED_LINKS" | "ATTACH_FILES" | "READ_MESSAGE_HISTORY" | "MENTION_EVERYONE" | "USE_EXTERNAL_EMOJIS" | "VIEW_GUILD_INSIGHTS" | "CONNECT" | "SPEAK" | "MUTE_MEMBERS" | "DEAFEN_MEMBERS" | "MOVE_MEMBERS" | "USE_VAD" | "CHANGE_NICKNAME" | "MANAGE_NICKNAMES" | "MANAGE_ROLES" | "MANAGE_WEBHOOKS" | "MANAGE_EMOJIS_AND_STICKERS" | "USE_APPLICATION_COMMANDS" | "REQUEST_TO_SPEAK" | "MANAGE_EVENTS" | "MANAGE_THREADS" | "USE_PUBLIC_THREADS" | "CREATE_PUBLIC_THREADS" | "USE_PRIVATE_THREADS" | "CREATE_PRIVATE_THREADS" | "USE_EXTERNAL_STICKERS" | "SEND_MESSAGES_IN_THREADS" | "START_EMBEDDED_ACTIVITIES" | "MODERATE_MEMBERS" | "VIEW_CREATOR_MONETIZATION_ANALYTICS" | "USE_SOUNDBOARD" | "CREATE_GUILD_EXPRESSIONS" | "CREATE_EVENTS" | "USE_EXTERNAL_SOUNDS" | "SEND_VOICE_MESSAGES" | "USE_CLYDE_AI" | "SET_VOICE_CHANNEL_STATUS" | "SEND_POLLS" | "USE_EXTERNAL_APPS", bigint>>;
    /**
     * Locks in the permission overwrites from the parent channel.
     * @returns {Promise<GuildChannel>}
     */
    lockPermissions(): Promise<any>;
    /**
     * A collection of cached members of this channel, mapped by their ids.
     * Members that can view this channel, if the channel is text-based.
     * Members in the channel, if the channel is voice-based.
     * @type {Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get members(): any;
    /**
     * Edits the channel.
     * @param {ChannelData} data The new data for the channel
     * @param {string} [reason] Reason for editing this channel
     * @returns {Promise<GuildChannel>}
     * @example
     * // Edit a channel
     * channel.edit({ name: 'new-channel' })
     *   .then(console.log)
     *   .catch(console.error);
     */
    edit(data: any, reason: any): any;
    /**
     * Sets a new name for the guild channel.
     * @param {string} name The new name for the guild channel
     * @param {string} [reason] Reason for changing the guild channel's name
     * @returns {Promise<GuildChannel>}
     * @example
     * // Set a new channel name
     * channel.setName('not_general')
     *   .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
     *   .catch(console.error);
     */
    setName(name: any, reason: any): any;
    /**
     * Options used to set the parent of a channel.
     * @typedef {Object} SetParentOptions
     * @property {boolean} [lockPermissions=true] Whether to lock the permissions to what the parent's permissions are
     * @property {string} [reason] The reason for modifying the parent of the channel
     */
    /**
     * Sets the parent of this channel.
     * @param {?CategoryChannelResolvable} channel The category channel to set as the parent
     * @param {SetParentOptions} [options={}] The options for setting the parent
     * @returns {Promise<GuildChannel>}
     * @example
     * // Add a parent to a channel
     * message.channel.setParent('355908108431917066', { lockPermissions: false })
     *   .then(channel => console.log(`New parent of ${message.channel.name}: ${channel.name}`))
     *   .catch(console.error);
     */
    setParent(channel: any, { lockPermissions, reason }?: {
        lockPermissions?: boolean;
    }): any;
    /**
     * Options used to set the position of a channel.
     * @typedef {Object} SetChannelPositionOptions
     * @property {boolean} [relative=false] Whether or not to change the position relative to its current value
     * @property {string} [reason] The reason for changing the position
     */
    /**
     * Sets a new position for the guild channel.
     * @param {number} position The new position for the guild channel
     * @param {SetChannelPositionOptions} [options] Options for setting position
     * @returns {Promise<GuildChannel>}
     * @example
     * // Set a new channel position
     * channel.setPosition(2)
     *   .then(newChannel => console.log(`Channel's new position is ${newChannel.position}`))
     *   .catch(console.error);
     */
    setPosition(position: any, options?: {}): any;
    /**
     * Options used to clone a guild channel.
     * @typedef {GuildChannelCreateOptions} GuildChannelCloneOptions
     * @property {string} [name=this.name] Name of the new channel
     */
    /**
     * Clones this channel.
     * @param {GuildChannelCloneOptions} [options] The options for cloning this channel
     * @returns {Promise<GuildChannel>}
     */
    clone(options?: {}): any;
    /**
     * Checks if this channel has the same type, topic, position, name, overwrites, and id as another channel.
     * In most cases, a simple `channel.id === channel2.id` will do, and is much faster too.
     * @param {GuildChannel} channel Channel to compare with
     * @returns {boolean}
     */
    equals(channel: any): boolean;
    /**
     * Whether the channel is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): boolean;
    /**
     * Whether the channel is manageable by the client user
     * @type {boolean}
     * @readonly
     */
    get manageable(): boolean;
    /**
     * Whether the channel is viewable by the client user
     * @type {boolean}
     * @readonly
     */
    get viewable(): boolean;
    /**
     * Deletes this channel.
     * @param {string} [reason] Reason for deleting this channel
     * @returns {Promise<GuildChannel>}
     * @example
     * // Delete the channel
     * channel.delete('making room for new channels')
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(reason: any): Promise<this>;
}
export default GuildChannel;
