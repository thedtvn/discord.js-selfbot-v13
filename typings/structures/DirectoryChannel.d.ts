import { Channel } from './Channel';
/**
 * Represents a channel that displays a directory of guilds.
 * @extends {Channel}
 */
declare class DirectoryChannel extends Channel {
    _patch(data: any): void;
}
export default DirectoryChannel;
