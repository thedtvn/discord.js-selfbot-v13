/**
 * Interface for classes that support shared interaction response types.
 * @interface
 */
declare class InteractionResponses {
    deferred: boolean;
    replied: boolean;
    ephemeral: boolean;
    client: any;
    id: any;
    token: string;
    webhook: any;
    /**
     * Options for deferring the reply to an {@link Interaction}.
     * @typedef {Object} InteractionDeferReplyOptions
     * @property {boolean} [ephemeral] Whether the reply should be ephemeral
     * @property {boolean} [fetchReply] Whether to fetch the reply
     */
    /**
     * Options for deferring and updating the reply to a {@link MessageComponentInteraction}.
     * @typedef {Object} InteractionDeferUpdateOptions
     * @property {boolean} [fetchReply] Whether to fetch the reply
     */
    /**
     * Options for a reply to an {@link Interaction}.
     * @typedef {BaseMessageOptionsWithPoll} InteractionReplyOptions
     * @property {boolean} [ephemeral] Whether the reply should be ephemeral
     * @property {boolean} [fetchReply] Whether to fetch the reply
     * @property {MessageFlags} [flags] Which flags to set for the message.
     * Only `SUPPRESS_EMBEDS` and `EPHEMERAL` can be set.
     */
    /**
     * Options for updating the message received from a {@link MessageComponentInteraction}.
     * @typedef {MessageEditOptions} InteractionUpdateOptions
     * @property {boolean} [fetchReply] Whether to fetch the reply
     */
    /**
     * Defers the reply to this interaction.
     * @param {InteractionDeferReplyOptions} [options] Options for deferring the reply to this interaction
     * @returns {Promise<Message|APIMessage|void>}
     * @example
     * // Defer the reply to this interaction
     * interaction.deferReply()
     *   .then(console.log)
     *   .catch(console.error)
     * @example
     * // Defer to send an ephemeral reply later
     * interaction.deferReply({ ephemeral: true })
     *   .then(console.log)
     *   .catch(console.error);
     */
    deferReply(options?: any): Promise<any>;
    /**
     * Creates a reply to this interaction.
     * <info>Use the `fetchReply` option to get the bot's reply message.</info>
     * @param {string|MessagePayload|InteractionReplyOptions} options The options for the reply
     * @returns {Promise<Message|APIMessage|void>}
     * @example
     * // Reply to the interaction and fetch the response
     * interaction.reply({ content: 'Pong!', fetchReply: true })
     *   .then((message) => console.log(`Reply sent with content ${message.content}`))
     *   .catch(console.error);
     * @example
     * // Create an ephemeral reply with an embed
     * const embed = new MessageEmbed().setDescription('Pong!');
     *
     * interaction.reply({ embeds: [embed], ephemeral: true })
     *   .then(() => console.log('Reply sent.'))
     *   .catch(console.error);
     */
    reply(options: any): Promise<any>;
    /**
     * Fetches a reply to this interaction.
     * @see Webhook#fetchMessage
     * @param {MessageResolvable|'@original'} [message='@original'] The response to fetch
     * @returns {Promise<Message|APIMessage>}
     * @example
     * // Fetch the initial reply to this interaction
     * interaction.fetchReply()
     *   .then(reply => console.log(`Replied with ${reply.content}`))
     *   .catch(console.error);
     */
    fetchReply(message?: string): any;
    /**
     * Options that can be passed into {@link InteractionResponses#editReply}.
     * @typedef {WebhookEditMessageOptions} InteractionEditReplyOptions
     * @property {MessageResolvable|'@original'} [message='@original'] The response to edit
     */
    /**
     * Edits a reply to this interaction.
     * @see Webhook#editMessage
     * @param {string|MessagePayload|InteractionEditReplyOptions} options The new options for the message
     * @returns {Promise<Message|APIMessage>}
     * @example
     * // Edit the initial reply to this interaction
     * interaction.editReply('New content')
     *   .then(console.log)
     *   .catch(console.error);
     */
    editReply(options: any): Promise<any>;
    /**
     * Deletes a reply to this interaction.
     * @see Webhook#deleteMessage
     * @param {MessageResolvable|'@original'} [message='@original'] The response to delete
     * @returns {Promise<void>}
     * @example
     * // Delete the initial reply to this interaction
     * interaction.deleteReply()
     *   .then(console.log)
     *   .catch(console.error);
     */
    deleteReply(message?: string): Promise<void>;
    /**
     * Send a follow-up message to this interaction.
     * @param {string|MessagePayload|InteractionReplyOptions} options The options for the reply
     * @returns {Promise<Message|APIMessage>}
     */
    followUp(options: any): Promise<any>;
    /**
     * Defers an update to the message to which the component was attached.
     * @param {InteractionDeferUpdateOptions} [options] Options for deferring the update to this interaction
     * @returns {Promise<Message|APIMessage|void>}
     * @example
     * // Defer updating and reset the component's loading state
     * interaction.deferUpdate()
     *   .then(console.log)
     *   .catch(console.error);
     */
    deferUpdate(options?: any): Promise<any>;
    /**
     * Updates the original message of the component on which the interaction was received on.
     * @param {string|MessagePayload|InteractionUpdateOptions} options The options for the updated message
     * @returns {Promise<Message|APIMessage|void>}
     * @example
     * // Remove the components from the message
     * interaction.update({
     *   content: "A component interaction was received",
     *   components: []
     * })
     *   .then(console.log)
     *   .catch(console.error);
     */
    update(options: any): Promise<any>;
    /**
     * Shows a modal component
     * @param {Modal|ModalOptions} modal The modal to show
     * @returns {Promise<void>}
     */
    showModal(modal: any): Promise<void>;
    /**
     * An object containing the same properties as CollectorOptions, but a few more:
     * @typedef {Object} AwaitModalSubmitOptions
     * @property {CollectorFilter} [filter] The filter applied to this collector
     * @property {number} time Time in milliseconds to wait for an interaction before rejecting
     */
    /**
     * Collects a single modal submit interaction that passes the filter.
     * The Promise will reject if the time expires.
     * @param {AwaitModalSubmitOptions} options Options to pass to the internal collector
     * @returns {Promise<ModalSubmitInteraction>}
     * @example
     * // Collect a modal submit interaction
     * const filter = (interaction) => interaction.customId === 'modal';
     * interaction.awaitModalSubmit({ filter, time: 15_000 })
     *   .then(interaction => console.log(`${interaction.customId} was submitted!`))
     *   .catch(console.error);
     */
    awaitModalSubmit(options: any): Promise<any>;
    static applyToClass(structure: any, ignore?: string[]): void;
}
export default InteractionResponses;
