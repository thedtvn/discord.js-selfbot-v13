import { AsyncQueue } from '@sapphire/async-queue';
import type APIRequest from './APIRequest';
import type RESTManager from './RESTManager';
declare class RequestHandler {
    manager: RESTManager;
    queue: AsyncQueue;
    reset: number;
    remaining: number;
    limit: number;
    constructor(manager: RESTManager);
    push(request: APIRequest): Promise<unknown>;
    get globalLimited(): boolean;
    get localLimited(): boolean;
    get limited(): boolean;
    get _inactive(): boolean;
    globalDelayFor(ms: number): Promise<void>;
    onRateLimit(request: APIRequest, limit: number, timeout: number, isGlobal: boolean): Promise<void>;
    execute(request: APIRequest, captchaKey?: string, captchaToken?: string): Promise<unknown>;
}
export default RequestHandler;
