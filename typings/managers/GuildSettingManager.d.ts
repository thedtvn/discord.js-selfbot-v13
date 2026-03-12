import BaseManager from './BaseManager';
/**
 * Manages API methods for users and stores their cache.
 * @extends {BaseManager}
 * @see {@link https://luna.gitlab.io/discord-unofficial-docs/user_settings.html}
 */
declare class GuildSettingManager extends BaseManager {
    #private;
    constructor(guild: any);
    /**
     * Raw data
     * @type {Object}
     */
    get raw(): {};
    /**
     * Get the guild
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * Patch data file
     * @private
     * @param {Object} data Raw Data to patch
     */
    _patch(data?: {}): void;
    /**
     * Edit guild settings
     * @param {Object} data Data to edit
     * @returns {Promise<GuildSettingManager>}
     */
    edit(data: any): Promise<this>;
}
export default GuildSettingManager;
