import Base from './Base';
/**
 * The base class for {@link Guild}, {@link OAuth2Guild} and {@link InviteGuild}.
 * @extends {Base}
 * @abstract
 */
declare class BaseGuild extends Base {
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
    get nameAcronym(): any;
    /**
     * Whether this guild is partnered
     * @type {boolean}
     * @readonly
     */
    get partnered(): any;
    /**
     * Whether this guild is verified
     * @type {boolean}
     * @readonly
     */
    get verified(): any;
    /**
     * The URL to this guild's icon.
     * @param {ImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size, dynamic }?: {}): any;
    /**
     * Fetches this guild.
     * @returns {Promise<Guild>}
     */
    fetch(): Promise<any>;
    /**
     * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
     * @returns {string}
     */
    toString(): any;
}
export default BaseGuild;
