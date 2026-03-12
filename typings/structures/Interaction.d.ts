import Base from './Base';
/**
 * Represents an interaction.
 * @extends {Base}
 */
declare class Interaction extends Base {
    type: any;
    id: any;
    token: any;
    applicationId: any;
    channelId: any;
    guildId: any;
    user: any;
    member: any;
    version: any;
    appPermissions: any;
    memberPermissions: any;
    locale: any;
    guildLocale: any;
    targetId: any;
    targetType: any;
    componentType: any;
    constructor(client: any, data: any);
    /**
     * The timestamp the interaction was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the interaction was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The channel this interaction was sent in
     * @type {?TextBasedChannels}
     * @readonly
     */
    get channel(): any | null;
    /**
     * The guild this interaction was sent in
     * @type {?Guild}
     * @readonly
     */
    get guild(): any | null;
    /**
     * Indicates whether this interaction is received from a guild.
     * @returns {boolean}
     */
    inGuild(): boolean;
    /**
     * Indicates whether or not this interaction is both cached and received from a guild.
     * @returns {boolean}
     */
    inCachedGuild(): boolean;
    /**
     * Indicates whether or not this interaction is received from an uncached guild.
     * @returns {boolean}
     */
    inRawGuild(): boolean;
    /**
     * Indicates whether this interaction is a {@link BaseCommandInteraction}.
     * @returns {boolean}
     */
    isApplicationCommand(): boolean;
    /**
     * Indicates whether this interaction is a {@link CommandInteraction}.
     * @returns {boolean}
     */
    isCommand(): boolean;
    /**
     * Indicates whether this interaction is a {@link ContextMenuInteraction}
     * @returns {boolean}
     */
    isContextMenu(): boolean;
    /**
     * Indicates whether this interaction is a {@link ModalSubmitInteraction}
     * @returns {boolean}
     */
    isModalSubmit(): boolean;
    /**
     * Indicates whether this interaction is a {@link UserContextMenuInteraction}
     * @returns {boolean}
     */
    isUserContextMenu(): boolean;
    /**
     * Indicates whether this interaction is a {@link MessageContextMenuInteraction}
     * @returns {boolean}
     */
    isMessageContextMenu(): boolean;
    /**
     * Indicates whether this interaction is an {@link AutocompleteInteraction}
     * @returns {boolean}
     */
    isAutocomplete(): boolean;
    /**
     * Indicates whether this interaction is a {@link MessageComponentInteraction}.
     * @returns {boolean}
     */
    isMessageComponent(): boolean;
    /**
     * Indicates whether this interaction is a {@link ButtonInteraction}.
     * @returns {boolean}
     */
    isButton(): boolean;
    /**
     * Indicates whether this interaction is a {@link SelectMenuInteraction}.
     * @returns {boolean}
     */
    isSelectMenu(): boolean;
    /**
     * Indicates whether this interaction can be replied to.
     * @returns {boolean}
     */
    isRepliable(): boolean;
}
export default Interaction;
