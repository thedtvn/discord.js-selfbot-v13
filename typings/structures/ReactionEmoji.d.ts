import { Emoji } from './Emoji';
/**
 * Represents a limited emoji set used for both custom and unicode emojis. Custom emojis
 * will use this class opposed to the Emoji class when the client doesn't know enough
 * information about them.
 * @extends {Emoji}
 */
declare class ReactionEmoji extends Emoji {
    reaction: any;
    constructor(reaction: any, emoji: any);
    toJSON(): Record<string, any>;
    valueOf(): string;
}
export default ReactionEmoji;
