'use strict';

import { isJSONEncodable } from '@discordjs/util';
import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import type { APIRouteProxy } from '../rest/APIRouter';
import ApplicationCommandPermissionsManager from './ApplicationCommandPermissionsManager';
import CachedManager from './CachedManager';
import { TypeError } from '../errors';
import ApplicationCommand from '../structures/ApplicationCommand';
import { ApplicationCommandTypes } from '../util/Constants';
import Permissions from '../util/Permissions';

/**
 * Manages API methods for application commands and stores their cache.
 * @extends {CachedManager}
 */
class ApplicationCommandManager extends CachedManager {
  public readonly permissions: ApplicationCommandPermissionsManager;

  public guild?: { id: Snowflake } | null;

  constructor(client: Client, iterable?: Iterable<{ id: string } & Record<string, unknown>>) {
    super(client, ApplicationCommand, iterable);

    /**
     * The manager for permissions of arbitrary commands on arbitrary guilds
     * @type {ApplicationCommandPermissionsManager}
     */
    this.permissions = new ApplicationCommandPermissionsManager(this as unknown as ConstructorParameters<typeof ApplicationCommandPermissionsManager>[0]);
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, ApplicationCommand>}
   * @name ApplicationCommandManager#cache
   */

  _add(data: { id: Snowflake } & Record<string, unknown>, cache = true, options: { id?: string; extras?: unknown[] } = {}): ApplicationCommand {
    const guildId = options.extras?.[1] as Snowflake | undefined;
    return super._add(data, cache, { extras: [this.guild, guildId] }) as unknown as ApplicationCommand;
  }

  private _addCommand(data: { id: Snowflake } & Record<string, unknown>, cache?: boolean, guildId?: Snowflake): ApplicationCommand {
    return this._add(data, cache, { extras: [this.guild, guildId] });
  }

  /**
   * The APIRouter path to the commands
   * @param {Snowflake} [options.id] The application command's id
   * @param {Snowflake} [options.guildId] The guild's id to use in the path,
   * ignored when using a {@link GuildApplicationCommandManager}
   * @returns {Object}
   * @private
   */
  commandPath({ id, guildId }: { id?: Snowflake; guildId?: Snowflake } = {}): APIRouteProxy {
    let path = this.client.api.applications(this.client.application.id);
    if (this.guild ?? guildId) path = path.guilds(this.guild?.id ?? guildId);
    return id ? path.commands(id) : path.commands;
  }

  /**
   * Data that resolves to give an ApplicationCommand object. This can be:
   * * An ApplicationCommand object
   * * A Snowflake
   * @typedef {ApplicationCommand|Snowflake} ApplicationCommandResolvable
   */

