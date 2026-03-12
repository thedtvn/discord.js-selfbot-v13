import Base from './Base';
/**
 * Represents the data about the guild any bot can preview, connected to the specified guild.
 * @extends {Base}
 */
declare class GuildPreview extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The timestamp this guild was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time this guild was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The URL to this guild's splash.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    splashURL({ format, size }?: {}): any;
    /**
     * The URL to this guild's discovery splash.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    discoverySplashURL({ format, size }?: {}): any;
    /**
     * The URL to this guild's icon.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size, dynamic }?: {}): any;
    /**
     * Fetches this guild.
     * @returns {Promise<GuildPreview>}
     */
    fetch(): Promise<this>;
    /**
     * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
     * @returns {string}
     * @example
     * // Logs: Hello from My Guild!
     * console.log(`Hello from ${previewGuild}!`);
     */
    toString(): any;
    toJSON(): unknown;
}
export default GuildPreview;
