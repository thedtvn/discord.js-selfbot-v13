import { Buffer } from 'buffer';
import VideoDispatcher from './VideoDispatcher';
declare class AnnexBDispatcher extends VideoDispatcher {
    _nalFunctions: any;
    constructor(player: any, highWaterMark: number, streams: any, fps: number, nalFunctions: any, payloadType: number);
    makeFragmentationUnitHeader(isFirstPacket: boolean, isLastPacket: boolean, naluHeader: Buffer): Buffer;
    _codecCallback(frame: Buffer): void;
}
declare class H264Dispatcher extends AnnexBDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: number);
    makeFragmentationUnitHeader(isFirstPacket: boolean, isLastPacket: boolean, naluHeader: Buffer): Buffer;
}
declare class H265Dispatcher extends AnnexBDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: number);
    makeFragmentationUnitHeader(isFirstPacket: boolean, isLastPacket: boolean, naluHeader: Buffer): Buffer;
}
export { H264Dispatcher, H265Dispatcher };
declare const _default: {
    H264Dispatcher: typeof H264Dispatcher;
    H265Dispatcher: typeof H265Dispatcher;
};
export default _default;
