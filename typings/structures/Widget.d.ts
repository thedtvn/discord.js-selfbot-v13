import { Collection } from '@discordjs/collection';
import Base from './Base';
import WidgetMember from './WidgetMember';
/**
 * Represents a Widget.
 * @extends {Base}
 */
declare class Widget extends Base {
    id: string;
    name: string;
    instantInvite: string | null;
    channels: Collection<string, {
        id: string;
        name: string;
        position: number;
    }>;
    members: Collection<string, WidgetMember>;
    presenceCount: number;
    constructor(client: any, data: any);
    /**
     * Represents a channel in a Widget
     * @typedef {Object} WidgetChannel
     * @property {Snowflake} id Id of the channel
     * @property {string} name Name of the channel
     * @property {number} position Position of the channel
     */
    _patch(data: any): any;
    /**
     * Update the Widget.
     * @returns {Promise<Widget>}
     */
    fetch(): Promise<this>;
}
export default Widget;
