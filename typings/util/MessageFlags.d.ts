import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link Message#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly CROSSPOSTED: number;
    readonly IS_CROSSPOST: number;
    readonly SUPPRESS_EMBEDS: number;
    readonly SOURCE_MESSAGE_DELETED: number;
    readonly URGENT: number;
    readonly HAS_THREAD: number;
    readonly EPHEMERAL: number;
    readonly LOADING: number;
    readonly FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: number;
    readonly GUILD_FEED_HIDDEN: number;
    readonly SHOULD_SHOW_LINK_NOT_DISCORD_WARNING: number;
    readonly SUPPRESS_NOTIFICATIONS: number;
    readonly IS_VOICE_MESSAGE: number;
    readonly HAS_SNAPSHOT: number;
    readonly IS_COMPONENTS_V2: number;
};
export type MessageFlagsString = keyof typeof FLAGS;
export type MessageFlagsResolvable = BitFieldResolvable<MessageFlagsString>;
declare class MessageFlags extends BitField<MessageFlagsString> {
    static FLAGS: {
        readonly CROSSPOSTED: number;
        readonly IS_CROSSPOST: number;
        readonly SUPPRESS_EMBEDS: number;
        readonly SOURCE_MESSAGE_DELETED: number;
        readonly URGENT: number;
        readonly HAS_THREAD: number;
        readonly EPHEMERAL: number;
        readonly LOADING: number;
        readonly FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: number;
        readonly GUILD_FEED_HIDDEN: number;
        readonly SHOULD_SHOW_LINK_NOT_DISCORD_WARNING: number;
        readonly SUPPRESS_NOTIFICATIONS: number;
        readonly IS_VOICE_MESSAGE: number;
        readonly HAS_SNAPSHOT: number;
        readonly IS_COMPONENTS_V2: number;
    };
}
/**
 * @name MessageFlags
 * @kind constructor
 * @memberof MessageFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Bitfield of the packed bits
 * @type {number}
 * @name MessageFlags#bitfield
 */
/**
 * Numeric message flags. All available properties:
 * * `CROSSPOSTED`
 * * `IS_CROSSPOST`
 * * `SUPPRESS_EMBEDS`
 * * `SOURCE_MESSAGE_DELETED`
 * * `URGENT`
 * * `HAS_THREAD`
 * * `EPHEMERAL`
 * * `LOADING`
 * * `FAILED_TO_MENTION_SOME_ROLES_IN_THREAD`
 * * `GUILD_FEED_HIDDEN`
 * * `SHOULD_SHOW_LINK_NOT_DISCORD_WARNING`
 * * `SUPPRESS_NOTIFICATIONS`
 * * `IS_VOICE_MESSAGE`
 * * `HAS_SNAPSHOT`
 * * `IS_COMPONENTS_V2`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-flags}
 * @see {@link https://docs.discord.food/resources/message#message-flags}
 */
export default MessageFlags;
