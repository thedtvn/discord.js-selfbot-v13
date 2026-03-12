import { Collection } from '@discordjs/collection';
import type { APIRouteProxy } from '../rest/APIRouter';
import BaseManager from './BaseManager';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import type { Guild } from '../structures/Guild';
interface ApplicationCommandPermissionData {
    id: Snowflake;
    type: string | number;
    permission: boolean;
}
interface GuildApplicationCommandPermissionData {
    id: Snowflake;
    permissions: ApplicationCommandPermissionData[];
}
interface ApplicationCommandPermissionsManager_Manager {
    client: Client;
    guild?: Guild | null;
    guildId?: Snowflake | null;
    id?: Snowflake | null;
    resolveId?: (cmd: unknown) => Snowflake | null;
}
interface BaseApplicationCommandPermissionsOptions {
    guild?: unknown;
    command?: unknown;
}
interface SetApplicationCommandPermissionsOptions extends BaseApplicationCommandPermissionsOptions {
    permissions?: ApplicationCommandPermissionData[];
    fullPermissions?: GuildApplicationCommandPermissionData[];
}
interface AddApplicationCommandPermissionsOptions extends BaseApplicationCommandPermissionsOptions {
    permissions: ApplicationCommandPermissionData[];
}
interface RemoveApplicationCommandPermissionsOptions extends BaseApplicationCommandPermissionsOptions {
    users?: unknown;
    roles?: unknown;
}
interface HasApplicationCommandPermissionsOptions extends BaseApplicationCommandPermissionsOptions {
    permissionId: unknown;
}
/**
 * Manages API methods for permissions of Application Commands.
 * @extends {BaseManager}
 */
