import Base from './Base';
/**
 * Represents a WidgetMember.
 * @extends {Base}
 */
declare class WidgetMember extends Base {
    /**
     * Activity sent in a {@link WidgetMember}.
     * @typedef {Object} WidgetActivity
     * @property {string} name The name of the activity
     */
    constructor(client: any, data: any);
}
export default WidgetMember;
