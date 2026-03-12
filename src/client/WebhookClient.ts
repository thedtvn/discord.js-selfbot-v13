import BaseClient, { type ClientOptions } from './BaseClient';
import { Error } from '../errors';
import Webhook from '../structures/Webhook';

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
class WebhookClient extends BaseClient {
  public id: string;

  public token: string;

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
  constructor(data: WebhookClientData, options?: ClientOptions) {
    super(options);
    Object.defineProperty(this, 'client', { value: this });
    let { id, token } = data;

    if ('url' in data) {
      const url = data.url.match(
        // eslint-disable-next-line no-useless-escape
        /^https?:\/\/(?:canary|ptb)?\.?discord\.com\/api\/webhooks(?:\/v[0-9]\d*)?\/([^\/]+)\/([^\/]+)/i,
      );

      if (!url || url.length <= 1) throw new Error('WEBHOOK_URL_INVALID');

      [, id, token] = url;
    }

    this.id = id;
    Object.defineProperty(this, 'token', { value: token, writable: true, configurable: true });
  }

  // These are here only for documentation purposes - they are implemented by Webhook
  /* eslint-disable no-empty-function */
  send(..._args: unknown[]): void {}
  sendSlackMessage(..._args: unknown[]): void {}
  fetchMessage(..._args: unknown[]): void {}
  edit(..._args: unknown[]): void {}
  editMessage(..._args: unknown[]): void {}
  delete(..._args: unknown[]): void {}
  deleteMessage(..._args: unknown[]): void {}
  get createdTimestamp(): number {
    return undefined as unknown as number;
  }
  get createdAt(): Date {
    return undefined as unknown as Date;
  }
  get url(): string {
    return undefined as unknown as string;
  }
}

Webhook.applyToClass(WebhookClient);

export default WebhookClient;
