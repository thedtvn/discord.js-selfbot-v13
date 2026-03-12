import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import VoiceState from '../structures/VoiceState';

type RawVoiceStateData = { user_id: Snowflake } & Record<string, unknown>;

/**
 * Manages API methods for VoiceStates and stores their cache.
 * @extends {CachedManager}
 */
// @ts-expect-error RawVoiceStateData uses user_id instead of id
class VoiceStateManager extends CachedManager<Snowflake, VoiceState, Snowflake | VoiceState, RawVoiceStateData, [Guild]> {
  public readonly guild: Guild;

  constructor(guild: Guild, iterable?: Iterable<RawVoiceStateData>) {
    super(guild.client, VoiceState, iterable);

    /**
     * The guild this manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, VoiceState>}
   * @name VoiceStateManager#cache
   */

  _add(data: RawVoiceStateData, cache = true): VoiceState {
    const existing = this.cache.get(data.user_id);
    if (existing) return existing._patch(data);

    const entry = new (this.holds as unknown as new (guild: Guild, data: RawVoiceStateData) => VoiceState)(this.guild, data);
    if (cache) this.cache.set(data.user_id, entry);
    return entry;
  }

  /**
   * Obtains a user's voice state from discord or from the cache if it's already available.
   * @param {GuildMemberResolvable|'@me'} member The member whose voice state is to be fetched
   * @param {BaseFetchOptions} [options] Additional options for this fetch
   * @returns {Promise<VoiceState>}
   * @example
   * // Fetch a member's voice state
   * guild.voiceStates.fetch("66564597481480192")
   *    .then(console.log)
   *    .catch(console.error);
   */
  async fetch(member: unknown, { cache = true, force = false }: { cache?: boolean; force?: boolean } = {}): Promise<VoiceState> {
    if (!this.guild?.id) throw new Error('Guild is not defined');
    const id = member === '@me' ? member : this.guild.members.resolveId(member as string);
    if (!force) {
      const existing = this.cache.get(id === '@me' ? this.client.user.id : id);
      if (existing) return existing;
    }
    const data = await this.client.api.guilds(this.guild.id)['voice-states'][id].get();
    return this._add(data, cache);
  }
}

export default VoiceStateManager;
