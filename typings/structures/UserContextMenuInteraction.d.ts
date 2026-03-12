import ContextMenuInteraction from './ContextMenuInteraction';
/**
 * Represents a user context menu interaction.
 * @extends {ContextMenuInteraction}
 */
declare class UserContextMenuInteraction extends ContextMenuInteraction {
    /**
     * The target user from this interaction
     * @type {User}
     * @readonly
     */
    get targetUser(): any;
    /**
     * The target member from this interaction
     * @type {?(GuildMember|APIGuildMember)}
     * @readonly
     */
    get targetMember(): any;
}
export default UserContextMenuInteraction;
