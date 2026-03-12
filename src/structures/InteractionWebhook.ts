import Webhook from './Webhook';

/**
 * Represents a webhook for an Interaction
 * @implements {Webhook}
 */
class InteractionWebhook {
  public client: any;
  public id: string;
  public token: string;

  /**
   * @param {Client} client The instantiating client
   * @param {Snowflake} id The application's id
   * @param {string} token The interaction's token
   */
  constructor(client: any, id: string, token: string) {
    /**
     * The client that instantiated the interaction webhook
     * @name InteractionWebhook#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
    this.id = id;
    Object.defineProperty(this, 'token', { value: token, writable: true, configurable: true });
  }

  // These are here only for documentation purposes - they are implemented by Webhook
  /* eslint-disable no-empty-function, valid-jsdoc */
  /**
   * Sends a message with this webhook.
   * @param {string|MessagePayload|InteractionReplyOptions} options The content for the reply
   * @returns {Promise<Message|APIMessage>}
   */
  send(..._args: any[]): Promise<any> {}
  fetchMessage(..._args: any[]): Promise<any> {}
  editMessage(..._args: any[]): Promise<any> {}
  deleteMessage(..._args: any[]): Promise<void> {}
  get url(): string { return ''; }
}

Webhook.applyToClass(InteractionWebhook, ['sendSlackMessage', 'edit', 'delete', 'createdTimestamp', 'createdAt']);


export default InteractionWebhook;
