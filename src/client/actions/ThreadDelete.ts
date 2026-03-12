import Action from './Action';
import { deletedChannels } from '../../structures/Channel';
import { deletedMessages } from '../../structures/Message';
import { Events } from '../../util/Constants';

class ThreadDeleteAction extends Action {
  handle(data: any): any {
    const client = this.client;
    const thread = client.channels.cache.get(data.id);

    if (thread) {
      client.channels._remove(thread.id);
      deletedChannels.add(thread);
      for (const message of thread.messages.cache.values()) {
        deletedMessages.add(message);
      }

      /**
       * Emitted whenever a thread is deleted.
       * @event Client#threadDelete
       * @param {ThreadChannel} thread The thread that was deleted
       */
      client.emit(Events.THREAD_DELETE, thread);
    }

    return { thread };
  }
}

export default ThreadDeleteAction;
