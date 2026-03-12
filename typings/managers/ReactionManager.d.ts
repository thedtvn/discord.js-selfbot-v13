import type { Snowflake } from 'discord-api-types/v10';
import type { Message } from '../structures/Message';
import CachedManager from './CachedManager';
import MessageReaction from '../structures/MessageReaction';
type RawMessageReactionData = {
    emoji: {
        id?: Snowflake | null;
        name: string;
    };
};
/**
 * Manages API methods for reactions and holds their cache.
 * @extends {CachedManager}
 */
declare class ReactionManager extends CachedManager<string | Snowflake, MessageReaction, MessageReaction | string | Snowflake, RawMessageReactionData, [Message]> {
    readonly message: Message;
    constructor(message: Message, iterable?: Iterable<RawMessageReactionData>);
    _add(data: RawMessageReactionData, cache?: boolean): MessageReaction;
    /**
     * The reaction cache of this manager
     * @type {Collection<string|Snowflake, MessageReaction>}
     * @name ReactionManager#cache
     */
    /**
     * Data that can be resolved to a MessageReaction object. This can be:
     * * A MessageReaction
     * * A Snowflake
     * * The Unicode representation of an emoji
     * @typedef {MessageReaction|Snowflake} MessageReactionResolvable
     */
    /**
     * Resolves a {@link MessageReactionResolvable} to a {@link MessageReaction} object.
     * @method resolve
     * @memberof ReactionManager
     * @instance
     * @param {MessageReactionResolvable} reaction The MessageReaction to resolve
     * @returns {?MessageReaction}
     */
    /**
     * Resolves a {@link MessageReactionResolvable} to a {@link MessageReaction} id.
     * @method resolveId
     * @memberof ReactionManager
     * @instance
     * @param {MessageReactionResolvable} reaction The MessageReaction to resolve
     * @returns {?Snowflake}
     */
    /**
     * Removes all reactions from a message.
     * @returns {Promise<Message>}
     */
    removeAll(): Promise<Message>;
}
export default ReactionManager;
