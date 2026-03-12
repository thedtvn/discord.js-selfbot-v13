declare class MediaGalleryItem {
    /**
     * @property {UnfurledMediaItem} [media] A url or attachment
     * @property {String} [description] Alt text for the media, max 1024 characters
     * @property {Boolean} [spoiler] Whether the media should be a spoiler (or blurred out). Defaults to false
     */
    /**
     * @param {MediaGalleryItem | APIMediaGalleryItem} [data={}] The data
     */
    constructor(data?: {});
    /**
     * @returns {APIMediaGalleryItem}
     */
    toJSON(): {
        media: any;
        description: any;
        spoiler: any;
    };
}
export default MediaGalleryItem;
