import type APIRequest from './APIRequest';

interface DiscordAPIErrorNode {
  _errors?: Array<{ message: string }>;
  code?: number | string;
  message?: string;
  [key: string]: unknown;
}

export interface DiscordAPIErrorPayload {
  code?: number;
  message?: string;
  errors?: DiscordAPIErrorNode;
  captcha_service?: string;
  [key: string]: unknown;
}

export interface CaptchaData {
  captcha_key: string[];
  captcha_sitekey: string;
  captcha_service: string;
  captcha_rqdata?: string;
  captcha_rqtoken?: string;
}

class DiscordAPIError extends Error {
  public method: string;
  public path: string;
  public code: number | undefined;
  public httpStatus: number;
  public requestData: {
    json: unknown;
    files: unknown[];
    headers: Record<string, string | undefined> | undefined;
  };
  public retries: number;
  public captcha: CaptchaData | null;

  constructor(error: DiscordAPIErrorPayload, status: number, request: APIRequest) {
    super();
    const flattened = DiscordAPIError.flattenErrors((error.errors ?? error) as DiscordAPIErrorNode).join('\n');
    this.name = 'DiscordAPIError';
    this.message = error.message && flattened ? `${error.message}\n${flattened}` : error.message ?? flattened;

    this.method = request.method;
    this.path = request.path;
    this.code = error.code;
    this.httpStatus = status;
    this.requestData = {
      json: request.options.data,
      files: request.options.files ?? [],
      headers: request.options.headers,
    };
    this.retries = request.retries;
    this.captcha = error?.captcha_service ? (error as unknown as CaptchaData) : null;
  }

  get isBlockedByCloudflare(): boolean {
    return this.code === 40333;
  }

  static flattenErrors(obj: DiscordAPIErrorNode, key = ''): string[] {
    let messages: string[] = [];

    for (const [k, v] of Object.entries(obj)) {
      if (k === 'message') continue;
      const newKey = key ? (isNaN(Number(k)) ? `${key}.${k}` : `${key}[${k}]`) : k;
      const value = v as DiscordAPIErrorNode;

      if (value?._errors) {
        messages.push(`${newKey}: ${value._errors.map(e => e.message).join(' ')}`);
      } else if (value?.code ?? value?.message) {
        messages.push(`${value.code ? `${value.code}: ` : ''}${value.message ?? ''}`.trim());
      } else if (typeof v === 'string') {
        messages.push(v);
      } else if (v && typeof v === 'object') {
        messages = messages.concat(this.flattenErrors(v as DiscordAPIErrorNode, newKey));
      }
    }

    return messages;
  }
}

export default DiscordAPIError;
