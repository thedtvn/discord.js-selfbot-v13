import { Emoji } from './Emoji';
import Util from '../util/Util';

/**
 * Represents a limited emoji set used for both custom and unicode emojis. Custom emojis
 * will use this class opposed to the Emoji class when the client doesn't know enough
 * information about them.
 * @extends {Emoji}
 */
class ReactionEmoji extends Emoji {
  public reaction: any;

  constructor(reaction: any, emoji: any) {
    super(reaction.message.client, emoji);
    /**
     * The message reaction this emoji refers to
     * @type {MessageReaction}
     */
    this.reaction = reaction;
  }

  toJSON(): Record<string, any> {
    return Util.flatten(this, { identifier: true });
  }

  valueOf(): string {
    return this.id;
  }
}


export default ReactionEmoji;
