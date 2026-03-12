import { Collection } from '@discordjs/collection';
import Base from './Base';
/**
 * Represents a call
 * @extends {Base}
 */
declare class CallState extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
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
    setRTCRegion(region: any): any;
    /**
     * The list of user ID who is ringing
     * @type {Collection<Snowflake, User>}
     */
    get ringing(): Collection<unknown, unknown>;
}
export default CallState;
