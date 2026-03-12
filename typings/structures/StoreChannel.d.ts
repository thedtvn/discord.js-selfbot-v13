import GuildChannel from './GuildChannel';
/**
 * Represents a guild store channel on Discord.
 * <warn>Store channels have been removed from Discord. See
 * [Self-serve Game Selling Deprecation](https://support-dev.discord.com/hc/en-us/articles/6309018858647)
 * for more information.</warn>
 * @extends {GuildChannel}
 */
declare class StoreChannel extends GuildChannel {
    nsfw: boolean;
    constructor(guild: any, data: any, client: any);
    _patch(data: any): any;
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
    createInvite(options?: any): Promise<any>;
    /**
     * Fetches a collection of invites to this guild channel.
     * Resolves with a collection mapping invites by their codes.
     * @param {boolean} [cache=true] Whether or not to cache the fetched invites
     * @returns {Promise<Collection<string, Invite>>}
     */
    fetchInvites(cache?: boolean): Promise<any>;
}
export default StoreChannel;
