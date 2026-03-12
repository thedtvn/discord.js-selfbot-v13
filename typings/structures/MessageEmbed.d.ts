/**
 * Represents an embed in a message (image/video preview, rich embed, etc.)
 */
declare class MessageEmbed {
    /**
     * A `Partial` object is a representation of any existing object.
     * This object contains between 0 and all of the original objects parameters.
     * This is true regardless of whether the parameters are optional in the base object.
     * @typedef {Object} Partial
     */
    /**
     * Represents the possible options for a MessageEmbed
     * @typedef {Object} MessageEmbedOptions
     * @property {string} [title] The title of this embed
     * @property {string} [description] The description of this embed
     * @property {string} [url] The URL of this embed
     * @property {Date|number} [timestamp] The timestamp of this embed
     * @property {ColorResolvable} [color] The color of this embed
     * @property {EmbedFieldData[]} [fields] The fields of this embed
     * @property {Partial<MessageEmbedAuthor>} [author] The author of this embed
     * @property {Partial<MessageEmbedThumbnail>} [thumbnail] The thumbnail of this embed
     * @property {Partial<MessageEmbedImage>} [image] The image of this embed
     * @property {Partial<MessageEmbedVideo>} [video] The video of this embed
     * @property {Partial<MessageEmbedFooter>} [footer] The footer of this embed
     */
    /**
     * @param {MessageEmbed|MessageEmbedOptions|APIEmbed} [data={}] MessageEmbed to clone or raw embed data
     */
    constructor(data?: {}, skipValidation?: boolean);
    setup(data: any, skipValidation: any): void;
    /**
     * The date displayed on this embed
     * @type {?Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * The hexadecimal version of the embed color, with a leading hash
     * @type {?string}
     * @readonly
     */
    get hexColor(): string;
    /**
     * The accumulated length for the embed title, description, fields, footer text, and author name
     * @type {number}
     * @readonly
     */
    get length(): any;
    /**
     * Checks if this embed is equal to another one by comparing every single one of their properties.
     * @param {MessageEmbed|APIEmbed} embed The embed to compare with
     * @returns {boolean}
     */
    equals(embed: any): boolean;
    /**
     * Compares two given embed fields to see if they are equal
     * @param {EmbedFieldData} field The first field to compare
     * @param {EmbedFieldData} other The second field to compare
     * @returns {boolean}
     * @private
     */
    _fieldEquals(field: any, other: any): boolean;
    /**
     * Adds a field to the embed (max 25).
     * @param {string} name The name of this field
     * @param {string} value The value of this field
     * @param {boolean} [inline=false] If this field will be displayed inline
     * @returns {MessageEmbed}
     * @deprecated This method is a wrapper for {@link MessageEmbed#addFields}. Use that instead.
     */
    addField(name: any, value: any, inline: any): this;
    /**
     * Adds fields to the embed (max 25).
     * @param {...EmbedFieldData|EmbedFieldData[]} fields The fields to add
     * @returns {MessageEmbed}
     */
    addFields(...fields: any[]): this;
    /**
     * Removes, replaces, and inserts fields in the embed (max 25).
     * @param {number} index The index to start at
     * @param {number} deleteCount The number of fields to remove
     * @param {...EmbedFieldData|EmbedFieldData[]} [fields] The replacing field objects
     * @returns {MessageEmbed}
     */
    spliceFields(index: any, deleteCount: any, ...fields: any[]): this;
    /**
     * Sets the embed's fields (max 25).
     * @param {...EmbedFieldData|EmbedFieldData[]} fields The fields to set
     * @returns {MessageEmbed}
     */
    setFields(...fields: any[]): this;
    /**
     * The options to provide for setting an author for a {@link MessageEmbed}.
     * @typedef {Object} EmbedAuthorData
     * @property {string} name The name of this author.
     * @property {string} [url] The URL of this author.
     * @property {string} [iconURL] The icon URL of this author.
     */
    /**
     * Sets the author of this embed.
     * @param {string|EmbedAuthorData|null} options The options to provide for the author.
     * Provide `null` to remove the author data.
     * @param {string} [deprecatedIconURL] The icon URL of this author.
     * <warn>This parameter is **deprecated**. Use the `options` parameter instead.</warn>
     * @param {string} [deprecatedURL] The URL of this author.
     * <warn>This parameter is **deprecated**. Use the `options` parameter instead.</warn>
     * @returns {MessageEmbed}
     */
    setAuthor(options: any, deprecatedIconURL: any, deprecatedURL: any): this;
    /**
     * Sets the color of this embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {MessageEmbed}
     */
    setColor(color: any): this;
    /**
     * Sets the description of this embed.
     * @param {string} description The description
     * @returns {MessageEmbed}
     */
    setDescription(description: any): this;
    /**
     * The options to provide for setting a footer for a {@link MessageEmbed}.
     * @typedef {Object} EmbedFooterData
     * @property {string} text The text of the footer.
     * @property {string} [iconURL] The icon URL of the footer.
     */
    /**
     * Sets the footer of this embed.
     * @param {string|EmbedFooterData|null} options The options to provide for the footer.
     * Provide `null` to remove the footer data.
     * @param {string} [deprecatedIconURL] The icon URL of this footer.
     * <warn>This parameter is **deprecated**. Use the `options` parameter instead.</warn>
     * @returns {MessageEmbed}
     */
    setFooter(options: any, deprecatedIconURL: any): this;
    /**
     * Sets the image of this embed.
     * @param {string} url The URL of the image
     * @returns {MessageEmbed}
     */
    setImage(url: any): this;
    /**
     * Sets the thumbnail of this embed.
     * @param {string} url The URL of the thumbnail
     * @returns {MessageEmbed}
     */
    setThumbnail(url: any): this;
    /**
     * Sets the timestamp of this embed.
     * @param {Date|number|null} [timestamp=Date.now()] The timestamp or date.
     * If `null` then the timestamp will be unset (i.e. when editing an existing {@link MessageEmbed})
     * @returns {MessageEmbed}
     */
    setTimestamp(timestamp?: number): this;
    /**
     * Sets the title of this embed.
     * @param {string} title The title
     * @returns {MessageEmbed}
     */
    setTitle(title: any): this;
    /**
     * Sets the URL of this embed.
     * @param {string} url The URL
     * @returns {MessageEmbed}
     */
    setURL(url: any): this;
    /**
     * Transforms the embed to a plain object.
     * @returns {APIEmbed} The raw data of this embed
     */
    toJSON(): {
        title: any;
        type: any;
        description: any;
        url: any;
        timestamp: Date;
        color: any;
        fields: any;
        thumbnail: any;
        image: any;
        author: {
            name: any;
            url: any;
            icon_url: any;
        };
        video: {
            url: any;
            proxyURL: any;
            height: any;
            width: any;
        };
        provider: {
            name: any;
            url: any;
        };
        footer: {
            text: any;
            icon_url: any;
        };
    };
    /**
     * Normalizes field input and verifies strings.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {EmbedField}
     */
    static normalizeField(name: any, value: any, inline?: boolean): {
        name: string;
        value: string;
        inline: boolean;
    };
    /**
     * @typedef {Object} EmbedFieldData
     * @property {string} name The name of this field
     * @property {string} value The value of this field
     * @property {boolean} [inline] If this field will be displayed inline
     */
    /**
     * Normalizes field input and resolves strings.
     * @param {...EmbedFieldData|EmbedFieldData[]} fields Fields to normalize
     * @returns {EmbedField[]}
     */
    static normalizeFields(...fields: any[]): {
        name: string;
        value: string;
        inline: boolean;
    }[];
}
/**
 * @external APIEmbed
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object}
 */
export default MessageEmbed;
