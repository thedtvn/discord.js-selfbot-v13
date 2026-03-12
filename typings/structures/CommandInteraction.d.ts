import BaseCommandInteraction from './BaseCommandInteraction';
/**
 * Represents a command interaction.
 * @extends {BaseCommandInteraction}
 */
declare class CommandInteraction extends BaseCommandInteraction {
    constructor(client: any, data: any);
    /**
     * Returns a string representation of the command interaction.
     * This can then be copied by a user and executed again in a new command while keeping the option order.
     * @returns {string}
     */
    toString(): string;
}
export default CommandInteraction;
