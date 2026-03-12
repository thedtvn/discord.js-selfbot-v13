import Base from './Base';
/**
 * Represents an auto moderation rule.
 * @extends {Base}
 */
declare class AutoModerationRule extends Base {
    constructor(client: any, data: any, guild: any);
    _patch(data: any): void;
    /**
     * Edits this auto moderation rule.
     * @param {AutoModerationRuleEditOptions} options Options for editing this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    edit(options: any): any;
    /**
     * Deletes this auto moderation rule.
     * @param {string} [reason] The reason for deleting this auto moderation rule
     * @returns {Promise<void>}
     */
    delete(reason: any): any;
    /**
     * Sets the name for this auto moderation rule.
     * @param {string} name The name of this auto moderation rule
     * @param {string} [reason] The reason for changing the name of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setName(name: any, reason: any): any;
    /**
     * Sets the event type for this auto moderation rule.
     * @param {AutoModerationRuleEventType} eventType The event type of this auto moderation rule
     * @param {string} [reason] The reason for changing the event type of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setEventType(eventType: any, reason: any): any;
    /**
     * Sets the keyword filter for this auto moderation rule.
     * @param {string[]} keywordFilter The keyword filter of this auto moderation rule
     * @param {string} [reason] The reason for changing the keyword filter of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setKeywordFilter(keywordFilter: any, reason: any): any;
    /**
     * Sets the regular expression patterns for this auto moderation rule.
     * @param {string[]} regexPatterns The regular expression patterns of this auto moderation rule
     * <info>Only Rust-flavored regular expressions are supported.</info>
     * @param {string} [reason] The reason for changing the regular expression patterns of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setRegexPatterns(regexPatterns: any, reason: any): any;
    /**
     * Sets the presets for this auto moderation rule.
     * @param {AutoModerationRuleKeywordPresetType[]} presets The presets of this auto moderation rule
     * @param {string} [reason] The reason for changing the presets of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setPresets(presets: any, reason: any): any;
    /**
     * Sets the allow list for this auto moderation rule.
     * @param {string[]} allowList The allow list of this auto moderation rule
     * @param {string} [reason] The reason for changing the allow list of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setAllowList(allowList: any, reason: any): any;
    /**
     * Sets the mention total limit for this auto moderation rule.
     * @param {number} mentionTotalLimit The mention total limit of this auto moderation rule
     * @param {string} [reason] The reason for changing the mention total limit of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setMentionTotalLimit(mentionTotalLimit: any, reason: any): any;
    /**
     * Sets whether to enable mention raid protection for this auto moderation rule.
     * @param {boolean} mentionRaidProtectionEnabled
     * Whether to enable mention raid protection for this auto moderation rule
     * @param {string} [reason] The reason for changing the mention raid protection of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setMentionRaidProtectionEnabled(mentionRaidProtectionEnabled: any, reason: any): any;
    /**
     * Sets the actions for this auto moderation rule.
     * @param {AutoModerationActionOptions[]} actions The actions of this auto moderation rule
     * @param {string} [reason] The reason for changing the actions of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setActions(actions: any, reason: any): any;
    /**
     * Sets whether this auto moderation rule should be enabled.
     * @param {boolean} [enabled=true] Whether to enable this auto moderation rule
     * @param {string} [reason] The reason for enabling or disabling this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setEnabled(enabled: boolean, reason: any): any;
    /**
     * Sets the exempt roles for this auto moderation rule.
     * @param {Collection<Snowflake, Role>|RoleResolvable[]} [exemptRoles] The exempt roles of this auto moderation rule
     * @param {string} [reason] The reason for changing the exempt roles of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setExemptRoles(exemptRoles: any, reason: any): any;
    /**
     * Sets the exempt channels for this auto moderation rule.
     * @param {Collection<Snowflake, GuildChannel|ThreadChannel>|GuildChannelResolvable[]} [exemptChannels]
     * The exempt channels of this auto moderation rule
     * @param {string} [reason] The reason for changing the exempt channels of this auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    setExemptChannels(exemptChannels: any, reason: any): any;
}
export default AutoModerationRule;
