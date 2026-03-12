import Util from '../util/Util';

/**
 * Represents a Discord voice region for guilds.
 */
class VoiceRegion {
  public id: string;
  public name: string;
  public vip: boolean;
  public deprecated: boolean;
  public optimal: boolean;
  public custom: boolean;

  constructor(data: any) {
    /**
     * The region's id
     * @type {string}
     */
    this.id = data.id;

    /**
     * Name of the region
     * @type {string}
     */
    this.name = data.name;

    /**
     * Whether the region is VIP-only
     * @type {boolean}
     * @deprecated This property is no longer being sent by the API.
     */
    this.vip = data.vip;

    /**
     * Whether the region is deprecated
     * @type {boolean}
     */
    this.deprecated = data.deprecated;

    /**
     * Whether the region is optimal
     * @type {boolean}
     */
    this.optimal = data.optimal;

    /**
     * Whether the region is custom
     * @type {boolean}
     */
    this.custom = data.custom;
  }

  toJSON(): Record<string, any> {
    return Util.flatten(this);
  }
}


export default VoiceRegion;
