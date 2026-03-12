import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import VoiceState from '../structures/VoiceState';
type RawVoiceStateData = {
    user_id: Snowflake;
} & Record<string, unknown>;
/**
 * Manages API methods for VoiceStates and stores their cache.
 * @extends {CachedManager}
 */
declare class VoiceStateManager extends CachedManager<Snowflake, VoiceState, Snowflake | VoiceState, RawVoiceStateData, [Guild]> {
    readonly guild: Guild;
    constructor(guild: Guild, iterable?: Iterable<RawVoiceStateData>);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, VoiceState>}
     * @name VoiceStateManager#cache
     */
    _add(data: RawVoiceStateData, cache?: boolean): VoiceState;
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
    fetch(member: unknown, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<VoiceState>;
}
export default VoiceStateManager;
