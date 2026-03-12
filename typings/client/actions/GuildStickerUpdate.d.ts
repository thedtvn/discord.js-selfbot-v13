declare const Action: any;
declare const Events: any;
declare class GuildStickerUpdateAction extends Action {
    handle(current: any, data: any): {
        sticker: any;
    };
}
