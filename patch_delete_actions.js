const fs = require('fs');

let channelDelete = fs.readFileSync('src/client/actions/ChannelDelete.ts', 'utf8');
channelDelete = channelDelete.replace(
  'class ChannelDeleteAction extends Action {',
  'class ChannelDeleteAction extends Action {\n  public deleted: Map<string, any>;'
);
fs.writeFileSync('src/client/actions/ChannelDelete.ts', channelDelete);

let guildDelete = fs.readFileSync('src/client/actions/GuildDelete.ts', 'utf8');
guildDelete = guildDelete.replace(
  'class GuildDeleteAction extends Action {',
  'class GuildDeleteAction extends Action {\n  public deleted: Map<string, any>;'
);
fs.writeFileSync('src/client/actions/GuildDelete.ts', guildDelete);

