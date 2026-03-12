declare const Action: any;
declare const Events: any;
declare class UserUpdateAction extends Action {
    handle(data: any): {
        old: any;
        updated: any;
    };
}
