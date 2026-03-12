import type Client from '../Client';
interface CacheLike<T> {
    cache: Map<string, T>;
    _add: (...args: any[]) => T;
}
interface ChannelLike {
    id: string;
    guild?: {
        id: string;
        stageInstances?: any;
    };
    messages: CacheLike<any>;
    isText: () => boolean;
    lastMessageId?: string;
    type?: string;
}
interface MessageLike {
    partial?: boolean;
    reactions: CacheLike<any>;
    author?: {
        id: string;
    };
    poll?: any;
    _update?: (data: any) => any;
}
interface GuildLike {
    id: string;
    members: CacheLike<any>;
    scheduledEvents: CacheLike<any>;
}
declare class GenericAction {
    client: Client;
    constructor(client: Client);
    handle(...args: any[]): any;
    getPayload<T>(data: unknown, manager: CacheLike<T>, id: string, partialType: string, cache?: boolean): T | undefined;
    getChannel(data: Record<string, any>): ChannelLike | undefined;
    getMessage(data: Record<string, any>, channel: ChannelLike, cache?: boolean): any;
    getReaction(data: Record<string, any>, message: MessageLike, user?: {
        id: string;
    }): any;
    getMember(data: Record<string, any>, guild: GuildLike): any;
    getUser(data: Record<string, any>): any;
    getUserFromMember(data: Record<string, any>): any;
    getScheduledEvent(data: Record<string, any>, guild: GuildLike): any;
}
export default GenericAction;
