/**
 * Audit logs entries are held in this class.
 */
declare class GuildAuditLogs {
    constructor(guild: any, data: any);
    /**
     * Handles possible promises for entry targets.
     * @returns {Promise<GuildAuditLogs>}
     */
    static build(...args: any[]): Promise<GuildAuditLogs>;
    /**
     * The target of an entry. It can be one of:
     * * A guild
     * * A channel
     * * A user
     * * A role
     * * An invite
     * * A webhook
     * * An emoji
     * * A message
     * * An integration
     * * A stage instance
     * * A sticker
     * * A guild scheduled event
     * * A thread
     * * An application command
     * * An auto moderation rule
     * * An object with an id key if target was deleted
     * * An object where the keys represent either the new value or the old value
     * @typedef {?(Object|Guild|Channel|User|Role|Invite|Webhook|GuildEmoji|Message|Integration|StageInstance|Sticker|
     * GuildScheduledEvent|ApplicationCommand|AutoModerationRule)} AuditLogEntryTarget
     */
    /**
     * Finds the target type from the entry action.
     * @param {AuditLogAction} target The action target
     * @returns {AuditLogTargetType}
     */
    static targetType(target: any): string;
    /**
     * The action type of an entry, e.g. `CREATE`. Here are the available types:
     * * CREATE
     * * DELETE
     * * UPDATE
     * * ALL
     * @typedef {string} AuditLogActionType
     */
    /**
     * Finds the action type from the entry action.
     * @param {AuditLogAction} action The action target
     * @returns {AuditLogActionType}
     */
    static actionType(action: any): "UPDATE" | "ALL" | "CREATE" | "DELETE";
    toJSON(): {};
}
export default GuildAuditLogs;
