import type APIRequest from './APIRequest';

class HTTPError extends Error {
  public code: number;
  public method: string;
  public path: string;
  public requestData: {
    json: unknown;
    files: unknown[];
    headers: Record<string, string | undefined> | undefined;
  };

  constructor(message: string, name: string, code: number | undefined, request: APIRequest) {
    super(message);

    this.name = name;
    this.code = code ?? 500;
    this.method = request.method;
    this.path = request.path;
    this.requestData = {
      json: request.options.data,
      files: request.options.files ?? [],
      headers: request.options.headers,
    };
  }
}

export default HTTPError;
