import Base from './Base';
/**
 * The information account for an integration
 * @typedef {Object} IntegrationAccount
 * @property {Snowflake|string} id The id of the account
 * @property {string} name The name of the account
 */
/**
 * The type of an {@link Integration}. This can be:
 * * `twitch`
 * * `youtube`
 * * `discord`
 * * `guild_subscription`
 * @typedef {string} IntegrationType
 */
/**
 * Represents a guild integration.
 * @extends {Base}
 */
declare class Integration extends Base {
    constructor(client: any, data: any, guild: any);
    /**
     * All roles that are managed by this integration
     * @type {Collection<Snowflake, Role>}
     * @readonly
     */
    get roles(): any;
    _patch(data: any): void;
    /**
     * Deletes this integration.
     * @returns {Promise<Integration>}
     * @param {string} [reason] Reason for deleting this integration
     */
    delete(reason: any): Promise<this>;
    toJSON(): unknown;
}
export default Integration;
