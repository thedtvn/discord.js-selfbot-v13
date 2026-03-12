const fs = require('fs');
let code = fs.readFileSync('src/client/actions/Action.ts', 'utf8');

code = code.replace(
  'interface CacheLike<T> {\n  cache: Map<string, T>;\n  _add: (data: unknown, cache?: boolean) => T;\n}',
  'interface CacheLike<T> {\n  cache: Map<string, T>;\n  _add: (...args: any[]) => T;\n}'
);

code = code.replace(
  'this.client.options.partials.includes(partialType)',
  '(this.client.options.partials as string[]).includes(partialType)'
);

code = code.replace(
  'data[this.client.actions.injectedChannel] ??',
  'data[this.client.actions.injectedChannel as any] ??'
);

code = code.replace(
  'data[this.client.actions.injectedMessage] ??',
  'data[this.client.actions.injectedMessage as any] ??'
);

code = code.replace(
  'data[this.client.actions.injectedUser] ??',
  'data[this.client.actions.injectedUser as any] ??'
);

// also fix ChannelLike.isText() ? Wait, the task says:
// 3. For ChannelLike type issues: check if src/structures/Channel.ts exports proper ChannelLike type with isText property
// But Action.ts has its own ChannelLike interface!
code = code.replace(
  'interface ChannelLike {\n  id: string;\n  guild?: { id: string };\n  messages: CacheLike<unknown>;\n}',
  'interface ChannelLike {\n  id: string;\n  guild?: { id: string; stageInstances?: any };\n  messages: CacheLike<unknown>;\n  isText: () => boolean;\n  lastMessageId?: string;\n  type?: string;\n}'
);

// fix MessageLike for partial and reactions and author
code = code.replace(
  'interface MessageLike {\n  partial?: boolean;\n  reactions: CacheLike<unknown>;\n}',
  'interface MessageLike {\n  partial?: boolean;\n  reactions: CacheLike<unknown>;\n  author?: { id: string };\n  poll?: any;\n  _update?: (data: any) => any;\n}'
);

fs.writeFileSync('src/client/actions/Action.ts', code);
