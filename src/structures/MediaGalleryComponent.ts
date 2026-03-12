import BaseMessageComponent from './BaseMessageComponent';
import MediaGalleryItem from './MediaGalleryItem';
import { MessageComponentTypes } from '../util/Constants';

class MediaGalleryComponent extends BaseMessageComponent {
  public items: MediaGalleryItem[];

  /**
   * @property {MediaGalleryItem[]} [items] 1 to 10 media gallery items
   */

  /**
   * @param {MediaGalleryComponent | APIMediaGalleryComponent} [data={}] The data
   */
  constructor(data: any = {}) {
    super({ type: 'MEDIA_GALLERY' });

    this.setup(data);
  }

  setup(data: any): void {
    super.setup(data);
    /**
     * 1 to 10 media gallery items
     * @type {MediaGalleryItem[]}
     */
    this.items = data.items?.map(item => new MediaGalleryItem(item)) ?? [];
  }

  /**
   * @returns {APIMediaGalleryComponent}
   */
  toJSON(): { type: any; items: any[] } {
    return {
      type: MessageComponentTypes[this.type],
      items: this.items.map(c => c.toJSON()),
    };
  }
}


export default MediaGalleryComponent;
