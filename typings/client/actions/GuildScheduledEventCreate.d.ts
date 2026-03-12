declare const Action: any;
declare const Events: any;
declare class GuildScheduledEventCreateAction extends Action {
    handle(data: any): {
        guildScheduledEvent: any;
    } | {
        guildScheduledEvent?: undefined;
    };
}
