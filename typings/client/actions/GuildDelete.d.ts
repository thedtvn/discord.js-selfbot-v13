declare const setTimeout: any;
declare const Action: any;
declare const deletedGuilds: any;
declare const Events: any;
declare class GuildDeleteAction extends Action {
    constructor(client: any);
    handle(data: any): {
        guild: any;
    };
    scheduleForDeletion(id: any): void;
}
