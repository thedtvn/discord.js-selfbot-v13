import { Collection } from '@discordjs/collection';
import Base from './Base';
import WelcomeChannel from './WelcomeChannel';
/**
 * Represents a welcome screen.
 * @extends {Base}
 */
declare class WelcomeScreen extends Base {
    guild: any;
    description: string | null;
    welcomeChannels: Collection<string, WelcomeChannel>;
    constructor(guild: any, data: any);
    /**
     * Whether the welcome screen is enabled on the guild or not
     * @type {boolean}
     */
    get enabled(): boolean;
}
export default WelcomeScreen;
