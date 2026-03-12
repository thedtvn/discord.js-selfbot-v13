/**
 * Represents a Discord voice region for guilds.
 */
declare class VoiceRegion {
    id: string;
    name: string;
    vip: boolean;
    deprecated: boolean;
    optimal: boolean;
    custom: boolean;
    constructor(data: any);
    toJSON(): Record<string, any>;
}
export default VoiceRegion;
