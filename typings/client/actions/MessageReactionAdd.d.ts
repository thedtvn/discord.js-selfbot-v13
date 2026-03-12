declare const Action: any;
declare const Events: any;
declare const PartialTypes: any;
declare class MessageReactionAdd extends Action {
    handle(data: any, fromStructure?: boolean): false | {
        message: any;
        reaction: any;
        user: any;
    };
}
