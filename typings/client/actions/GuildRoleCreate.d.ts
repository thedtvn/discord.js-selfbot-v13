declare const Action: any;
declare const Events: any;
declare class GuildRoleCreate extends Action {
    handle(data: any): {
        role: any;
    };
}
