import Interaction from './Interaction';
/**
 * Represents an autocomplete interaction.
 * @extends {Interaction}
 */
declare class AutocompleteInteraction extends Interaction {
    constructor(client: any, data: any);
    /**
     * The invoked application command, if it was fetched before
     * @type {?ApplicationCommand}
     */
    get command(): any;
    /**
     * Transforms an option received from the API.
     * @param {APIApplicationCommandOption} option The received option
     * @returns {CommandInteractionOption}
     * @private
     */
    transformOption(option: any): {
        name: any;
        type: any;
    };
    /**
     * Sends results for the autocomplete of this interaction.
     * @param {ApplicationCommandOptionChoiceData[]} options The options for the autocomplete
     * @returns {Promise<void>}
     * @example
     * // respond to autocomplete interaction
     * interaction.respond([
     *  {
     *    name: 'Option 1',
     *    value: 'option1',
     *  },
     * ])
     *  .then(console.log)
     *  .catch(console.error);
     */
    respond(options: any): Promise<void>;
}
export default AutocompleteInteraction;
