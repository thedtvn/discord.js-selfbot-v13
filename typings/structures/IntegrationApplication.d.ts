import Application from './interfaces/Application';
/**
 * Represents an Integration's OAuth2 Application.
 * @extends {Application}
 */
declare class IntegrationApplication extends Application {
    _patch(data: any): void;
}
export default IntegrationApplication;
