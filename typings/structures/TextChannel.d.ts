import BaseGuildTextChannel from './BaseGuildTextChannel';
/**
 * Represents a guild text channel on Discord.
 * @extends {BaseGuildTextChannel}
 */
declare class TextChannel extends BaseGuildTextChannel {
    rateLimitPerUser: number;
    _patch(data: any): any;
    /**
     * Sets the rate limit per user (slowmode) for this channel.
     * @param {number} rateLimitPerUser The new rate limit in seconds
     * @param {string} [reason] Reason for changing the channel's rate limit
     * @returns {Promise<TextChannel>}
     */
    setRateLimitPerUser(rateLimitPerUser: number, reason?: string): any;
}
export default TextChannel;
