/**
 * Represents a reaction to a message.
 */
declare class MessageReaction {
    constructor(client: any, data: any, message: any);
    _patch(data: any): void;
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
    get emoji(): any;
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
    toJSON(): {};
    _add(user: any, burst: any): void;
    _remove(user: any, burst: any): void;
}
export default MessageReaction;
