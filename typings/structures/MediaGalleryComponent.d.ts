import BaseMessageComponent from './BaseMessageComponent';
import MediaGalleryItem from './MediaGalleryItem';
declare class MediaGalleryComponent extends BaseMessageComponent {
    items: MediaGalleryItem[];
    /**
     * @property {MediaGalleryItem[]} [items] 1 to 10 media gallery items
     */
    /**
     * @param {MediaGalleryComponent | APIMediaGalleryComponent} [data={}] The data
     */
    constructor(data?: any);
    setup(data: any): void;
    /**
     * @returns {APIMediaGalleryComponent}
     */
    toJSON(): {
        type: any;
        items: any[];
    };
}
export default MediaGalleryComponent;
