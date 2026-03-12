/**
 * Represents a modal (form) to be shown in response to an interaction
 */
declare class Modal {
    /**
     * @param {Object} data Modal to clone or raw data
     * @param {Client} client The client constructing this Modal, if provided
     */
    constructor(data?: {}, client?: any);
    /**
     * The id of the guild the message was sent in, if any
     * @type {?Snowflake}
     * @readonly
     */
    get guildId(): any;
    /**
     * The channel that the message was sent in
     * @type {TextBasedChannels}
     * @readonly
     */
    get channel(): any;
    /**
     * The guild the message was sent in (if in a guild channel)
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    toJSON(): {
        components: any;
        custom_id: any;
        title: any;
        id: any;
    };
    /**
     * Reply to this modal with data. (Event only)
     * @returns {Promise<Message|Modal>}
     * @example
     * client.on('interactionModalCreate', modal => {
     *    // Modal > ActionRow > TextInput
     *    modal.components[0].components[0].setValue('1+1');
     *    modal.components[1].components[0].setValue('hello');
     *    modal.reply();
     * })
     */
    reply(): Promise<unknown>;
    /**
     * Check data
     * @type {boolean}
     * @readonly
     */
    get isMessage(): boolean;
}
export default Modal;
