import Base from './Base';
import type Team from './Team';
import type { Snowflake } from 'discord-api-types/v10';
/**
 * Represents a Client OAuth2 Application Team Member.
 * @extends {Base}
 */
declare class TeamMember extends Base {
    team: Team;
    permissions: string[];
    role: string;
    membershipState: string;
    user: any;
    constructor(team: Team, data: any);
    _patch(data: any): any;
    /**
     * The Team Member's id
     * @type {Snowflake}
     * @readonly
     */
    get id(): Snowflake;
    /**
     * When concatenated with a string, this automatically returns the team member's mention instead of the
     * TeamMember object.
     * @returns {string}
     * @example
     * // Logs: Team Member's mention: <@123456789012345678>
     * console.log(`Team Member's mention: ${teamMember}`);
     */
    toString(): string;
}
export default TeamMember;
