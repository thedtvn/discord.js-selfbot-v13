declare const EventEmitter: any;
declare const Buffer: any;
/**
 * An interface class for volume transformation.
 * @extends {EventEmitter}
 */
declare class VolumeInterface extends EventEmitter {
    constructor({ volume }?: {
        volume?: number;
    });
    /**
     * Whether or not the volume of this stream is editable
     * @type {boolean}
     * @readonly
     */
    get volumeEditable(): boolean;
    /**
     * The current volume of the stream
     * @type {number}
     * @readonly
     */
    get volume(): any;
    /**
     * The current volume of the stream in decibels
     * @type {number}
     * @readonly
     */
    get volumeDecibels(): number;
    /**
     * The current volume of the stream from a logarithmic scale
     * @type {number}
     * @readonly
     */
    get volumeLogarithmic(): number;
    applyVolume(buffer: any, volume: any): any;
    /**
     * Sets the volume relative to the input stream - i.e. 1 is normal, 0.5 is half, 2 is double.
     * @param {number} volume The volume that you want to set
     */
    setVolume(volume: any): void;
    /**
     * Sets the volume in decibels.
     * @param {number} db The decibels
     */
    setVolumeDecibels(db: any): void;
    /**
     * Sets the volume so that a perceived value of 0.5 is half the perceived volume etc.
     * @param {number} value The value for the volume
     */
    setVolumeLogarithmic(value: any): void;
}
declare const props: string[];
