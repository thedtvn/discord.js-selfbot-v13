import Base from './Base';
/**
 * Represents an answer to a {@link Poll}
 * @extends {Base}
 */
declare class PollAnswer extends Base {
    constructor(client: any, data: any, poll: any);
    _patch(data: any): void;
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
    fetchVoters({ after, limit }?: {}): any;
}
export { PollAnswer };
