import BaseCommandInteraction from './BaseCommandInteraction';
/**
 * Represents a context menu interaction.
 * @extends {BaseCommandInteraction}
 */
declare class ContextMenuInteraction extends BaseCommandInteraction {
    options: any;
    targetId: any;
    targetType: any;
    constructor(client: any, data: any);
    /**
     * Resolves and transforms options received from the API for a context menu interaction.
     * @param {APIApplicationCommandInteractionData} data The interaction data
     * @returns {CommandInteractionOption[]}
     * @private
     */
    resolveContextMenuOptions({ target_id, resolved }: {
        target_id: any;
        resolved: any;
    }): any[];
}
export default ContextMenuInteraction;
