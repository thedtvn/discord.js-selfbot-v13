import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
import GuildBoost from '../structures/GuildBoost';

type BillingObject = Record<string, unknown> & { id: Snowflake };

/**
 * Manages the API methods of a data model.
 * @extends {CachedManager}
 */
class BillingManager extends BaseManager {
  public paymentSources: Collection<Snowflake, BillingObject>;
  public guildBoosts: Collection<Snowflake, GuildBoost>;
  public currentSubscription: Collection<Snowflake, BillingObject>;

  constructor(client: Client) {
    super(client);
    /**
     * All the payment sources of the client
     * @type {Collection<Snowflake, Object>}
     */
    this.paymentSources = new Collection();
    /**
     * All the guild boosts of the client
     * @type {Collection<Snowflake, GuildBoost>}
     */
    this.guildBoosts = new Collection();
    /**
     * The current subscription of the client
     * @type {Collection<Snowflake, Object>}
     */
    this.currentSubscription = new Collection();
  }

  /**
   * Fetches all the payment sources of the client
   * @returns {Collection<Snowflake, Object>}
   */
  async fetchPaymentSources(): Promise<Collection<Snowflake, BillingObject>> {
    // https://discord.com/api/v9/users/@me/billing/payment-sources
    const d = await this.client.api.users('@me').billing['payment-sources'].get();
    // ! TODO: Create a PaymentSource class
    this.paymentSources = new Collection(d.map(s => [s.id, s]));
    return this.paymentSources;
  }

  /**
   * Fetches all the guild boosts of the client
   * @returns {Collection<Snowflake, GuildBoost>}
   */
  async fetchGuildBoosts(): Promise<Collection<Snowflake, GuildBoost>> {
    // https://discord.com/api/v9/users/@me/guilds/premium/subscription-slots
    const d = await this.client.api.users('@me').guilds.premium['subscription-slots'].get();
    this.guildBoosts = new Collection(d.map(s => [s.id, new GuildBoost(this.client, s)]));
    return this.guildBoosts;
  }

  /**
   * Fetches the current subscription of the client
   * @returns {Collection<Snowflake, Object>}
   */
  async fetchCurrentSubscription(): Promise<Collection<Snowflake, BillingObject>> {
    // https://discord.com/api/v9/users/@me/billing/subscriptions
    const d = await this.client.api.users('@me').billing.subscriptions.get();
    this.currentSubscription = new Collection(d.map(s => [s.id, s]));
    return this.currentSubscription;
  }
}

export default BillingManager;
