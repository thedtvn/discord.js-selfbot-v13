declare const Action: any;
declare const Events: any;
declare class GuildStickerCreateAction extends Action {
    handle(guild: any, createdSticker: any): {
        sticker: any;
    };
}
