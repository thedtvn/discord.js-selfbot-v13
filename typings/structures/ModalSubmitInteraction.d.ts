import Interaction from './Interaction';
import InteractionWebhook from './InteractionWebhook';
import ModalSubmitFieldsResolver from './ModalSubmitFieldsResolver';
/**
 * Represents a modal submit interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
declare class ModalSubmitInteraction extends Interaction {
    customId: string;
    components: any[];
    message: any | null;
    fields: ModalSubmitFieldsResolver;
    deferred: boolean;
    ephemeral: boolean | null;
    replied: boolean;
    webhook: InteractionWebhook;
    constructor(client: any, data: any);
    /**
     * Transforms component data to discord.js-compatible data
     * @param {*} rawComponent The data to transform
     * @returns {PartialTextInputData[]}
     */
    static transformComponent(rawComponent: any): any[];
    /**
     * Whether this is from a {@link MessageComponentInteraction}.
     * @returns {boolean}
     */
    isFromMessage(): boolean;
    deferReply(..._args: any[]): void;
    reply(..._args: any[]): void;
    fetchReply(..._args: any[]): void;
    editReply(..._args: any[]): void;
    deleteReply(..._args: any[]): void;
    followUp(..._args: any[]): void;
    update(..._args: any[]): void;
    deferUpdate(..._args: any[]): void;
}
export default ModalSubmitInteraction;
