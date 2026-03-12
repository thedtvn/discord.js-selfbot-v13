/**
 * Send Embedlink to Discord
 * <info>Only works with Discord Web and Discord Client (no custom theme installed)</info>
 * - No Timestamp, Footer, Fields, Author iconURL
 * - Video with Embed working
 * - Can only choose between image and thumbnail
 * - Description limit 350 characters
 */
declare class WebEmbed {
    /**
     * @param {WebEmbed} [data={}] Raw data
     */
    constructor(data?: {});
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
    setDescription(description: any): this;
    /**
     * Sets the image of this embed.
     * @param {string} url The URL of the image
     * @returns {WebEmbed}
     */
    setImage(url: any): this;
    /**
     * Sets the thumbnail of this embed.
     * @param {string} url The URL of the image
     * @returns {WebEmbed}
     */
    setThumbnail(url: any): this;
    /**
     * Sets the video of this embed.
     * @param {string} url The URL of the video
     * @returns {WebEmbed}
     */
    setVideo(url: any): this;
    /**
     * Sets the title of this embed.
     * @param {string} title The title
     * @returns {WebEmbed}
     */
    setTitle(title: any): this;
    /**
     * Sets the URL of this embed.
     * @param {string} url The URL
     * @returns {WebEmbed}
     */
    setURL(url: any): this;
    /**
     * Sets the redirect URL of this embed.
     * @param {string} url The URL
     * @returns {WebEmbed}
     */
    setRedirect(url: any): this;
    toString(): string;
}
export default WebEmbed;
export declare const hiddenEmbed = "||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||";
