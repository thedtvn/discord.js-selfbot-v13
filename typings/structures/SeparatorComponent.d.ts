import BaseMessageComponent from './BaseMessageComponent';
declare class SeparatorComponent extends BaseMessageComponent {
    /**
     * @property {SeparatorSpacingSizes} [spacing] Size of separator padding — SeparatorSpacingSizes.SMALL for small padding, SeparatorSpacingSizes.LARGE for large padding. Defaults to SeparatorSpacingSizes.SMALL
     * @property {Boolean} [divider] Whether a visual divider should be displayed in the component. Defaults to true
     */
    /**
     * @param {SeparatorComponent | APISeparatorComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APISeparatorComponent}
     */
    toJSON(): {
        type: any;
        spacing: any;
        divider: any;
    };
}
export default SeparatorComponent;
