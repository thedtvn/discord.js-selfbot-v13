import type APIRequest from './APIRequest';
interface DiscordAPIErrorNode {
    _errors?: Array<{
        message: string;
    }>;
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
declare class DiscordAPIError extends Error {
    method: string;
    path: string;
    code: number | undefined;
    httpStatus: number;
    requestData: {
        json: unknown;
        files: unknown[];
        headers: Record<string, string | undefined> | undefined;
    };
    retries: number;
    captcha: CaptchaData | null;
    constructor(error: DiscordAPIErrorPayload, status: number, request: APIRequest);
    get isBlockedByCloudflare(): boolean;
    static flattenErrors(obj: DiscordAPIErrorNode, key?: string): string[];
}
export default DiscordAPIError;
