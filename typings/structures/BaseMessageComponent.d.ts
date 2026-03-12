/**
 * Represents an interactive component of a Message or Modal. It should not be necessary to construct this directly.
 * See {@link MessageComponent}
 */
declare class BaseMessageComponent {
    type: any;
    data: any;
    /**
     * Options for a BaseMessageComponent
     * @typedef {Object} BaseMessageComponentOptions
     * @property {MessageComponentTypeResolvable} type The type of this component
     */
    /**
     * Data that can be resolved into options for a component. This can be:
     * * MessageActionRowOptions
     * * MessageButtonOptions
     * * MessageSelectMenuOptions
     * * TextInputComponentOptions
     * @typedef {MessageActionRowOptions|MessageButtonOptions|MessageSelectMenuOptions} MessageComponentOptions
     */
    /**
     * Components that can be sent in a payload. These can be:
     * * MessageActionRow
     * * MessageButton
     * * MessageSelectMenu
     * * TextInputComponent
     * @typedef {MessageActionRow|MessageButton|MessageSelectMenu} MessageComponent
     * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
     */
    /**
     * Data that can be resolved to a MessageComponentType. This can be:
     * * MessageComponentType
     * * string
     * * number
     * @typedef {string|number|MessageComponentType} MessageComponentTypeResolvable
     */
    /**
     * @param {BaseMessageComponent|BaseMessageComponentOptions} [data={}] The options for this component
     */
    constructor(data: any);
    setup(data: any): void;
    /**
     * The id of this component
     * @type {number}
     * @readonly
     */
    get id(): any;
    /**
     * Constructs a component based on the type of the incoming data
     * @param {MessageComponentOptions} data Data for a MessageComponent
     * @param {Client|WebhookClient} [client] Client constructing this component
     * @returns {?(MessageComponent|ModalComponent)}
     * @private
     */
    static create(data: any, client?: any): any;
    /**
     * Resolves the type of a component
     * @param {MessageComponentTypeResolvable} type The type to resolve
     * @returns {MessageComponentType}
     * @private
     */
    static resolveType(type: any): any;
    static extractInteractiveComponents(component: any): any[];
}
export default BaseMessageComponent;
