import BitField, { type BitFieldResolvable } from './BitField';
/**
 * Data structure that makes it easy to interact with a {@link Application#flags} bitfield.
 * @extends {BitField}
 */
declare const FLAGS: {
    readonly EMBEDDED_RELEASED: number;
    readonly MANAGED_EMOJI: number;
    readonly EMBEDDED_IAP: number;
    readonly GROUP_DM_CREATE: number;
    readonly RPC_PRIVATE_BETA: number;
    readonly APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE: number;
    readonly ALLOW_ASSETS: number;
    readonly ALLOW_ACTIVITY_ACTION_SPECTATE: number;
    readonly ALLOW_ACTIVITY_ACTION_JOIN_REQUEST: number;
    readonly RPC_HAS_CONNECTED: number;
    readonly GATEWAY_PRESENCE: number;
    readonly GATEWAY_PRESENCE_LIMITED: number;
    readonly GATEWAY_GUILD_MEMBERS: number;
    readonly GATEWAY_GUILD_MEMBERS_LIMITED: number;
    readonly VERIFICATION_PENDING_GUILD_LIMIT: number;
    readonly EMBEDDED: number;
    readonly GATEWAY_MESSAGE_CONTENT: number;
    readonly GATEWAY_MESSAGE_CONTENT_LIMITED: number;
    readonly EMBEDDED_FIRST_PARTY: number;
    readonly APPLICATION_COMMAND_BADGE: number;
    readonly ACTIVE: number;
    readonly IFRAME_MODAL: number;
};
export type ApplicationFlagsString = keyof typeof FLAGS;
export type ApplicationFlagsResolvable = BitFieldResolvable<ApplicationFlagsString>;
declare class ApplicationFlags extends BitField<ApplicationFlagsString> {
    static FLAGS: {
        readonly EMBEDDED_RELEASED: number;
        readonly MANAGED_EMOJI: number;
        readonly EMBEDDED_IAP: number;
        readonly GROUP_DM_CREATE: number;
        readonly RPC_PRIVATE_BETA: number;
        readonly APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE: number;
        readonly ALLOW_ASSETS: number;
        readonly ALLOW_ACTIVITY_ACTION_SPECTATE: number;
        readonly ALLOW_ACTIVITY_ACTION_JOIN_REQUEST: number;
        readonly RPC_HAS_CONNECTED: number;
        readonly GATEWAY_PRESENCE: number;
        readonly GATEWAY_PRESENCE_LIMITED: number;
        readonly GATEWAY_GUILD_MEMBERS: number;
        readonly GATEWAY_GUILD_MEMBERS_LIMITED: number;
        readonly VERIFICATION_PENDING_GUILD_LIMIT: number;
        readonly EMBEDDED: number;
        readonly GATEWAY_MESSAGE_CONTENT: number;
        readonly GATEWAY_MESSAGE_CONTENT_LIMITED: number;
        readonly EMBEDDED_FIRST_PARTY: number;
        readonly APPLICATION_COMMAND_BADGE: number;
        readonly ACTIVE: number;
        readonly IFRAME_MODAL: number;
    };
}
/**
 * @name ApplicationFlags
 * @kind constructor
 * @memberof ApplicationFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */
/**
 * Bitfield of the packed bits
 * @type {number}
 * @name ApplicationFlags#bitfield
 */
/**
 * Numeric application flags. All available properties:
 * * `EMBEDDED_RELEASED`
 * * `MANAGED_EMOJI`
 * * `GROUP_DM_CREATE`
 * * `RPC_PRIVATE_BETA`
 * * `APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE`
 * * `ALLOW_ASSETS`
 * * `ALLOW_ACTIVITY_ACTION_SPECTATE`
 * * `ALLOW_ACTIVITY_ACTION_JOIN_REQUEST`
 * * `RPC_HAS_CONNECTED`
 * * `GATEWAY_PRESENCE`
 * * `GATEWAY_PRESENCE_LIMITED`
 * * `GATEWAY_GUILD_MEMBERS`
 * * `GATEWAY_GUILD_MEMBERS_LIMITED`
 * * `VERIFICATION_PENDING_GUILD_LIMIT`
 * * `EMBEDDED`
 * * `GATEWAY_MESSAGE_CONTENT`
 * * `GATEWAY_MESSAGE_CONTENT_LIMITED`
 * * `EMBEDDED_FIRST_PARTY`
 * * `APPLICATION_COMMAND_BADGE`
 * * `ACTIVE`
 * * `IFRAME_MODAL`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-flags}
 * @see {@link https://flags.lewistehminerz.dev/}
 */
export default ApplicationFlags;
