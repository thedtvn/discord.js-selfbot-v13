import BaseMessageComponent from './BaseMessageComponent';
declare class MediaGalleryComponent extends BaseMessageComponent {
    /**
     * @property {MediaGalleryItem[]} [items] 1 to 10 media gallery items
     */
    /**
     * @param {MediaGalleryComponent | APIMediaGalleryComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APIMediaGalleryComponent}
     */
    toJSON(): {
        type: any;
        items: any;
    };
}
export default MediaGalleryComponent;
