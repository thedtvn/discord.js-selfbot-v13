import Base from './Base';
/**
 * Represents a typing state for a user in a channel.
 * @extends {Base}
 */
declare class Typing extends Base {
    channel: any;
    user: any;
    startedTimestamp: number;
    constructor(channel: any, user: any, data: any);
    _patch(data: any): any;
    /**
     * Indicates whether the status is received from a guild.
     * @returns {boolean}
     */
    inGuild(): boolean;
    /**
     * The time the user started typing at
     * @type {Date}
     * @readonly
     */
    get startedAt(): Date;
    /**
     * The guild the status is from
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * The member who is typing
     * @type {?GuildMember}
     * @readonly
     */
    get member(): any;
}
export default Typing;
