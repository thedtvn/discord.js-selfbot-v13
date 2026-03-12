declare const Action: any;
declare const Events: any;
declare class MessageReactionRemoveAll extends Action {
    handle(data: any): false | {
        message: any;
    };
}
