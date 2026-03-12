import BaseGuildVoiceChannel from './BaseGuildVoiceChannel';
/**
 * Represents a guild stage channel on Discord.
 * @extends {BaseGuildVoiceChannel}
 */
declare class StageChannel extends BaseGuildVoiceChannel {
    _patch(data: any): void;
    /**
     * The stage instance of this stage channel, if it exists
     * @type {?StageInstance}
     * @readonly
     */
    get stageInstance(): any;
    /**
     * Creates a stage instance associated with this stage channel.
     * @param {StageInstanceCreateOptions} options The options to create the stage instance
     * @returns {Promise<StageInstance>}
     */
    createStageInstance(options: any): any;
    /**
     * Sets a new topic for the guild channel.
     * @param {?string} topic The new topic for the guild channel
     * @param {string} [reason] Reason for changing the guild channel's topic
     * @returns {Promise<GuildChannel>}
     * @example
     * // Set a new channel topic
     * channel.setTopic('needs more rate limiting')
     *   .then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`))
     *   .catch(console.error);
     */
    setTopic(topic: any, reason: any): any;
}
export default StageChannel;
