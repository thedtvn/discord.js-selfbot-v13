declare const Action: any;
declare const Events: any;
declare class InviteCreateAction extends Action {
    handle(data: any): false | {
        invite: any;
    };
}
