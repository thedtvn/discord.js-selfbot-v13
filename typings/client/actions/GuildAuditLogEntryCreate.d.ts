declare const Action: any;
declare const GuildAuditLogsEntry: any;
declare const Events: any;
declare class GuildAuditLogEntryCreateAction extends Action {
    handle(data: any): {
        auditLogEntry: any;
    };
}
