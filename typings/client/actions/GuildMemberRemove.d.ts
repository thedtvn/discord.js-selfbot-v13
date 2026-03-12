import Action from './Action';
declare class GuildMemberRemoveAction extends Action {
    handle(data: any, shard: any): any;
}
export default GuildMemberRemoveAction;
