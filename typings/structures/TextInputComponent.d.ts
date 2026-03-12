import BaseMessageComponent from './BaseMessageComponent';
/**
 * Represents a text input component in a modal
 * @extends {BaseMessageComponent}
 */
declare class TextInputComponent extends BaseMessageComponent {
    /**
     * @typedef {BaseMessageComponentOptions} TextInputComponentOptions
     * @property {string} [customId] A unique string to be sent in the interaction when submitted
     * @property {string} [label] The text to be displayed above this text input component
     * @property {number} [maxLength] Maximum length of text that can be entered
     * @property {number} [minLength] Minimum length of text required to be entered
     * @property {string} [placeholder] Custom placeholder text to display when no text is entered
     * @property {boolean} [required] Whether or not this text input component is required
     * @property {TextInputStyleResolvable} [style] The style of this text input component
     * @property {string} [value] Value of this text input component
     */
    /**
     * @param {TextInputComponent|TextInputComponentOptions} [data={}] TextInputComponent to clone or raw data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * Sets the value of this text input component
     * @param {string} value Value of this text input component
     * @returns {TextInputComponent}
     */
    setValue(value: any): this;
    /**
     * Transforms the text input component into a plain object
     * @returns {APITextInput} The raw data of this text input component
     */
    toJSON(): {
        custom_id: any;
        label: any;
        max_length: any;
        min_length: any;
        placeholder: any;
        required: any;
        style: any;
        type: any;
        value: any;
    };
    /**
     * Data that can be resolved to a TextInputStyle. This can be
     * * TextInputStyle
     * * number
     * @typedef {number|TextInputStyle} TextInputStyleResolvable
     */
    /**
     * Resolves the style of a text input component
     * @param {TextInputStyleResolvable} style The style to resolve
     * @returns {TextInputStyle}
     * @private
     */
    static resolveStyle(style: any): any;
}
export default TextInputComponent;
