import { Collection } from '@discordjs/collection';
import Base from './Base';
/**
 * Represents the data about a public {@link StageInstance} in an {@link Invite}.
 * @extends {Base}
 */
declare class InviteStageInstance extends Base {
    channelId: string;
    guildId: string;
    members: Collection<string, any>;
    topic: string;
    participantCount: number;
    speakerCount: number;
    constructor(client: any, data: any, channelId: string, guildId: string);
    _patch(data: any): any;
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
