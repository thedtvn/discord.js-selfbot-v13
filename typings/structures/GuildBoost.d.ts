import Base from './Base';
/**
 * Represents a guild boost in a guild on Discord.
 * @extends {Base}
 */
declare class GuildBoost extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
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
    unsubscribe(): Promise<this>;
    /**
     * Use the boost
     * @param {GuildResolvable} guild The guild to use the boost on
     * @returns {Promise<GuildBoost>}
     */
    subscribe(guild: any): Promise<this>;
}
export default GuildBoost;
