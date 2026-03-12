import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import AutoModerationRule from '../structures/AutoModerationRule';
type AutoModerationRuleResolvable = AutoModerationRule | Snowflake;
type RawAutoModerationRuleData = {
    id: Snowflake;
} & Record<string, unknown>;
interface AutoModerationTriggerMetadataOptions {
    keywordFilter?: string[];
    regexPatterns?: string[];
    presets?: (number | string)[];
    allowList?: string[];
    mentionTotalLimit?: number | null;
    mentionRaidProtectionEnabled?: boolean;
}
interface AutoModerationActionMetadataOptions {
    channel?: Snowflake | {
        id: Snowflake;
    };
    durationSeconds?: number;
    customMessage?: string;
}
interface AutoModerationActionOptions {
    type: number | string;
    metadata?: AutoModerationActionMetadataOptions;
}
interface AutoModerationRuleCreateOptions {
    name: string;
    eventType: number | string;
    triggerType: number | string;
    triggerMetadata?: AutoModerationTriggerMetadataOptions;
    actions: AutoModerationActionOptions[];
    enabled?: boolean;
    exemptRoles?: Collection<Snowflake, unknown> | (Snowflake | {
        id: Snowflake;
    })[];
    exemptChannels?: Collection<Snowflake, unknown> | (Snowflake | {
        id: Snowflake;
    })[];
    reason?: string;
}
interface AutoModerationRuleEditOptions {
    name?: string;
    eventType?: number | string;
    triggerMetadata?: AutoModerationTriggerMetadataOptions;
    actions?: AutoModerationActionOptions[];
    enabled?: boolean;
    exemptRoles?: Collection<Snowflake, unknown> | (Snowflake | {
        id: Snowflake;
    })[];
    exemptChannels?: Collection<Snowflake, unknown> | (Snowflake | {
        id: Snowflake;
    })[];
    reason?: string;
}
interface FetchAutoModerationRuleOptions {
    autoModerationRule?: AutoModerationRuleResolvable;
    cache?: boolean;
    force?: boolean;
}
interface FetchAutoModerationRulesOptions {
    cache?: boolean;
}
/**
 * Manages API methods for auto moderation rules and stores their cache.
 * @extends {CachedManager}
 */
