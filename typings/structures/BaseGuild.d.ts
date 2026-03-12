import Base from './Base';
/**
 * The base class for {@link Guild}, {@link OAuth2Guild} and {@link InviteGuild}.
 * @extends {Base}
 * @abstract
 */
declare class BaseGuild extends Base {
    id: string;
    name: string;
    icon: string | null;
    features: string[];
    constructor(client: any, data: any);
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
     * The acronym that shows up in place of a guild icon
     * @type {string}
     * @readonly
     */
    get nameAcronym(): string;
    /**
     * Whether this guild is partnered
     * @type {boolean}
     * @readonly
     */
    get partnered(): boolean;
    /**
     * Whether this guild is verified
     * @type {boolean}
     * @readonly
     */
    get verified(): boolean;
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
     * @returns {Promise<Guild>}
     */
    fetch(): Promise<any>;
    /**
     * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
     * @returns {string}
     */
    toString(): string;
}
export default BaseGuild;
