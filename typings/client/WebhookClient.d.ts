import BaseClient, { type ClientOptions } from './BaseClient';
interface WebhookClientData {
    id?: string;
    token?: string;
    url?: string;
}
/**
 * The webhook client.
 * @implements {Webhook}
 * @extends {BaseClient}
 */
declare class WebhookClient extends BaseClient {
    id: string;
    token: string;
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
    constructor(data: WebhookClientData, options?: ClientOptions);
    send(..._args: unknown[]): void;
    sendSlackMessage(..._args: unknown[]): void;
    fetchMessage(..._args: unknown[]): void;
    edit(..._args: unknown[]): void;
    editMessage(..._args: unknown[]): void;
    delete(..._args: unknown[]): void;
    deleteMessage(..._args: unknown[]): void;
    get createdTimestamp(): number;
    get createdAt(): Date;
    get url(): string;
}
export default WebhookClient;
