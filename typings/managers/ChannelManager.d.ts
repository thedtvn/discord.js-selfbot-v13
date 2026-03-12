import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import type { Guild } from '../structures/Guild';
import CachedManager from './CachedManager';
import { Channel } from '../structures/Channel';
/**
 * A manager of channels belonging to a client
 * @extends {CachedManager}
 */
declare class ChannelManager extends CachedManager<Snowflake, Channel> {
    constructor(client: Client, iterable?: Iterable<Record<string, unknown>>);
    /**
     * The cache of Channels
     * @type {Collection<Snowflake, Channel>}
     * @name ChannelManager#cache
     */
    _add(data: {
        id: Snowflake;
        type: string | number;
    } & Record<string, unknown>, guild: Guild | null, { cache, allowUnknownGuild }?: {
        cache?: boolean;
        allowUnknownGuild?: boolean;
    }): Channel | null;
    _remove(id: Snowflake): void;
    /**
     * Data that can be resolved to give a Channel object. This can be:
     * * A Channel object
     * * A Snowflake
     * @typedef {Channel|Snowflake} ChannelResolvable
     */
    /**
     * Resolves a ChannelResolvable to a Channel object.
     * @method resolve
     * @memberof ChannelManager
     * @instance
     * @param {ChannelResolvable} channel The channel resolvable to resolve
     * @returns {?Channel}
     */
    /**
     * Resolves a ChannelResolvable to a channel id string.
     * @method resolveId
     * @memberof ChannelManager
     * @instance
     * @param {ChannelResolvable} channel The channel resolvable to resolve
     * @returns {?Snowflake}
     */
    /**
     * Options for fetching a channel from Discord
     * @typedef {BaseFetchOptions} FetchChannelOptions
     * @property {boolean} [allowUnknownGuild=false] Allows the channel to be returned even if the guild is not in cache,
     * it will not be cached. <warn>Many of the properties and methods on the returned channel will throw errors</warn>
     */
    /**
     * Obtains a channel from Discord, or the channel cache if it's already available.
     * @param {Snowflake} id The channel's id
     * @param {FetchChannelOptions} [options] Additional options for this fetch
     * @returns {Promise<?Channel>}
     * @example
     * // Fetch a channel by its id
     * client.channels.fetch('222109930545610754')
     *   .then(channel => console.log(channel.name))
     *   .catch(console.error);
     */
    fetch(id: Snowflake, { allowUnknownGuild, cache, force }?: {
        allowUnknownGuild?: boolean;
        cache?: boolean;
        force?: boolean;
    }): Promise<Channel | null>;
    /**
     * Create Group DM
     * @param {UserResolvable[]} [recipients=[]] Array of recipients
     * @returns {Promise<GroupDMChannel>} Channel
     * @example
     * client.channels.createGroupDM();
     */
    createGroupDM(recipients?: Array<{
        id?: Snowflake;
    } | Snowflake>): Promise<Channel | null>;
}
export default ChannelManager;
