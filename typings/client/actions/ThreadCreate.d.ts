declare const Action: any;
declare const Events: any;
declare class ThreadCreateAction extends Action {
    handle(data: any): {
        thread: any;
    };
}
