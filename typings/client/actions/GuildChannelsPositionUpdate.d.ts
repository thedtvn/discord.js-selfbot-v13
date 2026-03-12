declare const Action: any;
declare class GuildChannelsPositionUpdate extends Action {
    handle(data: any): {
        guild: any;
    };
}
