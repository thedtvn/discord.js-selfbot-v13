import Interaction from './Interaction';
/**
 * Represents a modal submit interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
declare class ModalSubmitInteraction extends Interaction {
    constructor(client: any, data: any);
    /**
     * Transforms component data to discord.js-compatible data
     * @param {*} rawComponent The data to transform
     * @returns {PartialTextInputData[]}
     */
    static transformComponent(rawComponent: any): any;
    /**
     * Whether this is from a {@link MessageComponentInteraction}.
     * @returns {boolean}
     */
    isFromMessage(): boolean;
    deferReply(): void;
    reply(): void;
    fetchReply(): void;
    editReply(): void;
    deleteReply(): void;
    followUp(): void;
    update(): void;
    deferUpdate(): void;
}
export default ModalSubmitInteraction;
