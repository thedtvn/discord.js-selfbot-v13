import BaseMessageComponent from './BaseMessageComponent';
declare class SectionComponent extends BaseMessageComponent {
    /**
     * @property {TextDisplayComponent[]} [components] One to three text components
     * @property {ThumbnailComponent|MessageButton} [accessory] A thumbnail or a button component, with a future possibility of adding more compatible components
     */
    /**
     * @param {SectionComponent | APISectionComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APISectionComponent}
     */
    toJSON(): {
        type: any;
        components: any;
        accessory: any;
    };
}
export default SectionComponent;
