declare const Action: any;
declare const Channel: any;
declare const ChannelTypes: any;
declare class ChannelUpdateAction extends Action {
    handle(data: any): {
        old?: undefined;
        updated?: undefined;
    } | {
        old: any;
        updated: any;
    };
}
