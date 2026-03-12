import Base from './Base';
/**
 * Represents a channel link in a guild's welcome screen.
 * @extends {Base}
 */
declare class WelcomeChannel extends Base {
    guild: any;
    description: string;
    _emoji: {
        name: string | null;
        id: string | null;
    };
    channelId: string;
    constructor(guild: any, data: any);
    /**
     * The channel of this welcome channel
     * @type {?(TextChannel|NewsChannel|StoreChannel|ForumChannel|MediaChannel)}
     */
    get channel(): any;
    /**
     * The emoji of this welcome channel
     * @type {GuildEmoji|Emoji}
     */
    get emoji(): any;
}
export default WelcomeChannel;
