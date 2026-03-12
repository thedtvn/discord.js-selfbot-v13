'use strict';

import { Collection } from '@discordjs/collection';
import Base from './Base';

/**
 * Represents a call
 * @extends {Base}
 */
class CallState extends Base {
  public channelId: any;
  public _ringing: any[];
  public region: string;

  constructor(client: any, data: any) {
    super(client);
    /**
     * The channel ID of the call
     * @type {Snowflake}
     */
    this.channelId = data.channel_id;

    this._ringing = [];

    this._patch(data);
  }

  _patch(data: any): void {
    if ('region' in data) {
      /**
       * The region of the call
       * @type {string}
       */
      this.region = data.region;
    }
    if ('ringing' in data) {
      this._ringing = data.ringing;
    }
  }

  /**
   * The channel of the call
   * @type {?DMChannel|GroupDMChannel}
   */
  get channel(): any {
    return this.client.channels.cache.get(this.channelId);
  }

  /**
   * Sets the voice region of the call
   * @param {string} region Region of the call
   * @returns {Promise<void>}
   */
  setRTCRegion(region: string): any {
    return this.client.api.channels(this.channelId).call.patch({ data: { region } });
  }

  /**
   * The list of user ID who is ringing
   * @type {Collection<Snowflake, User>}
   */
  get ringing(): any {
    return new Collection(this._ringing.map(id => [id, this.client.users.cache.get(id)]));
  }
}

export default CallState;
