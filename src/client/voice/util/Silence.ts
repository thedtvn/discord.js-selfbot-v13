import { Buffer } from 'node:buffer';
import { Readable } from 'stream';

const SILENCE_FRAME = Buffer.from([0xf8, 0xff, 0xfe]);

class Silence extends Readable {
  static SILENCE_FRAME = SILENCE_FRAME;

  _read(): void {
    this.push(SILENCE_FRAME);
  }
}

export { SILENCE_FRAME };
export default Silence;
