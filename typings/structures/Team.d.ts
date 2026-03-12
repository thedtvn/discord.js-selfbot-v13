import { Collection } from '@discordjs/collection';
import Base from './Base';
import TeamMember from './TeamMember';
import type Client from '../client/Client';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
declare class Team extends Base {
    id: Snowflake;
    name: string;
    icon: string | null;
    ownerId: Snowflake | null;
    members: Collection<Snowflake, TeamMember>;
    constructor(client: Client, data: any);
    _patch(data: any): any;
    /**
     * The owner of this team
     * @type {?TeamMember}
     * @readonly
     */
    get owner(): TeamMember | null;
    /**
     * The timestamp the team was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the team was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * A link to the team's icon.
     * @param {StaticImageURLOptions} [options={}] Options for the Image URL
     * @returns {?string}
     */
    iconURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * When concatenated with a string, this automatically returns the Team's name instead of the
     * Team object.
     * @returns {string}
     * @example
     * // Logs: Team name: My Team
     * console.log(`Team name: ${team}`);
     */
    toString(): string;
    toJSON(): unknown;
}
export default Team;
