import Base from './Base';
import VoiceState from './VoiceState';
import GuildMemberRoleManager from '../managers/GuildMemberRoleManager';
import GuildMemberFlags from '../util/GuildMemberFlags';
import Permissions from '../util/Permissions';
import type Client from '../client/Client';
import type { Guild } from './Guild';
import type User from './User';
import type { Snowflake } from 'discord-api-types/v10';
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
    guild: Guild;
    joinedTimestamp: number | null;
    premiumSinceTimestamp: number | null;
    nickname: string | null;
    pending: boolean;
    communicationDisabledUntilTimestamp: number | null;
    _roles: Snowflake[];
    user: User | null;
    avatar: string | null;
    banner: string | null;
    flags: Readonly<GuildMemberFlags>;
    avatarDecorationData: {
        asset: string;
        skuId: Snowflake;
    } | null;
    constructor(client: Client, data: any, guild: Guild);
    _patch(data: any): any;
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
    get voice(): VoiceState;
    /**
     * A link to the user's avatar decoration.
     * @returns {?string}
     */
    avatarDecorationURL(): string | null;
    /**
     * A link to the member's guild avatar.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    avatarURL({ format, size, dynamic }?: {
        format?: string;
        size?: number;
        dynamic?: boolean;
    }): string | null;
    /**
     * A link to the member's banner.
     * @param {ImageURLOptions} [options={}] Options for the banner URL
     * @returns {?string}
     */
    bannerURL({ format, size, dynamic }?: {
        format?: string;
        size?: number;
        dynamic?: boolean;
    }): string | null;
    /**
     * A link to the member's guild avatar decoration if they have one.
     * Otherwise, a link to their {@link User#avatarDecorationURL} will be returned.
     * @returns {?string}
     */
    displayAvatarDecorationURL(): string | null;
    /**
     * A link to the member's guild avatar if they have one.
     * Otherwise, a link to their {@link User#displayAvatarURL} will be returned.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {string}
     */
    displayAvatarURL(options?: {
        format?: string;
        size?: number;
        dynamic?: boolean;
    }): string;
    /**
     * A link to the member's guild banner if they have one.
     * Otherwise, a link to their {@link User#bannerURL} will be returned.
     * @param {ImageURLOptions} [options={}] Options for the image URL
     * @returns {?string}
     */
    displayBannerURL(options?: {
        format?: string;
        size?: number;
        dynamic?: boolean;
    }): string | null;
    /**
     * The time this member joined the guild
     * @type {?Date}
     * @readonly
     */
    get joinedAt(): Date | null;
    /**
     * The time this member's timeout will be removed
     * @type {?Date}
     * @readonly
     */
    get communicationDisabledUntil(): Date | null;
    /**
     * The last time this member started boosting the guild
     * @type {?Date}
     * @readonly
     */
    get premiumSince(): Date | null;
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
    get displayColor(): number;
    /**
     * The displayed color of this member in hexadecimal
     * @type {string}
     * @readonly
     */
    get displayHexColor(): string;
    /**
     * The member's id
     * @type {Snowflake}
     * @readonly
     */
    get id(): string;
    /**
     * The nickname of this member, or their user display name if they don't have one
     * @type {?string}
     * @readonly
     */
    get displayName(): string;
    /**
     * The overall set of permissions for this member, taking only roles and owner status into account
     * @type {Readonly<Permissions>}
     * @readonly
     */
    get permissions(): Readonly<Permissions>;
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
    get kickable(): boolean;
    /**
     * Whether this member is bannable by the client user
     * @type {boolean}
     * @readonly
     */
    get bannable(): boolean;
    /**
     * Whether this member is moderatable by the client user
     * @type {boolean}
     * @readonly
     */
    get moderatable(): boolean;
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
    permissionsIn(channel: any): Readonly<Permissions>;
    /**
     * Edits this member.
     * @param {GuildMemberEditData} data The data to edit the member with
     * @param {string} [reason] Reason for editing this user
     * @returns {Promise<GuildMember>}
     */
    edit(data: any, reason?: string): Promise<GuildMember>;
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
    setNickname(nick: string | null, reason?: string): Promise<GuildMember>;
    /**
     * Sets the flags for this member.
     * @param {GuildMemberFlagsResolvable} flags The flags to set
     * @param {string} [reason] Reason for setting the flags
     * @returns {Promise<GuildMember>}
     */
    setFlags(flags: any, reason?: string): Promise<GuildMember>;
    /**
     * Creates a DM channel between the client and this member.
     * @param {boolean} [force=false] Whether to skip the cache check and request the API
     * @returns {Promise<DMChannel>}
     */
    createDM(force?: boolean): Promise<any>;
    /**
     * Deletes any DMs with this member.
     * @returns {Promise<DMChannel>}
     */
    deleteDM(): Promise<any>;
    /**
     * Kicks this member from the guild.
     * @param {string} [reason] Reason for kicking user
     * @returns {Promise<GuildMember>}
     */
    kick(reason?: string): any;
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
    ban(options?: any): any;
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
    disableCommunicationUntil(communicationDisabledUntil: any, reason?: string): Promise<GuildMember>;
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
    timeout(timeout: number | null, reason?: string): Promise<GuildMember>;
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
    equals(member: GuildMember): boolean;
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
    setAvatar(avatar: any): Promise<GuildMember>;
    /**
     * Sets the guild banner of the logged in client.
     * @param {?(BufferResolvable|Base64Resolvable)} banner The new banner
     * @returns {Promise<GuildMember>}
     */
    setBanner(banner: any): Promise<GuildMember>;
    /**
     * Set Guild About me
     * @param {string | null} bio Bio to set
     * @returns {Promise<GuildMember>}
     */
    setAboutMe(bio?: string | null): Promise<GuildMember>;
}
export { GuildMember };
export { deletedGuildMembers };
/**
 * @external APIGuildMember
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object}
 */
