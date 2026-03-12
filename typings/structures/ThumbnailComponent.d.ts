import BaseMessageComponent from './BaseMessageComponent';
declare class ThumbnailComponent extends BaseMessageComponent {
    /**
     * @property {UnfurledMediaItem} [media] A url or attachment
     * @property {String} [description] Alt text for the media, max 1024 characters
     * @property {Boolean} [spoiler] Whether the thumbnail should be a spoiler (or blurred out). Defaults to false
     */
    /**
     * @param {ThumbnailComponent | APIThumbnailComponent} [data={}] The data
     */
    constructor(data?: {});
    setup(data: any): void;
    /**
     * @returns {APIThumbnailComponent}
     */
    toJSON(): {
        type: any;
        media: any;
        description: any;
        spoiler: any;
    };
}
export default ThumbnailComponent;
