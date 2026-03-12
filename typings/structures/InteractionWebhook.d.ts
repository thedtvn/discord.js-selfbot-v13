/**
 * Represents a webhook for an Interaction
 * @implements {Webhook}
 */
declare class InteractionWebhook {
    /**
     * @param {Client} client The instantiating client
     * @param {Snowflake} id The application's id
     * @param {string} token The interaction's token
     */
    constructor(client: any, id: any, token: any);
    /**
     * Sends a message with this webhook.
     * @param {string|MessagePayload|InteractionReplyOptions} options The content for the reply
     * @returns {Promise<Message|APIMessage>}
     */
    send(): void;
    fetchMessage(): void;
    editMessage(): void;
    deleteMessage(): void;
    get url(): void;
}
export default InteractionWebhook;
