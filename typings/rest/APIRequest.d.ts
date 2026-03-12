import type RESTManager from './RESTManager';
export interface APIRequestFile {
    key?: string;
    name: string;
    file?: unknown;
}
export interface APIRequestOptions {
    route: string;
    versioned?: boolean;
    query?: Record<string, string | number | boolean | null | undefined | Array<string | number | boolean>>;
    auth?: boolean;
    reason?: string;
    headers?: Record<string, string | undefined>;
    webhook?: boolean;
    DiscordContext?: Record<string, unknown>;
    mfaToken?: string;
    files?: APIRequestFile[];
    data?: Record<string, unknown> | unknown[] | string | null;
    dontUsePayloadJSON?: boolean;
    usePayloadJSON?: boolean;
}
declare class APIRequest {
    rest: RESTManager;
    client: RESTManager['client'];
    method: string;
    route: string;
    options: APIRequestOptions;
    retries: number;
    fullUserAgent: string;
    path: string;
    constructor(rest: RESTManager, method: string, path: string, options: APIRequestOptions);
    make(captchaKey?: string, captchaRqToken?: string): Promise<any>;
}
export default APIRequest;
