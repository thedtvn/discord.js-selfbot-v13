import Base from './Base';
/**
 * @type {WeakSet<Channel>}
 * @private
 * @internal
 */
declare const deletedChannels: WeakSet<WeakKey>;
/**
 * Represents any channel on Discord.
 * @extends {Base}
 * @abstract
 */
declare class Channel extends Base {
    constructor(client: any, data: any, immediatePatch?: boolean);
    _patch(data: any): void;
    /**
     * The timestamp the channel was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time the channel was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
    /**
     * Whether or not the structure has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * Whether this Channel is a partial
     * <info>This is always false outside of DM channels.</info>
     * @type {boolean}
     * @readonly
     */
    get partial(): boolean;
    /**
     * When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.
     * @returns {string}
     * @example
     * // Logs: Hello from <#123456789012345678>!
     * console.log(`Hello from ${channel}!`);
     */
    toString(): string;
    /**
     * Deletes this channel.
     * @returns {Promise<Channel>}
     * @example
     * // Delete the channel
     * channel.delete()
     *   .then(console.log)
     *   .catch(console.error);
     */
    delete(): Promise<this>;
    /**
     * Fetches this channel.
     * @param {boolean} [force=true] Whether to skip the cache check and request the API
     * @returns {Promise<Channel>}
     */
    fetch(force?: boolean): any;
    /**
     * Indicates whether this channel is {@link TextBasedChannels text-based}.
     * @returns {boolean}
     */
    isText(): boolean;
    /**
     * Indicates whether this channel is {@link BaseGuildVoiceChannel voice-based}.
     * @returns {boolean}
     */
    isVoice(): boolean;
    /**
     * Indicates whether this channel is a {@link ThreadChannel}.
     * @returns {boolean}
     */
    isThread(): boolean;
    /**
     * Indicates whether this channel is {@link ThreadOnlyChannel}.
     * @returns {boolean}
     */
    isThreadOnly(): boolean;
    /**
     * Indicates whether this channel is a {@link DirectoryChannel}
     * @returns {boolean}
     */
    isDirectory(): boolean;
    static create(client: any, data: any, guild: any, { allowUnknownGuild }?: {}): any;
    toJSON(...props: any[]): unknown;
}
export { Channel };
export { deletedChannels };
/**
 * @external APIChannel
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object}
 */
