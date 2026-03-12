import Base from './Base';
/**
 * Represents the data about a public {@link StageInstance} in an {@link Invite}.
 * @extends {Base}
 */
declare class InviteStageInstance extends Base {
    constructor(client: any, data: any, channelId: any, guildId: any);
    _patch(data: any): void;
    /**
     * The stage channel this invite is for
     * @type {?StageChannel}
     * @readonly
     */
    get channel(): any;
    /**
     * The guild of the stage channel this invite is for
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
}
export default InviteStageInstance;