declare class ApplicationCommandPermissionsManager extends BaseManager {
    manager: ApplicationCommandPermissionsManager_Manager;
    guild: Guild | null;
    guildId: Snowflake | null;
    commandId: Snowflake | null;
    constructor(manager: ApplicationCommandPermissionsManager_Manager);
    /**
     * The APIRouter path to the commands
     * @param {Snowflake} guildId The guild's id to use in the path,
     * @param {Snowflake} [commandId] The application command's id
     * @returns {Object}
     * @private
     */
    permissionsPath(guildId: Snowflake, commandId?: Snowflake): APIRouteProxy;
    /**
     * Data for setting the permissions of an application command.
     * @typedef {Object} ApplicationCommandPermissionData
     * @property {Snowflake} id The role or user's id
     * @property {ApplicationCommandPermissionType|number} type Whether this permission is for a role or a user
     * @property {boolean} permission Whether the role or user has the permission to use this command
     */
    /**
     * The object returned when fetching permissions for an application command.
     * @typedef {Object} ApplicationCommandPermissions
     * @property {Snowflake} id The role or user's id
     * @property {ApplicationCommandPermissionType} type Whether this permission is for a role or a user
     * @property {boolean} permission Whether the role or user has the permission to use this command
     */
    /**
     * Options for managing permissions for one or more Application Commands
     * <warn>When passing these options to a manager where `guildId` is `null`,
     * `guild` is a required parameter</warn>
     * @typedef {Object} BaseApplicationCommandPermissionsOptions
     * @property {GuildResolvable} [guild] The guild to modify / check permissions for
     * <warn>Ignored when the manager has a non-null `guildId` property</warn>
     * @property {ApplicationCommandResolvable} [command] The command to modify / check permissions for
     * <warn>Ignored when the manager has a non-null `commandId` property</warn>
     */
    /**
     * Fetches the permissions for one or multiple commands.
     * @param {BaseApplicationCommandPermissionsOptions} [options] Options used to fetch permissions
     * @returns {Promise<ApplicationCommandPermissions[]|Collection<Snowflake, ApplicationCommandPermissions[]>>}
     * @example
     * // Fetch permissions for one command
     * guild.commands.permissions.fetch({ command: '123456789012345678' })
     *   .then(perms => console.log(`Fetched permissions for ${perms.length} users`))
     *   .catch(console.error);
     * @example
     * // Fetch permissions for all commands in a guild
     * client.application.commands.permissions.fetch({ guild: '123456789012345678' })
     *   .then(perms => console.log(`Fetched permissions for ${perms.size} commands`))
     *   .catch(console.error);
     */
    fetch({ guild, command }?: BaseApplicationCommandPermissionsOptions): Promise<ApplicationCommandPermissionData[] | Collection<Snowflake, ApplicationCommandPermissionData[]>>;
    /**
     * Data used for overwriting the permissions for all application commands in a guild.
     * @typedef {Object} GuildApplicationCommandPermissionData
     * @property {Snowflake} id The command's id
     * @property {ApplicationCommandPermissionData[]} permissions The permissions for this command
     */
    /**
     * Options used to set permissions for one or more Application Commands in a guild
     * <warn>One of `command` AND `permissions`, OR `fullPermissions` is required.
     * `fullPermissions` is not a valid option when passing to a manager where `commandId` is non-null</warn>
     * @typedef {BaseApplicationCommandPermissionsOptions} SetApplicationCommandPermissionsOptions
     * @property {ApplicationCommandPermissionData[]} [permissions] The new permissions for the command
     * @property {GuildApplicationCommandPermissionData[]} [fullPermissions] The new permissions for all commands
     * in a guild <warn>When this parameter is set, `permissions` and `command` are ignored</warn>
     */
    /**
     * Sets the permissions for one or more commands.
     * @param {SetApplicationCommandPermissionsOptions} options Options used to set permissions
     * @returns {Promise<ApplicationCommandPermissions[]|Collection<Snowflake, ApplicationCommandPermissions[]>>}
     * @example
     * // Set the permissions for one command
     * client.application.commands.permissions.set({ guild: '892455839386304532', command: '123456789012345678',
     *  permissions: [
     *    {
     *      id: '876543210987654321',
     *      type: 'USER',
     *      permission: false,
     *    },
     * ]})
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Set the permissions for all commands
     * guild.commands.permissions.set({ fullPermissions: [
     *   {
     *     id: '123456789012345678',
     *     permissions: [{
     *       id: '876543210987654321',
     *       type: 'USER',
     *       permission: false,
     *     }],
     *   },
     * ]})
     *   .then(console.log)
     *   .catch(console.error);
     */
    set({ guild, command, permissions, fullPermissions }?: SetApplicationCommandPermissionsOptions): Promise<ApplicationCommandPermissionData[] | Collection<Snowflake, ApplicationCommandPermissionData[]>>;
    /**
     * Options used to add permissions to a command
     * <warn>The `command` parameter is not optional when the managers `commandId` is `null`</warn>
     * @typedef {BaseApplicationCommandPermissionsOptions} AddApplicationCommandPermissionsOptions
     * @property {ApplicationCommandPermissionData[]} permissions The permissions to add to the command
     */
    /**
     * Add permissions to a command.
     * @param {AddApplicationCommandPermissionsOptions} options Options used to add permissions
     * @returns {Promise<ApplicationCommandPermissions[]>}
     * @example
     * // Block a role from the command permissions
     * guild.commands.permissions.add({ command: '123456789012345678', permissions: [
     *   {
     *     id: '876543211234567890',
     *     type: 'ROLE',
     *     permission: false
     *   },
     * ]})
     *   .then(console.log)
     *   .catch(console.error);
     */
    add({ guild, command, permissions }: AddApplicationCommandPermissionsOptions): Promise<ApplicationCommandPermissionData[]>;
    /**
     * Options used to remove permissions from a command
     * <warn>The `command` parameter is not optional when the managers `commandId` is `null`</warn>
     * @typedef {BaseApplicationCommandPermissionsOptions} RemoveApplicationCommandPermissionsOptions
     * @property {UserResolvable|UserResolvable[]} [users] The user(s) to remove from the command permissions
     * <warn>One of `users` or `roles` is required</warn>
     * @property {RoleResolvable|RoleResolvable[]} [roles] The role(s) to remove from the command permissions
     * <warn>One of `users` or `roles` is required</warn>
     */
    /**
     * Remove permissions from a command.
     * @param {RemoveApplicationCommandPermissionsOptions} options Options used to remove permissions
     * @returns {Promise<ApplicationCommandPermissions[]>}
     * @example
     * // Remove a user permission from this command
     * guild.commands.permissions.remove({ command: '123456789012345678', users: '876543210123456789' })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Remove multiple roles from this command
     * guild.commands.permissions.remove({
     *   command: '123456789012345678', roles: ['876543210123456789', '765432101234567890']
     * })
     *    .then(console.log)
     *    .catch(console.error);
     */
    remove({ guild, command, users, roles }: RemoveApplicationCommandPermissionsOptions): Promise<ApplicationCommandPermissionData[]>;
    /**
     * Options used to check the existence of permissions on a command
     * <warn>The `command` parameter is not optional when the managers `commandId` is `null`</warn>
     * @typedef {BaseApplicationCommandPermissionsOptions} HasApplicationCommandPermissionsOptions
     * @property {UserResolvable|RoleResolvable} permissionId The user or role to check if a permission exists for
     * on this command.
     */
    /**
     * Check whether a permission exists for a user or role
     * @param {AddApplicationCommandPermissionsOptions} options Options used to check permissions
     * @returns {Promise<boolean>}
     * @example
     * // Check whether a user has permission to use a command
     * guild.commands.permissions.has({ command: '123456789012345678', permissionId: '876543210123456789' })
     *  .then(console.log)
     *  .catch(console.error);
     */
    has({ guild, command, permissionId }: HasApplicationCommandPermissionsOptions): Promise<boolean>;
    _validateOptions(guild: unknown, command: unknown): {
        guildId: Snowflake;
        commandId: Snowflake | null;
    };
    /**
     * Transforms an {@link ApplicationCommandPermissionData} object into something that can be used with the API.
     * @param {ApplicationCommandPermissionData} permissions The permissions to transform
     * @param {boolean} [received] Whether these permissions have been received from Discord
     * @returns {APIApplicationCommandPermissions}
     * @private
     */
    static transformPermissions(permissions: ApplicationCommandPermissionData, received?: boolean): ApplicationCommandPermissionData;
}
export default ApplicationCommandPermissionsManager;
/**
 * @external APIApplicationCommandPermissions
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
