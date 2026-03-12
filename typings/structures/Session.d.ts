import Base from './Base';
/**
 * @typedef {Object} SessionClientInfo
 * @property {string} location Location of the client (using IP address)
 * @property {string} platform Platform of the client
 * @property {string} os Operating system of the client
 */
/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
declare class Session extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The timestamp the client was last used at.
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the client was last used at.
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Logout the client (remote).
     * @returns {Promise<void>}
     */
    logout(): any;
    toJSON(): unknown;
}
export default Session;
