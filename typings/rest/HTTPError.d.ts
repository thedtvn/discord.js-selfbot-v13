import type APIRequest from './APIRequest';
declare class HTTPError extends Error {
    code: number;
    method: string;
    path: string;
    requestData: {
        json: unknown;
        files: unknown[];
        headers: Record<string, string | undefined> | undefined;
    };
    constructor(message: string, name: string, code: number | undefined, request: APIRequest);
}
export default HTTPError;
