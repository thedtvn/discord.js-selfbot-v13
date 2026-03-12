import GuildChannel from './GuildChannel';
import MessageManager from '../managers/MessageManager';
/**
 * Represents a voice-based guild channel on Discord.
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 */
declare class BaseGuildVoiceChannel extends GuildChannel {
    messages: MessageManager;
    nsfw: boolean;
    bitrate: number;
    rtcRegion: string | null;
    userLimit: number;
    videoQualityMode: string | null;
    lastMessageId: string | null;
    rateLimitPerUser: number;
    status: string | null;
    constructor(guild: any, data: any, client: any);
    _patch(data: any): any;
    /**
     * The members in this voice-based channel
     * @type {Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get members(): any;
    /**
     * Checks if the voice-based channel is full
     * @type {boolean}
     * @readonly
     */
    get full(): boolean;
    /**
     * Whether the channel is joinable by the client user
     * @type {boolean}
     * @readonly
     */
    get joinable(): boolean;
    /**
     * Creates an invite to this guild channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite
     * @returns {Promise<Invite>}
     * @example
     * // Create an invite to a channel
     * channel.createInvite()
     *   .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
     *   .catch(console.error);
     */
    createInvite(options?: any): any;
    /**
     * Fetches a collection of invites to this guild channel.
     * Resolves with a collection mapping invites by their codes.
     * @param {boolean} [cache=true] Whether or not to cache the fetched invites
     * @returns {Promise<Collection<string, Invite>>}
     */
    fetchInvites(cache?: boolean): any;
    /**
     * Sets the bitrate of the channel.
     * @param {number} bitrate The new bitrate
     * @param {string} [reason] Reason for changing the channel's bitrate
     * @returns {Promise<BaseGuildVoiceChannel>}
     * @example
     * // Set the bitrate of a voice channel
     * channel.setBitrate(48_000)
     *   .then(channel => console.log(`Set bitrate to ${channel.bitrate}bps for ${channel.name}`))
     *   .catch(console.error);
     */
    setBitrate(bitrate: any, reason?: string): any;
    /**
     * Sets the RTC region of the channel.
     * @param {?string} rtcRegion The new region of the channel. Set to `null` to remove a specific region for the channel
     * @param {string} [reason] The reason for modifying this region.
     * @returns {Promise<BaseGuildVoiceChannel>}
     * @example
     * // Set the RTC region to sydney
     * channel.setRTCRegion('sydney');
     * @example
     * // Remove a fixed region for this channel - let Discord decide automatically
     * channel.setRTCRegion(null, 'We want to let Discord decide.');
     */
    setRTCRegion(rtcRegion: any, reason?: string): any;
    /**
     * Sets the user limit of the channel.
     * @param {number} userLimit The new user limit
     * @param {string} [reason] Reason for changing the user limit
     * @returns {Promise<BaseGuildVoiceChannel>}
     * @example
     * // Set the user limit of a voice channel
     * channel.setUserLimit(42)
     *   .then(channel => console.log(`Set user limit to ${channel.userLimit} for ${channel.name}`))
     *   .catch(console.error);
     */
    setUserLimit(userLimit: any, reason?: string): any;
    /**
     * Sets the camera video quality mode of the channel.
     * @param {VideoQualityMode|number} videoQualityMode The new camera video quality mode.
     * @param {string} [reason] Reason for changing the camera video quality mode.
     * @returns {Promise<BaseGuildVoiceChannel>}
     */
    setVideoQualityMode(videoQualityMode: any, reason?: string): any;
    get lastMessage(): any;
    send(): void;
    sendTyping(): void;
    createMessageCollector(): void;
    awaitMessages(): void;
    fetchWebhooks(): void;
    createWebhook(): void;
    setRateLimitPerUser(): void;
    setNSFW(): void;
}
export default BaseGuildVoiceChannel;
