import Base from './Base';
/**
 * Represents the template for a guild.
 * @extends {Base}
 */
declare class GuildTemplate extends Base {
    code: string;
    name: string;
    description: string | null;
    usageCount: number;
    creatorId: any;
    creator: any;
    createdAt: Date;
    updatedAt: Date;
    guildId: any;
    serializedGuild: any;
    unSynced: boolean | null;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * Creates a guild based on this template.
     * <warn>This is only available to bots in fewer than 10 guilds.</warn>
     * @param {string} name The name of the guild
     * @param {BufferResolvable|Base64Resolvable} [icon] The icon for the guild
     * @returns {Promise<Guild>}
     */
    createGuild(name: string, icon?: any): Promise<any>;
    /**
     * Options used to edit a guild template.
     * @typedef {Object} EditGuildTemplateOptions
     * @property {string} [name] The name of this template
     * @property {string} [description] The description of this template
     */
    /**
     * Updates the metadata of this template.
     * @param {EditGuildTemplateOptions} [options] Options for editing the template
     * @returns {Promise<GuildTemplate>}
     */
    edit({ name, description }?: {
        name?: string;
        description?: string;
    }): Promise<any>;
    /**
     * Deletes this template.
     * @returns {Promise<GuildTemplate>}
     */
    delete(): Promise<GuildTemplate>;
    /**
     * Syncs this template to the current state of the guild.
     * @returns {Promise<GuildTemplate>}
     */
    sync(): Promise<any>;
    /**
     * The timestamp of when this template was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The timestamp of when this template was last synced to the guild
     * @type {number}
     * @readonly
     */
    get updatedTimestamp(): number;
    /**
     * The guild that this template belongs to
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * The URL of this template
     * @type {string}
     * @readonly
     */
    get url(): string;
    /**
     * When concatenated with a string, this automatically returns the template's code instead of the template object.
     * @returns {string}
     * @example
     * // Logs: Template: FKvmczH2HyUf
     * console.log(`Template: ${guildTemplate}!`);
     */
    toString(): string;
}
export default GuildTemplate;
