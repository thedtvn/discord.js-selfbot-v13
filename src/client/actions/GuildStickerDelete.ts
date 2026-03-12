import Action from './Action';
import { deletedStickers } from '../../structures/Sticker';
import { Events } from '../../util/Constants';

class GuildStickerDeleteAction extends Action {
  handle(sticker: any): any {
    sticker.guild.stickers.cache.delete(sticker.id);
    deletedStickers.add(sticker);
    /**
     * Emitted whenever a custom sticker is deleted in a guild.
     * @event Client#stickerDelete
     * @param {Sticker} sticker The sticker that was deleted
     */
    this.client.emit(Events.GUILD_STICKER_DELETE, sticker);
    return { sticker };
  }
}

export default GuildStickerDeleteAction;
