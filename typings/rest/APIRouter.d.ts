import type RESTManager from './RESTManager';
import type { APIRequestOptions } from './APIRequest';
export interface APIRouterRequestOptions extends Partial<APIRequestOptions> {
    versioned?: boolean;
    route?: string;
}
interface APIRouteProxy {
    (...args: Array<string | number | null | undefined>): APIRouteProxy;
    get(options?: APIRouterRequestOptions): Promise<unknown>;
    post(options?: APIRouterRequestOptions): Promise<unknown>;
    delete(options?: APIRouterRequestOptions): Promise<unknown>;
    patch(options?: APIRouterRequestOptions): Promise<unknown>;
    put(options?: APIRouterRequestOptions): Promise<unknown>;
    [key: string]: APIRouteProxy;
}
declare function buildRoute(manager: RESTManager): APIRouteProxy;
export default buildRoute;
