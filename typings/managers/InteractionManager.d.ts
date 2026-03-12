import CachedManager from './CachedManager';
/**
 * Manages API methods for InteractionResponse and holds their cache.
 * @extends {CachedManager}
 */
declare class InteractionManager extends CachedManager {
    constructor(channel: any, iterable: any);
    /**
     * The cache of InteractionResponse
     * @type {Collection<Snowflake, InteractionResponse>}
     * @name InteractionManager#cache
     */
    _add(data: any, cache: any): {
        id: string;
        _patch(data: unknown): void;
        _clone(): any;
    };
}
export default InteractionManager;
