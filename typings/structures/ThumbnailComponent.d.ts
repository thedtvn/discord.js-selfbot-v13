import BaseMessageComponent from './BaseMessageComponent';
import UnfurledMediaItem from './UnfurledMediaItem';
declare class ThumbnailComponent extends BaseMessageComponent {
    media: UnfurledMediaItem;
    description: string | null;
    spoiler: boolean;
    /**
     * @property {UnfurledMediaItem} [media] A url or attachment
     * @property {String} [description] Alt text for the media, max 1024 characters
     * @property {Boolean} [spoiler] Whether the thumbnail should be a spoiler (or blurred out). Defaults to false
     */
    /**
     * @param {ThumbnailComponent | APIThumbnailComponent} [data={}] The data
     */
    constructor(data?: any);
    setup(data: any): void;
    /**
     * @returns {APIThumbnailComponent}
     */
    toJSON(): {
        type: any;
        media: any;
        description: string | null;
        spoiler: boolean;
    };
}
export default ThumbnailComponent;
