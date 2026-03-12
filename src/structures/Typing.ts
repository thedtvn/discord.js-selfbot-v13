import Base from './Base';

/**
 * Represents a typing state for a user in a channel.
 * @extends {Base}
 */
class Typing extends Base {
  public channel: any;
  public user: any;
  public startedTimestamp!: number;

  constructor(channel: any, user: any, data: any) {
    super(channel.client);

    /**
     * The channel the status is from
     * @type {TextBasedChannels}
     */
    this.channel = channel;

    /**
     * The user who is typing
     * @type {User}
     */
    this.user = user;

    this._patch(data);
  }

  _patch(data: any): any {
    if ('timestamp' in data) {
      /**
       * The UNIX timestamp in milliseconds the user started typing at
       * @type {number}
       */
      this.startedTimestamp = data.timestamp * 1_000;
    }
  }

  /**
   * Indicates whether the status is received from a guild.
   * @returns {boolean}
   */
  inGuild(): boolean {
    return this.guild !== null;
  }

  /**
   * The time the user started typing at
   * @type {Date}
   * @readonly
   */
  get startedAt(): Date {
    return new Date(this.startedTimestamp);
  }

  /**
   * The guild the status is from
   * @type {?Guild}
   * @readonly
   */
  get guild(): any {
    return this.channel.guild ?? null;
  }

  /**
   * The member who is typing
   * @type {?GuildMember}
   * @readonly
   */
  get member(): any {
    return this.guild?.members.resolve(this.user) ?? null;
  }
}


export default Typing;
