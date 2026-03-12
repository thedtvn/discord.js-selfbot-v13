import BaseGuild from './BaseGuild';
/**
 * A partial guild received when using {@link GuildManager#fetch} to fetch multiple guilds.
 * @extends {BaseGuild}
 */
declare class OAuth2Guild extends BaseGuild {
    constructor(client: any, data: any);
}
export default OAuth2Guild;
