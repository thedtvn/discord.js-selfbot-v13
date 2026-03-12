import Base from './Base';
/**
 * Represents a WidgetMember.
 * @extends {Base}
 */
declare class WidgetMember extends Base {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    status: string;
    deaf: boolean | null;
    mute: boolean | null;
    selfDeaf: boolean | null;
    selfMute: boolean | null;
    suppress: boolean | null;
    channelId: string | null;
    avatarURL: string;
    activity: {
        name: string;
    } | null;
    /**
     * Activity sent in a {@link WidgetMember}.
     * @typedef {Object} WidgetActivity
     * @property {string} name The name of the activity
     */
    constructor(client: any, data: any);
}
export default WidgetMember;
