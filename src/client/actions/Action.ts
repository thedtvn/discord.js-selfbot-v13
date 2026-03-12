import { PartialTypes } from '../../util/Constants';
import type Client from '../Client';

interface CacheLike<T> {
  cache: Map<string, T>;
  _add: (data: unknown, cache?: boolean) => T;
}

interface ChannelLike {
  id: string;
  guild?: { id: string };
  messages: CacheLike<unknown>;
}

interface MessageLike {
  partial?: boolean;
  reactions: CacheLike<unknown>;
}

interface GuildLike {
  id: string;
  members: CacheLike<unknown>;
  scheduledEvents: CacheLike<unknown>;
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

  handle(data: any): any {
    return data;
  }

  getPayload<T>(data: unknown, manager: CacheLike<T>, id: string, partialType: string, cache?: boolean): T | undefined {
    const existing = manager.cache.get(id);
    if (!existing && this.client.options.partials.includes(partialType)) {
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
      data[this.client.actions.injectedChannel] ??
      this.getPayload({ ...data, ...payloadData }, this.client.channels, id, PartialTypes.CHANNEL)
    );
  }

  getMessage(data: Record<string, any>, channel: ChannelLike, cache?: boolean): unknown {
    const id = data.message_id ?? data.id;
    return (
      data[this.client.actions.injectedMessage] ??
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

  getReaction(data: Record<string, any>, message: MessageLike, user?: { id: string }): unknown {
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

  getMember(data: Record<string, any>, guild: GuildLike): unknown {
    return this.getPayload(data, guild.members, data.user.id, PartialTypes.GUILD_MEMBER);
  }

  getUser(data: Record<string, any>): unknown {
    const id = data.user_id;
    return data[this.client.actions.injectedUser] ?? this.getPayload({ id }, this.client.users, id, PartialTypes.USER);
  }

  getUserFromMember(data: Record<string, any>): unknown {
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

  getScheduledEvent(data: Record<string, any>, guild: GuildLike): unknown {
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
