import BaseGuildTextChannel from './BaseGuildTextChannel';
/**
 * Represents a guild text channel on Discord.
 * @extends {BaseGuildTextChannel}
 */
declare class TextChannel extends BaseGuildTextChannel {
    _patch(data: any): void;
    /**
     * Sets the rate limit per user (slowmode) for this channel.
     * @param {number} rateLimitPerUser The new rate limit in seconds
     * @param {string} [reason] Reason for changing the channel's rate limit
     * @returns {Promise<TextChannel>}
     */
    setRateLimitPerUser(rateLimitPerUser: any, reason: any): any;
}
export default TextChannel;
