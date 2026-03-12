declare const Action: any;
declare const Events: any;
declare class ChannelCreateAction extends Action {
    handle(data: any): {
        channel: any;
    };
}
