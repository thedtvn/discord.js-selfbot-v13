import BaseMessageComponent from './BaseMessageComponent';
import { MessageComponentTypes, SeparatorSpacingSizes } from '../util/Constants';

class SeparatorComponent extends BaseMessageComponent {
  public spacing: number;
  public divider: boolean;

  /**
   * @property {SeparatorSpacingSizes} [spacing] Size of separator padding — SeparatorSpacingSizes.SMALL for small padding, SeparatorSpacingSizes.LARGE for large padding. Defaults to SeparatorSpacingSizes.SMALL
   * @property {Boolean} [divider] Whether a visual divider should be displayed in the component. Defaults to true
   */

  /**
   * @param {SeparatorComponent | APISeparatorComponent} [data={}] The data
   */
  constructor(data: any = {}) {
    super({ type: 'SEPARATOR' });

    this.setup(data);
  }

  setup(data: any): void {
    super.setup(data);
    /**
     * Size of separator padding — SeparatorSpacingSizes.SMALL for small padding, SeparatorSpacingSizes.LARGE for large padding. Defaults to SeparatorSpacingSizes.SMALL
     * @type {SeparatorSpacingSizes}
     */
    this.spacing = data.spacing ?? SeparatorSpacingSizes.SMALL;

    /**
     * Whether a visual divider should be displayed in the component. Defaults to true
     * @type {Boolean}
     */
    this.divider = data.divider ?? true;
  }

  /**
   * @returns {APISeparatorComponent}
   */
  toJSON(): { type: any; spacing: number; divider: boolean } {
    return {
      type: MessageComponentTypes[this.type],
      spacing: this.spacing,
      divider: this.divider,
    };
  }
}


export default SeparatorComponent;
