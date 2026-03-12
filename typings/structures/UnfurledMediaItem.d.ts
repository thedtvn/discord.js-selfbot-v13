declare class UnfurledMediaItem {
    url: string | null;
    data: any;
    /**
     * @property {string} [url] Supports arbitrary urls and `attachment://<filename>` references
     */
    /**
     * @param {UnfurledMediaItem | APIUnfurledMediaItem} [data={}] The data
     */
    constructor(data?: any);
    /**
     * Returns the API-compatible JSON for this media item
     * @returns {APIUnfurledMediaItem}
     */
    toJSON(): any;
}
export default UnfurledMediaItem;
