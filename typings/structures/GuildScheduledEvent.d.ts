import Base from './Base';
/**
 * Represents a scheduled event in a {@link Guild}.
 * @extends {Base}
 */
declare class GuildScheduledEvent extends Base {
    id: string;
    guildId: string;
    channelId: string | null;
    creatorId: string | null;
    name: string | null;
    description: string | null;
    scheduledStartTimestamp: number | null;
    scheduledEndTimestamp: number | null;
    privacyLevel: string | null;
    status: string | null;
    entityType: string | null;
    entityId: string | null;
    userCount: number | null;
    creator: any | null;
    entityMetadata: {
        location: string | null;
    } | null;
    image: string | null;
    recurrenceRule: any | null;
    constructor(client: any, data: any);
    _patch(data: any): any;
    /**
     * The URL of this scheduled event's cover image
     * @param {StaticImageURLOptions} [options={}] Options for image URL
     * @returns {?string}
     */
    coverImageURL({ format, size }?: {
        format?: string;
        size?: number;
    }): string | null;
    /**
     * Whether this guild scheduled event is partial.
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * The timestamp the guild scheduled event was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the guild scheduled event was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The time the guild scheduled event will start at
     * @type {Date}
     * @readonly
     */
    get scheduledStartAt(): Date;
    /**
     * The time the guild scheduled event will end at,
     * or `null` if the event does not have a scheduled time to end
     * @type {?Date}
     * @readonly
     */
    get scheduledEndAt(): Date | null;
    /**
     * The channel associated with this scheduled event
     * @type {?(VoiceChannel|StageChannel)}
     * @readonly
     */
    get channel(): any;
    /**
     * The guild this scheduled event belongs to
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * The URL to the guild scheduled event
     * @type {string}
     * @readonly
     */
    get url(): string;
    /**
     * Fetches this guild scheduled event.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<GuildScheduledEvent>}
     */
    fetch(force?: boolean): Promise<GuildScheduledEvent>;
    /**
     * Options used to create an invite URL to a {@link GuildScheduledEvent}
     * @typedef {CreateInviteOptions} CreateGuildScheduledEventInviteURLOptions
     * @property {GuildInvitableChannelResolvable} [channel] The channel to create the invite in.
     * <warn>This is required when the `entityType` of `GuildScheduledEvent` is `EXTERNAL`, gets ignored otherwise</warn>
     */
    /**
     * Creates an invite URL to this guild scheduled event.
     * @param {CreateGuildScheduledEventInviteURLOptions} [options] The options to create the invite
     * @returns {Promise<string>}
     */
    createInviteURL(options?: any): Promise<string>;
    /**
     * Edits this guild scheduled event.
     * @param {GuildScheduledEventEditOptions} options The options to edit the guild scheduled event
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Edit a guild scheduled event
     * guildScheduledEvent.edit({ name: 'Party' })
     *  .then(guildScheduledEvent => console.log(guildScheduledEvent))
     *  .catch(console.error);
     */
    edit(options: any): Promise<GuildScheduledEvent>;
    /**
     * Deletes this guild scheduled event.
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Delete a guild scheduled event
     * guildScheduledEvent.delete()
     *  .then(guildScheduledEvent => console.log(guildScheduledEvent))
     *  .catch(console.error);
     */
    delete(): Promise<GuildScheduledEvent>;
    /**
     * Sets a new name for the guild scheduled event.
     * @param {string} name The new name of the guild scheduled event
     * @param {string} [reason] The reason for changing the name
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set name of a guild scheduled event
     * guildScheduledEvent.setName('Birthday Party')
     *  .then(guildScheduledEvent => console.log(`Set the name to: ${guildScheduledEvent.name}`))
     *  .catch(console.error);
     */
    setName(name: string, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Sets a new time to schedule the event at.
     * @param {DateResolvable} scheduledStartTime The time to schedule the event at
     * @param {string} [reason] The reason for changing the scheduled start time
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set start time of a guild scheduled event
     * guildScheduledEvent.setScheduledStartTime('2022-09-24T00:00:00+05:30')
     *  .then(guildScheduledEvent => console.log(`Set the start time to: ${guildScheduledEvent.scheduledStartTime}`))
     *  .catch(console.error);
     */
    setScheduledStartTime(scheduledStartTime: any, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Sets a new time to end the event at.
     * @param {DateResolvable} scheduledEndTime The time to end the event at
     * @param {string} [reason] The reason for changing the scheduled end time
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set end time of a guild scheduled event
     * guildScheduledEvent.setScheduledEndTime('2022-09-25T00:00:00+05:30')
     *  .then(guildScheduledEvent => console.log(`Set the end time to: ${guildScheduledEvent.scheduledEndTime}`))
     *  .catch(console.error);
     */
    setScheduledEndTime(scheduledEndTime: any, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Sets the new description of the guild scheduled event.
     * @param {string} description The description of the guild scheduled event
     * @param {string} [reason] The reason for changing the description
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set description of a guild scheduled event
     * guildScheduledEvent.setDescription('A virtual birthday party')
     *  .then(guildScheduledEvent => console.log(`Set the description to: ${guildScheduledEvent.description}`))
     *  .catch(console.error);
     */
    setDescription(description: string, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Sets the new status of the guild scheduled event.
     * <info>If you're working with TypeScript, use this method in conjunction with status type-guards
     * like {@link GuildScheduledEvent#isScheduled} to get only valid status as suggestion</info>
     * @param {GuildScheduledEventStatus|number} status The status of the guild scheduled event
     * @param {string} [reason] The reason for changing the status
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set status of a guild scheduled event
     * guildScheduledEvent.setStatus('ACTIVE')
     *  .then(guildScheduledEvent => console.log(`Set the status to: ${guildScheduledEvent.status}`))
     *  .catch(console.error);
     */
    setStatus(status: any, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Sets the new location of the guild scheduled event.
     * @param {string} location The location of the guild scheduled event
     * @param {string} [reason] The reason for changing the location
     * @returns {Promise<GuildScheduledEvent>}
     * @example
     * // Set location of a guild scheduled event
     * guildScheduledEvent.setLocation('Earth')
     *  .then(guildScheduledEvent => console.log(`Set the location to: ${guildScheduledEvent.entityMetadata.location}`))
     *  .catch(console.error);
     */
    setLocation(location: string, reason?: string): Promise<GuildScheduledEvent>;
    /**
     * Fetches subscribers of this guild scheduled event.
     * @param {FetchGuildScheduledEventSubscribersOptions} [options] Options for fetching the subscribers
     * @returns {Promise<Collection<Snowflake, GuildScheduledEventUser>>}
     */
    fetchSubscribers(options?: any): Promise<any>;
    /**
     * When concatenated with a string, this automatically concatenates the event's URL instead of the object.
     * @returns {string}
     * @example
     * // Logs: Event: https://discord.com/events/412345678901234567/499876543211234567
     * console.log(`Event: ${guildScheduledEvent}`);
     */
    toString(): string;
    /**
     * Indicates whether this guild scheduled event has an `ACTIVE` status.
     * @returns {boolean}
     */
    isActive(): boolean;
    /**
     * Indicates whether this guild scheduled event has a `CANCELED` status.
     * @returns {boolean}
     */
    isCanceled(): boolean;
    /**
     * Indicates whether this guild scheduled event has a `COMPLETED` status.
     * @returns {boolean}
     */
    isCompleted(): boolean;
    /**
     * Indicates whether this guild scheduled event has a `SCHEDULED` status.
     * @returns {boolean}
     */
    isScheduled(): boolean;
}
export { GuildScheduledEvent };
