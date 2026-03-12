declare const Action: any;
declare const Events: any;
declare class MessageReactionRemoveEmoji extends Action {
    handle(data: any): false | {
        reaction: any;
    };
}
