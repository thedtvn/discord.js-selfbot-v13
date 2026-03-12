declare const Action: any;
declare const deletedEmojis: any;
declare const Events: any;
declare class GuildEmojiDeleteAction extends Action {
    handle(emoji: any): {
        emoji: any;
    };
}
