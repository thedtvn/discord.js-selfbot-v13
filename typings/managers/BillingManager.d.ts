import BaseManager from './BaseManager';
/**
 * Manages the API methods of a data model.
 * @extends {CachedManager}
 */
declare class BillingManager extends BaseManager {
    constructor(client: any);
    /**
     * Fetches all the payment sources of the client
     * @returns {Collection<Snowflake, Object>}
     */
    fetchPaymentSources(): Promise<any>;
    /**
     * Fetches all the guild boosts of the client
     * @returns {Collection<Snowflake, GuildBoost>}
     */
    fetchGuildBoosts(): Promise<any>;
    /**
     * Fetches the current subscription of the client
     * @returns {Collection<Snowflake, Object>}
     */
    fetchCurrentSubscription(): Promise<any>;
}
export default BillingManager;
