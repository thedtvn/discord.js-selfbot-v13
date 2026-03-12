import CachedManager from './CachedManager';
/**
 * Manages API methods for VoiceStates and stores their cache.
 * @extends {CachedManager}
 */
declare class VoiceStateManager extends CachedManager {
    constructor(guild: any, iterable: any);
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, VoiceState>}
     * @name VoiceStateManager#cache
     */
    _add(data: any, cache?: boolean): any;
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
    fetch(member: any, { cache, force }?: {
        cache?: boolean;
        force?: boolean;
    }): Promise<any>;
}
export default VoiceStateManager;
