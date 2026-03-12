import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import { StageInstance } from '../structures/StageInstance';
type StageChannelResolvable = Snowflake | {
    id: Snowflake;
};
type StageInstanceResolvable = Snowflake | StageInstance;
type RawStageInstanceData = {
    id: Snowflake;
    channel_id?: Snowflake;
} & Record<string, unknown>;
interface StageInstanceCreateOptions {
    topic: string;
    privacyLevel?: number | string;
    sendStartNotification?: boolean;
    guildScheduledEvent?: StageInstanceResolvable;
}
interface StageInstanceEditOptions {
    topic?: string;
    privacyLevel?: number | string;
}
/**
 * Manages API methods for {@link StageInstance} objects and holds their cache.
 * @extends {CachedManager}
 */
declare class StageInstanceManager extends CachedManager<Snowflake, StageInstance, StageInstanceResolvable, RawStageInstanceData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawStageInstanceData>);
    /**
     * The cache of this Manager
     * @type {Collection<Snowflake, StageInstance>}
     * @name StageInstanceManager#cache
     */
    /**
     * Options used to create a stage instance.
     * @typedef {Object} StageInstanceCreateOptions
     * @property {string} topic The topic of the stage instance
     * @property {PrivacyLevel|number} [privacyLevel] The privacy level of the stage instance
     * @property {boolean} [sendStartNotification] Whether to notify `@everyone` that the stage instance has started
     * @property {GuildScheduledEventResolvable} [guildScheduledEvent]
     * The guild scheduled event associated with the stage instance
     */
    /**
     * Data that can be resolved to a Stage Channel object. This can be:
     * * A StageChannel
     * * A Snowflake
     * @typedef {StageChannel|Snowflake} StageChannelResolvable
     */
    /**
     * Creates a new stage instance.
     * @param {StageChannelResolvable} channel The stage channel to associate the created stage instance to
     * @param {StageInstanceCreateOptions} options The options to create the stage instance
     * @returns {Promise<StageInstance>}
     * @example
     * // Create a stage instance
     * guild.stageInstances.create('1234567890123456789', {
     *  topic: 'A very creative topic',
     *  privacyLevel: 'GUILD_ONLY'
     * })
     *  .then(stageInstance => console.log(stageInstance))
     *  .catch(console.error);
     */
    create(channel: StageChannelResolvable, options: StageInstanceCreateOptions): Promise<StageInstance>;
    /**
     * Fetches the stage instance associated with a stage channel, if it exists.
     * @param {StageChannelResolvable} channel The stage channel whose associated stage instance is to be fetched
     * @param {BaseFetchOptions} [options] Additional options for this fetch
     * @returns {Promise<StageInstance>}
     * @example
     * // Fetch a stage instance
     * guild.stageInstances.fetch('1234567890123456789')
     *  .then(stageInstance => console.log(stageInstance))
     *  .catch(console.error);
     */
    fetch(channel: StageChannelResolvable, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<StageInstance>;
    /**
     * Options used to edit an existing stage instance.
     * @typedef {Object} StageInstanceEditOptions
     * @property {string} [topic] The new topic of the stage instance
     * @property {PrivacyLevel|number} [privacyLevel] The new privacy level of the stage instance
     */
    /**
     * Edits an existing stage instance.
     * @param {StageChannelResolvable} channel The stage channel whose associated stage instance is to be edited
     * @param {StageInstanceEditOptions} options The options to edit the stage instance
     * @returns {Promise<StageInstance>}
     * @example
     * // Edit a stage instance
     * guild.stageInstances.edit('1234567890123456789', { topic: 'new topic' })
     *  .then(stageInstance => console.log(stageInstance))
     *  .catch(console.error);
     */
    edit(channel: StageChannelResolvable, options: StageInstanceEditOptions): Promise<StageInstance>;
    /**
     * Deletes an existing stage instance.
     * @param {StageChannelResolvable} channel The stage channel whose associated stage instance is to be deleted
     * @returns {Promise<void>}
     */
    delete(channel: StageChannelResolvable): Promise<void>;
}
export default StageInstanceManager;
