import { PartialTypes } from '../../util/Constants';
import type Client from '../Client';

interface CacheLike<T> {
  cache: Map<string, T>;
  _add: (...args: any[]) => T;
}

interface ChannelLike {
  id: string;
  guild?: { id: string; stageInstances?: any };
  messages: CacheLike<any>;
  isText: () => boolean;
  lastMessageId?: string;
  type?: string;
}

interface MessageLike {
  partial?: boolean;
  reactions: CacheLike<any>;
  author?: { id: string };
  poll?: any;
  _update?: (data: any) => any;
}

interface GuildLike {
  id: string;
  members: CacheLike<any>;
  scheduledEvents: CacheLike<any>;
}

/*

ABOUT ACTIONS

Actions are similar to WebSocket Packet Handlers, but since introducing
the REST API methods, in order to prevent rewriting code to handle data,
"actions" have been introduced. They're basically what Packet Handlers
used to be but they're strictly for manipulating data and making sure
that WebSocket events don't clash with REST methods.

*/

class GenericAction {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  handle(...args: any[]): any {
    return args[0];
  }

  getPayload<T>(data: unknown, manager: CacheLike<T>, id: string, partialType: string, cache?: boolean): T | undefined {
    const existing = manager.cache.get(id);
    if (!existing && (this.client.options.partials as string[]).includes(partialType)) {
      return manager._add(data, cache);
    }
    return existing;
  }

  getChannel(data: Record<string, any>): ChannelLike | undefined {
    const payloadData: Record<string, unknown> = {};
    const id = data.channel_id ?? data.id;

    if (!('recipients' in data)) {
      // Try to resolve the recipient, but do not add the client user.
      const recipient = data.author ?? data.user ?? { id: data.user_id };
      if (recipient.id !== this.client.user.id) payloadData.recipients = [recipient];
    }

    if (id !== undefined) payloadData.id = id;

    return (
      data[this.client.actions.injectedChannel as any] ??
      this.getPayload({ ...data, ...payloadData }, this.client.channels as any, id, PartialTypes.CHANNEL)
    );
  }

  getMessage(data: Record<string, any>, channel: ChannelLike, cache?: boolean): any {
    const id = data.message_id ?? data.id;
    return (
      data[this.client.actions.injectedMessage as any] ??
      this.getPayload(
        {
          id,
          channel_id: channel.id,
          guild_id: data.guild_id ?? channel.guild?.id,
        },
        channel.messages,
        id,
        PartialTypes.MESSAGE,
        cache,
      )
    );
  }

  getReaction(data: Record<string, any>, message: MessageLike, user?: { id: string }): any {
    const id = data.emoji.id ?? decodeURIComponent(data.emoji.name);
    return this.getPayload(
      {
        emoji: data.emoji,
        count: message.partial ? null : 0,
        me: user?.id === this.client.user.id,
      },
      message.reactions,
      id,
      PartialTypes.REACTION,
    );
  }

  getMember(data: Record<string, any>, guild: GuildLike): any {
    return this.getPayload(data, guild.members, data.user.id, PartialTypes.GUILD_MEMBER);
  }

  getUser(data: Record<string, any>): any {
    const id = data.user_id;
    return data[this.client.actions.injectedUser as any] ?? this.getPayload({ id }, this.client.users, id, PartialTypes.USER);
  }

  getUserFromMember(data: Record<string, any>): any {
    if (data.guild_id && data.member?.user) {
      const guild = this.client.guilds.cache.get(data.guild_id);
      if (guild) {
        return guild.members._add(data.member).user;
      } else {
        return this.client.users._add(data.member.user);
      }
    }
    return this.getUser(data);
  }

  getScheduledEvent(data: Record<string, any>, guild: GuildLike): any {
    const id = data.guild_scheduled_event_id ?? data.id;
    return this.getPayload(
      { id, guild_id: data.guild_id ?? guild.id },
      guild.scheduledEvents,
      id,
      PartialTypes.GUILD_SCHEDULED_EVENT,
    );
  }
}

export default GenericAction;
