declare const Action: any;
declare class MessageUpdateAction extends Action {
    handle(data: any): {
        old?: undefined;
        updated?: undefined;
    } | {
        old: any;
        updated: any;
    };
}
