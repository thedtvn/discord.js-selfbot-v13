declare const Action: any;
declare const Events: any;
declare class GuildEmojiCreateAction extends Action {
    handle(guild: any, createdEmoji: any): {
        emoji: any;
    };
}
