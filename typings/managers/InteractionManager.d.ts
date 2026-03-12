import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import CachedManager from './CachedManager';
type InteractionResponse = {
    id: Snowflake;
    _patch(data: unknown): void;
    _clone(): InteractionResponse;
};
type TextBasedChannelLike = {
    client: Client;
    id: Snowflake;
    guild?: {
        id: Snowflake;
    };
};
type RawInteractionResponseData = {
    id: Snowflake;
} & Record<string, unknown>;
/**
 * Manages API methods for InteractionResponse and holds their cache.
 * @extends {CachedManager}
 */
declare class InteractionManager extends CachedManager<Snowflake, InteractionResponse, Snowflake | InteractionResponse, RawInteractionResponseData> {
    readonly channel: TextBasedChannelLike;
    constructor(channel: TextBasedChannelLike, iterable?: Iterable<RawInteractionResponseData>);
    /**
     * The cache of InteractionResponse
     * @type {Collection<Snowflake, InteractionResponse>}
     * @name InteractionManager#cache
     */
    _add(data: RawInteractionResponseData, cache?: boolean): InteractionResponse | undefined;
}
export default InteractionManager;
