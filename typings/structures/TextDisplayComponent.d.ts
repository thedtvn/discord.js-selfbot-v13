import BaseMessageComponent from './BaseMessageComponent';
declare class TextDisplayComponent extends BaseMessageComponent {
    /**
     * @property {String} [content] Text that will be displayed similar to a message
     */
    /**
     * @param {TextDisplayComponent | APITextDisplayComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APITextDisplayComponent}
     */
    toJSON(): {
        type: any;
        content: any;
    };
}
export default TextDisplayComponent;
