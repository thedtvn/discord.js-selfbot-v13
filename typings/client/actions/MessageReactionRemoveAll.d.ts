import Action from './Action';
declare class MessageReactionRemoveAll extends Action {
    handle(data: any): any;
}
/**
 * Emitted whenever all reactions are removed from a cached message.
 * @event Client#messageReactionRemoveAll
 * @param {Message} message The message the reactions were removed from
 * @param {Collection<string|Snowflake, MessageReaction>} reactions The cached message reactions that were removed.
 */
export default MessageReactionRemoveAll;
