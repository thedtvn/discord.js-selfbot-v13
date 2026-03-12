declare const Action: any;
declare const Events: any;
declare class MessagePollVoteAddAction extends Action {
    handle(data: any): false | {
        poll: any;
    };
}
