import GuildEmoji from './GuildEmoji';
import ReactionEmoji from './ReactionEmoji';
import ReactionUserManager from '../managers/ReactionUserManager';
/**
 * Represents a reaction to a message.
 */
interface ReactionCountDetailsData {
    burst: number;
    normal: number;
}
declare class MessageReaction {
    client: any;
    message: any;
    me: boolean;
    meBurst: boolean;
    users: ReactionUserManager;
    _emoji: GuildEmoji | ReactionEmoji;
    burstColors: string[] | null;
    count: number | null;
    countDetails: ReactionCountDetailsData;
    constructor(client: any, data: any, message: any);
    _patch(data: any): any;
    /**
     * Removes all users from this reaction.
     * @returns {Promise<MessageReaction>}
     */
    remove(): Promise<this>;
    /**
     * The emoji of this reaction. Either a {@link GuildEmoji} object for known custom emojis, or a {@link ReactionEmoji}
     * object which has fewer properties. Whatever the prototype of the emoji, it will still have
     * `name`, `id`, `identifier` and `toString()`
     * @type {GuildEmoji|ReactionEmoji}
     * @readonly
     */
    get emoji(): GuildEmoji | ReactionEmoji;
    /**
     * Whether or not this reaction is a partial
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * Fetch this reaction.
     * @returns {Promise<MessageReaction>}
     */
    fetch(): Promise<this>;
    toJSON(): Record<string, any>;
    _add(user: any, burst: boolean): void;
    _remove(user: any, burst: boolean): void;
}
export default MessageReaction;
