import AttachmentFlags from '../util/AttachmentFlags';
/**
 * Represents an attachment in a message.
 */
declare class MessageAttachment {
    attachment: any;
    name: string | null;
    description: string | null;
    id: string;
    size: number;
    url: string;
    proxyURL: string;
    height: number | null;
    width: number | null;
    contentType: string | null;
    ephemeral: boolean;
    duration: number | null;
    waveform: string | null;
    flags: Readonly<AttachmentFlags>;
    title: string | null;
    /**
     * @param {BufferResolvable|Stream} attachment The file
     * @param {string} [name=null] The name of the file, if any
     * @param {APIAttachment} [data] Extra data
     */
    constructor(attachment: any, name?: string | null, data?: any);
    /**
     * Sets the description of this attachment.
     * @param {string} description The description of the file
     * @returns {MessageAttachment} This attachment
     */
    setDescription(description: string): this;
    /**
     * Sets the file of this attachment.
     * @param {BufferResolvable|Stream} attachment The file
     * @param {string} [name=null] The name of the file, if any
     * @returns {MessageAttachment} This attachment
     */
    setFile(attachment: any, name?: string | null): this;
    /**
     * Sets the name of this attachment.
     * @param {string} name The name of the file
     * @returns {MessageAttachment} This attachment
     */
    setName(name: string): this;
    /**
     * Sets whether this attachment is a spoiler
     * @param {boolean} [spoiler=true] Whether the attachment should be marked as a spoiler
     * @returns {MessageAttachment} This attachment
     */
    setSpoiler(spoiler?: boolean): this;
    _patch(data: any): any;
    /**
     * Whether or not this attachment has been marked as a spoiler
     * @type {boolean}
     * @readonly
     */
    get spoiler(): boolean;
    toJSON(): Record<string, any>;
}
/**
 * @external APIAttachment
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object}
 */
export default MessageAttachment;
