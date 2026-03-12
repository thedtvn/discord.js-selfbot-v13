import type { Snowflake } from 'discord-api-types/v10';
import type Guild from '../structures/Guild';
import CachedManager from './CachedManager';
import { TypeError, Error } from '../errors';
import { StageInstance } from '../structures/StageInstance';
import { PrivacyLevels } from '../util/Constants';

type StageChannelResolvable = Snowflake | { id: Snowflake };
type StageInstanceResolvable = Snowflake | StageInstance;
type RawStageInstanceData = { id: Snowflake; channel_id?: Snowflake } & Record<string, unknown>;

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
class StageInstanceManager extends CachedManager<Snowflake, StageInstance, StageInstanceResolvable, RawStageInstanceData, [Guild]> {
  public readonly guild: Guild;

  constructor(guild: Guild, iterable?: Iterable<RawStageInstanceData>) {
    super(guild.client, StageInstance, iterable);

    /**
     * The guild this manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

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
  async create(channel: StageChannelResolvable, options: StageInstanceCreateOptions): Promise<StageInstance> {
    const channelId = this.guild.channels.resolveId(channel);
    if (!channelId) throw new Error('STAGE_CHANNEL_RESOLVE');
    if (typeof options !== 'object') throw new TypeError('INVALID_TYPE', 'options', 'object', true);
    let { guildScheduledEvent, topic, privacyLevel, sendStartNotification } = options;

    privacyLevel &&= typeof privacyLevel === 'number' ? privacyLevel : PrivacyLevels[privacyLevel];
    const guildScheduledEventId = guildScheduledEvent && this.resolveId(guildScheduledEvent);

    const data = await this.client.api['stage-instances'].post({
      data: {
        channel_id: channelId,
        topic,
        privacy_level: privacyLevel,
        send_start_notification: sendStartNotification,
        guild_scheduled_event_id: guildScheduledEventId,
      },
    });

    return this._add(data);
  }

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
  async fetch(channel: StageChannelResolvable, { cache = true, force = false }: { cache?: boolean; force?: boolean } = {}): Promise<StageInstance> {
    const channelId = this.guild.channels.resolveId(channel);
    if (!channelId) throw new Error('STAGE_CHANNEL_RESOLVE');

    if (!force) {
      const existing = this.cache.find(stageInstance => stageInstance.channelId === channelId);
      if (existing) return existing;
    }

    const data = await this.client.api('stage-instances', channelId).get();
    return this._add(data, cache);
  }

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
  async edit(channel: StageChannelResolvable, options: StageInstanceEditOptions): Promise<StageInstance> {
    if (typeof options !== 'object') throw new TypeError('INVALID_TYPE', 'options', 'object', true);
    const channelId = this.guild.channels.resolveId(channel);
    if (!channelId) throw new Error('STAGE_CHANNEL_RESOLVE');

    let { topic, privacyLevel } = options;

    privacyLevel &&= typeof privacyLevel === 'number' ? privacyLevel : PrivacyLevels[privacyLevel];

    const data = await this.client.api('stage-instances', channelId).patch({
      data: {
        topic,
        privacy_level: privacyLevel,
      },
    });

    if (this.cache.has(data.id)) {
      const clone = this.cache.get(data.id)._clone();
      clone._patch(data);
      return clone;
    }

    return this._add(data);
  }

  /**
   * Deletes an existing stage instance.
   * @param {StageChannelResolvable} channel The stage channel whose associated stage instance is to be deleted
   * @returns {Promise<void>}
   */
  async delete(channel: StageChannelResolvable): Promise<void> {
    const channelId = this.guild.channels.resolveId(channel);
    if (!channelId) throw new Error('STAGE_CHANNEL_RESOLVE');

    await this.client.api('stage-instances', channelId).delete();
  }
}

export default StageInstanceManager;
