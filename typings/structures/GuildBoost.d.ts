import Base from './Base';
/**
 * Represents a guild boost in a guild on Discord.
 * @extends {Base}
 */
declare class GuildBoost extends Base {
    id: any;
    subscriptionId: any;
    premiumGuildSubscriptionId: any;
    guildId: any;
    ended: boolean | null;
    canceled: boolean;
    cooldownEndsAt: Date;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * The guild of the boost
     * @type {?Guild}
     * @readonly
     */
    get guilld(): any;
    /**
     * Cancel the boost
     * @returns {Promise<GuildBoost>}
     */
    unsubscribe(): Promise<GuildBoost>;
    /**
     * Use the boost
     * @param {GuildResolvable} guild The guild to use the boost on
     * @returns {Promise<GuildBoost>}
     */
    subscribe(guild: any): Promise<GuildBoost>;
}
export default GuildBoost;
