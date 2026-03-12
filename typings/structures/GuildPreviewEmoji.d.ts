import BaseGuildEmoji from './BaseGuildEmoji';
/**
 * Represents an instance of an emoji belonging to a public guild obtained through Discord's preview endpoint.
 * @extends {BaseGuildEmoji}
 */
declare class GuildPreviewEmoji extends BaseGuildEmoji {
    /**
     * The public guild this emoji is part of
     * @type {GuildPreview}
     * @name GuildPreviewEmoji#guild
     */
    constructor(client: any, data: any, guild: any);
}
export default GuildPreviewEmoji;
