declare const Action: any;
declare const Events: any;
declare class GuildRoleUpdateAction extends Action {
    handle(data: any): {
        old: any;
        updated: any;
    };
}
