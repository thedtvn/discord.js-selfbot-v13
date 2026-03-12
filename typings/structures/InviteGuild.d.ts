import AnonymousGuild from './AnonymousGuild';
/**
 * Represents a guild received from an invite, includes welcome screen data if available.
 * @extends {AnonymousGuild}
 */
declare class InviteGuild extends AnonymousGuild {
    constructor(client: any, data: any);
}
export default InviteGuild;
