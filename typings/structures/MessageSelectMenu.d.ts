import BaseMessageComponent from './BaseMessageComponent';
/**
 * Represents a select menu message component
 * @extends {BaseMessageComponent}
 */
declare class MessageSelectMenu extends BaseMessageComponent {
    customId: string | null;
    placeholder: string | null;
    minValues: number | null;
    maxValues: number | null;
    options: any[];
    disabled: boolean;
    channelTypes: string[];
    type: any;
    /**
     * @typedef {BaseMessageComponentOptions} MessageSelectMenuOptions
     * @property {string} [customId] A unique string to be sent in the interaction when clicked
     * @property {string} [placeholder] Custom placeholder text to display when nothing is selected
     * @property {number} [minValues] The minimum number of selections required
     * @property {number} [maxValues] The maximum number of selections allowed
     * @property {MessageSelectOption[]} [options] Options for the select menu
     * @property {boolean} [disabled=false] Disables the select menu to prevent interactions
     * @property {ChannelType[]} [channelTypes] List of channel types to include in the ChannelSelect component
     */
    /**
     * @typedef {Object} MessageSelectOption
     * @property {string} label The text to be displayed on this option
     * @property {string} value The value to be sent for this option
     * @property {?string} description Optional description to show for this option
     * @property {?RawEmoji} emoji Emoji to display for this option
     * @property {boolean} default Render this option as the default selection
     */
    /**
     * @typedef {Object} MessageSelectOptionData
     * @property {string} label The text to be displayed on this option
     * @property {string} value The value to be sent for this option
     * @property {string} [description] Optional description to show for this option
     * @property {EmojiIdentifierResolvable} [emoji] Emoji to display for this option
     * @property {boolean} [default] Render this option as the default selection
     */
    /**
     * @param {MessageSelectMenu|MessageSelectMenuOptions} [data={}] MessageSelectMenu to clone or raw data
     */
    constructor(data?: any);
    setup(data: any): void;
    /**
     * Transforms the select menu into a plain object
     * @returns {APIMessageSelectMenu} The raw data of this select menu
     */
    toJSON(): {
        channel_types: any[];
        custom_id: string | null;
        disabled: boolean;
        placeholder: string | null;
        min_values: number | null;
        max_values: number | undefined;
        options: any[];
        type: any;
    };
    /**
     * Normalizes option input and resolves strings and emojis.
     * @param {MessageSelectOptionData} option The select menu option to normalize
     * @returns {MessageSelectOption}
     */
    static normalizeOption(option: any): {
        label: any;
        value: any;
        description: any;
        emoji: any;
        default: any;
    };
    /**
     * Normalizes option input and resolves strings and emojis.
     * @param {...MessageSelectOptionData|MessageSelectOptionData[]} options The select menu options to normalize
     * @returns {MessageSelectOption[]}
     */
    static normalizeOptions(...options: any[]): {
        label: any;
        value: any;
        description: any;
        emoji: any;
        default: any;
    }[];
}
export default MessageSelectMenu;
