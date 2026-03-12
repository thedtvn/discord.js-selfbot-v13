import BaseManager from './BaseManager';
/**
 * Manages API methods for users and stores their cache.
 * @extends {BaseManager}
 * @see {@link https://luna.gitlab.io/discord-unofficial-docs/user_settings.html}
 */
declare class ClientUserSettingManager extends BaseManager {
    #private;
    constructor(client: any);
    /**
     * Patch data file
     * https://luna.gitlab.io/discord-unofficial-docs/docs/user_settings
     * @private
     * @param {Object} data Raw Data to patch
     */
    _patch(data?: {}): void;
    /**
     * Raw data
     * @type {Object}
     */
    get raw(): {};
    fetch(): Promise<this>;
    /**
     * Edit data
     * @param {any} data Data to edit
     */
    edit(data: any): Promise<this>;
    /**
     * Toggle compact mode
     * @returns {Promise<this>}
     */
    toggleCompactMode(): Promise<this>;
    /**
     * Discord Theme
     * @param {string} value Theme to set (dark | light)
     * @returns {Promise<this>}
     */
    setTheme(value: any): Promise<this>;
    /**
     * CustomStatus Object
     * @typedef {Object} CustomStatusOption
     * @property {string | null} text Text to set
     * @property {string | null} status The status to set: 'online', 'idle', 'dnd', 'invisible' or null.
     * @property {EmojiResolvable | null} emoji UnicodeEmoji, DiscordEmoji, or null.
     * @property {number | null} expires The number of seconds until the status expires, or null.
     */
    /**
     * Set custom status
     * @param {?CustomStatus | CustomStatusOption} options CustomStatus
     * @returns {Promise<this>}
     */
    setCustomStatus(options: any): Promise<this>;
    /**
     * Restricted guilds setting
     * @param {boolean} status Restricted status
     * @returns {Promise}
     */
    restrictedGuilds(status: any): Promise<this>;
    /**
     * Add a guild to the list of restricted guilds.
     * @param {GuildIDResolve} guildId The guild to add
     * @returns {Promise}
     */
    addRestrictedGuild(guildId: any): Promise<this>;
    /**
     * Remove a guild from the list of restricted guilds.
     * @param {GuildIDResolve} guildId The guild to remove
     * @returns {Promise}
     */
    removeRestrictedGuild(guildId: any): Promise<this>;
}
export default ClientUserSettingManager;
