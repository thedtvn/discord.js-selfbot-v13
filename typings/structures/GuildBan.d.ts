import Base from './Base';
/**
 * Represents a ban in a guild on Discord.
 * @extends {Base}
 */
declare class GuildBan extends Base {
    guild: any;
    user: any;
    reason: string | null;
    constructor(client: any, data: any, guild: any);
    _patch(data: any): any;
    /**
     * Whether this GuildBan is partial. If the reason is not provided the value is null
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * Fetches this GuildBan.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<GuildBan>}
     */
    fetch(force?: boolean): any;
}
export default GuildBan;
