import Base from './Base';
import type Client from '../client/Client';

/**
 * @typedef {Object} SessionClientInfo
 * @property {string} location Location of the client (using IP address)
 * @property {string} platform Platform of the client
 * @property {string} os Operating system of the client
 */

interface SessionClientInfo {
  location: string;
  platform: string;
  os: string;
}

/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
class Session extends Base {
  declare public id: string;
  public approxLastUsedTime!: string;
  public clientInfo!: SessionClientInfo;

  constructor(client: Client, data: any) {
    super(client);
    this._patch(data);
  }

  _patch(data: any): any {
    if ('id_hash' in data) {
      /**
       * The session hash id
       * @type {string}
       */
      this.id = data.id_hash;
    }
    if ('approx_last_used_time' in data) {
      /**
       * The approximate last used time
       * @type {string}
       */
      this.approxLastUsedTime = data.approx_last_used_time;
    }
    if ('client_info' in data) {
      /**
       * The client info
       * @type {SessionClientInfo}
       */
      this.clientInfo = data.client_info;
    }
  }

  /**
   * The timestamp the client was last used at.
   * @type {number}
   * @readonly
   */
  get createdTimestamp(): number {
    return this.createdAt.getTime();
  }

  /**
   * The time the client was last used at.
   * @type {Date}
   * @readonly
   */
  get createdAt(): Date {
    return new Date(this.approxLastUsedTime);
  }

  /**
   * Logout the client (remote).
   * @returns {Promise<void>}
   */
  logout(): any {
    return this.client.api.auth.sessions.logout({
      data: {
        session_id_hashes: [this.id],
      },
    } as any);
  }

  toJSON(): unknown {
    return super.toJSON();
  }
}


export default Session;
