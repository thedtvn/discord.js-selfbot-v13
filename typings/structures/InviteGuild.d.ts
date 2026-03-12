import AnonymousGuild from './AnonymousGuild';
import WelcomeScreen from './WelcomeScreen';
/**
 * Represents a guild received from an invite, includes welcome screen data if available.
 * @extends {AnonymousGuild}
 */
declare class InviteGuild extends AnonymousGuild {
    welcomeScreen: WelcomeScreen | null;
    constructor(client: any, data: any);
}
export default InviteGuild;
