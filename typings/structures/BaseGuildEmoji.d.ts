import { Emoji } from './Emoji';
/**
 * Parent class for {@link GuildEmoji} and {@link GuildPreviewEmoji}.
 * @extends {Emoji}
 * @abstract
 */
declare class BaseGuildEmoji extends Emoji {
    guild: any;
    requiresColons: boolean | null;
    managed: boolean | null;
    available: boolean | null;
    constructor(client: any, data: any, guild: any);
    _patch(data: any): any;
}
export default BaseGuildEmoji;
