# Tests

## Setup

```bash
npm run build          # compile TypeScript to dist/
export DISCORD_TOKEN="your_token"
```

## Running

```bash
node test/index.js             # full suite (offline + online)
node test/index.js --offline   # util/builder tests only (no token needed)
```

Individual modules:

```bash
node -e "require('./test/util/util.test')()"
node -e "require('./test/structures/builders.test')()"
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DISCORD_TOKEN` | For online tests | Discord user account token |

## Test Coverage

### Offline (no token)
- **Util** — BitField, Permissions, Intents, UserFlags, MessageFlags, SystemChannelFlags, SnowflakeUtil, Collection, LimitedCollection, Formatters
- **Builders** — MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, TextInputComponent, Modal, MessageAttachment

### Online (requires token + test server)
- **Client** — login, readyAt, user properties, avatar, caches, WebSocket state
- **Structures** — User, Guild, Role, GuildChannel, TextChannel, VoiceChannel, CategoryChannel, GuildMember
- **Managers** — GuildManager, ChannelManager, UserManager, GuildChannelManager, RoleManager, GuildMemberManager (cache + REST fetch)
- **Messages** — send, edit, delete, embeds, reactions, pin/unpin, fetch, bulk operations
- **REST & WebSocket** — API connectivity, user/guild/channel fetch, ping, status, shards
- **Voice** — ClientVoiceManager, VoiceChannel properties, join/disconnect lifecycle

## Test Server Setup

Online tests require the account to own at least one guild. The message test will auto-create a `#test-messages` channel. The voice test will auto-create a `#test-voice` channel.
