import { Collection } from '@discordjs/collection';
import Base from './Base';
import { PollAnswer } from './PollAnswer';
import { Error } from '../errors';
import { PollLayoutTypes } from '../util/Constants';
import type Client from '../client/Client';

/**
 * Represents a Poll
 * @extends {Base}
 */
class Poll extends Base {
  public declare readonly message: any;
  public question: { text: string };
  public answers: Collection<number, PollAnswer>;
  public expiresTimestamp: number;
  public allowMultiselect: boolean;
  public layoutType: string;
  public resultsFinalized!: boolean;

  constructor(client: Client, data: any, message: any) {
    super(client);

    /**
     * The message that started this poll
     * @name Poll#message
     * @type {Message}
     * @readonly
     */

    Object.defineProperty(this, 'message', { value: message });

    /**
     * The media for a poll's question
     * @typedef {Object} PollQuestionMedia
     * @property {string} text The text of this question
     */

    /**
     * The media for this poll's question
     * @type {PollQuestionMedia}
     */
    this.question = {
      text: data.question.text,
    };

    /**
     * The answers of this poll
     * @type {Collection<number, PollAnswer>}
     */
    this.answers = data.answers.reduce(
      (acc, answer) => acc.set(answer.answer_id, new PollAnswer(this.client, answer, this)),
      new Collection(),
    );

    /**
     * The timestamp when this poll expires
     * @type {number}
     */
    this.expiresTimestamp = Date.parse(data.expiry);

    /**
     * Whether this poll allows multiple answers
     * @type {boolean}
     */
    this.allowMultiselect = data.allow_multiselect;

    /**
     * The layout type of this poll
     * @type {PollLayoutType}
     */
    this.layoutType = PollLayoutTypes[data.layout_type];

    this._patch(data);
  }

  _patch(data: any): void {
    if (data.results) {
      /**
       * Whether this poll's results have been precisely counted
       * @type {boolean}
       */
      this.resultsFinalized = data.results.is_finalized;

      for (const answerResult of data.results.answer_counts) {
        const answer = this.answers.get(answerResult.id);
        answer?._patch(answerResult);
      }
    } else {
      this.resultsFinalized ??= false;
    }
  }

  /**
   * The date when this poll expires
   * @type {Date}
   * @readonly
   */
  get expiresAt(): Date {
    return new Date(this.expiresTimestamp);
  }

  /**
   * Ends this poll.
   * @returns {Promise<Message>}
   */
  async end(): Promise<any> {
    if (Date.now() > this.expiresTimestamp) {
      throw new Error('POLL_ALREADY_EXPIRED');
    }
    return this.message.channel.messages.endPoll(this.message.id);
  }
}


export { Poll };
