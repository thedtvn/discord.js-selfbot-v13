import BaseMessageComponent from './BaseMessageComponent';
import { RangeError } from '../errors';
import { TextInputStyles, MessageComponentTypes } from '../util/Constants';
import Util from '../util/Util';

/**
 * Represents a text input component in a modal
 * @extends {BaseMessageComponent}
 */

class TextInputComponent extends BaseMessageComponent {
  public customId: string | null;
  public label: string | null;
  public maxLength: number | null;
  public minLength: number | null;
  public placeholder: string | null;
  public required: boolean;
  public style: string | null;
  public value: string | null;

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
  constructor(data: any = {}) {
    super({ type: 'TEXT_INPUT' });

    this.setup(data);
  }

  setup(data: any): void {
    super.setup(data);
    /**
     * A unique string to be sent in the interaction when submitted
     * @type {?string}
     */
    this.customId = data.custom_id ?? data.customId ?? null;

    /**
     * The text to be displayed above this text input component
     * @type {?string}
     */
    this.label = data.label ?? null;

    /**
     * Maximum length of text that can be entered
     * @type {?number}
     */
    this.maxLength = data.max_length ?? data.maxLength ?? null;

    /**
     * Minimum length of text required to be entered
     * @type {?string}
     */
    this.minLength = data.min_length ?? data.minLength ?? null;

    /**
     * Custom placeholder text to display when no text is entered
     * @type {?string}
     */
    this.placeholder = data.placeholder ?? null;

    /**
     * Whether or not this text input component is required
     * @type {?boolean}
     */
    this.required = data.required ?? false;

    /**
     * The style of this text input component
     * @type {?TextInputStyle}
     */
    this.style = data.style ? TextInputComponent.resolveStyle(data.style) : null;

    /**
     * Value of this text input component
     * @type {?string}
     */
    this.value = data.value ?? null;
  }

  /**
   * Sets the value of this text input component
   * @param {string} value Value of this text input component
   * @returns {TextInputComponent}
   */
  setValue(value: string): this {
    this.value = Util.verifyString(value, RangeError, 'TEXT_INPUT_VALUE');
    return this;
  }

  /**
   * Transforms the text input component into a plain object
   * @returns {APITextInput} The raw data of this text input component
   */
  toJSON(): {
    custom_id: string | null;
    label: string | null;
    max_length: number | null;
    min_length: number | null;
    placeholder: string | null;
    required: boolean;
    style: any;
    type: any;
    value: string | null;
  } {
    return {
      custom_id: this.customId,
      label: this.label,
      max_length: this.maxLength,
      min_length: this.minLength,
      placeholder: this.placeholder,
      required: this.required,
      style: TextInputStyles[this.style],
      type: MessageComponentTypes[this.type],
      value: this.value,
    };
  }

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
  static resolveStyle(style: any): any {
    return typeof style === 'string' ? style : TextInputStyles[style];
  }
}


export default TextInputComponent;
