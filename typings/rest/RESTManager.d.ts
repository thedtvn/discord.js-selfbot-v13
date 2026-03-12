import { Collection } from '@discordjs/collection';
import { CookieJar } from 'tough-cookie';
import { fetch as fetchOriginal } from 'undici';
import { type APIRequestOptions } from './APIRequest';
import { type APIRouteProxy } from './APIRouter';
import RequestHandler from './RequestHandler';
import type Client from '../client/Client';
type HTTPMethod = 'get' | 'post' | 'delete' | 'patch' | 'put';
declare class RESTManager {
    client: Client;
    handlers: Collection<string, RequestHandler>;
    versioned: boolean;
    globalLimit: number;
    globalRemaining: number;
    globalReset: number | null;
    globalDelay: Promise<void> | null;
    cookieJar: CookieJar;
    fetch: typeof fetchOriginal;
    sweepInterval?: NodeJS.Timeout;
    constructor(client: Client);
    get api(): APIRouteProxy;
    getAuth(): string;
    get cdn(): string;
    request(method: HTTPMethod, url: string, options?: Partial<APIRequestOptions>): Promise<unknown>;
    get endpoint(): string;
    set endpoint(endpoint: string);
}
export default RESTManager;
