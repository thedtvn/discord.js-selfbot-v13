declare const Action: any;
declare const deletedMessages: any;
declare const Events: any;
declare class MessageDeleteAction extends Action {
    handle(data: any): {
        message?: undefined;
    } | {
        message: any;
    };
}
