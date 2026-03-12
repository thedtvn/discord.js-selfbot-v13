declare const Collection: any;
declare const Action: any;
declare const deletedMessages: any;
declare const Events: any;
declare class MessageDeleteBulkAction extends Action {
    handle(data: any): {
        messages?: undefined;
    } | {
        messages: any;
    };
}
