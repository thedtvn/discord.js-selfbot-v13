import Action from './Action';
declare class ThreadListSyncAction extends Action {
    handle(data: any): any;
    removeStale(channel: any): any;
}
export default ThreadListSyncAction;
