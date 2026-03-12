interface WebEmbedImage {
    url: string;
    proxyURL?: string;
    height?: number;
    width?: number;
}
interface WebEmbedVideo {
    url: string;
    proxyURL?: string;
    height?: number;
    width?: number;
}
interface WebEmbedAuthor {
    name?: string;
    url?: string;
}
interface WebEmbedProvider {
    name?: string;
    url?: string;
}
/**
 * Send Embedlink to Discord
 * <info>Only works with Discord Web and Discord Client (no custom theme installed)</info>
 * - No Timestamp, Footer, Fields, Author iconURL
 * - Video with Embed working
 * - Can only choose between image and thumbnail
 * - Description limit 350 characters
 */
declare class WebEmbed {
    imageType: string;
    title: string | null;
    description: string | null;
    url: string | null;
    color: number | null;
    image: WebEmbedImage | null;
    thumbnail: WebEmbedImage | null;
    video: WebEmbedVideo | null;
    author: WebEmbedAuthor | null;
    provider: WebEmbedProvider | null;
    redirect: string | undefined;
    /**
     * @param {WebEmbed} [data={}] Raw data
     */
    constructor(data?: any);
    /**
     * @private
     * @param {Object} data The data for the embed
     */
    _setup(data: any): void;
    /**
     * The options to provide for setting an author for a {@link WebEmbed}.
     * @typedef {Object} EmbedAuthorData
     * @property {string} name The name of this author.
     */
    /**
     * Sets the author of this embed.
     * @param {string|EmbedAuthorData|null} options The options to provide for the author.
     * Provide `null` to remove the author data.
     * @returns {WebEmbed}
     */
    setAuthor(options: any): this;
    /**
     * The options to provide for setting an provider for a {@link WebEmbed}.
     * @typedef {Object} EmbedProviderData
     * @property {string} name The name of this provider.
     */
    /**
     * Sets the provider of this embed.
     * @param {string|EmbedProviderData|null} options The options to provide for the provider.
     * Provide `null` to remove the provider data.
     * @returns {WebEmbed}
     */
    setProvider(options: any): this;
    /**
     * Sets the color of this embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {WebEmbed}
     */
    setColor(color: any): this;
    /**
     * Sets the description of this embed.
     * @param {string} description The description (Limit 350 characters)
     * @returns {WebEmbed}
     */
    setDescription(description: string): this;
    /**
     * Sets the image of this embed.
     * @param {string} url The URL of the image
     * @returns {WebEmbed}
     */
    setImage(url: string): this;
    /**
     * Sets the thumbnail of this embed.
     * @param {string} url The URL of the image
     * @returns {WebEmbed}
     */
    setThumbnail(url: string): this;
    /**
     * Sets the video of this embed.
     * @param {string} url The URL of the video
     * @returns {WebEmbed}
     */
    setVideo(url: string): this;
    /**
     * Sets the title of this embed.
     * @param {string} title The title
     * @returns {WebEmbed}
     */
    setTitle(title: string): this;
    /**
     * Sets the URL of this embed.
     * @param {string} url The URL
     * @returns {WebEmbed}
     */
    setURL(url: string): this;
    /**
     * Sets the redirect URL of this embed.
     * @param {string} url The URL
     * @returns {WebEmbed}
     */
    setRedirect(url: string): this;
    toString(): string;
}
export default WebEmbed;
export declare const hiddenEmbed = "||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||";
