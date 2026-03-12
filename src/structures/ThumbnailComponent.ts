import BaseMessageComponent from './BaseMessageComponent';
import UnfurledMediaItem from './UnfurledMediaItem';
import { MessageComponentTypes } from '../util/Constants';

class ThumbnailComponent extends BaseMessageComponent {
  public media: UnfurledMediaItem;
  public description: string | null;
  public spoiler: boolean;

  /**
   * @property {UnfurledMediaItem} [media] A url or attachment
   * @property {String} [description] Alt text for the media, max 1024 characters
   * @property {Boolean} [spoiler] Whether the thumbnail should be a spoiler (or blurred out). Defaults to false
   */

  /**
   * @param {ThumbnailComponent | APIThumbnailComponent} [data={}] The data
   */
  constructor(data: any = {}) {
    super({ type: 'THUMBNAIL' });

    this.setup(data);
  }

  setup(data: any): void {
    super.setup(data);
    /**
     * A url or attachment
     * @type {UnfurledMediaItem}
     */
    this.media = new UnfurledMediaItem(data.media);

    /**
     * Alt text for the media, max 1024 characters
     * @type {String}
     */
    this.description = data.description ?? null;

    /**
     * Whether the thumbnail should be a spoiler (or blurred out). Defaults to false
     * @type {Boolean}
     */
    this.spoiler = data.spoiler ?? false;
  }

  /**
   * @returns {APIThumbnailComponent}
   */
  toJSON(): { type: any; media: any; description: string | null; spoiler: boolean } {
    return {
      type: MessageComponentTypes[this.type],
      media: this.media.toJSON(),
      description: this.description,
      spoiler: this.spoiler,
    };
  }
}


export default ThumbnailComponent;
