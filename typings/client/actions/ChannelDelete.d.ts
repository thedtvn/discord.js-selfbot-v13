import Action from './Action';
declare class ChannelDeleteAction extends Action {
    deleted: Map<string, any>;
    constructor(client: any);
    handle(data: any): any;
}
export default ChannelDeleteAction;
