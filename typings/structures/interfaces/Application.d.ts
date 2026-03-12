import Base from '../Base';
/**
 * Represents an OAuth2 Application.
 * @extends {Base}
 * @abstract
 */
declare class Application extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The guild associated with this application.
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * Whether this application is partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * The timestamp the application was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the application was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Obtains this application from Discord.
     * @returns {Promise<Application>}
     */
    fetch(): Promise<this>;
    /**
     * Gets this application's role connection metadata records
     * @returns {Promise<ApplicationRoleConnectionMetadata[]>}
     */
    fetchRoleConnectionMetadataRecords(): Promise<any>;
    /**
     * A link to the application's icon.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size }?: {}): any;
    /**
     * A link to this application's cover image.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    coverURL({ format, size }?: {}): string;
    /**
     * Asset data.
     * @typedef {Object} ApplicationAsset
     * @property {Snowflake} id The asset's id
     * @property {string} name The asset's name
     * @property {string} type The asset's type
     */
    /**
     * Gets the application's rich presence assets.
     * @returns {Promise<Array<ApplicationAsset>>}
     * @deprecated This will be removed in the next major as it is unsupported functionality.
     */
    fetchAssets(): Promise<any>;
    /**
     * When concatenated with a string, this automatically returns the application's name instead of the
     * Application object.
     * @returns {?string}
     * @example
     * // Logs: Application name: My App
     * console.log(`Application name: ${application}`);
     */
    toString(): any;
    toJSON(): unknown;
}
export default Application;
