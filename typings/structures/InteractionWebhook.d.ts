/**
 * Represents a webhook for an Interaction
 * @implements {Webhook}
 */
declare class InteractionWebhook {
    client: any;
    id: string;
    token: string;
    /**
     * @param {Client} client The instantiating client
     * @param {Snowflake} id The application's id
     * @param {string} token The interaction's token
     */
    constructor(client: any, id: string, token: string);
    /**
     * Sends a message with this webhook.
     * @param {string|MessagePayload|InteractionReplyOptions} options The content for the reply
     * @returns {Promise<Message|APIMessage>}
     */
    send(..._args: any[]): any;
    fetchMessage(..._args: any[]): any;
    editMessage(..._args: any[]): any;
    deleteMessage(..._args: any[]): any;
    get url(): string;
}
export default InteractionWebhook;
