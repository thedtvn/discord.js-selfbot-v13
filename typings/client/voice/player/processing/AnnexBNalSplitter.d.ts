declare const Buffer: any;
declare const Transform: any;
declare const H264NalUnitTypes: {
    Unspecified: number;
    CodedSliceNonIDR: number;
    CodedSlicePartitionA: number;
    CodedSlicePartitionB: number;
    CodedSlicePartitionC: number;
    CodedSliceIdr: number;
    SEI: number;
    SPS: number;
    PPS: number;
    AccessUnitDelimiter: number;
    EndOfSequence: number;
    EndOfStream: number;
    FillerData: number;
    SEIExtenstion: number;
    PrefixNalUnit: number;
    SubsetSPS: number;
};
declare const H265NalUnitTypes: {
    TRAIL_N: number;
    TRAIL_R: number;
    TSA_N: number;
    TSA_R: number;
    STSA_N: number;
    STSA_R: number;
    RADL_N: number;
    RADL_R: number;
    RASL_N: number;
    RASL_R: number;
    RSV_VCL_N10: number;
    RSV_VCL_R11: number;
    RSV_VCL_N12: number;
    RSV_VCL_R13: number;
    RSV_VCL_N14: number;
    RSV_VCL_R15: number;
    BLA_W_LP: number;
    BLA_W_RADL: number;
    BLA_N_LP: number;
    IDR_W_RADL: number;
    IDR_N_LP: number;
    CRA_NUT: number;
    RSV_IRAP_VCL22: number;
    RSV_IRAP_VCL23: number;
    RSV_VCL24: number;
    RSV_VCL25: number;
    RSV_VCL26: number;
    RSV_VCL27: number;
    RSV_VCL28: number;
    RSV_VCL29: number;
    RSV_VCL30: number;
    RSV_VCL31: number;
    VPS_NUT: number;
    SPS_NUT: number;
    PPS_NUT: number;
    AUD_NUT: number;
    EOS_NUT: number;
    EOB_NUT: number;
    FD_NUT: number;
    PREFIX_SEI_NUT: number;
    SUFFIX_SEI_NUT: number;
    RSV_NVCL41: number;
    RSV_NVCL42: number;
    RSV_NVCL43: number;
    RSV_NVCL44: number;
    RSV_NVCL45: number;
    RSV_NVCL46: number;
    RSV_NVCL47: number;
    UNSPEC48: number;
    UNSPEC49: number;
    UNSPEC50: number;
    UNSPEC51: number;
    UNSPEC52: number;
    UNSPEC53: number;
    UNSPEC54: number;
    UNSPEC55: number;
    UNSPEC56: number;
    UNSPEC57: number;
    UNSPEC58: number;
    UNSPEC59: number;
    UNSPEC60: number;
    UNSPEC61: number;
    UNSPEC62: number;
    UNSPEC63: number;
};
declare const H264Helpers: {
    getUnitType(frame: any): number;
    splitHeader(frame: any): any[];
    isAUD(unitType: any): boolean;
};
declare const H265Helpers: {
    getUnitType(frame: any): number;
    splitHeader(frame: any): any[];
    isAUD(unitType: any): boolean;
};
declare const emptyBuffer: any;
declare const epbPrefix: any;
declare const nalSuffix: any;
declare class AnnexBNalSplitter extends Transform {
    constructor(nalFunctions: any);
    rbsp(data: any): any;
    findNalStart(buf: any): {
        index: any;
        length: number;
    };
    processFrame(frame: any): void;
    _transform(chunk: any, encoding: any, callback: any): void;
}
declare class H264NalSplitter extends AnnexBNalSplitter {
    constructor();
    removeEpbs(frame: any, unitType: any): any;
}
declare class H265NalSplitter extends AnnexBNalSplitter {
    constructor();
    removeEpbs(frame: any): any;
}
