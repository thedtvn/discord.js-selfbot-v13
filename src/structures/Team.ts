import { Collection } from '@discordjs/collection';
import Base from './Base';
import TeamMember from './TeamMember';
import SnowflakeUtil from '../util/SnowflakeUtil';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';

/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
class Team extends Base {
  declare public id: Snowflake;
  public name!: string;
  public icon!: string | null;
  public ownerId!: Snowflake | null;
  public members!: Collection<Snowflake, TeamMember>;

  constructor(client: Client, data: any) {
    super(client);
    this._patch(data);
  }

  _patch(data: any): any {
    /**
     * The Team's id
     * @type {Snowflake}
     */
    this.id = data.id;

    if ('name' in data) {
      /**
       * The name of the Team
       * @type {string}
       */
      this.name = data.name;
    }

    if ('icon' in data) {
      /**
       * The Team's icon hash
       * @type {?string}
       */
      this.icon = data.icon;
    } else {
      this.icon ??= null;
    }

    if ('owner_user_id' in data) {
      /**
       * The Team's owner id
       * @type {?Snowflake}
       */
      this.ownerId = data.owner_user_id;
    } else {
      this.ownerId ??= null;
    }
    /**
     * The Team's members
     * @type {Collection<Snowflake, TeamMember>}
     */
    this.members = new Collection();

    for (const memberData of data.members) {
      const member = new TeamMember(this, memberData);
      this.members.set(member.id, member);
    }
  }

  /**
   * The owner of this team
   * @type {?TeamMember}
   * @readonly
   */
  get owner(): TeamMember | null {
    return this.members.get(this.ownerId) ?? null;
  }

  /**
   * The timestamp the team was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp(): number {
    return SnowflakeUtil.timestampFrom(this.id);
  }

  /**
   * The time the team was created at
   * @type {Date}
   * @readonly
   */
  get createdAt(): Date {
    return new Date(this.createdTimestamp);
  }

  /**
   * A link to the team's icon.
   * @param {StaticImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  iconURL({ format, size }: { format?: string; size?: number } = {}): string | null {
    if (!this.icon) return null;
    return this.client.rest.cdn.TeamIcon(this.id, this.icon, { format, size });
  }

  /**
   * When concatenated with a string, this automatically returns the Team's name instead of the
   * Team object.
   * @returns {string}
   * @example
   * // Logs: Team name: My Team
   * console.log(`Team name: ${team}`);
   */
  toString(): string {
    return this.name;
  }

  toJSON(): unknown {
    return super.toJSON({ createdTimestamp: true });
  }
}


export default Team;