  /* eslint-disable max-len */
  /**
   * Data that resolves to the data of an ApplicationCommand
   * @typedef {ApplicationCommandData|APIApplicationCommand|SlashCommandBuilder|ContextMenuCommandBuilder} ApplicationCommandDataResolvable
   */
  /* eslint-enable max-len */

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
  async fetch(
    id?: Snowflake | { guildId?: Snowflake; cache?: boolean; force?: boolean; locale?: string; withLocalizations?: boolean },
    { guildId, cache = true, force = false, locale, withLocalizations }: { guildId?: Snowflake; cache?: boolean; force?: boolean; locale?: string; withLocalizations?: boolean } = {},
  ): Promise<ApplicationCommand | Collection<Snowflake, ApplicationCommand>> {
    if (typeof id === 'object') {
      ({ guildId, cache = true, locale, withLocalizations } = id);
    } else if (id) {
      if (!force) {
        const existing = this.cache.get(id) as ApplicationCommand | undefined;
        if (existing) return existing;
      }
      const command = await this.commandPath({ id, guildId }).get();
      return this._addCommand(command, cache);
    }

    const data = await this.commandPath({ guildId }).get({
      headers: {
        'X-Discord-Locale': locale,
      },
      query: typeof withLocalizations === 'boolean' ? { with_localizations: withLocalizations } : undefined,
    });
    return data.reduce(
      (coll: Collection<Snowflake, ApplicationCommand>, command: { id: Snowflake } & Record<string, unknown>) =>
        coll.set(command.id, this._addCommand(command, cache, guildId)),
      new Collection<Snowflake, ApplicationCommand>(),
    );
  }

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
  async create(command: Record<string, unknown>, guildId?: Snowflake): Promise<ApplicationCommand> {
    const data = await this.commandPath({ guildId }).post({
      data: (this.constructor as typeof ApplicationCommandManager).transformCommand(command),
    });
    return this._addCommand(data, true, guildId);
  }

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
  async set(commands: Record<string, unknown>[], guildId?: Snowflake): Promise<Collection<Snowflake, ApplicationCommand>> {
    const data = await this.commandPath({ guildId }).put({
      data: commands.map(c => (this.constructor as typeof ApplicationCommandManager).transformCommand(c)),
    });
    return data.reduce(
      (coll: Collection<Snowflake, ApplicationCommand>, command: { id: Snowflake } & Record<string, unknown>) =>
        coll.set(command.id, this._addCommand(command, true, guildId)),
      new Collection<Snowflake, ApplicationCommand>(),
    );
  }

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
  async edit(command: ApplicationCommand | Snowflake, data: Record<string, unknown>, guildId?: Snowflake): Promise<ApplicationCommand> {
    const id = this.resolveId(command);
    if (!id) throw new TypeError('INVALID_TYPE', 'command', 'ApplicationCommandResolvable');

    const patched = await this.commandPath({ id, guildId }).patch({
      data: (this.constructor as typeof ApplicationCommandManager).transformCommand(data),
    });
    return this._addCommand(patched, true, guildId);
  }

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
  async delete(command: ApplicationCommand | Snowflake, guildId?: Snowflake): Promise<ApplicationCommand | null> {
    const id = this.resolveId(command);
    if (!id) throw new TypeError('INVALID_TYPE', 'command', 'ApplicationCommandResolvable');

    await this.commandPath({ id, guildId }).delete();

    const cached = this.cache.get(id) as ApplicationCommand | undefined;
    this.cache.delete(id);
    return cached ?? null;
  }

  /**
   * Transforms an {@link ApplicationCommandData} object into something that can be used with the API.
   * @param {ApplicationCommandDataResolvable} command The command to transform
   * @returns {APIApplicationCommand}
   * @private
   */
  static transformCommand(command: Record<string, unknown>): Record<string, unknown> {
    if (isJSONEncodable(command)) return (command as { toJSON(): Record<string, unknown> }).toJSON();

    let default_member_permissions;

    if ('default_member_permissions' in command) {
      default_member_permissions = command.default_member_permissions
        ? new Permissions(BigInt(command.default_member_permissions as string | number)).bitfield.toString()
        : command.default_member_permissions;
    }

    if ('defaultMemberPermissions' in command) {
      default_member_permissions =
        command.defaultMemberPermissions !== null
          ? new Permissions(BigInt(command.defaultMemberPermissions as string | number)).bitfield.toString()
          : command.defaultMemberPermissions;
    }

    return {
      name: command.name,
      name_localizations: command.nameLocalizations ?? command.name_localizations,
      description: command.description,
      description_localizations: command.descriptionLocalizations ?? command.description_localizations,
      type: typeof command.type === 'number' ? command.type : (ApplicationCommandTypes as Record<string, unknown>)[command.type as string],
      options: (command.options as Record<string, unknown>[] | undefined)?.map(o => ApplicationCommand.transformOption(o)),
      default_permission: command.defaultPermission ?? command.default_permission,
      default_member_permissions,
      dm_permission: command.dmPermission ?? command.dm_permission,
    };
  }
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
