declare const Buffer: any;
declare const VideoDispatcher: any;
declare const Util: any;
declare const H264Helpers: any, H265Helpers: any;
declare class AnnexBDispatcher extends VideoDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: any, nalFunctions: any, payloadType: any);
    _codecCallback(frame: any): void;
}
declare class H264Dispatcher extends AnnexBDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: any);
    makeFragmentationUnitHeader(isFirstPacket: any, isLastPacket: any, naluHeader: any): any;
}
declare class H265Dispatcher extends AnnexBDispatcher {
    constructor(player: any, highWaterMark: number, streams: any, fps: any);
    makeFragmentationUnitHeader(isFirstPacket: any, isLastPacket: any, naluHeader: any): any;
}
