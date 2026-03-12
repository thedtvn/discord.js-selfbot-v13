import BaseGuild from './BaseGuild';
import Permissions from '../util/Permissions';
import type Client from '../client/Client';
/**
 * A partial guild received when using {@link GuildManager#fetch} to fetch multiple guilds.
 * @extends {BaseGuild}
 */
declare class OAuth2Guild extends BaseGuild {
    owner: boolean;
    permissions: Readonly<Permissions>;
    constructor(client: Client, data: any);
}
export default OAuth2Guild;
