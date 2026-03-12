import Base from './Base';
/**
 * @type {WeakSet<StageInstance>}
 * @private
 * @internal
 */
declare const deletedStageInstances: WeakSet<WeakKey>;
/**
 * Represents a stage instance.
 * @extends {Base}
 */
declare class StageInstance extends Base {
    constructor(client: any, data: any);
    _patch(data: any): void;
    /**
     * The stage channel associated with this stage instance
     * @type {?StageChannel}
     * @readonly
     */
    get channel(): any;
    /**
     * The associated guild scheduled event of this stage instance
     * @type {?GuildScheduledEvent}
     * @readonly
     */
    get guildScheduledEvent(): any;
    /**
     * Whether or not the stage instance has been deleted
     * @type {boolean}
     * @deprecated This will be removed in the next major version, see https://github.com/discordjs/discord.js/issues/7091
     */
    get deleted(): boolean;
    set deleted(value: boolean);
    /**
     * The guild this stage instance belongs to
     * @type {?Guild}
     * @readonly
     */
    get guild(): any;
    /**
     * Edits this stage instance.
     * @param {StageInstanceEditOptions} options The options to edit the stage instance
     * @returns {Promise<StageInstance>}
     * @example
     * // Edit a stage instance
     * stageInstance.edit({ topic: 'new topic' })
     *  .then(stageInstance => console.log(stageInstance))
     *  .catch(console.error)
     */
    edit(options: any): any;
    /**
     * Deletes this stage instance.
     * @returns {Promise<StageInstance>}
     * @example
     * // Delete a stage instance
     * stageInstance.delete()
     *  .then(stageInstance => console.log(stageInstance))
     *  .catch(console.error);
     */
    delete(): Promise<this>;
    /**
     * Sets the topic of this stage instance.
     * @param {string} topic The topic for the stage instance
     * @returns {Promise<StageInstance>}
     * @example
     * // Set topic of a stage instance
     * stageInstance.setTopic('new topic')
     *  .then(stageInstance => console.log(`Set the topic to: ${stageInstance.topic}`))
     *  .catch(console.error);
     */
    setTopic(topic: any): any;
    /**
     * The timestamp this stage instances was created at
     * @type {number}
     * @readonly
     */
    get createdTimestamp(): number;
    /**
     * The time this stage instance was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): Date;
}
export { StageInstance, deletedStageInstances };
