import { setInterval } from 'node:timers';
import { Collection } from '@discordjs/collection';
import makeFetchCookie from 'fetch-cookie';
import { CookieJar } from 'tough-cookie';
import { fetch as fetchOriginal } from 'undici';
import APIRequest, { type APIRequestOptions } from './APIRequest';
import routeBuilder, { type APIRouteProxy } from './APIRouter';
import RequestHandler from './RequestHandler';
import { Error as DiscordjsError } from '../errors';
import { Endpoints } from '../util/Constants';
import type Client from '../client/Client';
import type BaseClient from '../client/BaseClient';

type HTTPMethod = 'get' | 'post' | 'delete' | 'patch' | 'put';

class RESTManager {
  public client: BaseClient;
  public handlers: Collection<string, RequestHandler>;
  public versioned: boolean;
  public globalLimit: number;
  public globalRemaining: number;
  public globalReset: number | null;
  public globalDelay: Promise<void> | null;
  public cookieJar: CookieJar;
  public fetch: typeof fetchOriginal;
  public sweepInterval?: NodeJS.Timeout;

  constructor(client: BaseClient) {
    this.client = client;
    this.handlers = new Collection();
    this.versioned = true;
    this.globalLimit = (client.options.restGlobalRateLimit as number) > 0 ? (client.options.restGlobalRateLimit as number) : Infinity;
    this.globalRemaining = this.globalLimit;
    this.globalReset = null;
    this.globalDelay = null;
    this.cookieJar = new CookieJar();
    this.fetch = makeFetchCookie(fetchOriginal, this.cookieJar) as typeof fetchOriginal;

    if ((client.options.restSweepInterval as number) > 0) {
      this.sweepInterval = setInterval(() => {
        this.handlers.sweep(handler => handler._inactive);
      }, (client.options.restSweepInterval as number) * 1_000).unref();
    }
  }

  get api(): APIRouteProxy {
    return routeBuilder(this);
  }

  getAuth(): string {
    const client = this.client as any; // BaseClient doesn't have token/accessToken, only Client does
    const token = client.token ?? client.accessToken;
    if (token) return token.replace(/Bot /g, '');
    throw new DiscordjsError('TOKEN_MISSING');
  }

  get cdn(): any {
    return Endpoints.CDN((this.client.options.http as any).cdn);
  }

  request(method: HTTPMethod, url: string, options: Partial<APIRequestOptions> = {}): Promise<unknown> {
    const apiRequest = new APIRequest(this, method, url, options as APIRequestOptions);
    let handler = this.handlers.get(apiRequest.route);

    if (!handler) {
      handler = new RequestHandler(this);
      this.handlers.set(apiRequest.route, handler);
    }

    return handler.push(apiRequest);
  }

  get endpoint(): string {
    return (this.client.options.http as any).api;
  }

  set endpoint(endpoint: string) {
    (this.client.options.http as any).api = endpoint;
  }
}

export default RESTManager;
