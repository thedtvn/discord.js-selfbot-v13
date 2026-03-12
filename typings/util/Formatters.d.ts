import { blockQuote, bold, channelMention, codeBlock, formatEmoji, hideLinkEmbed, hyperlink, inlineCode, italic, quote, roleMention, spoiler, strikethrough, time, TimestampStyles, underscore, userMention } from '@discordjs/builders';
/**
 * Contains various Discord-specific functions for formatting messages.
 */
declare class Formatters extends null {
    static blockQuote: typeof blockQuote;
    static bold: typeof bold;
    static channelMention: typeof channelMention;
    static chatInputApplicationCommandMention: (commandName: string, subcommandGroupOrSubOrId: string, subcommandNameOrId?: string, commandId?: string) => string;
    static codeBlock: typeof codeBlock;
    static formatEmoji: typeof formatEmoji;
    static hideLinkEmbed: typeof hideLinkEmbed;
    static hyperlink: typeof hyperlink;
    static inlineCode: typeof inlineCode;
    static italic: typeof italic;
    static quote: typeof quote;
    static roleMention: typeof roleMention;
    static spoiler: typeof spoiler;
    static strikethrough: typeof strikethrough;
    static time: typeof time;
    static TimestampStyles: typeof TimestampStyles;
    static underscore: typeof underscore;
    static userMention: typeof userMention;
}
export default Formatters;
