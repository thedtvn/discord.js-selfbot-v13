import Base from './Base';
/**
 * Represents the data about the guild any bot can preview, connected to the specified guild.
 * @extends {Base}
 */
declare class GuildPreview extends Base {
    id: string;
    name: string;
    icon: string | null;
    splash: string | null;
    discoverySplash: string | null;
    features: string[];
    approximateMemberCount: number;
    approximatePresenceCount: number;
    description: string | null;
    emojis: any;
    stickers: any;
    constructor(client: any, data: any);
    _patch(data: any): any;
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
    splashURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * The URL to this guild's discovery splash.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    discoverySplashURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * The URL to this guild's icon.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size, dynamic }?: {
        format?: string;
        size?: number;
        dynamic?: boolean;
    }): string | null;
    /**
     * Fetches this guild.
     * @returns {Promise<GuildPreview>}
     */
    fetch(): Promise<GuildPreview>;
    /**
     * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
     * @returns {string}
     * @example
     * // Logs: Hello from My Guild!
     * console.log(`Hello from ${previewGuild}!`);
     */
    toString(): string;
    toJSON(): any;
}
export default GuildPreview;
