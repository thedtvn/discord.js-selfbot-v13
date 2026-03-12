import Base from './Base';
/**
 * Represents an application command.
 * @extends {Base}
 */
declare class ApplicationCommand extends Base {
    constructor(client: any, data: any, guild: any, guildId: any);
    _patch(data: any): void;
    /**
     * The timestamp the command was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the command was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The manager that this command belongs to
     * @type {ApplicationCommandManager}
     * @readonly
     */
    get manager(): any;
    /**
     * Data for creating or editing an application command.
     * @typedef {Object} ApplicationCommandData
     * @property {string} name The name of the command
     * @property {Object<Locale, string>} [nameLocalizations] The localizations for the command name
     * @property {string} description The description of the command
     * @property {Object<Locale, string>} [descriptionLocalizations] The localizations for the command description
     * @property {ApplicationCommandType} [type] The type of the command
     * @property {ApplicationCommandOptionData[]} [options] Options for the command
     * @property {boolean} [defaultPermission] Whether the command is enabled by default when the app is added to a guild
     * @property {?PermissionResolvable} [defaultMemberPermissions] The bitfield used to determine the default permissions
     * a member needs in order to run the command
     * @property {boolean} [dmPermission] Whether the command is enabled in DMs
     */
    /**
     * An option for an application command or subcommand.
     * <info>In addition to the listed properties, when used as a parameter,
     * API style `snake_case` properties can be used for compatibility with generators like `@discordjs/builders`.</info>
     * <warn>Note that providing a value for the `camelCase` counterpart for any `snake_case` property
     * will discard the provided `snake_case` property.</warn>
     * @typedef {Object} ApplicationCommandOptionData
     * @property {ApplicationCommandOptionType|number} type The type of the option
     * @property {string} name The name of the option
     * @property {Object<Locale, string>} [nameLocalizations] The name localizations for the option
     * @property {string} description The description of the option
     * @property {Object<Locale, string>} [descriptionLocalizations] The description localizations for the option
     * @property {boolean} [autocomplete] Whether the option is an autocomplete option
     * @property {boolean} [required] Whether the option is required
     * @property {ApplicationCommandOptionChoiceData[]} [choices] The choices of the option for the user to pick from
     * @property {ApplicationCommandOptionData[]} [options] Additional options if this option is a subcommand (group)
     * @property {ChannelType[]|number[]} [channelTypes] When the option type is channel,
     * the allowed types of channels that can be selected
     * @property {number} [minValue] The minimum value for an `INTEGER` or `NUMBER` option
     * @property {number} [maxValue] The maximum value for an `INTEGER` or `NUMBER` option
     * @property {number} [minLength] The minimum length for a `STRING` option
     * (maximum of `6000`)
     * @property {number} [maxLength] The maximum length for a `STRING` option
     * (maximum of `6000`)
     */
    /**
     * @typedef {Object} ApplicationCommandOptionChoiceData
     * @property {string} name The name of the choice
     * @property {Object<Locale, string>} [nameLocalizations] The localized names for this choice
     * @property {string|number} value The value of the choice
     */
    /**
     * Edits this application command.
     * @param {Partial<ApplicationCommandData>} data The data to update the command with
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Edit the description of this command
     * command.edit({
     *   description: 'New description',
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    edit(data: any): any;
    /**
     * Edits the name of this ApplicationCommand
     * @param {string} name The new name of the command
     * @returns {Promise<ApplicationCommand>}
     */
    setName(name: any): any;
    /**
     * Edits the localized names of this ApplicationCommand
     * @param {Object<Locale, string>} nameLocalizations The new localized names for the command
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Edit the name localizations of this command
     * command.setLocalizedNames({
     *   'en-GB': 'test',
     *   'pt-BR': 'teste',
     * })
     *   .then(console.log)
     *   .catch(console.error)
     */
    setNameLocalizations(nameLocalizations: any): any;
    /**
     * Edits the description of this ApplicationCommand
     * @param {string} description The new description of the command
     * @returns {Promise<ApplicationCommand>}
     */
    setDescription(description: any): any;
    /**
     * Edits the localized descriptions of this ApplicationCommand
     * @param {Object<Locale, string>} descriptionLocalizations The new localized descriptions for the command
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Edit the description localizations of this command
     * command.setLocalizedDescriptions({
     *   'en-GB': 'A test command',
     *   'pt-BR': 'Um comando de teste',
     * })
     *   .then(console.log)
     *   .catch(console.error)
     */
    setDescriptionLocalizations(descriptionLocalizations: any): any;
    /**
     * Edits the default permission of this ApplicationCommand
     * @param {boolean} [defaultPermission=true] The default permission for this command
     * @returns {Promise<ApplicationCommand>}
     * @deprecated Use {@link ApplicationCommand#setDefaultMemberPermissions} and {@link ApplicationCommand#setDMPermission} instead.
     */
    setDefaultPermission(defaultPermission?: boolean): any;
    /**
     * Edits the default member permissions of this ApplicationCommand
     * @param {?PermissionResolvable} defaultMemberPermissions The default member permissions required to run this command
     * @returns {Promise<ApplicationCommand>}
     */
    setDefaultMemberPermissions(defaultMemberPermissions: any): any;
    /**
     * Edits the DM permission of this ApplicationCommand
     * @param {boolean} [dmPermission=true] Whether the command can be used in DMs
     * @returns {Promise<ApplicationCommand>}
     */
    setDMPermission(dmPermission?: boolean): any;
    /**
     * Edits the options of this ApplicationCommand
     * @param {ApplicationCommandOptionData[]} options The options to set for this command
     * @returns {Promise<ApplicationCommand>}
     */
    setOptions(options: any): any;
    /**
     * Deletes this command.
     * @returns {Promise<ApplicationCommand>}
     * @example
     * // Delete this command
     * command.delete()
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(): any;
    /**
     * Whether this command equals another command. It compares all properties, so for most operations
     * it is advisable to just compare `command.id === command2.id` as it is much faster and is often
     * what most users need.
     * @param {ApplicationCommand|ApplicationCommandData|APIApplicationCommand} command The command to compare with
     * @param {boolean} [enforceOptionOrder=false] Whether to strictly check that options and choices are in the same
     * order in the array <info>The client may not always respect this ordering!</info>
     * @returns {boolean}
     */
    equals(command: any, enforceOptionOrder?: boolean): any;
    /**
     * Recursively checks that all options for an {@link ApplicationCommand} are equal to the provided options.
     * In most cases it is better to compare using {@link ApplicationCommand#equals}
     * @param {ApplicationCommandOptionData[]} existing The options on the existing command,
     * should be {@link ApplicationCommand#options}
     * @param {ApplicationCommandOptionData[]|APIApplicationCommandOption[]} options The options to compare against
     * @param {boolean} [enforceOptionOrder=false] Whether to strictly check that options and choices are in the same
     * order in the array <info>The client may not always respect this ordering!</info>
     * @returns {boolean}
     */
    static optionsEqual(existing: any, options: any, enforceOptionOrder?: boolean): any;
    /**
     * Checks that an option for an {@link ApplicationCommand} is equal to the provided option
     * In most cases it is better to compare using {@link ApplicationCommand#equals}
     * @param {ApplicationCommandOptionData} existing The option on the existing command,
     * should be from {@link ApplicationCommand#options}
     * @param {ApplicationCommandOptionData|APIApplicationCommandOption} option The option to compare against
     * @param {boolean} [enforceOptionOrder=false] Whether to strictly check that options or choices are in the same
     * order in their array <info>The client may not always respect this ordering!</info>
     * @returns {boolean}
     * @private
     */
    static _optionEquals(existing: any, option: any, enforceOptionOrder?: boolean): any;
    /**
     * An option for an application command or subcommand.
     * @typedef {Object} ApplicationCommandOption
     * @property {ApplicationCommandOptionType} type The type of the option
     * @property {string} name The name of the option
     * @property {Object<string, string>} [nameLocalizations] The localizations for the option name
     * @property {string} [nameLocalized] The localized name for this option
     * @property {string} description The description of the option
     * @property {Object<string, string>} [descriptionLocalizations] The localizations for the option description
     * @property {string} [descriptionLocalized] The localized description for this option
     * @property {boolean} [required] Whether the option is required
     * @property {boolean} [autocomplete] Whether the option is an autocomplete option
     * @property {ApplicationCommandOptionChoice[]} [choices] The choices of the option for the user to pick from
     * @property {ApplicationCommandOption[]} [options] Additional options if this option is a subcommand (group)
     * @property {ChannelType[]} [channelTypes] When the option type is channel,
     * the allowed types of channels that can be selected
     * @property {number} [minValue] The minimum value for an `INTEGER` or `NUMBER` option
     * @property {number} [maxValue] The maximum value for an `INTEGER` or `NUMBER` option
     * @property {number} [minLength] The minimum length for a `STRING` option
     * (maximum of `6000`)
     * @property {number} [maxLength] The maximum length for a `STRING` option
     * (maximum of `6000`)
     */
    /**
     * A choice for an application command option.
     * @typedef {Object} ApplicationCommandOptionChoice
     * @property {string} name The name of the choice
     * @property {?string} nameLocalized The localized name of the choice in the provided locale, if any
     * @property {?Object<string, string>} [nameLocalizations] The localized names for this choice
     * @property {string|number} value The value of the choice
     */
    /**
     * Transforms an {@link ApplicationCommandOptionData} object into something that can be used with the API.
     * @param {ApplicationCommandOptionData|ApplicationCommandOption} option The option to transform
     * @param {boolean} [received] Whether this option has been received from Discord
     * @returns {APIApplicationCommandOption}
     * @private
     */
    static transformOption(option: any, received: any): {
        [x: string]: any;
        type: any;
        name: any;
        description: any;
        required: any;
        autocomplete: any;
        choices: any;
        options: any;
    };
}
export default ApplicationCommand;
/**
 * @external APIApplicationCommand
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
/**
 * @external APIApplicationCommandOption
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
