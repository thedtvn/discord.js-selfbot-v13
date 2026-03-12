import type RESTManager from './RESTManager';
import type { APIRequestOptions } from './APIRequest';
export interface APIRouterRequestOptions extends Partial<APIRequestOptions> {
    versioned?: boolean;
    route?: string;
}
export type APIRouteProxy = {
    (...args: Array<string | number | null | undefined>): APIRouteProxy;
    get<T = any>(options?: APIRouterRequestOptions): Promise<T>;
    post<T = any>(options?: APIRouterRequestOptions): Promise<T>;
    delete<T = any>(options?: APIRouterRequestOptions): Promise<T>;
    patch<T = any>(options?: APIRouterRequestOptions): Promise<T>;
    put<T = any>(options?: APIRouterRequestOptions): Promise<T>;
    auth: APIRouteProxy;
    invites: APIRouteProxy;
    guilds: APIRouteProxy;
    webhooks: APIRouteProxy;
    voice: APIRouteProxy;
    stickers: APIRouteProxy;
    oauth2: APIRouteProxy;
    applications: APIRouteProxy;
    attachments: APIRouteProxy;
    entitlements: APIRouteProxy;
    login: APIRouteProxy;
    mfa: APIRouteProxy;
    totp: APIRouteProxy;
    logout: APIRouteProxy;
    templates: APIRouteProxy;
    regions: APIRouteProxy;
    preview: APIRouteProxy;
    onboarding: APIRouteProxy;
    'onboarding-responses': APIRouteProxy;
    'gift-codes': APIRouteProxy;
    redeem: APIRouteProxy;
    authorize: APIRouteProxy;
    tokens: APIRouteProxy;
} & {
    [key: string]: APIRouteProxy;
};
declare function buildRoute(manager: RESTManager): APIRouteProxy;
export default buildRoute;
