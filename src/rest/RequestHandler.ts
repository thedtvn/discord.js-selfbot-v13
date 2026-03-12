import { setTimeout } from 'node:timers';
import { setTimeout as sleep } from 'node:timers/promises';
import { AsyncQueue } from '@sapphire/async-queue';
import DiscordAPIError, { type DiscordAPIErrorPayload } from './DiscordAPIError';
import HTTPError from './HTTPError';
import RateLimitError, { type RateLimitData } from './RateLimitError';
import type APIRequest from './APIRequest';
import type RESTManager from './RESTManager';
import { Events } from '../util/Constants';

const { DEBUG, RATE_LIMIT, INVALID_REQUEST_WARNING, API_RESPONSE, API_REQUEST } = Events;

const captchaMessage = [
  'incorrect-captcha',
  'response-already-used',
  'captcha-required',
  'invalid-input-response',
  'invalid-response',
  'You need to update your app',
  'response-already-used-error',
  'rqkey-mismatch',
  'sitekey-secret-mismatch',
];

interface RateLimitResponseData {
  captcha_service?: string;
  captcha_key: string[];
  captcha_sitekey?: string;
  captcha_rqtoken?: string;
  code?: number;
  message?: string;
  mfa?: {
    ticket: string;
    methods: Array<{ type: string }>;
  };
  [key: string]: unknown;
}

interface APIResponseMeta {
  method: string;
  path: string;
  route: string;
  options: APIRequest['options'];
  retries: number;
}

function parseResponse(res: Response): Promise<unknown> {
  if (res.headers.get('content-type')?.startsWith('application/json')) return res.json();
  return res.arrayBuffer();
}

function getAPIOffset(serverDate: string | null): number {
  return new Date(serverDate ?? Date.now()).getTime() - Date.now();
}

function calculateReset(reset: string | null, resetAfter: string | null, serverDate: string | null): number {
  if (resetAfter) {
    return Date.now() + Number(resetAfter) * 1_000;
  }
  return new Date(Number(reset) * 1_000).getTime() - getAPIOffset(serverDate);
}

let invalidCount = 0;
let invalidCountResetTime: number | null = null;

class RequestHandler {
  public manager: RESTManager;
  public queue: AsyncQueue;
  public reset: number;
  public remaining: number;
  public limit: number;

  constructor(manager: RESTManager) {
    this.manager = manager;
    this.queue = new AsyncQueue();
    this.reset = -1;
    this.remaining = -1;
    this.limit = -1;
  }

  async push(request: APIRequest): Promise<unknown> {
    await this.queue.wait();
    try {
      return await this.execute(request);
    } finally {
      this.queue.shift();
    }
  }

  get globalLimited(): boolean {
    return this.manager.globalRemaining <= 0 && Date.now() < (this.manager.globalReset ?? 0);
  }

  get localLimited(): boolean {
    return this.remaining <= 0 && Date.now() < this.reset;
  }

  get limited(): boolean {
    return this.globalLimited || this.localLimited;
  }

  get _inactive(): boolean {
    return this.queue.remaining === 0 && !this.limited;
  }

