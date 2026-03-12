import Base from './Base';
import GuildMemberRoleManager from '../managers/GuildMemberRoleManager';
/**
 * @type {WeakSet<GuildMember>}
 * @private
 * @internal
 */
declare const deletedGuildMembers: WeakSet<WeakKey>;
/**
 * Represents a member of a guild on Discord.
 * @implements {TextBasedChannel}
 * @extends {Base}
 */
declare class GuildMember extends Base {
    constructor(client: any, data: any, guild: any);
    _patch(data: any): void;
    _clone(): this;
    /**
     * Whether or not the structure has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * Whether this GuildMember is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * A manager for the roles belonging to this member
     * @type {GuildMemberRoleManager}
     * @readonly
     */
    get roles(): GuildMemberRoleManager;
    /**
     * The voice state of this member
     * @type {VoiceState}
     * @readonly
     */
    get voice(): any;
    /**
     * A link to the user's avatar decoration.
     * @returns {?string}
     */
    avatarDecorationURL(): any;
    /**
     * A link to the member's guild avatar.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    avatarURL({ format, size, dynamic }?: {}): any;
    /**
     * A link to the member's banner.
     * @param {ImageURLOptions} [options={}] Options for the banner URL
     * @returns {?string}
     */
    bannerURL({ format, size, dynamic }?: {}): any;
    /**
     * A link to the member's guild avatar decoration if they have one.
     * Otherwise, a link to their {@link User#avatarDecorationURL} will be returned.
     * @returns {?string}
     */
    displayAvatarDecorationURL(): any;
    /**
     * A link to the member's guild avatar if they have one.
     * Otherwise, a link to their {@link User#displayAvatarURL} will be returned.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {string}
     */
    displayAvatarURL(options: any): any;
    /**
     * A link to the member's guild banner if they have one.
     * Otherwise, a link to their {@link User#bannerURL} will be returned.
     * @param {ImageURLOptions} [options={}] Options for the image URL
     * @returns {?string}
     */
    displayBannerURL(options: any): any;
    /**
     * The time this member joined the guild
     * @type {?Date}
     * @readonly
     */
    get joinedAt(): Date;
    /**
     * The time this member's timeout will be removed
     * @type {?Date}
     * @readonly
     */
    get communicationDisabledUntil(): Date;
    /**
     * The last time this member started boosting the guild
     * @type {?Date}
     * @readonly
     */
    get premiumSince(): Date;
    /**
     * The presence of this guild member
     * @type {?Presence}
     * @readonly
     */
    get presence(): any;
    /**
     * The displayed color of this member in base 10
     * @type {number}
     * @readonly
     */
    get displayColor(): any;
    /**
     * The displayed color of this member in hexadecimal
     * @type {string}
     * @readonly
     */
    get displayHexColor(): any;
    /**
     * The member's id
     * @type {Snowflake}
     * @readonly
     */
    get id(): any;
    /**
     * The nickname of this member, or their user display name if they don't have one
     * @type {?string}
     * @readonly
     */
    get displayName(): any;
    /**
     * The overall set of permissions for this member, taking only roles and owner status into account
     * @type {Readonly<Permissions>}
     * @readonly
     */
    get permissions(): Readonly<import("../util/BitField").default<"CREATE_INSTANT_INVITE" | "KICK_MEMBERS" | "BAN_MEMBERS" | "ADMINISTRATOR" | "MANAGE_CHANNELS" | "MANAGE_GUILD" | "ADD_REACTIONS" | "VIEW_AUDIT_LOG" | "PRIORITY_SPEAKER" | "STREAM" | "VIEW_CHANNEL" | "SEND_MESSAGES" | "SEND_TTS_MESSAGES" | "MANAGE_MESSAGES" | "EMBED_LINKS" | "ATTACH_FILES" | "READ_MESSAGE_HISTORY" | "MENTION_EVERYONE" | "USE_EXTERNAL_EMOJIS" | "VIEW_GUILD_INSIGHTS" | "CONNECT" | "SPEAK" | "MUTE_MEMBERS" | "DEAFEN_MEMBERS" | "MOVE_MEMBERS" | "USE_VAD" | "CHANGE_NICKNAME" | "MANAGE_NICKNAMES" | "MANAGE_ROLES" | "MANAGE_WEBHOOKS" | "MANAGE_EMOJIS_AND_STICKERS" | "USE_APPLICATION_COMMANDS" | "REQUEST_TO_SPEAK" | "MANAGE_EVENTS" | "MANAGE_THREADS" | "USE_PUBLIC_THREADS" | "CREATE_PUBLIC_THREADS" | "USE_PRIVATE_THREADS" | "CREATE_PRIVATE_THREADS" | "USE_EXTERNAL_STICKERS" | "SEND_MESSAGES_IN_THREADS" | "START_EMBEDDED_ACTIVITIES" | "MODERATE_MEMBERS" | "VIEW_CREATOR_MONETIZATION_ANALYTICS" | "USE_SOUNDBOARD" | "CREATE_GUILD_EXPRESSIONS" | "CREATE_EVENTS" | "USE_EXTERNAL_SOUNDS" | "SEND_VOICE_MESSAGES" | "USE_CLYDE_AI" | "SET_VOICE_CHANNEL_STATUS" | "SEND_POLLS" | "USE_EXTERNAL_APPS", bigint>>;
    /**
     * Whether the client user is above this user in the hierarchy, according to role position and guild ownership.
     * This is a prerequisite for many moderative actions.
     * @type {boolean}
     * @readonly
     */
    get manageable(): boolean;
    /**
     * Whether this member is kickable by the client user
     * @type {boolean}
     * @readonly
     */
    get kickable(): any;
    /**
     * Whether this member is bannable by the client user
     * @type {boolean}
     * @readonly
     */
    get bannable(): any;
    /**
     * Whether this member is moderatable by the client user
     * @type {boolean}
     * @readonly
     */
    get moderatable(): any;
    /**
     * Whether this member is currently timed out
     * @returns {boolean}
     */
    isCommunicationDisabled(): boolean;
    /**
     * Returns `channel.permissionsFor(guildMember)`. Returns permissions for a member in a guild channel,
     * taking into account roles and permission overwrites.
     * @param {GuildChannelResolvable} channel The guild channel to use as context
     * @returns {Readonly<Permissions>}
     */
    permissionsIn(channel: any): any;
    /**
     * Edits this member.
     * @param {GuildMemberEditData} data The data to edit the member with
     * @param {string} [reason] Reason for editing this user
     * @returns {Promise<GuildMember>}
     */
    edit(data: any, reason: any): any;
    /**
     * Sets the nickname for this member.
     * @param {?string} nick The nickname for the guild member, or `null` if you want to reset their nickname
     * @param {string} [reason] Reason for setting the nickname
     * @returns {Promise<GuildMember>}
     * @example
     * // Set a nickname for a guild member
     * guildMember.setNickname('cool nickname', 'Needed a new nickname')
     *   .then(member => console.log(`Set nickname of ${member.user.username}`))
     *   .catch(console.error);
     * @example
     * // Remove a nickname for a guild member
     * guildMember.setNickname(null, 'No nicknames allowed!')
     *   .then(member => console.log(`Removed nickname for ${member.user.username}`))
     *   .catch(console.error);
     */
    setNickname(nick: any, reason: any): any;
    /**
     * Sets the flags for this member.
     * @param {GuildMemberFlagsResolvable} flags The flags to set
     * @param {string} [reason] Reason for setting the flags
     * @returns {Promise<GuildMember>}
     */
    setFlags(flags: any, reason: any): any;
    /**
     * Creates a DM channel between the client and this member.
     * @param {boolean} [force=false] Whether to skip the cache check and request the API
     * @returns {Promise<DMChannel>}
     */
    createDM(force?: boolean): any;
    /**
     * Deletes any DMs with this member.
     * @returns {Promise<DMChannel>}
     */
    deleteDM(): any;
    /**
     * Kicks this member from the guild.
     * @param {string} [reason] Reason for kicking user
     * @returns {Promise<GuildMember>}
     */
    kick(reason: any): any;
    /**
     * Bans this guild member.
     * @param {BanOptions} [options] Options for the ban
     * @returns {Promise<GuildMember>}
     * @example
     * // Ban a guild member, deleting a week's worth of messages
     * guildMember.ban({ deleteMessageSeconds: 60 * 60 * 24 * 7, reason: 'They deserved it' })
     *   .then(console.log)
     *   .catch(console.error);
     */
    ban(options: any): any;
    /**
     * Times this guild member out.
     * @param {DateResolvable|null} communicationDisabledUntil The date or timestamp
     * for the member's communication to be disabled until. Provide `null` to remove the timeout.
     * @param {string} [reason] The reason for this timeout.
     * @returns {Promise<GuildMember>}
     * @example
     * // Time a guild member out for 5 minutes
     * guildMember.disableCommunicationUntil(Date.now() + (5 * 60 * 1000), 'They deserved it')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Remove the timeout of a guild member
     * guildMember.disableCommunicationUntil(null)
     *   .then(member => console.log(`Removed timeout for ${member.displayName}`))
     *   .catch(console.error);
     */
    disableCommunicationUntil(communicationDisabledUntil: any, reason: any): any;
    /**
     * Times this guild member out.
     * @param {number|null} timeout The time in milliseconds
     * for the member's communication to be disabled until. Provide `null` to remove the timeout.
     * @param {string} [reason] The reason for this timeout.
     * @returns {Promise<GuildMember>}
     * @example
     * // Time a guild member out for 5 minutes
     * guildMember.timeout(5 * 60 * 1000, 'They deserved it')
     *   .then(console.log)
     *   .catch(console.error);
     */
    timeout(timeout: any, reason: any): any;
    /**
     * Fetches this GuildMember.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<GuildMember>}
     */
    fetch(force?: boolean): any;
    /**
     * Whether this guild member equals another guild member. It compares all properties, so for most
     * comparison it is advisable to just compare `member.id === member2.id` as it is significantly faster
     * and is often what most users need.
     * @param {GuildMember} member The member to compare with
     * @returns {boolean}
     */
    equals(member: any): boolean;
    /**
     * When concatenated with a string, this automatically returns the user's mention instead of the GuildMember object.
     * @returns {string}
     * @example
     * // Logs: Hello from <@123456789012345678>!
     * console.log(`Hello from ${member}!`);
     */
    toString(): string;
    toJSON(): unknown;
    /**
     * Sets the guild avatar of the logged in client.
     * @param {?(BufferResolvable|Base64Resolvable)} avatar The new avatar
     * @returns {Promise<GuildMember>}
     */
    setAvatar(avatar: any): any;
    /**
     * Sets the guild banner of the logged in client.
     * @param {?(BufferResolvable|Base64Resolvable)} banner The new banner
     * @returns {Promise<GuildMember>}
     */
    setBanner(banner: any): any;
    /**
     * Set Guild About me
     * @param {string | null} bio Bio to set
     * @returns {Promise<GuildMember>}
     */
    setAboutMe(bio?: any): any;
}
export { GuildMember };
export { deletedGuildMembers };
/**
 * @external APIGuildMember
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object}
 */
