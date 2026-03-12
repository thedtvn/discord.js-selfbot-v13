declare const Buffer: any;
declare const Readable: any;
declare const SILENCE_FRAME: any;
declare class Silence extends Readable {
    _read(): void;
}
