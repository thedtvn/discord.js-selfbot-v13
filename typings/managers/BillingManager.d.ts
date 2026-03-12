import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
import GuildBoost from '../structures/GuildBoost';
type BillingObject = Record<string, unknown> & {
    id: Snowflake;
};
/**
 * Manages the API methods of a data model.
 * @extends {CachedManager}
 */
declare class BillingManager extends BaseManager {
    paymentSources: Collection<Snowflake, BillingObject>;
    guildBoosts: Collection<Snowflake, GuildBoost>;
    currentSubscription: Collection<Snowflake, BillingObject>;
    constructor(client: Client);
    /**
     * Fetches all the payment sources of the client
     * @returns {Collection<Snowflake, Object>}
     */
    fetchPaymentSources(): Promise<Collection<Snowflake, BillingObject>>;
    /**
     * Fetches all the guild boosts of the client
     * @returns {Collection<Snowflake, GuildBoost>}
     */
    fetchGuildBoosts(): Promise<Collection<Snowflake, GuildBoost>>;
    /**
     * Fetches the current subscription of the client
     * @returns {Collection<Snowflake, Object>}
     */
    fetchCurrentSubscription(): Promise<Collection<Snowflake, BillingObject>>;
}
export default BillingManager;
