declare const Action: any;
declare const Events: any;
declare class GuildUpdateAction extends Action {
    handle(data: any): {
        old: any;
        updated: any;
    };
}
