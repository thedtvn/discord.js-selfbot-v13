import Interaction from './Interaction';
import InteractionWebhook from './InteractionWebhook';
import ModalSubmitFieldsResolver from './ModalSubmitFieldsResolver';
import InteractionResponses from './interfaces/InteractionResponses';
import { MessageComponentTypes } from '../util/Constants';

/**
 * Represents a modal submit interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
class ModalSubmitInteraction extends Interaction {
  public customId: string;
  public components: any[];
  public message: any | null;
  public fields: ModalSubmitFieldsResolver;
  public deferred: boolean;
  public ephemeral: boolean | null;
  public replied: boolean;
  public webhook: InteractionWebhook;

  constructor(client: any, data: any) {
    super(client, data);

    /**
     * The custom id of the modal.
     * @type {string}
     */
    this.customId = data.data.custom_id;

    /**
     * @typedef {Object} PartialTextInputData
     * @property {string} [customId] A unique string to be sent in the interaction when submitted
     * @property {MessageComponentType} [type] The type of this component
     * @property {string} [value] Value of this text input component
     */

    /**
     * @typedef {Object} PartialModalActionRow
     * @property {MessageComponentType} [type] The type of this component
     * @property {PartialTextInputData[]} [components] Partial text input components
     */

    /**
     * The inputs within the modal
     * @type {PartialModalActionRow[]}
     */
    this.components =
      data.data.components?.map(c => ({
        type: MessageComponentTypes[c.type],
        components: ModalSubmitInteraction.transformComponent(c),
      })) ?? [];

    /**
     * The message associated with this interaction
     * @type {Message|APIMessage|null}
     */
    this.message = data.message ? this.channel?.messages._add(data.message) ?? data.message : null;

    /**
     * The fields within the modal
     * @type {ModalSubmitFieldsResolver}
     */
    this.fields = new ModalSubmitFieldsResolver(this.components);

    /**
     * Whether the reply to this interaction has been deferred
     * @type {boolean}
     */
    this.deferred = false;

    /**
     * Whether the reply to this interaction is ephemeral
     * @type {?boolean}
     */
    this.ephemeral = null;

    /**
     * Whether this interaction has already been replied to
     * @type {boolean}
     */
    this.replied = false;

    /**
     * An associated interaction webhook, can be used to further interact with this interaction
     * @type {InteractionWebhook}
     */
    this.webhook = new InteractionWebhook(this.client, this.applicationId, this.token);
  }

  /**
   * Transforms component data to discord.js-compatible data
   * @param {*} rawComponent The data to transform
   * @returns {PartialTextInputData[]}
   */
  static transformComponent(rawComponent: any): any[] {
    return rawComponent.components.map(c => ({
      value: c.value,
      type: MessageComponentTypes[c.type],
      customId: c.custom_id,
    }));
  }

  /**
   * Whether this is from a {@link MessageComponentInteraction}.
   * @returns {boolean}
   */
  isFromMessage(): boolean {
    return Boolean(this.message);
  }

  // These are here only for documentation purposes - they are implemented by InteractionResponses
  /* eslint-disable no-empty-function */
  deferReply(..._args: any[]): void {}
  reply(..._args: any[]): void {}
  fetchReply(..._args: any[]): void {}
  editReply(..._args: any[]): void {}
  deleteReply(..._args: any[]): void {}
  followUp(..._args: any[]): void {}
  update(..._args: any[]): void {}
  deferUpdate(..._args: any[]): void {}
}

InteractionResponses.applyToClass(ModalSubmitInteraction, ['showModal', 'awaitModalSubmit']);


export default ModalSubmitInteraction;
