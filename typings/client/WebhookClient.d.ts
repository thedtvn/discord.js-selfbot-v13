declare const BaseClient: any;
declare const Error: any;
declare const Webhook: any;
/**
 * The webhook client.
 * @implements {Webhook}
 * @extends {BaseClient}
 */
declare class WebhookClient extends BaseClient {
    /**
     * The data for the webhook client containing either an id and token or just a URL
     * @typedef {Object} WebhookClientData
     * @property {Snowflake} [id] The id of the webhook
     * @property {string} [token] The token of the webhook
     * @property {string} [url] The full URL for the webhook client
     */
    /**
     * @param {WebhookClientData} data The data of the webhook
     * @param {ClientOptions} [options] Options for the client
     */
    constructor(data: any, options: any);
    send(): void;
    sendSlackMessage(): void;
    fetchMessage(): void;
    edit(): void;
    editMessage(): void;
    delete(): void;
    deleteMessage(): void;
    get createdTimestamp(): void;
    get createdAt(): void;
    get url(): void;
}
