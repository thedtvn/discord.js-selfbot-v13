import BaseMessageComponent from './BaseMessageComponent';
import { MessageComponentTypes } from '../util/Constants';

class TextDisplayComponent extends BaseMessageComponent {
  public content: string | null;

  /**
   * @property {String} [content] Text that will be displayed similar to a message
   */

  /**
   * @param {TextDisplayComponent | APITextDisplayComponent} [data={}] The data
   */
  constructor(data: any = {}) {
    super({ type: 'TEXT_DISPLAY' });

    this.setup(data);
  }

  setup(data: any): void {
    super.setup(data);
    /**
     * Text that will be displayed similar to a message
     * @type {String}
     */
    this.content = data.content ?? null;
  }

  /**
   * @returns {APITextDisplayComponent}
   */
  toJSON(): { type: any; content: string | null } {
    return {
      type: MessageComponentTypes[this.type],
      content: this.content,
    };
  }
}


export default TextDisplayComponent;
