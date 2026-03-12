import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to calculate intents.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly GUILDS: number;
    readonly GUILD_MEMBERS: number;
    readonly GUILD_BANS: number;
    readonly GUILD_EMOJIS_AND_STICKERS: number;
    readonly GUILD_INTEGRATIONS: number;
    readonly GUILD_WEBHOOKS: number;
    readonly GUILD_INVITES: number;
    readonly GUILD_VOICE_STATES: number;
    readonly GUILD_PRESENCES: number;
    readonly GUILD_MESSAGES: number;
    readonly GUILD_MESSAGE_REACTIONS: number;
    readonly GUILD_MESSAGE_TYPING: number;
    readonly DIRECT_MESSAGES: number;
    readonly DIRECT_MESSAGE_REACTIONS: number;
    readonly DIRECT_MESSAGE_TYPING: number;
    readonly MESSAGE_CONTENT: number;
    readonly GUILD_SCHEDULED_EVENTS: number;
    readonly AUTO_MODERATION_CONFIGURATION: number;
    readonly AUTO_MODERATION_EXECUTION: number;
};
export type IntentsString = keyof typeof FLAGS;
export type IntentsResolvable = BitFieldResolvable<IntentsString>;
declare class Intents extends BitField<IntentsString> {
    static FLAGS: {
        readonly GUILDS: number;
        readonly GUILD_MEMBERS: number;
        readonly GUILD_BANS: number;
        readonly GUILD_EMOJIS_AND_STICKERS: number;
        readonly GUILD_INTEGRATIONS: number;
        readonly GUILD_WEBHOOKS: number;
        readonly GUILD_INVITES: number;
        readonly GUILD_VOICE_STATES: number;
        readonly GUILD_PRESENCES: number;
        readonly GUILD_MESSAGES: number;
        readonly GUILD_MESSAGE_REACTIONS: number;
        readonly GUILD_MESSAGE_TYPING: number;
        readonly DIRECT_MESSAGES: number;
        readonly DIRECT_MESSAGE_REACTIONS: number;
        readonly DIRECT_MESSAGE_TYPING: number;
        readonly MESSAGE_CONTENT: number;
        readonly GUILD_SCHEDULED_EVENTS: number;
        readonly AUTO_MODERATION_CONFIGURATION: number;
        readonly AUTO_MODERATION_EXECUTION: number;
    };
    static ALL: number;
}
/**
 * @name Intents
 * @kind constructor
 * @memberof Intents
 * @param {IntentsResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Data that can be resolved to give a permission number. This can be:
 * * A string (see {@link Intents.FLAGS})
 * * An intents flag
 * * An instance of Intents
 * * An array of IntentsResolvable
 * @typedef {string|number|Intents|IntentsResolvable[]} IntentsResolvable
 */
/**
 * Numeric WebSocket intents. All available properties:
 * * `GUILDS`
 * * `GUILD_MEMBERS`
 * * `GUILD_BANS`
 * * `GUILD_EMOJIS_AND_STICKERS`
 * * `GUILD_INTEGRATIONS`
 * * `GUILD_WEBHOOKS`
 * * `GUILD_INVITES`
 * * `GUILD_VOICE_STATES`
 * * `GUILD_PRESENCES`
 * * `GUILD_MESSAGES`
 * * `GUILD_MESSAGE_REACTIONS`
 * * `GUILD_MESSAGE_TYPING`
 * * `DIRECT_MESSAGES`
 * * `DIRECT_MESSAGE_REACTIONS`
 * * `DIRECT_MESSAGE_TYPING`
 * * `MESSAGE_CONTENT`
 * * `GUILD_SCHEDULED_EVENTS`
 * * `AUTO_MODERATION_CONFIGURATION`
 * * `AUTO_MODERATION_EXECUTION`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/gateway#list-of-intents}
 */
export default Intents;
