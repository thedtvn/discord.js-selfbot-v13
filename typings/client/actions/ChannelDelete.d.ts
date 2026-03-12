declare const Action: any;
declare const deletedChannels: any;
declare const DMChannel: any;
declare const deletedMessages: any;
declare const Events: any;
declare class ChannelDeleteAction extends Action {
    constructor(client: any);
    handle(data: any): {
        channel: any;
    };
}
