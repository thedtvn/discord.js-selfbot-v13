import Action from './Action';
declare class GuildDeleteAction extends Action {
    deleted: Map<string, any>;
    constructor(client: any);
    handle(data: any): any;
    scheduleForDeletion(id: any): any;
}
export default GuildDeleteAction;
