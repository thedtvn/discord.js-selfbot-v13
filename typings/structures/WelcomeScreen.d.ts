import Base from './Base';
/**
 * Represents a welcome screen.
 * @extends {Base}
 */
declare class WelcomeScreen extends Base {
    constructor(guild: any, data: any);
    /**
     * Whether the welcome screen is enabled on the guild or not
     * @type {boolean}
     */
    get enabled(): any;
}
export default WelcomeScreen;
