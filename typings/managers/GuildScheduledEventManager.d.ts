import CachedManager from './CachedManager';
/**
 * Manages API methods for GuildScheduledEvents and stores their cache.
 * @extends {CachedManager}
 */
declare class GuildScheduledEventManager extends CachedManager {
    constructor(guild: any, iterable: any);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, GuildScheduledEvent>}
     * @name GuildScheduledEventManager#cache
     */
    /**
     * Data that resolves to give a GuildScheduledEvent object. This can be:
     * * A Snowflake
     * * A GuildScheduledEvent object
     * @typedef {Snowflake|GuildScheduledEvent} GuildScheduledEventResolvable
     */
    /**
     * Options for setting a recurrence rule for a guild scheduled event.
     * @typedef {Object} GuildScheduledEventRecurrenceRuleOptions
     * @property {DateResolvable} startAt The time the recurrence rule interval starts at
     * @property {GuildScheduledEventRecurrenceRuleFrequency} frequency How often the event occurs
     * @property {number} interval The spacing between the events
     * @property {?GuildScheduledEventRecurrenceRuleWeekday[]} byWeekday The days within a week to recur on
     * @property {?GuildScheduledEventRecurrenceRuleNWeekday[]} byNWeekday The days within a week to recur on
     * @property {?GuildScheduledEventRecurrenceRuleMonth[]} byMonth The months to recur on
     * @property {?number[]} byMonthDay The days within a month to recur on
     */
    /**
     * Options used to create a guild scheduled event.
     * @typedef {Object} GuildScheduledEventCreateOptions
     * @property {string} name The name of the guild scheduled event
     * @property {DateResolvable} scheduledStartTime The time to schedule the event at
     * @property {DateResolvable} [scheduledEndTime] The time to end the event at
     * <warn>This is required if `entityType` is 'EXTERNAL'</warn>
     * @property {PrivacyLevel|number} privacyLevel The privacy level of the guild scheduled event
     * @property {GuildScheduledEventEntityType|number} entityType The scheduled entity type of the event
     * @property {string} [description] The description of the guild scheduled event
     * @property {GuildVoiceChannelResolvable} [channel] The channel of the guild scheduled event
     * <warn>This is required if `entityType` is 'STAGE_INSTANCE' or `VOICE`</warn>
     * @property {GuildScheduledEventEntityMetadataOptions} [entityMetadata] The entity metadata of the
     * guild scheduled event
     * <warn>This is required if `entityType` is 'EXTERNAL'</warn>
     * @property {?(BufferResolvable|Base64Resolvable)} [image] The cover image of the guild scheduled event
     * @property {string} [reason] The reason for creating the guild scheduled event
     * @property {GuildScheduledEventRecurrenceRuleOptions} [recurrenceRule]
     * The recurrence rule of the guild scheduled event
     */
    /**
     * Options used to set entity metadata of a guild scheduled event.
     * @typedef {Object} GuildScheduledEventEntityMetadataOptions
     * @property {string} [location] The location of the guild scheduled event
     * <warn>This is required if `entityType` is 'EXTERNAL'</warn>
     */
    /**
     * Creates a new guild scheduled event.
     * @param {GuildScheduledEventCreateOptions} options Options for creating the guild scheduled event
     * @returns {Promise<GuildScheduledEvent>}
     */
    create(options: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Options used to fetch a single guild scheduled event from a guild.
     * @typedef {BaseFetchOptions} FetchGuildScheduledEventOptions
     * @property {GuildScheduledEventResolvable} guildScheduledEvent The guild scheduled event to fetch
     * @property {boolean} [withUserCount=true] Whether to fetch the number of users subscribed to the scheduled event
     */
    /**
     * Options used to fetch multiple guild scheduled events from a guild.
     * @typedef {Object} FetchGuildScheduledEventsOptions
     * @property {boolean} [cache] Whether or not to cache the fetched guild scheduled events
     * @property {boolean} [withUserCount=true] Whether to fetch the number of users subscribed to each scheduled event
     * should be returned
     */
    /**
     * Obtains one or more guild scheduled events from Discord, or the guild cache if it's already available.
     * @param {GuildScheduledEventResolvable|FetchGuildScheduledEventOptions|FetchGuildScheduledEventsOptions} [options]
     * The id of the guild scheduled event or options
     * @returns {Promise<GuildScheduledEvent|Collection<Snowflake, GuildScheduledEvent>>}
     */
    fetch(options?: {}): Promise<any>;
    /**
     * Options used to edit a guild scheduled event.
     * @typedef {Object} GuildScheduledEventEditOptions
     * @property {string} [name] The name of the guild scheduled event
     * @property {DateResolvable} [scheduledStartTime] The time to schedule the event at
     * @property {DateResolvable} [scheduledEndTime] The time to end the event at
     * @property {PrivacyLevel|number} [privacyLevel] The privacy level of the guild scheduled event
     * @property {GuildScheduledEventEntityType|number} [entityType] The scheduled entity type of the event
     * @property {string} [description] The description of the guild scheduled event
     * @property {?GuildVoiceChannelResolvable} [channel] The channel of the guild scheduled event
     * @property {GuildScheduledEventStatus|number} [status] The status of the guild scheduled event
     * @property {GuildScheduledEventEntityMetadataOptions} [entityMetadata] The entity metadata of the
     * guild scheduled event
     * <warn>This can be modified only if `entityType` of the `GuildScheduledEvent` to be edited is 'EXTERNAL'</warn>
     * @property {?(BufferResolvable|Base64Resolvable)} [image] The cover image of the guild scheduled event
     * @property {string} [reason] The reason for editing the guild scheduled event
     * @property {?GuildScheduledEventRecurrenceRuleOptions} [recurrenceRule]
     * The recurrence rule of the guild scheduled event
     */
    /**
     * Edits a guild scheduled event.
     * @param {GuildScheduledEventResolvable} guildScheduledEvent The guild scheduled event to edit
     * @param {GuildScheduledEventEditOptions} options Options to edit the guild scheduled event
     * @returns {Promise<GuildScheduledEvent>}
     */
    edit(guildScheduledEvent: any, options: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
    /**
     * Deletes a guild scheduled event.
     * @param {GuildScheduledEventResolvable} guildScheduledEvent The guild scheduled event to delete
     * @returns {Promise<void>}
     */
    delete(guildScheduledEvent: any): Promise<void>;
    /**
     * Options used to fetch subscribers of a guild scheduled event
     * @typedef {Object} FetchGuildScheduledEventSubscribersOptions
     * @property {number} [limit] The maximum numbers of users to fetch
     * @property {boolean} [withMember] Whether to fetch guild member data of the users
     * @property {Snowflake} [before] Consider only users before this user id
     * @property {Snowflake} [after] Consider only users after this user id
     * <warn>If both `before` and `after` are provided, only `before` is respected</warn>
     */
    /**
     * Represents a subscriber of a {@link GuildScheduledEvent}
     * @typedef {Object} GuildScheduledEventUser
     * @property {Snowflake} guildScheduledEventId The id of the guild scheduled event which the user subscribed to
     * @property {User} user The user that subscribed to the guild scheduled event
     * @property {?GuildMember} member The guild member associated with the user, if any
     */
    /**
     * Fetches subscribers of a guild scheduled event.
     * @param {GuildScheduledEventResolvable} guildScheduledEvent The guild scheduled event to fetch subscribers of
     * @param {FetchGuildScheduledEventSubscribersOptions} [options={}] Options for fetching the subscribers
     * @returns {Promise<Collection<Snowflake, GuildScheduledEventUser>>}
     */
    fetchSubscribers(guildScheduledEvent: any, options?: {}): Promise<any>;
}
export default GuildScheduledEventManager;
