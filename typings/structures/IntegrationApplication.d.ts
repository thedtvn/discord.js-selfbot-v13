import Application from './interfaces/Application';
/**
 * Represents an Integration's OAuth2 Application.
 * @extends {Application}
 */
declare class IntegrationApplication extends Application {
    bot: any;
    termsOfServiceURL: any;
    privacyPolicyURL: any;
    rpcOrigins: any;
    summary: any;
    hook: any;
    cover: any;
    verifyKey: any;
    _patch(data: any): any;
}
export default IntegrationApplication;
