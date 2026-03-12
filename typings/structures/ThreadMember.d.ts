import Base from './Base';
/**
 * Represents a Member for a Thread.
 * @extends {Base}
 */
declare class ThreadMember extends Base {
    thread: any;
    joinedTimestamp: number | null;
    id: string;
    flags: any;
    member: any;
    constructor(thread: any, data: any, extra?: any);
    _patch(data: any, extra?: any): any;
    /**
     * The guild member associated with this thread member
     * @type {?GuildMember}
     * @readonly
     */
    get guildMember(): any;
    /**
     * The last time this member joined the thread
     * @type {?Date}
     * @readonly
     */
    get joinedAt(): Date | null;
    /**
     * The user associated with this thread member
     * @type {?User}
     * @readonly
     */
    get user(): any;
    /**
     * Whether the client user can manage this thread member
     * @type {boolean}
     * @readonly
     */
    get manageable(): boolean;
    /**
     * Removes this member from the thread.
     * @param {string} [reason] Reason for removing the member
     * @returns {ThreadMember}
     */
    remove(reason?: string): Promise<this>;
}
export default ThreadMember;
