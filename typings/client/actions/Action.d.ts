declare const PartialTypes: any;
declare class GenericAction {
    constructor(client: any);
    handle(data: any): any;
    getPayload(data: any, manager: any, id: any, partialType: any, cache: any): any;
    getChannel(data: any): any;
    getMessage(data: any, channel: any, cache: any): any;
    getReaction(data: any, message: any, user: any): any;
    getMember(data: any, guild: any): any;
    getUser(data: any): any;
    getUserFromMember(data: any): any;
    getScheduledEvent(data: any, guild: any): any;
}
