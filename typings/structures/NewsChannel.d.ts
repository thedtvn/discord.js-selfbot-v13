import BaseGuildTextChannel from './BaseGuildTextChannel';
/**
 * Represents a guild news channel on Discord.
 * @extends {BaseGuildTextChannel}
 */
declare class NewsChannel extends BaseGuildTextChannel {
    /**
     * Adds the target to this channel's followers.
     * <info>If you need the created webhook id, use {@link GuildChannelManager#addFollower}.</info>
     * @param {TextChannelResolvable} channel The channel where the webhook should be created
     * @param {string} [reason] Reason for creating the webhook
     * @returns {Promise<NewsChannel>}
     * @example
     * if (channel.type === 'GUILD_NEWS') {
     *   channel.addFollower('222197033908436994', 'Important announcements')
     *     .then(() => console.log('Added follower'))
     *     .catch(console.error);
     * }
     */
    addFollower(channel: any, reason?: string): Promise<NewsChannel>;
}
export default NewsChannel;
