declare const Action: any;
declare const Events: any;
declare class GuildScheduledEventUserAddAction extends Action {
    handle(data: any): {
        guildScheduledEvent: any;
        user: any;
    } | {
        guildScheduledEvent?: undefined;
        user?: undefined;
    };
}
