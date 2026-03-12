export interface RateLimitData {
  timeout: number;
  limit: number;
  method: string;
  path: string;
  route: string;
  global: boolean;
}

class RateLimitError extends Error {
  public timeout: number;
  public method: string;
  public path: string;
  public route: string;
  public global: boolean;
  public limit: number;

  constructor({ timeout, limit, method, path, route, global }: RateLimitData) {
    super(`A ${global ? 'global ' : ''}rate limit was hit on route ${route}`);
    this.name = 'RateLimitError';
    this.timeout = timeout;
    this.method = method;
    this.path = path;
    this.route = route;
    this.global = global;
    this.limit = limit;
  }
}

export default RateLimitError;
