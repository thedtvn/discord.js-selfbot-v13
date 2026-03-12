import UnfurledMediaItem from './UnfurledMediaItem';
declare class MediaGalleryItem {
    media: UnfurledMediaItem;
    description: string | null;
    spoiler: boolean;
    /**
     * @property {UnfurledMediaItem} [media] A url or attachment
     * @property {String} [description] Alt text for the media, max 1024 characters
     * @property {Boolean} [spoiler] Whether the media should be a spoiler (or blurred out). Defaults to false
     */
    /**
     * @param {MediaGalleryItem | APIMediaGalleryItem} [data={}] The data
     */
    constructor(data?: any);
    /**
     * @returns {APIMediaGalleryItem}
     */
    toJSON(): {
        media: any;
        description: string | null;
        spoiler: boolean;
    };
}
export default MediaGalleryItem;
