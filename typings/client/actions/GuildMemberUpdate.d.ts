declare const Action: any;
declare const Status: any, Events: any;
declare class GuildMemberUpdateAction extends Action {
    handle(data: any, shard: any): void;
}
