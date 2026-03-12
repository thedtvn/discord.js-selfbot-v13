declare const Action: any;
declare const deletedStickers: any;
declare const Events: any;
declare class GuildStickerDeleteAction extends Action {
    handle(sticker: any): {
        sticker: any;
    };
}
