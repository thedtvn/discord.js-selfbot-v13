/**
 * Keeps track of mentions in a {@link Message}.
 */
declare class MessageMentions {
    constructor(message: any, users: any, roles: any, everyone: any, crosspostedChannels: any, repliedUser: any);
    /**
     * Any members that were mentioned (only in {@link Guild}s)
     * <info>Order as received from the API, not as they appear in the message content</info>
     * @type {?Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get members(): any;
    /**
     * Any channels that were mentioned
     * <info>Order as they appear first in the message content</info>
     * @type {Collection<Snowflake, Channel>}
     * @readonly
     */
    get channels(): any;
    /**
     * Any user mentions that were included in the message content
     * <info>Order as they appear first in the message content</info>
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get parsedUsers(): any;
    /**
     * Options used to check for a mention.
     * @typedef {Object} MessageMentionsHasOptions
     * @property {boolean} [ignoreDirect=false] Whether to ignore direct mentions to the item
     * @property {boolean} [ignoreRoles=false] Whether to ignore role mentions to a guild member
     * @property {boolean} [ignoreRepliedUser=false] Whether to ignore replied user mention to an user
     * @property {boolean} [ignoreEveryone=false] Whether to ignore `@everyone`/`@here` mentions
     */
    /**
     * Checks if a user, guild member, thread member, role, or channel is mentioned.
     * Takes into account user mentions, role mentions, channel mentions,
     * replied user mention, and `@everyone`/`@here` mentions.
     * @param {UserResolvable|RoleResolvable|ChannelResolvable} data The User/Role/Channel to check for
     * @param {MessageMentionsHasOptions} [options] The options for the check
     * @returns {boolean}
     */
    has(data: any, { ignoreDirect, ignoreRoles, ignoreRepliedUser, ignoreEveryone }?: {
        ignoreDirect?: boolean;
        ignoreRoles?: boolean;
        ignoreRepliedUser?: boolean;
        ignoreEveryone?: boolean;
    }): boolean;
    toJSON(): {};
}
export default MessageMentions;
