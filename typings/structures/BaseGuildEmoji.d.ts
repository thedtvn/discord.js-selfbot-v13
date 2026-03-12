import { Emoji } from './Emoji';
/**
 * Parent class for {@link GuildEmoji} and {@link GuildPreviewEmoji}.
 * @extends {Emoji}
 * @abstract
 */
declare class BaseGuildEmoji extends Emoji {
    constructor(client: any, data: any, guild: any);
    _patch(data: any): void;
}
export default BaseGuildEmoji;
