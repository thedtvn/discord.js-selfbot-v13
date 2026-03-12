import Base from './Base';
/**
 * Represents a Widget.
 * @extends {Base}
 */
declare class Widget extends Base {
    constructor(client: any, data: any);
    /**
     * Represents a channel in a Widget
     * @typedef {Object} WidgetChannel
     * @property {Snowflake} id Id of the channel
     * @property {string} name Name of the channel
     * @property {number} position Position of the channel
     */
    _patch(data: any): void;
    /**
     * Update the Widget.
     * @returns {Promise<Widget>}
     */
    fetch(): Promise<this>;
}
export default Widget;
