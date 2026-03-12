declare const Action: any;
declare const Events: any;
declare class GuildScheduledEventUpdateAction extends Action {
    handle(data: any): {
        oldGuildScheduledEvent: any;
        newGuildScheduledEvent: any;
    } | {
        oldGuildScheduledEvent?: undefined;
        newGuildScheduledEvent?: undefined;
    };
}
