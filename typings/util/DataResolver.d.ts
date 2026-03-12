import { Buffer } from 'node:buffer';
import stream from 'node:stream';
/**
 * The DataResolver identifies different objects and tries to resolve a specific piece of information from them.
 * @private
 */
declare class DataResolver extends null {
    /**
     * Data that can be resolved to give an invite code. This can be:
     * * An invite code
     * * An invite URL
     * @typedef {string} InviteResolvable
     */
    /**
     * Data that can be resolved to give a template code. This can be:
     * * A template code
     * * A template URL
     * @typedef {string} GuildTemplateResolvable
     */
    /**
     * Resolves the string to a code based on the passed regex.
     * @param {string} data The string to resolve
     * @param {RegExp} regex The RegExp used to extract the code
     * @returns {string}
     */
    static resolveCode(data: string, regex: RegExp): string;
    /**
     * Resolves InviteResolvable to an invite code.
     * @param {InviteResolvable} data The invite resolvable to resolve
     * @returns {string}
     */
    static resolveInviteCode(data: string): string;
    /**
     * Resolves GuildTemplateResolvable to a template code.
     * @param {GuildTemplateResolvable} data The template resolvable to resolve
     * @returns {string}
     */
    static resolveGuildTemplateCode(data: string): string;
    /**
     * Resolves a Base64Resolvable, a string, or a BufferResolvable to a Base 64 image.
     * @param {BufferResolvable|Base64Resolvable} image The image to be resolved
     * @returns {Promise<?string>}
     */
    static resolveImage(image: string | Buffer | stream.Readable | null): Promise<string | null>;
    /**
     * Data that resolves to give a Base64 string, typically for image uploading. This can be:
     * * A Buffer
     * * A base64 string
     * @typedef {Buffer|string} Base64Resolvable
     */
    /**
     * Resolves a Base64Resolvable to a Base 64 image.
     * @param {Base64Resolvable} data The base 64 resolvable you want to resolve
     * @returns {?string}
     */
    static resolveBase64(data: Buffer | string): string;
    /**
     * Data that can be resolved to give a Buffer. This can be:
     * * A Buffer
     * * The path to a local file
     * * A URL <warn>When provided a URL, discord.js will fetch the URL internally in order to create a Buffer.
     * This can pose a security risk when the URL has not been sanitized</warn>
     * @typedef {string|Buffer} BufferResolvable
     */
    /**
     * @external Stream
     * @see {@link https://nodejs.org/api/stream.html}
     */
    /**
     * Resolves a BufferResolvable to a Buffer or a Stream.
     * @param {BufferResolvable|Stream} resource The buffer or stream resolvable to resolve
     * @returns {Promise<Buffer|Stream>}
     */
    static resolveFile(resource: string | Buffer | stream.Readable): Promise<Buffer | stream.Readable>;
    /**
     * Resolves a BufferResolvable to a Buffer.
     * @param {BufferResolvable|Stream} resource The buffer or stream resolvable to resolve
     * @returns {Promise<Buffer>}
     */
    static resolveFileAsBuffer(resource: string | Buffer | stream.Readable): Promise<Buffer>;
}
export default DataResolver;
