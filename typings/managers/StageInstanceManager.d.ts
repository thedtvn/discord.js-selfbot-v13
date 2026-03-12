import CachedManager from './CachedManager';
/**
 * Manages API methods for {@link StageInstance} objects and holds their cache.
 * @extends {CachedManager}
 */
declare class StageInstanceManager extends CachedManager {
    constructor(guild: any, iterable: any);
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
    create(channel: any, options: any): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
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
    fetch(channel: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<{
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    }>;
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
    edit(channel: any, options: any): Promise<any>;
    /**
     * Deletes an existing stage instance.
     * @param {StageChannelResolvable} channel The stage channel whose associated stage instance is to be deleted
     * @returns {Promise<void>}
     */
    delete(channel: any): Promise<void>;
}
export default StageInstanceManager;
