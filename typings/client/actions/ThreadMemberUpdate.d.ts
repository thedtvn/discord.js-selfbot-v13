declare const Action: any;
declare const Events: any;
declare class ThreadMemberUpdateAction extends Action {
    handle(data: any): {
        newMember: any;
    } | {
        newMember?: undefined;
    };
}
