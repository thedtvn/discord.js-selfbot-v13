import CachedManager from './CachedManager';
/**
 * Manages API methods for application commands and stores their cache.
 * @extends {CachedManager}
 */
declare class ApplicationCommandManager extends CachedManager {
    constructor(client: any, iterable: any);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, ApplicationCommand>}
     * @name ApplicationCommandManager#cache
     */
    _add(data: any, cache: any, guildId: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
    /**
     * The APIRouter path to the commands
     * @param {Snowflake} [options.id] The application command's id
     * @param {Snowflake} [options.guildId] The guild's id to use in the path,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Object}
     * @private
     */
    commandPath({ id, guildId }?: {}): any;
    /**
     * Data that resolves to give an ApplicationCommand object. This can be:
     * * An ApplicationCommand object
     * * A Snowflake
     * @typedef {ApplicationCommand|Snowflake} ApplicationCommandResolvable
     */
    /**
     * Data that resolves to the data of an ApplicationCommand
     * @typedef {ApplicationCommandData|APIApplicationCommand|SlashCommandBuilder|ContextMenuCommandBuilder} ApplicationCommandDataResolvable
     */
    /**
     * Options used to fetch data from Discord
     * @typedef {Object} BaseFetchOptions
     * @property {boolean} [cache=true] Whether to cache the fetched data if it wasn't already
     * @property {boolean} [force=false] Whether to skip the cache check and request the API
     */
    /**
     * Options used to fetch Application Commands from Discord
     * @typedef {BaseFetchOptions} FetchApplicationCommandOptions
     * @property {Snowflake} [guildId] The guild's id to fetch commands for, for when the guild is not cached
     * @property {LocaleString} [locale] The locale to use when fetching this command
     * @property {boolean} [withLocalizations] Whether to fetch all localization data
     */
    /**
     * Obtains one or multiple application commands from Discord, or the cache if it's already available.
     * @param {Snowflake} [id] The application command's id
     * @param {FetchApplicationCommandOptions} [options] Additional options for this fetch
     * @returns {Promise<ApplicationCommand|Collection<Snowflake, ApplicationCommand>>}
     * @example
     * // Fetch a single command
     * client.application.commands.fetch('123456789012345678')
     *   .then(command => console.log(`Fetched command ${command.name}`))
     *   .catch(console.error);
     * @example
     * // Fetch all commands
     * guild.commands.fetch()
     *   .then(commands => console.log(`Fetched ${commands.size} commands`))
     *   .catch(console.error);
     */
    fetch(id: any, { guildId, cache, force, locale, withLocalizations }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<any>;
    /**
     * Creates an application command.
     * @param {ApplicationCommandDataResolvable} command The command
     * @param {Snowflake} [guildId] The guild's id to create this command in,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Create a new command
     * client.application.commands.create({
     *   name: 'test',
     *   description: 'A test command',
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    create(command: any, guildId: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Sets all the commands for this application or guild.
     * @param {ApplicationCommandDataResolvable[]} commands The commands
     * @param {Snowflake} [guildId] The guild's id to create the commands in,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Promise<Collection<Snowflake, ApplicationCommand>>}
     * @example
     * // Set all commands to just this one
     * client.application.commands.set([
     *   {
     *     name: 'test',
     *     description: 'A test command',
     *   },
     * ])
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Remove all commands
     * guild.commands.set([])
     *   .then(console.log)
     *   .catch(console.error);
     */
    set(commands: any, guildId: any): Promise<any>;
    /**
     * Edits an application command.
     * @param {ApplicationCommandResolvable} command The command to edit
     * @param {Partial<ApplicationCommandDataResolvable>} data The data to update the command with
     * @param {Snowflake} [guildId] The guild's id where the command registered,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Edit an existing command
     * client.application.commands.edit('123456789012345678', {
     *   description: 'New description',
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    edit(command: any, data: any, guildId: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Deletes an application command.
     * @param {ApplicationCommandResolvable} command The command to delete
     * @param {Snowflake} [guildId] The guild's id where the command is registered,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Promise<?ApplicationCommand>}
     * @example
     * // Delete a command
     * guild.commands.delete('123456789012345678')
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(command: any, guildId: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Transforms an {@link ApplicationCommandData} object into something that can be used with the API.
     * @param {ApplicationCommandDataResolvable} command The command to transform
     * @returns {APIApplicationCommand}
     * @private
     */
    static transformCommand(command: any): any;
}
export default ApplicationCommandManager;
/**
 * @external SlashCommandBuilder
 * @see {@link https://discord.js.org/docs/packages/builders/stable/SlashCommandBuilder:Class}
 */
/**
 * @external ContextMenuCommandBuilder
 * @see {@link https://discord.js.org/docs/packages/builders/stable/ContextMenuCommandBuilder:Class}
 */
