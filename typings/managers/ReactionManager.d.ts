import CachedManager from './CachedManager';
/**
 * Manages API methods for reactions and holds their cache.
 * @extends {CachedManager}
 */
declare class ReactionManager extends CachedManager {
    constructor(message: any, iterable: any);
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
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
    removeAll(): Promise<any>;
}
export default ReactionManager;