declare class AutoModerationRuleManager extends CachedManager<Snowflake, AutoModerationRule, AutoModerationRuleResolvable, RawAutoModerationRuleData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawAutoModerationRuleData>);
    /**
     * Resolves an {@link AutoModerationRuleResolvable} to an {@link AutoModerationRule} object.
     * @method resolve
     * @memberof AutoModerationRuleManager
     * @instance
     * @param {AutoModerationRuleResolvable} autoModerationRule The AutoModerationRule resolvable to resolve
     * @returns {?AutoModerationRule}
     */
    /**
     * Resolves an {@link AutoModerationRuleResolvable} to a {@link AutoModerationRule} id.
     * @method resolveId
     * @memberof AutoModerationRuleManager
     * @instance
     * @param {AutoModerationRuleResolvable} autoModerationRule The AutoModerationRule resolvable to resolve
     * @returns {?Snowflake}
     */
    _add(data: RawAutoModerationRuleData, cache?: boolean): AutoModerationRule;
    /**
     * Options used to set the trigger metadata of an auto moderation rule.
     * @typedef {Object} AutoModerationTriggerMetadataOptions
     * @property {string[]} [keywordFilter] The substrings that will be searched for in the content
     * @property {string[]} [regexPatterns] The regular expression patterns which will be matched against the content
     * <info>Only Rust-flavored regular expressions are supported.</info>
     * @property {AutoModerationRuleKeywordPresetType[]} [presets]
     * The internally pre-defined wordsets which will be searched for in the content
     * @property {string[]} [allowList] The substrings that will be exempt from triggering
     * {@link AutoModerationRuleTriggerType.KEYWORD} and {@link AutoModerationRuleTriggerType.KEYWORD_PRESET}
     * @property {?number} [mentionTotalLimit] The total number of role & user mentions allowed per message
     * @property {boolean} [mentionRaidProtectionEnabled] Whether to automatically detect mention raids
     */
    /**
     * Options used to set the actions of an auto moderation rule.
     * @typedef {Object} AutoModerationActionOptions
     * @property {AutoModerationActionType} type The type of this auto moderation rule action
     * @property {AutoModerationActionMetadataOptions} [metadata] Additional metadata needed during execution
     * <info>This property is required if using a `type` of
     * {@link AutoModerationActionType.SEND_ALERT_MESSAGE} or {@link AutoModerationActionType.TIMEOUT}.</info>
     */
    /**
     * Options used to set the metadata of an auto moderation rule action.
     * @typedef {Object} AutoModerationActionMetadataOptions
     * @property {GuildTextChannelResolvable|ThreadChannel} [channel] The channel to which content will be logged
     * @property {number} [durationSeconds] The timeout duration in seconds
     * @property {string} [customMessage] The custom message that is shown whenever a message is blocked
     */
    /**
     * Options used to create an auto moderation rule.
     * @typedef {Object} AutoModerationRuleCreateOptions
     * @property {string} name The name of the auto moderation rule
     * @property {AutoModerationRuleEventType} eventType The event type of the auto moderation rule
     * @property {AutoModerationRuleTriggerType} triggerType The trigger type of the auto moderation rule
     * @property {AutoModerationTriggerMetadataOptions} [triggerMetadata] The trigger metadata of the auto moderation rule
     * <info>This property is required if the following `triggerType`s are used:
     * * {@link AutoModerationRuleTriggerType.KEYWORD KEYWORD}
     * * {@link AutoModerationRuleTriggerType.KEYWORD_PRESET KEYWORD_PRESET}
     * * {@link AutoModerationRuleTriggerType.MENTION_SPAM MENTION_SPAM}
     * </info>
     * @property {AutoModerationActionOptions[]} actions
     * The actions that will execute when the auto moderation rule is triggered
     * @property {boolean} [enabled] Whether the auto moderation rule should be enabled
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [exemptRoles]
     * The roles that should not be affected by the auto moderation rule
     * @property {Collection<Snowflake, GuildChannel|ThreadChannel>|GuildChannelResolvable[]} [exemptChannels]
     * The channels that should not be affected by the auto moderation rule
     * @property {string} [reason] The reason for creating the auto moderation rule
     */
    /**
     * Creates a new auto moderation rule.
     * @param {AutoModerationRuleCreateOptions} options Options for creating the auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    create({ name, eventType, triggerType, triggerMetadata, actions, enabled, exemptRoles, exemptChannels, reason, }: AutoModerationRuleCreateOptions): Promise<AutoModerationRule>;
    /**
     * Options used to edit an auto moderation rule.
     * @typedef {Object} AutoModerationRuleEditOptions
     * @property {string} [name] The name of the auto moderation rule
     * @property {AutoModerationRuleEventType} [eventType] The event type of the auto moderation rule
     * @property {AutoModerationTriggerMetadataOptions} [triggerMetadata] The trigger metadata of the auto moderation rule
     * @property {AutoModerationActionOptions[]} [actions]
     * The actions that will execute when the auto moderation rule is triggered
     * @property {boolean} [enabled] Whether the auto moderation rule should be enabled
     * @property {Collection<Snowflake, Role>|RoleResolvable[]} [exemptRoles]
     * The roles that should not be affected by the auto moderation rule
     * @property {Collection<Snowflake, GuildChannel|ThreadChannel>|GuildChannelResolvable[]} [exemptChannels]
     * The channels that should not be affected by the auto moderation rule
     * @property {string} [reason] The reason for creating the auto moderation rule
     */
    /**
     * Edits an auto moderation rule.
     * @param {AutoModerationRuleResolvable} autoModerationRule The auto moderation rule to edit
     * @param {AutoModerationRuleEditOptions} options Options for editing the auto moderation rule
     * @returns {Promise<AutoModerationRule>}
     */
    edit(autoModerationRule: AutoModerationRuleResolvable, { name, eventType, triggerMetadata, actions, enabled, exemptRoles, exemptChannels, reason }: AutoModerationRuleEditOptions): Promise<AutoModerationRule>;
    /**
     * Data that can be resolved to give an AutoModerationRule object. This can be:
     * * An AutoModerationRule
     * * A Snowflake
     * @typedef {AutoModerationRule|Snowflake} AutoModerationRuleResolvable
     */
    /**
     * Options used to fetch a single auto moderation rule from a guild.
     * @typedef {BaseFetchOptions} FetchAutoModerationRuleOptions
     * @property {AutoModerationRuleResolvable} autoModerationRule The auto moderation rule to fetch
     */
    /**
     * Options used to fetch all auto moderation rules from a guild.
     * @typedef {Object} FetchAutoModerationRulesOptions
     * @property {boolean} [cache] Whether to cache the fetched auto moderation rules
     */
    /**
     * Fetches auto moderation rules from Discord.
     * @param {AutoModerationRuleResolvable|FetchAutoModerationRuleOptions|FetchAutoModerationRulesOptions} [options]
     * Options for fetching auto moderation rule(s)
     * @returns {Promise<AutoModerationRule|Collection<Snowflake, AutoModerationRule>>}
     * @example
     * // Fetch all auto moderation rules from a guild without caching
     * guild.autoModerationRules.fetch({ cache: false })
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single auto moderation rule
     * guild.autoModerationRules.fetch('979083472868098119')
     *   .then(console.log)
     *   .catch(console.error);
     * @example
     * // Fetch a single auto moderation rule without checking cache and without caching
     * guild.autoModerationRules.fetch({ autoModerationRule: '979083472868098119', cache: false, force: true })
     *   .then(console.log)
     *   .catch(console.error)
     */
    fetch(options?: AutoModerationRuleResolvable | FetchAutoModerationRuleOptions | FetchAutoModerationRulesOptions): Promise<AutoModerationRule | Collection<Snowflake, AutoModerationRule>>;
    _fetchSingle({ autoModerationRule, cache, force }: {
        autoModerationRule: Snowflake;
        cache?: boolean;
        force?: boolean;
    }): Promise<AutoModerationRule>;
    _fetchMany(options?: FetchAutoModerationRulesOptions): Promise<Collection<Snowflake, AutoModerationRule>>;
    /**
     * Deletes an auto moderation rule.
     * @param {AutoModerationRuleResolvable} autoModerationRule The auto moderation rule to delete
     * @param {string} [reason] The reason for deleting the auto moderation rule
     * @returns {Promise<void>}
     */
    delete(autoModerationRule: AutoModerationRuleResolvable, reason?: string): Promise<void>;
}
export default AutoModerationRuleManager;
