import ApplicationFlags from '../../util/ApplicationFlags';
import Permissions from '../../util/Permissions';
import { ApplicationRoleConnectionMetadata } from '../ApplicationRoleConnectionMetadata';
import Base from '../Base';
import type Client from '../../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents an OAuth2 Application.
 * @extends {Base}
 * @abstract
 */
declare class Application extends Base {
    id: Snowflake;
    name: string | null;
    description: string | null;
    icon: string | null;
    termsOfServiceURL: string | null;
    privacyPolicyURL: string | null;
    verifyKey: string | null;
    roleConnectionsVerificationURL: string | null;
    tags: string[];
    installParams: {
        scopes: string[];
        permissions: Readonly<Permissions>;
    } | null;
    customInstallURL: string | null;
    flags: Readonly<ApplicationFlags>;
    approximateGuildCount: number | null;
    guildId: Snowflake | null;
    cover: string | null;
    rpcOrigins: string[];
    botRequireCodeGrant: boolean | null;
    botPublic: boolean | null;
    owner: any;
    splash: string | null;
    type: number | null;
    primarySkuId: Snowflake | null;
    eulaId: Snowflake | null;
    slug: string | null;
    aliases: string[];
    executables: any[] | null;
    thirdPartySkus: any[] | null;
    hook: boolean | null;
    overlay: boolean | null;
    overlayMethods: number | null;
    overlayWarn: boolean | null;
    overlayCompatibilityHook: boolean | null;
    bot: any;
    developers: any[] | null;
    publishers: any[] | null;
    redirectUris: string[] | null;
    deeplinkUri: string | null;
    integrationPublic: boolean | null;
    integrationRequireCodeGrant: boolean | null;
    botDisabled: boolean | null;
    botQuarantined: boolean | null;
    approximateUserInstallCount: number | null;
    approximateUserAuthorizationCount: number | null;
    internalGuildRestriction: number | null;
    interactionsEndpointUrl: string | null;
    interactionsVersion: number | null;
    interactionsEventTypes: string[] | null;
    eventWebhooksStatus: number | null;
    eventWebhooksUrl: string | null;
    eventWebhooksTypes: string[] | null;
    explicitContentFilter: number | null;
    integrationTypesConfig: object | null;
    isVerified: boolean | null;
    verificationState: number | null;
    storeApplicationState: number | null;
    rpcApplicationState: number | null;
    creatorMonetizationState: number | null;
    isDiscoverable: boolean | null;
    discoverabilityState: number | null;
    discoveryEligibilityFlags: number | null;
    isMonetized: boolean | null;
    storefrontAvailable: boolean | null;
    monetizationState: number | null;
    monetizationEligibilityFlags: number | null;
    maxParticipants: number | null;
    constructor(client: Client, data: any);
    _patch(data: any): any;
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
    fetchRoleConnectionMetadataRecords(): Promise<ApplicationRoleConnectionMetadata[]>;
    /**
     * A link to the application's icon.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * A link to this application's cover image.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    coverURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
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
    fetchAssets(): Promise<{
        id: Snowflake;
        name: string;
        type: string;
    }[]>;
    /**
     * When concatenated with a string, this automatically returns the application's name instead of the
     * Application object.
     * @returns {?string}
     * @example
     * // Logs: Application name: My App
     * console.log(`Application name: ${application}`);
     */
    toString(): string | null;
    toJSON(): unknown;
}
export default Application;
