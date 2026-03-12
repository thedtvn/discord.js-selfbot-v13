import ThreadOnlyChannel from './ThreadOnlyChannel';
/**
 * Represents a forum channel.
 * @extends {ThreadOnlyChannel}
 */
declare class ForumChannel extends ThreadOnlyChannel {
    _patch(data: any): void;
    /**
     * Sets the default forum layout type used to display posts
     * @param {ForumLayoutType} defaultForumLayout The default forum layout type to set on this channel
     * @param {string} [reason] Reason for changing the default forum layout
     * @returns {Promise<ForumChannel>}
     */
    setDefaultForumLayout(defaultForumLayout: any, reason: any): any;
}
export default ForumChannel;
