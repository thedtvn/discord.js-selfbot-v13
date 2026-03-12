declare const process: any;
declare const Action: any;
declare const Events: any;
declare let deprecationEmitted: boolean;
declare class MessageCreateAction extends Action {
    handle(data: any): {
        message?: undefined;
    } | {
        message: any;
    };
}
