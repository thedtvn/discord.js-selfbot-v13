import BaseMessageComponent from './BaseMessageComponent';
/**
 * Represents a button message component.
 * @extends {BaseMessageComponent}
 */
declare class MessageButton extends BaseMessageComponent {
    label: string | null;
    customId: string | null;
    style: string | null;
    emoji: any;
    url: string | null;
    disabled: boolean;
    /**
     * @typedef {BaseMessageComponentOptions} MessageButtonOptions
     * @property {string} [label] The text to be displayed on this button
     * @property {string} [customId] A unique string to be sent in the interaction when clicked
     * @property {MessageButtonStyleResolvable} [style] The style of this button
     * @property {EmojiIdentifierResolvable} [emoji] The emoji to be displayed to the left of the text
     * @property {string} [url] Optional URL for link-style buttons
     * @property {boolean} [disabled=false] Disables the button to prevent interactions
     */
    /**
     * @param {MessageButton|MessageButtonOptions} [data={}] MessageButton to clone or raw data
     */
    constructor(data?: any);
    setup(data: any): void;
    /**
     * Sets the custom id for this button
     * @param {string} customId A unique string to be sent in the interaction when clicked
     * @returns {MessageButton}
     */
    setCustomId(customId: string): this;
    /**
     * Sets the interactive status of the button
     * @param {boolean} [disabled=true] Whether this button should be disabled
     * @returns {MessageButton}
     */
    setDisabled(disabled?: boolean): this;
    /**
     * Set the emoji of this button
     * @param {EmojiIdentifierResolvable} emoji The emoji to be displayed on this button
     * @returns {MessageButton}
     */
    setEmoji(emoji: any): this;
    /**
     * Sets the label of this button
     * @param {string} label The text to be displayed on this button
     * @returns {MessageButton}
     */
    setLabel(label: string): this;
    /**
     * Sets the style of this button
     * @param {MessageButtonStyleResolvable} style The style of this button
     * @returns {MessageButton}
     */
    setStyle(style: any): this;
    /**
     * Sets the URL of this button.
     * <info>MessageButton#style must be LINK when setting a URL</info>
     * @param {string} url The URL of this button
     * @returns {MessageButton}
     */
    setURL(url: string): this;
    /**
     * Transforms the button to a plain object.
     * @returns {APIMessageButton} The raw data of this button
     */
    toJSON(): {
        custom_id: string | null;
        disabled: boolean;
        emoji: any;
        label: string | null;
        style: any;
        type: any;
        url: string | null;
    };
    /**
     * Data that can be resolved to a MessageButtonStyle. This can be
     * * MessageButtonStyle
     * * number
     * @typedef {number|MessageButtonStyle} MessageButtonStyleResolvable
     */
    /**
     * Resolves the style of a button
     * @param {MessageButtonStyleResolvable} style The style to resolve
     * @returns {MessageButtonStyle}
     * @private
     */
    static resolveStyle(style: any): any;
}
export default MessageButton;
