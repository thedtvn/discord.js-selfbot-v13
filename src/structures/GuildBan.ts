'use strict';

import Base from './Base';

/**
 * Represents a ban in a guild on Discord.
 * @extends {Base}
 */
class GuildBan extends Base {
  public guild: any;
  public user: any;
  public reason: string | null;

  constructor(client: any, data: any, guild: any) {
    super(client);

    /**
     * The guild in which the ban is
     * @type {Guild}
     */
    this.guild = guild;

    this._patch(data);
  }

  _patch(data: any): void {
    if ('user' in data) {
      /**
       * The user this ban applies to
       * @type {User}
       */
      this.user = this.client.users._add(data.user, true);
    }

    if ('reason' in data) {
      /**
       * The reason for the ban
       * @type {?string}
       */
      this.reason = data.reason;
    }
  }

  /**
   * Whether this GuildBan is partial. If the reason is not provided the value is null
   * @type {boolean}
   * @readonly
   */
  get partial(): boolean {
    return !('reason' in this);
  }

  /**
   * Fetches this GuildBan.
   * @param {boolean} [force=true] Whether to skip the cache check and request the API
   * @returns {Promise<GuildBan>}
   */
  fetch(force: boolean = true): any {
    return this.guild.bans.fetch({ user: this.user, cache: true, force });
  }
}

export default GuildBan;
