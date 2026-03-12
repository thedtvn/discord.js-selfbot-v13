import Interaction from './Interaction';
/**
 * Represents a message component interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
declare class MessageComponentInteraction extends Interaction {
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
    get component(): any;
    /**
     * Resolves the type of a MessageComponent
     * @param {MessageComponentTypeResolvable} type The type to resolve
     * @returns {MessageComponentType}
     * @private
     */
    static resolveType(type: any): any;
    deferReply(): void;
    reply(): void;
    fetchReply(): void;
    editReply(): void;
    deleteReply(): void;
    followUp(): void;
    deferUpdate(): void;
    update(): void;
    showModal(): void;
    awaitModalSubmit(): void;
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
