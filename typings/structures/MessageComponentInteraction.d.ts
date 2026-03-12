import Interaction from './Interaction';
import InteractionWebhook from './InteractionWebhook';
/**
 * Represents a message component interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
declare class MessageComponentInteraction extends Interaction {
    message: any;
    customId: string;
    componentType: string;
    deferred: boolean;
    ephemeral: boolean | null;
    replied: boolean;
    webhook: InteractionWebhook;
    constructor(client: any, data: any);
    /**
     * Raw message components from the API
     * * APIMessageButton
     * * APIMessageSelectMenu
     * @typedef {APIMessageButton|APIMessageSelectMenu} APIMessageActionRowComponent
     */
    /**
     * The component which was interacted with
     * @type {MessageActionRowComponent|APIMessageActionRowComponent}
     * @readonly
     */
    get component(): any | null;
    /**
     * Resolves the type of a MessageComponent
     * @param {MessageComponentTypeResolvable} type The type to resolve
     * @returns {MessageComponentType}
     * @private
     */
    static resolveType(type: string | number): string;
    deferReply(..._args: any[]): void;
    reply(..._args: any[]): void;
    fetchReply(..._args: any[]): void;
    editReply(..._args: any[]): void;
    deleteReply(..._args: any[]): void;
    followUp(..._args: any[]): void;
    deferUpdate(..._args: any[]): void;
    update(..._args: any[]): void;
    showModal(..._args: any[]): void;
    awaitModalSubmit(..._args: any[]): void;
}
/**
 * @external APIMessageSelectMenu
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object}
 */
/**
 * @external APIMessageButton
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object}
 */
export default MessageComponentInteraction;
