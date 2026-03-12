declare const Action: any;
declare const deletedRoles: any;
declare const Events: any;
declare class GuildRoleDeleteAction extends Action {
    handle(data: any): {
        role: any;
    };
}
