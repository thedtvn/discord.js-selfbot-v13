declare const Action: any;
declare const deletedGuildMembers: any;
declare const Events: any, Status: any;
declare class GuildMemberRemoveAction extends Action {
    handle(data: any, shard: any): {
        guild: any;
        member: any;
    };
}
