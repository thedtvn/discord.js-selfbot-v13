import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import CachedManager from './CachedManager';

type InteractionResponse = { id: Snowflake; _patch(data: unknown): void; _clone(): InteractionResponse };

type TextBasedChannelLike = { client: Client; id: Snowflake; guild?: { id: Snowflake } };
type RawInteractionResponseData = { id: Snowflake } & Record<string, unknown>;

/**
 * Manages API methods for InteractionResponse and holds their cache.
 * @extends {CachedManager}
 */
class InteractionManager extends CachedManager<Snowflake, InteractionResponse, Snowflake | InteractionResponse, RawInteractionResponseData> {
  public readonly channel: TextBasedChannelLike;

  constructor(channel: TextBasedChannelLike, iterable?: Iterable<RawInteractionResponseData>) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const InteractionResponseClass = require('../structures/InteractionResponse');
    super(channel.client as Client, InteractionResponseClass, iterable);

    /**
     * The channel that the messages belong to
     * @type {TextBasedChannels}
     */
    this.channel = channel;
  }

  /**
   * The cache of InteractionResponse
   * @type {Collection<Snowflake, InteractionResponse>}
   * @name InteractionManager#cache
   */

  _add(data: RawInteractionResponseData, cache?: boolean): InteractionResponse | undefined {
    data = {
      ...data,
      channelId: this.channel.id,
      guildId: this.channel.guild?.id,
    };
    if (!data.id) return;
    // eslint-disable-next-line consistent-return
    return super._add(data, cache);
  }
}

export default InteractionManager;
