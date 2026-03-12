import { Buffer } from 'node:buffer';
import WebSocketLib from 'ws';

interface ErlpackLike {
  pack?: (data: unknown) => Buffer;
  unpack?: (data: Buffer) => unknown;
}

const erlpack: ErlpackLike | null = null;
const ab = new TextDecoder();

export const WebSocket = WebSocketLib;
export const encoding: 'etf' | 'json' = erlpack ? 'etf' : 'json';
export const pack: (data: unknown) => string | Buffer = erlpack?.pack ?? JSON.stringify;

export const unpack = (data: unknown, type?: 'json'): unknown => {
  if (encoding === 'json' || type === 'json') {
    let jsonData: string;
    if (typeof data !== 'string') {
      jsonData = ab.decode(data as Uint8Array);
    } else {
      jsonData = data;
    }
    return JSON.parse(jsonData);
  }

  const binary = Buffer.isBuffer(data) ? data : Buffer.from(new Uint8Array(data as ArrayBufferLike));
  return erlpack?.unpack?.(binary);
};

export const create = (
  gateway: string,
  query: Record<string, string | number> = {},
  ...args: unknown[]
): InstanceType<typeof WebSocketLib> => {
  const [g, q] = gateway.split('?');
  query.encoding = encoding;

  const queryParams = new URLSearchParams(query as Record<string, string>);
  if (q) new URLSearchParams(q).forEach((v, k) => queryParams.set(k, v));
  return new WebSocketLib(`${g}?${queryParams}`, ...(args as [string | string[] | undefined, WebSocketLib.ClientOptions?]));
};

export const CONNECTING = WebSocketLib.CONNECTING;
export const OPEN = WebSocketLib.OPEN;
export const CLOSING = WebSocketLib.CLOSING;
export const CLOSED = WebSocketLib.CLOSED;
