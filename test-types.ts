export interface APIRouterRequestOptions { route?: string }
export type APIRouteProxy = {
  (...args: Array<string | number | null | undefined>): APIRouteProxy;
  get(options?: APIRouterRequestOptions): Promise<unknown>;
  post(options?: APIRouterRequestOptions): Promise<unknown>;
  delete(options?: APIRouterRequestOptions): Promise<unknown>;
  patch(options?: APIRouterRequestOptions): Promise<unknown>;
  put(options?: APIRouterRequestOptions): Promise<unknown>;
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
} & {
  [key: string]: APIRouteProxy;
};

const proxy: APIRouteProxy = {} as any;
proxy.auth.login.post();
proxy.guilds['123'].get();
