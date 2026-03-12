import { Channel } from './Channel';
/**
 * Represents a channel that displays a directory of guilds.
 * @extends {Channel}
 */
declare class DirectoryChannel extends Channel {
    name: string;
    _patch(data: any): any;
}
export default DirectoryChannel;
