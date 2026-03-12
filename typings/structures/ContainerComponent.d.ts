import BaseMessageComponent from './BaseMessageComponent';
declare class ContainerComponent extends BaseMessageComponent {
    /**
     * @typedef {MessageActionRow|TextDisplayComponent|SectionComponent|MediaGalleryComponent|SeparatorComponent|FileComponent} ContainerComponents
     * @property {ContainerComponents[]} [components] Components of the type action row, text display, section, media gallery, separator, or file
     * @property {Number} [accent_color] Color for the accent on the container as RGB from 0x000000 to 0xFFFFFF
     * @property {Boolean} [spoiler] Whether the container should be a spoiler (or blurred out). Defaults to false.
     */
    /**
     * @param {ContainerComponent | APIContainerComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * The hex accent color of this container
     * @type {?string}
     * @readonly
     */
    get hexAccentColor(): any;
    /**
     * @returns {APIContainerComponent}
     */
    toJSON(): {
        type: any;
        components: any;
        accent_color: any;
        spoiler: any;
    };
}
export default ContainerComponent;
