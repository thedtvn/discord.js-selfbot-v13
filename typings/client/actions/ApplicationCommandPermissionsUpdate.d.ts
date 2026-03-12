import Action from './Action';
/**
 * The data received in the {@link Client#event:applicationCommandPermissionsUpdate} event
 * @typedef {Object} ApplicationCommandPermissionsUpdateData
 * @property {Snowflake} id The id of the command or global entity that was updated
 * @property {Snowflake} guildId The id of the guild in which permissions were updated
 * @property {Snowflake} applicationId The id of the application that owns the command or entity being updated
 * @property {ApplicationCommandPermissions[]} permissions The updated permissions
 */
declare class ApplicationCommandPermissionsUpdateAction extends Action {
    handle(data: any): any;
}
export default ApplicationCommandPermissionsUpdateAction;
