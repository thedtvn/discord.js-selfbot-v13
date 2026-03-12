import BaseGuild from './BaseGuild';
import Permissions from '../util/Permissions';
import type Client from '../client/Client';

/**
 * A partial guild received when using {@link GuildManager#fetch} to fetch multiple guilds.
 * @extends {BaseGuild}
 */
class OAuth2Guild extends BaseGuild {
  public owner: boolean;
  public permissions: Readonly<Permissions>;

  constructor(client: Client, data: any) {
    super(client, data);

    /**
     * Whether the client user is the owner of the guild
     * @type {boolean}
     */
    this.owner = data.owner;

    /**
     * The permissions that the client user has in this guild
     * @type {Readonly<Permissions>}
     */
    this.permissions = new Permissions(BigInt(data.permissions)).freeze();
  }
}


export default OAuth2Guild;
