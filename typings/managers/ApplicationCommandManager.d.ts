import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import type { APIRouteProxy } from '../rest/APIRouter';
import ApplicationCommandPermissionsManager from './ApplicationCommandPermissionsManager';
import CachedManager from './CachedManager';
import ApplicationCommand from '../structures/ApplicationCommand';
/**
 * Manages API methods for application commands and stores their cache.
 * @extends {CachedManager}
 */
declare class ApplicationCommandManager extends CachedManager {
    readonly permissions: ApplicationCommandPermissionsManager;
    guild?: {
        id: Snowflake;
    } | null;
    constructor(client: Client, iterable?: Iterable<{
        id: string;
    } & Record<string, unknown>>);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, ApplicationCommand>}
     * @name ApplicationCommandManager#cache
     */
    _add(data: {
        id: Snowflake;
    } & Record<string, unknown>, cache?: boolean, options?: {
        id?: string;
        extras?: unknown[];
    }): ApplicationCommand;
    private _addCommand;
    /**
     * The APIRouter path to the commands
     * @param {Snowflake} [options.id] The application command's id
     * @param {Snowflake} [options.guildId] The guild's id to use in the path,
     * ignored when using a {@link GuildApplicationCommandManager}
     * @returns {Object}
     * @private
     */
    commandPath({ id, guildId }?: {
        id?: Snowflake;
        guildId?: Snowflake;
    }): APIRouteProxy;
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
    fetch(id?: Snowflake | {
        guildId?: Snowflake;
        cache?: boolean;
        force?: boolean;
        locale?: string;
        withLocalizations?: boolean;
    }, { guildId, cache, force, locale, withLocalizations }?: {
        guildId?: Snowflake;
        cache?: boolean;
        force?: boolean;
        locale?: string;
        withLocalizations?: boolean;
    }): Promise<ApplicationCommand | Collection<Snowflake, ApplicationCommand>>;
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
    create(command: Record<string, unknown>, guildId?: Snowflake): Promise<ApplicationCommand>;
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
    set(commands: Record<string, unknown>[], guildId?: Snowflake): Promise<Collection<Snowflake, ApplicationCommand>>;
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
    edit(command: ApplicationCommand | Snowflake, data: Record<string, unknown>, guildId?: Snowflake): Promise<ApplicationCommand>;
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
    delete(command: ApplicationCommand | Snowflake, guildId?: Snowflake): Promise<ApplicationCommand | null>;
    /**
     * Transforms an {@link ApplicationCommandData} object into something that can be used with the API.
     * @param {ApplicationCommandDataResolvable} command The command to transform
     * @returns {APIApplicationCommand}
     * @private
     */
    static transformCommand(command: Record<string, unknown>): Record<string, unknown>;
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
