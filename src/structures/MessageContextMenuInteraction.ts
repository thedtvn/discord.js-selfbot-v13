import ContextMenuInteraction from './ContextMenuInteraction';

/**
 * Represents a message context menu interaction.
 * @extends {ContextMenuInteraction}
 */
class MessageContextMenuInteraction extends ContextMenuInteraction {
  /**
   * The message this interaction was sent from
   * @type {Message|APIMessage}
   * @readonly
   */
  get targetMessage(): any {
    return this.options.getMessage('message');
  }
}


export default MessageContextMenuInteraction;
