/**
 * Represents an attachment in a message.
 */
declare class MessageAttachment {
    /**
     * @param {BufferResolvable|Stream} attachment The file
     * @param {string} [name=null] The name of the file, if any
     * @param {APIAttachment} [data] Extra data
     */
    constructor(attachment: any, name: any, data: any);
    /**
     * Sets the description of this attachment.
     * @param {string} description The description of the file
     * @returns {MessageAttachment} This attachment
     */
    setDescription(description: any): this;
    /**
     * Sets the file of this attachment.
     * @param {BufferResolvable|Stream} attachment The file
     * @param {string} [name=null] The name of the file, if any
     * @returns {MessageAttachment} This attachment
     */
    setFile(attachment: any, name?: any): this;
    /**
     * Sets the name of this attachment.
     * @param {string} name The name of the file
     * @returns {MessageAttachment} This attachment
     */
    setName(name: any): this;
    /**
     * Sets whether this attachment is a spoiler
     * @param {boolean} [spoiler=true] Whether the attachment should be marked as a spoiler
     * @returns {MessageAttachment} This attachment
     */
    setSpoiler(spoiler?: boolean): this;
    _patch(data: any): void;
    /**
     * Whether or not this attachment has been marked as a spoiler
     * @type {boolean}
     * @readonly
     */
    get spoiler(): boolean;
    toJSON(): {};
}
/**
 * @external APIAttachment
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object}
 */
export default MessageAttachment;
