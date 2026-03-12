import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a permission bitfield. All {@link GuildMember}s have a set of
 * permissions in their guild, and each channel in the guild may also have {@link PermissionOverwrites} for the member
 * that override their default permissions.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly CREATE_INSTANT_INVITE: bigint;
    readonly KICK_MEMBERS: bigint;
    readonly BAN_MEMBERS: bigint;
    readonly ADMINISTRATOR: bigint;
    readonly MANAGE_CHANNELS: bigint;
    readonly MANAGE_GUILD: bigint;
    readonly ADD_REACTIONS: bigint;
    readonly VIEW_AUDIT_LOG: bigint;
    readonly PRIORITY_SPEAKER: bigint;
    readonly STREAM: bigint;
    readonly VIEW_CHANNEL: bigint;
    readonly SEND_MESSAGES: bigint;
    readonly SEND_TTS_MESSAGES: bigint;
    readonly MANAGE_MESSAGES: bigint;
    readonly EMBED_LINKS: bigint;
    readonly ATTACH_FILES: bigint;
    readonly READ_MESSAGE_HISTORY: bigint;
    readonly MENTION_EVERYONE: bigint;
    readonly USE_EXTERNAL_EMOJIS: bigint;
    readonly VIEW_GUILD_INSIGHTS: bigint;
    readonly CONNECT: bigint;
    readonly SPEAK: bigint;
    readonly MUTE_MEMBERS: bigint;
    readonly DEAFEN_MEMBERS: bigint;
    readonly MOVE_MEMBERS: bigint;
    readonly USE_VAD: bigint;
    readonly CHANGE_NICKNAME: bigint;
    readonly MANAGE_NICKNAMES: bigint;
    readonly MANAGE_ROLES: bigint;
    readonly MANAGE_WEBHOOKS: bigint;
    readonly MANAGE_EMOJIS_AND_STICKERS: bigint;
    readonly USE_APPLICATION_COMMANDS: bigint;
    readonly REQUEST_TO_SPEAK: bigint;
    readonly MANAGE_EVENTS: bigint;
    readonly MANAGE_THREADS: bigint;
    readonly USE_PUBLIC_THREADS: bigint;
    readonly CREATE_PUBLIC_THREADS: bigint;
    readonly USE_PRIVATE_THREADS: bigint;
    readonly CREATE_PRIVATE_THREADS: bigint;
    readonly USE_EXTERNAL_STICKERS: bigint;
    readonly SEND_MESSAGES_IN_THREADS: bigint;
    readonly START_EMBEDDED_ACTIVITIES: bigint;
    readonly MODERATE_MEMBERS: bigint;
    readonly VIEW_CREATOR_MONETIZATION_ANALYTICS: bigint;
    readonly USE_SOUNDBOARD: bigint;
    readonly CREATE_GUILD_EXPRESSIONS: bigint;
    readonly CREATE_EVENTS: bigint;
    readonly USE_EXTERNAL_SOUNDS: bigint;
    readonly SEND_VOICE_MESSAGES: bigint;
    readonly USE_CLYDE_AI: bigint;
    readonly SET_VOICE_CHANNEL_STATUS: bigint;
    readonly SEND_POLLS: bigint;
    readonly USE_EXTERNAL_APPS: bigint;
};
export type PermissionsString = keyof typeof FLAGS;
export type PermissionResolvable = BitFieldResolvable<PermissionsString, bigint>;
declare class Permissions extends BitField<PermissionsString, bigint> {
    static FLAGS: {
        readonly CREATE_INSTANT_INVITE: bigint;
        readonly KICK_MEMBERS: bigint;
        readonly BAN_MEMBERS: bigint;
        readonly ADMINISTRATOR: bigint;
        readonly MANAGE_CHANNELS: bigint;
        readonly MANAGE_GUILD: bigint;
        readonly ADD_REACTIONS: bigint;
        readonly VIEW_AUDIT_LOG: bigint;
        readonly PRIORITY_SPEAKER: bigint;
        readonly STREAM: bigint;
        readonly VIEW_CHANNEL: bigint;
        readonly SEND_MESSAGES: bigint;
        readonly SEND_TTS_MESSAGES: bigint;
        readonly MANAGE_MESSAGES: bigint;
        readonly EMBED_LINKS: bigint;
        readonly ATTACH_FILES: bigint;
        readonly READ_MESSAGE_HISTORY: bigint;
        readonly MENTION_EVERYONE: bigint;
        readonly USE_EXTERNAL_EMOJIS: bigint;
        readonly VIEW_GUILD_INSIGHTS: bigint;
        readonly CONNECT: bigint;
        readonly SPEAK: bigint;
        readonly MUTE_MEMBERS: bigint;
        readonly DEAFEN_MEMBERS: bigint;
        readonly MOVE_MEMBERS: bigint;
        readonly USE_VAD: bigint;
        readonly CHANGE_NICKNAME: bigint;
        readonly MANAGE_NICKNAMES: bigint;
        readonly MANAGE_ROLES: bigint;
        readonly MANAGE_WEBHOOKS: bigint;
        readonly MANAGE_EMOJIS_AND_STICKERS: bigint;
        readonly USE_APPLICATION_COMMANDS: bigint;
        readonly REQUEST_TO_SPEAK: bigint;
        readonly MANAGE_EVENTS: bigint;
        readonly MANAGE_THREADS: bigint;
        readonly USE_PUBLIC_THREADS: bigint;
        readonly CREATE_PUBLIC_THREADS: bigint;
        readonly USE_PRIVATE_THREADS: bigint;
        readonly CREATE_PRIVATE_THREADS: bigint;
        readonly USE_EXTERNAL_STICKERS: bigint;
        readonly SEND_MESSAGES_IN_THREADS: bigint;
        readonly START_EMBEDDED_ACTIVITIES: bigint;
        readonly MODERATE_MEMBERS: bigint;
        readonly VIEW_CREATOR_MONETIZATION_ANALYTICS: bigint;
        readonly USE_SOUNDBOARD: bigint;
        readonly CREATE_GUILD_EXPRESSIONS: bigint;
        readonly CREATE_EVENTS: bigint;
        readonly USE_EXTERNAL_SOUNDS: bigint;
        readonly SEND_VOICE_MESSAGES: bigint;
        readonly USE_CLYDE_AI: bigint;
        readonly SET_VOICE_CHANNEL_STATUS: bigint;
        readonly SEND_POLLS: bigint;
        readonly USE_EXTERNAL_APPS: bigint;
    };
    static ALL: bigint;
    static DEFAULT: bigint;
    static STAGE_MODERATOR: bigint;
    static defaultBit: bigint;
    /**
     * Bitfield of the packed bits
     * @type {bigint}
     * @name Permissions#bitfield
     */
    /**
     * Data that can be resolved to give a permission number. This can be:
     * * A string (see {@link Permissions.FLAGS})
     * * A permission number
     * * An instance of Permissions
     * * An Array of PermissionResolvable
     * @typedef {string|bigint|Permissions|PermissionResolvable[]} PermissionResolvable
     */
    /**
     * Gets all given bits that are missing from the bitfield.
     * @param {BitFieldResolvable} bits Bit(s) to check for
     * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
     * @returns {string[]}
     */
    missing(bits: PermissionResolvable, checkAdmin?: boolean): PermissionsString[];
    /**
     * Checks whether the bitfield has a permission, or any of multiple permissions.
     * @param {PermissionResolvable} permission Permission(s) to check for
     * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
     * @returns {boolean}
     */
    any(permission: PermissionResolvable, checkAdmin?: boolean): boolean;
    /**
     * Checks whether the bitfield has a permission, or multiple permissions.
     * @param {PermissionResolvable} permission Permission(s) to check for
     * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
     * @returns {boolean}
     */
    has(permission: PermissionResolvable, checkAdmin?: boolean): boolean;
    /**
     * Gets an {@link Array} of bitfield names based on the permissions available.
     * @returns {string[]}
     */
    toArray(): PermissionsString[];
}
/**
 * Numeric permission flags. All available properties:
 * * `CREATE_INSTANT_INVITE` (create invitations to the guild)
 * * `KICK_MEMBERS`
 * * `BAN_MEMBERS`
 * * `ADMINISTRATOR` (implicitly has *all* permissions, and bypasses all channel overwrites)
 * * `MANAGE_CHANNELS` (edit and reorder channels)
 * * `MANAGE_GUILD` (edit the guild information, region, etc.)
 * * `ADD_REACTIONS` (add new reactions to messages)
 * * `VIEW_AUDIT_LOG`
 * * `PRIORITY_SPEAKER`
 * * `STREAM`
 * * `VIEW_CHANNEL`
 * * `SEND_MESSAGES`
 * * `SEND_TTS_MESSAGES`
 * * `MANAGE_MESSAGES` (delete messages and reactions)
 * * `EMBED_LINKS` (links posted will have a preview embedded)
 * * `ATTACH_FILES`
 * * `READ_MESSAGE_HISTORY` (view messages that were posted prior to opening Discord)
 * * `MENTION_EVERYONE`
 * * `USE_EXTERNAL_EMOJIS` (use emojis from different guilds)
 * * `VIEW_GUILD_INSIGHTS`
 * * `CONNECT` (connect to a voice channel)
 * * `SPEAK` (speak in a voice channel)
 * * `MUTE_MEMBERS` (mute members across all voice channels)
 * * `DEAFEN_MEMBERS` (deafen members across all voice channels)
 * * `MOVE_MEMBERS` (move members between voice channels)
 * * `USE_VAD` (use voice activity detection)
 * * `CHANGE_NICKNAME`
 * * `MANAGE_NICKNAMES` (change other members' nicknames)
 * * `MANAGE_ROLES`
 * * `MANAGE_WEBHOOKS`
 * * `MANAGE_EMOJIS_AND_STICKERS`
 * * `USE_APPLICATION_COMMANDS`
 * * `REQUEST_TO_SPEAK`
 * * `MANAGE_EVENTS`
 * * `MANAGE_THREADS`
 * * `USE_PUBLIC_THREADS` (deprecated)
 * * `CREATE_PUBLIC_THREADS`
 * * `USE_PRIVATE_THREADS` (deprecated)
 * * `CREATE_PRIVATE_THREADS`
 * * `USE_EXTERNAL_STICKERS` (use stickers from different guilds)
 * * `SEND_MESSAGES_IN_THREADS`
 * * `START_EMBEDDED_ACTIVITIES`
 * * `MODERATE_MEMBERS`
 * * `VIEW_CREATOR_MONETIZATION_ANALYTICS`
 * * `USE_SOUNDBOARD`
 * * `CREATE_GUILD_EXPRESSIONS`
 * * `CREATE_EVENTS`
 * * `USE_EXTERNAL_SOUNDS`
 * * `SEND_VOICE_MESSAGES`
 * * `USE_CLYDE_AI`
 * * `SET_VOICE_CHANNEL_STATUS`
 * * `SEND_POLLS`
 * * `USE_EXTERNAL_APPS`
 * @type {Object<string, bigint>}
 * @see {@link https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags}
 */
export default Permissions;
