/*
Credit: https://github.com/dank074/Discord-video-stream
The use of video streaming in this library is an incomplete implementation with many bugs, primarily aimed at lazy users.
The video streaming features in this library are sourced from https://github.com/dank074/Discord-video-stream.

Please use the @dank074/discord-video-stream library to access all advanced and professional features,
along with comprehensive support. I will not actively fix bugs related to streaming and encourage everyone to
use https://github.com/dank074/Discord-video-stream for stable and smooth streaming.

To reiterate: This is an incomplete implementation of the library https://github.com/dank074/Discord-video-stream.

Thanks to dank074 and longnguyen2004 for implementing new codecs (H264, H265).
Thanks to mrjvs for discovering how Discord transmits data and the VP8 codec.

Please use the @dank074/discord-video-stream library for the best support.
*/

import { Buffer } from 'buffer';
import { Transform, type TransformCallback } from 'stream';

class IvfTransformer extends Transform {
  headerSize: number;
  frameHeaderSize: number;
  header: any;
  buf: Buffer | null;
  retFullFrame: boolean;

  constructor(options?: any) {
    super(options);
    this.headerSize = 32;
    this.frameHeaderSize = 12;

    this.header = null;
    this.buf = null;
    this.retFullFrame = options && options.fullframe ? options.fullframe : false;
  }

  _parseHeader(header: Buffer): void {
    this.header = {
      signature: header.subarray(0, 4).toString(),
      version: header.readUIntLE(4, 2),
      headerLength: header.readUIntLE(6, 2),
      codec: header.subarray(8, 12).toString(),
      width: header.readUIntLE(12, 2),
      height: header.readUIntLE(14, 2),
      timeDenominator: header.readUIntLE(16, 4),
      timeNumerator: header.readUIntLE(20, 4),
      frameCount: header.readUIntLE(24, 4),
    };
  }

  _getFrameSize(buf: Buffer): number {
    return buf.readUIntLE(0, 4);
  }

  _parseFrame(frame: Buffer): boolean {
    const size = this._getFrameSize(frame);

    if (this.retFullFrame) return this.push(frame.subarray(0, 12 + size));

    const out = {
      size: size,
      timestamp: frame.readBigUInt64LE(4),
      data: frame.subarray(12, 12 + size),
    };

    return this.push(out.data);
  }

  _appendChunkToBuf(chunk: Buffer): void {
    if (this.buf) this.buf = Buffer.concat([this.buf, chunk]);
    else this.buf = chunk;
  }

  _updateBufLen(size: number): void {
    if (this.buf.length > size) this.buf = this.buf.subarray(size, this.buf.length);
    else this.buf = null;
  }

  _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void {
    this._appendChunkToBuf(chunk);

    if (!this.header) {
      if (this.buf.length >= this.headerSize) {
        this._parseHeader(this.buf.subarray(0, this.headerSize));
        this._updateBufLen(this.headerSize);
      } else {
        callback();
        return;
      }
    }

    while (this.buf && this.buf.length >= this.frameHeaderSize) {
      const size = this._getFrameSize(this.buf) + this.frameHeaderSize;

      if (this.buf.length >= size) {
        this._parseFrame(this.buf.subarray(0, size));
        this._updateBufLen(size);
      } else {
        break;
      }
    }

    callback();
  }
}

export { IvfTransformer };
export default { IvfTransformer };
