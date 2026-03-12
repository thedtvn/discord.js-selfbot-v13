import Base from './Base';
/**
 * Represents a Client OAuth2 Application Team Member.
 * @extends {Base}
 */
declare class TeamMember extends Base {
    constructor(team: any, data: any);
    _patch(data: any): void;
    /**
     * The Team Member's id
     * @type {Snowflake}
     * @readonly
     */
    get id(): any;
    /**
     * When concatenated with a string, this automatically returns the team member's mention instead of the
     * TeamMember object.
     * @returns {string}
     * @example
     * // Logs: Team Member's mention: <@123456789012345678>
     * console.log(`Team Member's mention: ${teamMember}`);
     */
    toString(): any;
}
export default TeamMember;
