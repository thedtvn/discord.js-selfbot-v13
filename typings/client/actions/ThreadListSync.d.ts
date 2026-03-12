declare const Collection: any;
declare const Action: any;
declare const Events: any;
declare class ThreadListSyncAction extends Action {
    handle(data: any): {
        syncedThreads?: undefined;
    } | {
        syncedThreads: any;
    };
    removeStale(channel: any): void;
}
