declare const Action: any;
declare const Events: any;
declare class MessageReactionRemove extends Action {
    handle(data: any): false | {
        message: any;
        reaction: any;
        user: any;
    };
}
