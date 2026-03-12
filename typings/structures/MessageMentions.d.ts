import { Collection } from '@discordjs/collection';
/**
 * Keeps track of mentions in a {@link Message}.
 */
declare class MessageMentions {
    client: any;
    guild: any;
    _content: string;
    everyone: boolean;
    users: Collection<string, any>;
    roles: Collection<string, any>;
    _members: Collection<string, any> | null;
    _channels: Collection<string, any> | null;
    _parsedUsers: Collection<string, any> | null;
    crosspostedChannels: Collection<string, any>;
    repliedUser: any;
    static EVERYONE_PATTERN: RegExp;
    static USERS_PATTERN: RegExp;
    static ROLES_PATTERN: RegExp;
    static CHANNELS_PATTERN: RegExp;
    constructor(message: any, users: any, roles: any, everyone: any, crosspostedChannels: any, repliedUser: any);
    /**
     * Any members that were mentioned (only in {@link Guild}s)
     * <info>Order as received from the API, not as they appear in the message content</info>
     * @type {?Collection<Snowflake, GuildMember>}
     * @readonly
     */
    get members(): Collection<string, any> | null;
    /**
     * Any channels that were mentioned
     * <info>Order as they appear first in the message content</info>
     * @type {Collection<Snowflake, Channel>}
     * @readonly
     */
    get channels(): Collection<string, any>;
    /**
     * Any user mentions that were included in the message content
     * <info>Order as they appear first in the message content</info>
     * @type {Collection<Snowflake, User>}
     * @readonly
     */
    get parsedUsers(): Collection<string, any>;
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
    toJSON(): Record<string, any>;
}
export default MessageMentions;
