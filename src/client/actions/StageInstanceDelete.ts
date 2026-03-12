import Action from './Action';
import { deletedStageInstances } from '../../structures/StageInstance';
import { Events } from '../../util/Constants';

class StageInstanceDeleteAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const channel = this.getChannel({ id: data.channel_id, guild_id: data.guild_id });

    if (channel) {
      const stageInstance = channel.guild.stageInstances._add(data);
      if (stageInstance) {
        channel.guild.stageInstances.cache.delete(stageInstance.id);
        deletedStageInstances.add(stageInstance);

        /**
         * Emitted whenever a stage instance is deleted.
         * @event Client#stageInstanceDelete
         * @param {StageInstance} stageInstance The deleted stage instance
         */
        client.emit(Events.STAGE_INSTANCE_DELETE, stageInstance);

        return { stageInstance };
      }
    }

    return {};
  }
}

export default StageInstanceDeleteAction;
