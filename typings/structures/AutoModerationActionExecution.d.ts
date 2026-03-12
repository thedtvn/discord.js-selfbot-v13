/**
 * Represents the structure of an executed action when an {@link AutoModerationRule} is triggered.
 */
declare class AutoModerationActionExecution {
    guild: any;
    action: any;
    ruleId: any;
    ruleTriggerType: any;
    userId: any;
    channelId: any;
    messageId: any;
    alertSystemMessageId: any;
    content: string;
    matchedKeyword: string | null;
    matchedContent: string | null;
    constructor(data: any, guild: any);
    /**
     * The auto moderation rule this action belongs to.
     * @type {?AutoModerationRule}
     * @readonly
     */
    get autoModerationRule(): any;
}
export default AutoModerationActionExecution;
