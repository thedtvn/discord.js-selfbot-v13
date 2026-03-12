'use strict';

import { Collection } from '@discordjs/collection';
import { Channel } from './Channel';
import TextBasedChannel from './interfaces/TextBasedChannel';
import MessageManager from '../managers/MessageManager';
import { Opcodes, Status } from '../util/Constants';

/**
 * Represents a direct message channel between two users.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */
class DMChannel extends Channel {
  public messages: MessageManager;
  public recipient: any;
  public lastMessageId: string | null;
  public lastPinTimestamp: number | null;
  public messageRequest: boolean | null;
  public messageRequestTimestamp: number | null;

  constructor(client: any, data: any) {
    super(client, data);

    // Override the channel type so partials have a known type
    this.type = 'DM';

    /**
     * A manager of the messages belonging to this channel
     * @type {MessageManager}
     */
    this.messages = new MessageManager(this);
  }

  _patch(data: any): void {
    super._patch(data);

    if (data.recipients) {
      /**
       * The recipient on the other end of the DM
       * @type {User}
       */
      this.recipient = this.client.users._add(data.recipients[0]);
    }

    if ('last_message_id' in data) {
      /**
       * The channel's last message id, if one was sent
       * @type {?Snowflake}
       */
      this.lastMessageId = data.last_message_id;
    }

    if ('last_pin_timestamp' in data) {
      /**
       * The timestamp when the last pinned message was pinned, if there was one
       * @type {?number}
       */
      this.lastPinTimestamp = data.last_pin_timestamp ? Date.parse(data.last_pin_timestamp) : null;
    } else {
      this.lastPinTimestamp ??= null;
    }

    if ('is_message_request' in data) {
      /**
       * Whether the channel is a message request
       * @type {?boolean}
       */
      this.messageRequest = data.is_message_request;
    }

    if ('is_message_request_timestamp' in data) {
      /**
       * The timestamp when the message request was created
       * @type {?number}
       */
      this.messageRequestTimestamp = data.is_message_request_timestamp
        ? Date.parse(data.is_message_request_timestamp)
        : null;
    }
  }

  /**
   * Accept this DMChannel.
   * @returns {Promise<DMChannel>}
   */
  async acceptMessageRequest(): Promise<any> {
    if (!this.messageRequest) {
      throw new Error('NOT_MESSAGE_REQUEST', 'This channel is not a message request');
    }
    const c = await this.client.api.channels[this.id].recipients['@me'].put({
      data: {
        consent_status: 2,
      },
    });
    this.messageRequest = false;
    return this.client.channels._add(c);
  }

  /**
   * Cancel this DMChannel.
   * @returns {Promise<DMChannel>}
   */
  async cancelMessageRequest(): Promise<this> {
    if (!this.messageRequest) {
      throw new Error('NOT_MESSAGE_REQUEST', 'This channel is not a message request');
    }
    await this.client.api.channels[this.id].recipients['@me'].delete();
    return this;
  }

  /**
   * Whether this DMChannel is a partial
   * @type {boolean}
   * @readonly
   */
  get partial(): boolean {
    return typeof this.lastMessageId === 'undefined';
  }

  /**
   * Fetch this DMChannel.
   * @param {boolean} [force=true] Whether to skip the cache check and request the API
   * @returns {Promise<DMChannel>}
   */
  fetch(force: boolean = true): any {
    return this.recipient.createDM(force);
  }

  /**
   * When concatenated with a string, this automatically returns the recipient's mention instead of the
   * DMChannel object.
   * @returns {string}
   * @example
   * // Logs: Hello from <@123456789012345678>!
   * console.log(`Hello from ${channel}!`);
   */
  toString(): string {
    return this.recipient.toString();
  }

  /**
   * Sync VoiceState of this DMChannel.
   * @returns {undefined}
   */
  sync(): void {
    this.client.ws.broadcast({
      op: Opcodes.DM_UPDATE,
      d: {
        channel_id: this.id,
      },
    });
  }

  /**
   * Ring the user's phone / PC (call)
   * @returns {Promise<void>}
   */
  ring(): any {
    return this.client.api.channels(this.id).call.ring.post({
      data: {
        recipients: null,
      },
    });
  }

  /**
   * The user in this voice-based channel
   * @type {Collection<Snowflake, User>}
   * @readonly
   */
  get voiceUsers(): any {
    const coll = new Collection();
    for (const state of this.client.voiceStates.cache.values()) {
      if (state.channelId === this.id && state.user) {
        coll.set(state.id, state.user);
      }
    }
    return coll;
  }

  /**
   * Get current shard
   * @type {WebSocketShard}
   * @readonly
   */
  get shard(): any {
    return this.client.ws.shards.first();
  }

  /**
   * The voice state adapter for this client that can be used with @discordjs/voice to play audio in DM / Group DM channels.
   * @type {?Function}
   * @readonly
   */
  get voiceAdapterCreator(): (methods: any) => { sendPayload: (data: any) => boolean; destroy: () => void } {
    return methods => {
      this.client.voice.adapters.set(this.id, methods);
      return {
        sendPayload: data => {
          if (this.shard.status !== Status.READY) return false;
          this.shard.send(data);
          return true;
        },
        destroy: () => {
          this.client.voice.adapters.delete(this.id);
        },
      };
    };
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  get lastMessage() {}
  get lastPinAt() {}
  send() {}
  sendTyping() {}
  createMessageCollector() {}
  awaitMessages() {}
  // Doesn't work on DM channels; setRateLimitPerUser() {}
  // Doesn't work on DM channels; setNSFW() {}
}

TextBasedChannel.applyToClass(DMChannel, true, ['fetchWebhooks', 'createWebhook', 'setRateLimitPerUser', 'setNSFW']);

export default DMChannel;
