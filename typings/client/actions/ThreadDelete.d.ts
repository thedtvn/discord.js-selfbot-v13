declare const Action: any;
declare const deletedChannels: any;
declare const deletedMessages: any;
declare const Events: any;
declare class ThreadDeleteAction extends Action {
    handle(data: any): {
        thread: any;
    };
}
