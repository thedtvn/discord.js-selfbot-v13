declare const Action: any;
declare class GuildRolesPositionUpdate extends Action {
    handle(data: any): {
        guild: any;
    };
}
