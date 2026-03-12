declare const Action: any;
declare const Invite: any;
declare const Events: any;
declare class InviteDeleteAction extends Action {
    handle(data: any): false | {
        invite: any;
    };
}
