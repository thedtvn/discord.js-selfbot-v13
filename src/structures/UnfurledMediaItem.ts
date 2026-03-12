class UnfurledMediaItem {
  public url: string | null;
  public data: any;

  /**
   * @property {string} [url] Supports arbitrary urls and `attachment://<filename>` references
   */
  /**
   * @param {UnfurledMediaItem | APIUnfurledMediaItem} [data={}] The data
   */
  constructor(data: any = {}) {
    /**
     * @type {string}
     */
    this.url = data.url ?? null;
    /**
     * @type {APIUnfurledMediaItem}
     */
    this.data = data;
  }
  /**
   * Returns the API-compatible JSON for this media item
   * @returns {APIUnfurledMediaItem}
   */
  toJSON(): any {
    return { ...this.data };
  }
}


export default UnfurledMediaItem;
