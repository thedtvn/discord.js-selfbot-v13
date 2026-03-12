import type RESTManager from './RESTManager';
import type { APIRequestOptions } from './APIRequest';

type APIMethod = 'get' | 'post' | 'delete' | 'patch' | 'put';
type ReflectorName = 'toString' | 'valueOf' | 'inspect' | 'constructor' | symbol;

export interface APIRouterRequestOptions extends Partial<APIRequestOptions> {
  versioned?: boolean;
  route?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const noop = (): void => {};
const methods: APIMethod[] = ['get', 'post', 'delete', 'patch', 'put'];
const reflectors: ReflectorName[] = [
  'toString',
  'valueOf',
  'inspect',
  'constructor',
  Symbol.toPrimitive,
  Symbol.for('nodejs.util.inspect.custom'),
];

function buildRoute(manager: RESTManager): APIRouteProxy {
  const route: string[] = [''];

  const handler: ProxyHandler<typeof noop> = {
    get(_target: typeof noop, name: string | symbol): unknown {
      if (reflectors.includes(name as ReflectorName)) return (): string => route.join('/');

      if (methods.includes(name as APIMethod)) {
        const routeBucket: string[] = [];
        for (let i = 0; i < route.length; i++) {
          if (route[i - 1] === 'reactions') break;
          if (/\d{16,19}/g.test(route[i]) && !/channels|guilds/.test(route[i - 1])) routeBucket.push(':id');
          else routeBucket.push(route[i]);
        }

        return (options?: APIRouterRequestOptions): Promise<unknown> =>
          manager.request(name as APIMethod, route.join('/'), {
            versioned: manager.versioned,
            route: routeBucket.join('/'),
            ...(options ?? {}),
          });
      }

      route.push(String(name));
      return new Proxy(noop, handler) as unknown as APIRouteProxy;
    },
    apply(
      _target: typeof noop,
      _thisArg: unknown,
      args: Array<string | number | null | undefined>,
    ): APIRouteProxy {
      route.push(...args.filter((x): x is string | number => x != null).map(String));
      return new Proxy(noop, handler) as unknown as APIRouteProxy;
    },
  };

  return new Proxy(noop, handler) as unknown as APIRouteProxy;
}

export default buildRoute;
