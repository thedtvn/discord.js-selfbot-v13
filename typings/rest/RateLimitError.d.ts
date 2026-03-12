export interface RateLimitData {
    timeout: number;
    limit: number;
    method: string;
    path: string;
    route: string;
    global: boolean;
}
declare class RateLimitError extends Error {
    timeout: number;
    method: string;
    path: string;
    route: string;
    global: boolean;
    limit: number;
    constructor({ timeout, limit, method, path, route, global }: RateLimitData);
}
export default RateLimitError;
