declare const Action: any;
declare const Events: any;
declare class MessagePollVoteRemoveAction extends Action {
    handle(data: any): false | {
        poll: any;
    };
}
