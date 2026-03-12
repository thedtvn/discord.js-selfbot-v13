import Base from './Base';
import type { Poll } from './Poll';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents an answer to a {@link Poll}
 * @extends {Base}
 */
declare class PollAnswer extends Base {
    readonly poll: Poll;
    id: number;
    text: string | null;
    readonly _emoji: any | null;
    voteCount: number;
    constructor(client: Client, data: any, poll: Poll);
    _patch(data: any): any;
    /**
     * The emoji of this answer
     * @type {?(GuildEmoji|Emoji)}
     */
    get emoji(): any;
    /**
     * @typedef {Object} FetchPollVotersOptions
     * @property {number} [limit] The maximum number of voters to fetch
     * @property {Snowflake} [after] The user id to fetch voters after
     */
    /**
     * Fetches the users that voted for this answer
     * @param {FetchPollVotersOptions} [options={}] The options for fetching voters
     * @returns {Promise<Collection<Snowflake, User>>}
     */
    fetchVoters({ after, limit }?: {
        after?: Snowflake;
        limit?: number;
    }): Promise<any>;
}
export { PollAnswer };
