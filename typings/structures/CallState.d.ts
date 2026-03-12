import Base from './Base';
/**
 * Represents a call
 * @extends {Base}
 */
declare class CallState extends Base {
    channelId: any;
    _ringing: any[];
    region: string;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * The channel of the call
     * @type {?DMChannel|GroupDMChannel}
     */
    get channel(): any;
    /**
     * Sets the voice region of the call
     * @param {string} region Region of the call
     * @returns {Promise<void>}
     */
    setRTCRegion(region: string): any;
    /**
     * The list of user ID who is ringing
     * @type {Collection<Snowflake, User>}
     */
    get ringing(): any;
}
export default CallState;
