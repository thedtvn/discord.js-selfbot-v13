/**
 * Role connection metadata object for an application.
 */
declare class ApplicationRoleConnectionMetadata {
    name: string;
    nameLocalizations: Record<string, string> | null;
    description: string;
    descriptionLocalizations: Record<string, string> | null;
    key: string;
    type: any;
    constructor(data: any);
}
export { ApplicationRoleConnectionMetadata };
