import Base from './Base';
/**
 * Represents a Poll
 * @extends {Base}
 */
declare class Poll extends Base {
    constructor(client: any, data: any, message: any);
    _patch(data: any): void;
    /**
     * The date when this poll expires
     * @type {Date}
     * @readonly
     */
    get expiresAt(): Date;
    /**
     * Ends this poll.
     * @returns {Promise<Message>}
     */
    end(): Promise<any>;
}
export { Poll };
