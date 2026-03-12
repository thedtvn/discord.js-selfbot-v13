import { Collection } from '@discordjs/collection';
/**
 * Contains various general-purpose utility methods.
 */
declare class Util extends null {
    /**
     * Flatten an object. Any properties that are collections will get converted to an array of keys.
     * @param {Object} obj The object to flatten.
     * @param {...Object<string, boolean|string>} [props] Specific properties to include/exclude.
     * @returns {Object}
     */
    static flatten(obj: any, ...props: Record<string, boolean | string>[]): any;
    /**
     * Options for splitting a message.
     * @typedef {Object} SplitOptions
     * @property {number} [maxLength=2000] Maximum character length per message piece
     * @property {string|string[]|RegExp|RegExp[]} [char='\n'] Character(s) or Regex(es) to split the message with,
     * an array can be used to split multiple times
     * @property {string} [prepend=''] Text to prepend to every piece except the first
     * @property {string} [append=''] Text to append to every piece except the last
     */
    /**
     * Splits a string into multiple chunks at a designated character that do not exceed a specific length.
     * @param {string} text Content to split
     * @param {SplitOptions} [options] Options controlling the behavior of the split
     * @deprecated This will be removed in the next major version.
     * @returns {string[]}
     */
    static splitMessage(text: string, { maxLength, char, prepend, append }?: {
        maxLength?: number;
        char?: string | string[] | RegExp | RegExp[];
        prepend?: string;
        append?: string;
    }): any[];
    /**
     * Options used to escape markdown.
     * @typedef {Object} EscapeMarkdownOptions
     * @property {boolean} [codeBlock=true] Whether to escape code blocks
     * @property {boolean} [inlineCode=true] Whether to escape inline code
     * @property {boolean} [bold=true] Whether to escape bolds
     * @property {boolean} [italic=true] Whether to escape italics
     * @property {boolean} [underline=true] Whether to escape underlines
     * @property {boolean} [strikethrough=true] Whether to escape strikethroughs
     * @property {boolean} [spoiler=true] Whether to escape spoilers
     * @property {boolean} [codeBlockContent=true] Whether to escape text inside code blocks
     * @property {boolean} [inlineCodeContent=true] Whether to escape text inside inline code
     * @property {boolean} [escape=true] Whether to escape escape characters
     * @property {boolean} [heading=false] Whether to escape headings
     * @property {boolean} [bulletedList=false] Whether to escape bulleted lists
     * @property {boolean} [numberedList=false] Whether to escape numbered lists
     * @property {boolean} [maskedLink=false] Whether to escape masked links
     */
    /**
     * Escapes any Discord-flavour markdown in a string.
     * @param {string} text Content to escape
     * @param {EscapeMarkdownOptions} [options={}] Options for escaping the markdown
     * @returns {string}
     */
    static escapeMarkdown(text: string, { codeBlock, inlineCode, bold, italic, underline, strikethrough, spoiler, codeBlockContent, inlineCodeContent, escape, heading, bulletedList, numberedList, maskedLink, }?: {
        codeBlock?: boolean;
        inlineCode?: boolean;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        spoiler?: boolean;
        codeBlockContent?: boolean;
        inlineCodeContent?: boolean;
        escape?: boolean;
        heading?: boolean;
        bulletedList?: boolean;
        numberedList?: boolean;
        maskedLink?: boolean;
    }): string;
    /**
     * Escapes code block markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeCodeBlock(text: string): string;
    /**
     * Escapes inline code markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeInlineCode(text: string): string;
    /**
     * Escapes italic markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeItalic(text: string): string;
    /**
     * Escapes bold markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeBold(text: string): string;
    /**
     * Escapes underline markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeUnderline(text: string): string;
    /**
     * Escapes strikethrough markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeStrikethrough(text: string): string;
    /**
     * Escapes spoiler markdown in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeSpoiler(text: string): string;
    /**
     * Escapes escape characters in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeEscape(text: string): string;
    /**
     * Escapes heading characters in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeHeading(text: string): string;
    /**
     * Escapes bulleted list characters in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeBulletedList(text: string): string;
    /**
     * Escapes numbered list characters in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeNumberedList(text: string): string;
    /**
     * Escapes masked link characters in a string.
     * @param {string} text Content to escape
     * @returns {string}
     */
    static escapeMaskedLink(text: string): string;
    /**
     * @typedef {Object} FetchRecommendedShardsOptions
     * @property {number} [guildsPerShard=1000] Number of guilds assigned per shard
     * @property {number} [multipleOf=1] The multiple the shard count should round up to. (16 for large bot sharding)
     */
    static fetchRecommendedShards(): void;
    /**
     * Parses emoji info out of a string. The string must be one of:
     * * A UTF-8 emoji (no id)
     * * A URL-encoded UTF-8 emoji (no id)
     * * A Discord custom emoji (`<:name:id>` or `<a:name:id>`)
     * @param {string} text Emoji string to parse
     * @returns {APIEmoji} Object with `animated`, `name`, and `id` properties
     * @private
     */
    static parseEmoji(text: string): {
        animated: boolean;
        name: string;
        id: string;
    };
    /**
     * Resolves a partial emoji object from an {@link EmojiIdentifierResolvable}, without checking a Client.
     * @param {EmojiIdentifierResolvable} emoji Emoji identifier to resolve
     * @returns {?RawEmoji}
     * @private
     */
    static resolvePartialEmoji(emoji: {
        id?: string;
        name?: string;
        animated?: boolean;
    } | string | null): {
        animated: boolean;
        name: string;
        id: string;
    } | {
        id: string;
    };
    /**
     * Shallow-copies an object with its class/prototype intact.
     * @param {Object} obj Object to clone
     * @returns {Object}
     * @private
     */
    static cloneObject<T extends object>(obj: T): T;
    /**
     * Sets default properties on an object that aren't already specified.
     * @param {Object} def Default properties
     * @param {Object} given Object to assign defaults to
     * @returns {Object}
     * @private
     */
    static mergeDefault(def: any, given: any): any;
    /**
     * Options used to make an error object.
     * @typedef {Object} MakeErrorOptions
     * @property {string} name Error type
     * @property {string} message Message for the error
     * @property {string} stack Stack for the error
     */
    /**
     * Makes an Error from a plain info object.
     * @param {MakeErrorOptions} obj Error info
     * @returns {Error}
     * @private
     */
    static makeError(obj: {
        name: string;
        message: string;
        stack?: string;
    }): Error;
    /**
     * Makes a plain error info object from an Error.
     * @param {Error} err Error to get info from
     * @returns {MakeErrorOptions}
     * @private
     */
    static makePlainError(err: Error): {
        name: string;
        message: string;
        stack: string;
    };
    /**
     * Moves an element in an array *in place*.
     * @param {Array<*>} array Array to modify
     * @param {*} element Element to move
     * @param {number} newIndex Index or offset to move the element to
     * @param {boolean} [offset=false] Move the element by an offset amount rather than to a set index
     * @returns {number}
     * @private
     */
    static moveElementInArray<T>(array: T[], element: T, newIndex: number, offset?: boolean): number;
    /**
     * Verifies the provided data is a string, otherwise throws provided error.
     * @param {string} data The string resolvable to resolve
     * @param {Function} [error] The Error constructor to instantiate. Defaults to Error
     * @param {string} [errorMessage] The error message to throw with. Defaults to "Expected string, got <data> instead."
     * @param {boolean} [allowEmpty=true] Whether an empty string should be allowed
     * @returns {string}
     */
    static verifyString(data: string, error?: any, errorMessage?: string, allowEmpty?: boolean): string;
    /**
     * Can be a number, hex string, a {@link Color}, or an RGB array like:
     * ```js
     * [255, 0, 255] // purple
     * ```
     * @typedef {string|Color|number|number[]} ColorResolvable
     */
    /**
     * Resolves a ColorResolvable into a color number.
     * @param {ColorResolvable} color Color to resolve
     * @returns {number} A color
     */
    static resolveColor(color: string | number | [number, number, number]): number;
    /**
     * Sorts by Discord's position and id.
     * @param {Collection} collection Collection of objects to sort
     * @returns {Collection}
     */
    static discordSort(collection: Collection<string, any>): Collection<string, any>;
    /**
     * Sets the position of a Channel or Role.
     * @param {Channel|Role} item Object to set the position of
     * @param {number} position New position for the object
     * @param {boolean} relative Whether `position` is relative to its current position
     * @param {Collection<string, Channel|Role>} sorted A collection of the objects sorted properly
     * @param {APIRouter} route Route to call PATCH on
     * @param {string} [reason] Reason for the change
     * @returns {Promise<Channel[]|Role[]>} Updated item list, with `id` and `position` properties
     * @private
     */
    static setPosition(item: {
        id: string;
    }, position: number, relative: boolean, sorted: Collection<string, {
        id: string;
    }>, route: {
        patch: (payload: {
            data: {
                id: string;
                position: number;
            }[];
            reason?: string;
        }) => Promise<unknown>;
    }, reason?: string): Promise<any[]>;
    /**
     * Alternative to Node's `path.basename`, removing query string after the extension if it exists.
     * @param {string} path Path to get the basename of
     * @param {string} [ext] File extension to remove
     * @returns {string} Basename of the path
     * @private
     */
    static basename(path: string, ext?: string): string;
    /**
     * Breaks user, role and everyone/here mentions by adding a zero width space after every @ character
     * @param {string} str The string to sanitize
     * @returns {string}
     * @deprecated Use {@link BaseMessageOptions#allowedMentions} instead.
     */
    static removeMentions(str: string): string;
    static _removeMentions(str: string): string;
    /**
     * The content to have all mentions replaced by the equivalent text.
     * <warn>When {@link Util.removeMentions} is removed, this method will no longer sanitize mentions.
     * Use {@link BaseMessageOptions#allowedMentions} instead to prevent mentions when sending a message.</warn>
     * @param {string} str The string to be converted
     * @param {TextBasedChannels} channel The channel the string was sent in
     * @returns {string}
     */
    static cleanContent(str: string, channel: any): string;
    /**
     * The content to put in a code block with all code block fences replaced by the equivalent backticks.
     * @param {string} text The string to be converted
     * @returns {string}
     */
    static cleanCodeBlockContent(text: string): string;
    /**
     * Creates a sweep filter that sweeps archived threads
     * @param {number} [lifetime=14400] How long a thread has to be archived to be valid for sweeping
     * @deprecated When not using with `makeCache` use `Sweepers.archivedThreadSweepFilter` instead
     * @returns {SweepFilter}
     */
    static archivedThreadSweepFilter(lifetime?: number): (() => ((value: any, key: string) => boolean) | null) & {
        isDefault?: boolean;
    };
    /**
     * Resolves the maximum time a guild's thread channels should automatically archive in case of no recent activity.
     * @param {Guild} guild The guild to resolve this limit from.
     * @deprecated This will be removed in the next major version.
     * @returns {number}
     */
    static resolveAutoArchiveMaxLimit(): number;
    /**
     * Transforms an API guild forum tag to camel-cased guild forum tag.
     * @param {APIGuildForumTag} tag The tag to transform
     * @returns {GuildForumTag}
     * @ignore
     */
    static transformAPIGuildForumTag(tag: {
        id: string;
        name: string;
        moderated: boolean;
        emoji_id: string | null;
        emoji_name: string | null;
    }): {
        id: string;
        name: string;
        moderated: boolean;
        emoji: {
            id: string;
            name: string;
        };
    };
    /**
     * Transforms a camel-cased guild forum tag to an API guild forum tag.
     * @param {GuildForumTag} tag The tag to transform
     * @returns {APIGuildForumTag}
     * @ignore
     */
    static transformGuildForumTag(tag: {
        id: string;
        name: string;
        moderated: boolean;
        emoji?: {
            id?: string | null;
            name?: string | null;
        } | null;
    }): {
        id: string;
        name: string;
        moderated: boolean;
        emoji_id: string;
        emoji_name: string;
    };
    /**
     * Transforms an API guild forum default reaction object to a
     * camel-cased guild forum default reaction object.
     * @param {APIGuildForumDefaultReactionEmoji} defaultReaction The default reaction to transform
     * @returns {DefaultReactionEmoji}
     * @ignore
     */
    static transformAPIGuildDefaultReaction(defaultReaction: {
        emoji_id: string | null;
        emoji_name: string | null;
    }): {
        id: string;
        name: string;
    };
    /**
     * Transforms a camel-cased guild forum default reaction object to an
     * API guild forum default reaction object.
     * @param {DefaultReactionEmoji} defaultReaction The default reaction to transform
     * @returns {APIGuildForumDefaultReactionEmoji}
     * @ignore
     */
    static transformGuildDefaultReaction(defaultReaction: {
        id: string | null;
        name: string | null;
    }): {
        emoji_id: string;
        emoji_name: string;
    };
    /**
     * Transforms a guild scheduled event recurrence rule object to a snake-cased variant.
     * @param {GuildScheduledEventRecurrenceRuleOptions} recurrenceRule The recurrence rule to transform
     * @returns {APIGuildScheduledEventRecurrenceRule}
     * @ignore
     */
    static transformGuildScheduledEventRecurrenceRule(recurrenceRule: {
        startAt: string | number | Date;
        frequency: number;
        interval: number;
        byWeekday: number[] | null;
        byNWeekday: {
            n: number;
            day: number;
        }[] | null;
        byMonth: number[] | null;
        byMonthDay: number[] | null;
    }): {
        start: string;
        frequency: number;
        interval: number;
        by_weekday: number[];
        by_n_weekday: {
            n: number;
            day: number;
        }[];
        by_month: number[];
        by_month_day: number[];
    };
    /**
     * Transforms API incidents data to a camel-cased variant.
     * @param {APIIncidentsData} data The incidents data to transform
     * @returns {IncidentActions}
     * @ignore
     */
    static transformAPIIncidentsData(data: {
        invites_disabled_until: string | null;
        dms_disabled_until: string | null;
        dm_spam_detected_at: string | null;
        raid_detected_at: string | null;
    }): {
        invitesDisabledUntil: Date;
        dmsDisabledUntil: Date;
        dmSpamDetectedAt: Date;
        raidDetectedAt: Date;
    };
    /**
     * Gets an array of the channel types that can be moved in the channel group. For example, a GuildText channel would
     * return an array containing the types that can be ordered within the text channels (always at the top), and a voice
     * channel would return an array containing the types that can be ordered within the voice channels (always at the
     * bottom).
     * @param {ChannelType} type The type of the channel
     * @returns {ChannelType[]}
     * @ignore
     */
    static getSortableGroupTypes(type: string): string[];
    /**
     * Calculates the default avatar index for a given user id.
     * @param {Snowflake} userId - The user id to calculate the default avatar index for
     * @returns {number}
     */
    static calculateUserDefaultAvatarIndex(userId: string): number;
    static getUploadURL(client: any, channelId: string, files: {
        name: string;
    }[]): Promise<any[]>;
    static uploadFile(data: Buffer | NodeJS.ReadableStream | string, url: string): Promise<unknown>;
    /**
     * Lazily evaluates a callback function (yea it's v14 :yay:)
     * @param {Function} cb The callback to lazily evaluate
     * @returns {Function}
     * @example
     * const User = lazy(() => require('./User'));
     * const user = new (User())(client, data);
     */
    static lazy<T>(cb: () => T): () => T;
    /**
     * Hacking check object instanceof Proxy-agent
     * @param {Object} object any
     * @returns {boolean}
     */
    static verifyProxyAgent(object: unknown): boolean;
    static checkUndiciProxyAgent(data: string | URL | {
        uri: string;
    } | unknown): false | object;
    static createPromiseInteraction(client: any, nonce: string, timeoutMs?: number, isHandlerDeferUpdate?: boolean, parent?: unknown): Promise<unknown>;
    static clearNullOrUndefinedObject(object: Record<string, unknown>): {};
    static getAllPayloadType(): ({
        name: string;
        type: string;
        priority: number;
        payload_type: number;
        rtx_payload_type?: undefined;
        encode?: undefined;
        decode?: undefined;
    } | {
        name: string;
        type: string;
        priority: number;
        payload_type: number;
        rtx_payload_type: number;
        encode: boolean;
        decode: boolean;
    })[];
    /**
     * Get the payload type of the codec
     * @param {'opus' | 'H264' | 'H265' | 'VP8' | 'VP9' | 'AV1'} codecName - Codec name
     * @returns {number}
     */
    static getPayloadType(codecName: string): number;
    static getSDPCodecName(portUdpH264: number, portUdpH265: number | null, portUdpOpus: number): string;
}
export default Util;
