import { Buffer } from 'node:buffer';
import { Readable } from 'stream';
declare const SILENCE_FRAME: Buffer<ArrayBuffer>;
declare class Silence extends Readable {
    static SILENCE_FRAME: Buffer<ArrayBuffer>;
    _read(): void;
}
export { SILENCE_FRAME };
export default Silence;
