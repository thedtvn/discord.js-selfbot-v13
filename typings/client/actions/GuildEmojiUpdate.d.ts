declare const Action: any;
declare const Events: any;
declare class GuildEmojiUpdateAction extends Action {
    handle(current: any, data: any): {
        emoji: any;
    };
}
