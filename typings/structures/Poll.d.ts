import { Collection } from '@discordjs/collection';
import Base from './Base';
import { PollAnswer } from './PollAnswer';
import type Client from '../client/Client';
/**
 * Represents a Poll
 * @extends {Base}
 */
declare class Poll extends Base {
    readonly message: any;
    question: {
        text: string;
    };
    answers: Collection<number, PollAnswer>;
    expiresTimestamp: number;
    allowMultiselect: boolean;
    layoutType: string;
    resultsFinalized: boolean;
    constructor(client: Client, data: any, message: any);
    _patch(data: any): any;
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
