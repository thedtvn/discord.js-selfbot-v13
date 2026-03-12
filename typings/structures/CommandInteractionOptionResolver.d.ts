/**
 * A resolver for command interaction options.
 */
declare class CommandInteractionOptionResolver {
    constructor(client: any, options: any, resolved: any);
    /**
     * Gets an option by its name.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?CommandInteractionOption} The option, if found.
     */
    get(name: any, required?: boolean): any;
    /**
     * Gets an option by name and property and checks its type.
     * @param {string} name The name of the option.
     * @param {ApplicationCommandOptionType} type The type of the option.
     * @param {string[]} properties The properties to check for for `required`.
     * @param {boolean} required Whether to throw an error if the option is not found.
     * @returns {?CommandInteractionOption} The option, if found.
     * @private
     */
    _getTypedOption(name: any, type: any, properties: any, required: any): any;
    /**
     * Gets the selected subcommand.
     * @param {boolean} [required=true] Whether to throw an error if there is no subcommand.
     * @returns {?string} The name of the selected subcommand, or null if not set and not required.
     */
    getSubcommand(required?: boolean): any;
    /**
     * Gets the selected subcommand group.
     * @param {boolean} [required=true] Whether to throw an error if there is no subcommand group.
     * @returns {?string} The name of the selected subcommand group, or null if not set and not required.
     */
    getSubcommandGroup(required?: boolean): any;
    /**
     * Gets a boolean option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?boolean} The value of the option, or null if not set and not required.
     */
    getBoolean(name: any, required?: boolean): any;
    /**
     * Gets a channel option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?(GuildChannel|ThreadChannel|APIChannel)}
     * The value of the option, or null if not set and not required.
     */
    getChannel(name: any, required?: boolean): any;
    /**
     * Gets a string option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?string} The value of the option, or null if not set and not required.
     */
    getString(name: any, required?: boolean): any;
    /**
     * Gets an integer option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?number} The value of the option, or null if not set and not required.
     */
    getInteger(name: any, required?: boolean): any;
    /**
     * Gets a number option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?number} The value of the option, or null if not set and not required.
     */
    getNumber(name: any, required?: boolean): any;
    /**
     * Gets a user option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?User} The value of the option, or null if not set and not required.
     */
    getUser(name: any, required?: boolean): any;
    /**
     * Gets a member option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?(GuildMember|APIGuildMember)}
     * The value of the option, or null if not set and not required.
     */
    getMember(name: any, required?: boolean): any;
    /**
     * Gets a role option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?(Role|APIRole)} The value of the option, or null if not set and not required.
     */
    getRole(name: any, required?: boolean): any;
    /**
     * Gets a mentionable option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?(User|GuildMember|APIGuildMember|Role|APIRole)}
     * The value of the option, or null if not set and not required.
     */
    getMentionable(name: any, required?: boolean): any;
    /**
     * Gets a message option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?(Message|APIMessage)}
     * The value of the option, or null if not set and not required.
     */
    getMessage(name: any, required?: boolean): any;
    /**
     * The full autocomplete option object.
     * @typedef {Object} AutocompleteFocusedOption
     * @property {string} name The name of the option
     * @property {ApplicationCommandOptionType} type The type of the application command option
     * @property {string} value The value of the option
     * @property {boolean} focused Whether this option is currently in focus for autocomplete
     */
    /**
     * Gets the focused option.
     * @param {boolean} [getFull=false] Whether to get the full option object
     * @returns {string|AutocompleteFocusedOption}
     * The value of the option, or the whole option if getFull is true
     */
    getFocused(getFull?: boolean): any;
    /**
     * Gets an attachment option.
     * @param {string} name The name of the option.
     * @param {boolean} [required=false] Whether to throw an error if the option is not found.
     * @returns {?MessageAttachment} The value of the option, or null if not set and not required.
     */
    getAttachment(name: any, required?: boolean): any;
}
export default CommandInteractionOptionResolver;
