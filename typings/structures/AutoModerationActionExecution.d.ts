/**
 * Represents the structure of an executed action when an {@link AutoModerationRule} is triggered.
 */
declare class AutoModerationActionExecution {
    constructor(data: any, guild: any);
    /**
     * The auto moderation rule this action belongs to.
     * @type {?AutoModerationRule}
     * @readonly
     */
    get autoModerationRule(): any;
}
export default AutoModerationActionExecution;
