import Base from './Base';
/**
 * Represents an invitation to a guild channel.
 * @extends {Base}
 */
declare class Invite extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The time the invite was created at
     * @type {?Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Whether the invite is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): any;
    /**
     * The timestamp the invite will expire at
     * @type {?number}
     * @readonly
     */
    get expiresTimestamp(): any;
    /**
     * The time the invite will expire at
     * @type {?Date}
     * @readonly
     */
    get expiresAt(): Date;
    /**
     * The URL to the invite
     * @type {string}
     * @readonly
     */
    get url(): string;
    /**
     * Deletes this invite.
     * @param {string} [reason] Reason for deleting this invite
     * @returns {Promise<Invite>}
     */
    delete(reason: any): Promise<this>;
    /**
     * When concatenated with a string, this automatically concatenates the invite's URL instead of the object.
     * @returns {string}
     * @example
     * // Logs: Invite: https://discord.gg/A1b2C3
     * console.log(`Invite: ${invite}`);
     */
    toString(): string;
    toJSON(): unknown;
    valueOf(): any;
}
export default Invite;
