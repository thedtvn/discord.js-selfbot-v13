import Base from './Base';
/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
declare class Team extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The owner of this team
     * @type {?TeamMember}
     * @readonly
     */
    get owner(): any;
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
    iconURL({ format, size }?: {}): any;
    /**
     * When concatenated with a string, this automatically returns the Team's name instead of the
     * Team object.
     * @returns {string}
     * @example
     * // Logs: Team name: My Team
     * console.log(`Team name: ${team}`);
     */
    toString(): any;
    toJSON(): unknown;
}
export default Team;
