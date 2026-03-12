import Action from './Action';
declare class GuildMemberUpdateAction extends Action {
    handle(data: any, shard: any): any;
}
export default GuildMemberUpdateAction;