  globalDelayFor(ms: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.manager.globalDelay = null;
        resolve();
      }, ms).unref();
    });
  }

  async onRateLimit(request: APIRequest, limit: number, timeout: number, isGlobal: boolean): Promise<void> {
    const { options } = this.manager.client;
    if (!options.rejectOnRateLimit) return;

    const rateLimitData: RateLimitData = {
      timeout,
      limit,
      method: request.method,
      path: request.path,
      route: request.route,
      global: isGlobal,
    };

    const shouldThrow =
      typeof options.rejectOnRateLimit === 'function'
        ? await options.rejectOnRateLimit(rateLimitData)
        : (options.rejectOnRateLimit as any[]).some(route => rateLimitData.route.startsWith(route.toLowerCase()));

    if (shouldThrow) {
      throw new RateLimitError(rateLimitData);
    }
  }

  async execute(request: APIRequest, captchaKey?: string, captchaToken?: string): Promise<unknown> {
    while (this.limited) {
      const isGlobal = this.globalLimited;
      let limit: number;
      let timeout: number;
      let delayPromise: Promise<void>;

      if (isGlobal) {
        limit = this.manager.globalLimit;
        timeout = (this.manager.globalReset ?? Date.now()) + (this.manager.client.options.restTimeOffset as number) - Date.now();
      } else {
        limit = this.limit;
        timeout = this.reset + (this.manager.client.options.restTimeOffset as number) - Date.now();
      }

      if (this.manager.client.listenerCount(RATE_LIMIT)) {
        this.manager.client.emit(RATE_LIMIT, {
          timeout,
          limit,
          method: request.method,
          path: request.path,
          route: request.route,
          global: isGlobal,
        });
      }

      if (isGlobal) {
        if (!this.manager.globalDelay) {
          this.manager.globalDelay = this.globalDelayFor(timeout);
        }
        delayPromise = this.manager.globalDelay;
      } else {
        delayPromise = sleep(timeout).then(() => undefined);
      }

      await this.onRateLimit(request, limit, timeout, isGlobal);
      await delayPromise;
    }

    if (!this.manager.globalReset || this.manager.globalReset < Date.now()) {
      this.manager.globalReset = Date.now() + 1_000;
      this.manager.globalRemaining = this.manager.globalLimit;
    }
    this.manager.globalRemaining--;

    if (this.manager.client.listenerCount(API_REQUEST)) {
      const requestMeta: APIResponseMeta = {
        method: request.method,
        path: request.path,
        route: request.route,
        options: request.options,
        retries: request.retries,
      };
      this.manager.client.emit(API_REQUEST, requestMeta);
    }

    let res: Response;
    try {
      res = await request.make(captchaKey, captchaToken);
    } catch (error) {
      const err = error as { message?: string; constructor?: { name?: string }; status?: number };
      if (request.retries === this.manager.client.options.retryLimit) {
        throw new HTTPError(err.message ?? 'Request failed', err.constructor?.name ?? 'Error', err.status, request);
      }

      request.retries++;
      return this.execute(request);
    }

    if (this.manager.client.listenerCount(API_RESPONSE)) {
      const requestMeta: APIResponseMeta = {
        method: request.method,
        path: request.path,
        route: request.route,
        options: request.options,
        retries: request.retries,
      };
      this.manager.client.emit(API_RESPONSE, requestMeta, res.clone());
    }

    let sublimitTimeout: number | undefined;
    const serverDate = res.headers.get('date');
    const limit = res.headers.get('x-ratelimit-limit');
    const remaining = res.headers.get('x-ratelimit-remaining');
    const reset = res.headers.get('x-ratelimit-reset');
    const resetAfter = res.headers.get('x-ratelimit-reset-after');
    this.limit = limit ? Number(limit) : Infinity;
    this.remaining = remaining ? Number(remaining) : 1;
    this.reset = reset || resetAfter ? calculateReset(reset, resetAfter, serverDate) : Date.now();

    if (!resetAfter && request.route.includes('reactions')) {
      this.reset = new Date(serverDate ?? Date.now()).getTime() - getAPIOffset(serverDate) + 250;
    }

    let retryAfter = res.headers.get('retry-after');
    retryAfter = retryAfter ? String(Number(retryAfter) * 1_000) : '-1';
    if (Number(retryAfter) > 0) {
      if (res.headers.get('x-ratelimit-global')) {
        this.manager.globalRemaining = 0;
        this.manager.globalReset = Date.now() + Number(retryAfter);
      } else if (!this.localLimited) {
        sublimitTimeout = Number(retryAfter);
      }
    }

    if (res.status === 401 || res.status === 403 || res.status === 429) {
      if (!invalidCountResetTime || invalidCountResetTime < Date.now()) {
        invalidCountResetTime = Date.now() + 1_000 * 60 * 10;
        invalidCount = 0;
      }
      invalidCount++;

      const emitInvalid =
        this.manager.client.listenerCount(INVALID_REQUEST_WARNING) &&
        (this.manager.client.options.invalidRequestWarningInterval as number) > 0 &&
        invalidCount % (this.manager.client.options.invalidRequestWarningInterval as number) === 0;
      if (emitInvalid) {
        this.manager.client.emit(INVALID_REQUEST_WARNING, {
          count: invalidCount,
          remainingTime: (invalidCountResetTime ?? Date.now()) - Date.now(),
        });
      }
    }

    if (res.ok) {
      return parseResponse(res);
    }

    if (res.status >= 400 && res.status < 500) {
      if (res.status === 429) {
        const isGlobal = this.globalLimited;
        let rateLimitLimit: number;
        let timeout: number;
        if (isGlobal) {
          rateLimitLimit = this.manager.globalLimit;
          timeout = (this.manager.globalReset ?? Date.now()) + (this.manager.client.options.restTimeOffset as number) - Date.now();
        } else {
          rateLimitLimit = this.limit;
          timeout = this.reset + (this.manager.client.options.restTimeOffset as number) - Date.now();
        }

        this.manager.client.emit(
          DEBUG,
          `[Request Handler] Hit a 429 while executing a request.
    Global  : ${isGlobal}
    Method  : ${request.method}
    Path    : ${request.path}
    Route   : ${request.route}
    Limit   : ${rateLimitLimit}
    Timeout : ${timeout}ms
    Sublimit: ${sublimitTimeout ? `${sublimitTimeout}ms` : 'None'}`,
        );

        await this.onRateLimit(request, rateLimitLimit, timeout, isGlobal);

        if (sublimitTimeout) {
          await sleep(sublimitTimeout);
        }
        return this.execute(request);
      }

      let data: RateLimitResponseData | DiscordAPIErrorPayload;
      try {
        data = (await parseResponse(res)) as RateLimitResponseData;

        if (
          data?.captcha_service &&
          typeof this.manager.client.options.captchaSolver === 'function' &&
          request.retries < (this.manager.client.options.captchaRetryLimit as number) &&
          captchaMessage.some(s => data.captcha_key[0]?.includes(s))
        ) {
          this.manager.client.emit(
            DEBUG,
            `[Request Handler] Hit a captcha while executing a request (${(data.captcha_key as any[]).join(', ')})
    Method  : ${request.method}
    Path    : ${request.path}
    Route   : ${request.route}
    Sitekey : ${data.captcha_sitekey}
    rqToken : ${data.captcha_rqtoken}`,
          );
          const captcha = await this.manager.client.options.captchaSolver(data, request.fullUserAgent);
          this.manager.client.emit(
            DEBUG,
            `[Request Handler] Captcha details:
    Method  : ${request.method}
    Path    : ${request.path}
    Route   : ${request.route}
    Key     : ${captcha ? `${captcha.slice(0, 120)}...` : '[Captcha not solved]'}
    rqToken : ${data.captcha_rqtoken}`,
          );
          request.retries++;
          return this.execute(request, captcha as string, data.captcha_rqtoken as string);
        }

        if ((data as RateLimitResponseData)?.code && (data as RateLimitResponseData).code == 60003 && request.options.auth !== false && request.retries < 1) {
          const twoFactorData = data as RateLimitResponseData;
          if (
            twoFactorData.mfa?.methods.find(o => o.type === 'totp') &&
            typeof this.manager.client.options.TOTPKey === 'string'
          ) {
            const otp = (this.manager.client as any).authenticator.generate(this.manager.client.options.TOTPKey);
            this.manager.client.emit(
              DEBUG,
              `[Request Handler] ${twoFactorData.message}
    Method  : ${request.method}
    Path    : ${request.path}
    Route   : ${request.route}
    mfaCode : ${otp}`,
            );

            const mfaData = twoFactorData.mfa;
            if (!mfaData) {
              throw new HTTPError('Missing MFA payload', 'HTTPError', 500, request);
            }

            const mfaPost = (await this.manager.client.api.mfa.finish.post({
              data: {
                ticket: mfaData.ticket,
                data: otp,
                mfa_type: 'totp',
              },
            })) as { token: string };
            request.options.mfaToken = mfaPost.token;
            request.retries++;
            return this.execute(request);
          }
        }
      } catch (err) {
        const error = err as { message?: string; constructor?: { name?: string }; status?: number };
        throw new HTTPError(error.message ?? 'HTTP parse error', error.constructor?.name ?? 'Error', error.status, request);
      }

      throw new DiscordAPIError(data as DiscordAPIErrorPayload, res.status, request);
    }

    if (res.status >= 500 && res.status < 600) {
      if (request.retries === this.manager.client.options.retryLimit) {
        throw new HTTPError(res.statusText, res.constructor.name, res.status, request);
      }

      request.retries++;
      return this.execute(request);
    }

    return null;
  }
}

export default RequestHandler;
