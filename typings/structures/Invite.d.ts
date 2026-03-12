import Base from './Base';
import { GuildScheduledEvent } from './GuildScheduledEvent';
import IntegrationApplication from './IntegrationApplication';
import InviteStageInstance from './InviteStageInstance';
import InviteFlags from '../util/InviteFlags';
/**
 * Represents an invitation to a guild channel.
 * @extends {Base}
 */
declare class Invite extends Base {
    static INVITES_PATTERN: RegExp;
    guild: any | null;
    code: string;
    presenceCount: number | null;
    memberCount: number | null;
    temporary: boolean | null;
    maxAge: number | null;
    uses: number | null;
    maxUses: number | null;
    inviterId: string | null;
    inviter: any | null;
    targetUser: any | null;
    targetApplication: IntegrationApplication | null;
    targetType: number | null;
    type: number | null;
    channelId: string | null;
    channel: any | null;
    createdTimestamp: number | null;
    _expiresTimestamp: number | null;
    stageInstance: InviteStageInstance | null;
    guildScheduledEvent: GuildScheduledEvent | null;
    flags: Readonly<InviteFlags>;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * The time the invite was created at
     * @type {?Date}
     * @readonly
     */
    get createdAt(): Date | null;
    /**
     * Whether the invite is deletable by the client user
     * @type {boolean}
     * @readonly
     */
    get deletable(): boolean;
    /**
     * The timestamp the invite will expire at
     * @type {?number}
     * @readonly
     */
    get expiresTimestamp(): number | null;
    /**
     * The time the invite will expire at
     * @type {?Date}
     * @readonly
     */
    get expiresAt(): Date | null;
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
    delete(reason?: string): Promise<this>;
    /**
     * When concatenated with a string, this automatically concatenates the invite's URL instead of the object.
     * @returns {string}
     * @example
     * // Logs: Invite: https://discord.gg/A1b2C3
     * console.log(`Invite: ${invite}`);
     */
    toString(): string;
    toJSON(): unknown;
    valueOf(): string;
}
export default Invite;
