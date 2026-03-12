import ContextMenuInteraction from './ContextMenuInteraction';
/**
 * Represents a message context menu interaction.
 * @extends {ContextMenuInteraction}
 */
declare class MessageContextMenuInteraction extends ContextMenuInteraction {
    /**
     * The message this interaction was sent from
     * @type {Message|APIMessage}
     * @readonly
     */
    get targetMessage(): any;
}
export default MessageContextMenuInteraction;
