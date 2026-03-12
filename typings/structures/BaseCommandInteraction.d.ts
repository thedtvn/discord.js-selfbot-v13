import Interaction from './Interaction';
/**
 * Represents a command interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 * @abstract
 */
declare class BaseCommandInteraction extends Interaction {
    commandId: any;
    commandName: string;
    deferred: boolean;
    replied: boolean;
    ephemeral: boolean | null;
    webhook: any;
    constructor(client: any, data: any);
    /**
     * The invoked application command, if it was fetched before
     * @type {?ApplicationCommand}
     */
    get command(): any;
    /**
     * Represents the resolved data of a received command interaction.
     * @typedef {Object} CommandInteractionResolvedData
     * @property {Collection<Snowflake, User>} [users] The resolved users
     * @property {Collection<Snowflake, GuildMember|APIGuildMember>} [members] The resolved guild members
     * @property {Collection<Snowflake, Role|APIRole>} [roles] The resolved roles
     * @property {Collection<Snowflake, Channel|APIChannel>} [channels] The resolved channels
     * @property {Collection<Snowflake, Message|APIMessage>} [messages] The resolved messages
     * @property {Collection<Snowflake, MessageAttachment>} [attachments] The resolved attachments
     */
    /**
     * Transforms the resolved received from the API.
     * @param {APIInteractionDataResolved} resolved The received resolved objects
     * @returns {CommandInteractionResolvedData}
     * @private
     */
    transformResolved(resolved: any): Record<string, any>;
    /**
     * Represents an option of a received command interaction.
     * @typedef {Object} CommandInteractionOption
     * @property {string} name The name of the option
     * @property {ApplicationCommandOptionType} type The type of the option
     * @property {boolean} [autocomplete] Whether the option is an autocomplete option
     * @property {string|number|boolean} [value] The value of the option
     * @property {CommandInteractionOption[]} [options] Additional options if this option is a
     * subcommand (group)
     * @property {User} [user] The resolved user
     * @property {GuildMember|APIGuildMember} [member] The resolved member
     * @property {GuildChannel|ThreadChannel|APIChannel} [channel] The resolved channel
     * @property {Role|APIRole} [role] The resolved role
     * @property {MessageAttachment} [attachment] The resolved attachment
     */
    /**
     * Transforms an option received from the API.
     * @param {APIApplicationCommandOption} option The received option
     * @param {APIInteractionDataResolved} resolved The resolved interaction data
     * @returns {CommandInteractionOption}
     * @private
     */
    transformOption(option: any, resolved: any): Record<string, any>;
    deferReply(): void;
    reply(): void;
    fetchReply(): void;
    editReply(): void;
    deleteReply(): void;
    followUp(): void;
    showModal(): void;
    awaitModalSubmit(): void;
}
export default BaseCommandInteraction;
/**
 * @external APIInteractionDataResolved
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure}
 */
