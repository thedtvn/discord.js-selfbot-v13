import BaseMessageComponent from './BaseMessageComponent';
declare class TextDisplayComponent extends BaseMessageComponent {
    content: string | null;
    /**
     * @property {String} [content] Text that will be displayed similar to a message
     */
    /**
     * @param {TextDisplayComponent | APITextDisplayComponent} [data={}] The data
     */
    constructor(data?: any);
    setup(data: any): void;
    /**
     * @returns {APITextDisplayComponent}
     */
    toJSON(): {
        type: any;
        content: string | null;
    };
}
export default TextDisplayComponent;
