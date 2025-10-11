> [!IMPORTANT]
> ## Project Archival
> 
> **This project is no longer actively maintained and this repository has been archived.**
>
> You can read the full announcement [here](https://github.com/aiko-chan-ai/discord.js-selfbot-v13/discussions/1743)

<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
</div>

> [!CAUTION]
> **The use of this module under a different name on NPM (or another source besides this Github) is not associated with this library.**
> **When using these libraries, you accept the risk of exposing your Discord Token.**

## About

<strong>Welcome to `discord.js-selfbot-v13@v3.7`, based on `discord.js@13.17` and backport `discord.js@14.21.0`</strong>

- discord.js-selfbot-v13 is a [Node.js](https://nodejs.org) module that allows user accounts to interact with the Discord API v9.


<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/discord.js-selfbot-v13"><img src="https://img.shields.io/npm/v/discord.js-selfbot-v13.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/discord.js-selfbot-v13"><img src="https://img.shields.io/npm/dt/discord.js-selfbot-v13.svg" alt="npm downloads" /></a>
    <a href="https://github.com/aiko-chan-ai/discord.js-selfbot-v13/actions"><img src="https://github.com/aiko-chan-ai/discord.js-selfbot-v13/actions/workflows/lint.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

> [!WARNING]
> **I don't take any responsibility for blocked Discord accounts that used this module.**

> [!CAUTION]
> **Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to the account block.**

### <strong>[Document Website](https://discordjs-self-v13.netlify.app/)</strong>

### <strong>[Example Code](https://github.com/aiko-chan-ai/discord.js-selfbot-v13/tree/main/examples)</strong>

## Features (User)
- [x] Message
- [x] ClientUser: Status, Activity, RemoteAuth, etc.
- [X] Guild: Fetch Members, Join / Leave, Top emojis, etc.
- [X] Interactions: Slash Commands, Buttons, Menu, Modal.
- [X] Captcha & TOTP Handler
- [X] Documentation
- [x] Voice & Video
- [ ] Everything

## Installation

> [!NOTE]
> **Node.js 20.18.0 or newer is required**

```sh-session
npm install discord.js-selfbot-v13@latest
```

## Example

```js
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login('token');
```

## Get Token ?

- Based: [findByProps](https://discord.com/channels/603970300668805120/1085682686607249478/1085682686607249478)

<strong>Run code (Discord Console - [Ctrl + Shift + I])</strong>

```js
window.webpackChunkdiscord_app.push([
	[Symbol()],
	{},
	req => {
		if (!req.c) return;
		for (let m of Object.values(req.c)) {
			try {
				if (!m.exports || m.exports === window) continue;
				if (m.exports?.getToken) return copy(m.exports.getToken());
				for (let ex in m.exports) {
					if (m.exports?.[ex]?.getToken && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return copy(m.exports[ex].getToken());
				}
			} catch {}
		}
	},
]);

window.webpackChunkdiscord_app.pop();
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

## Contributing

- Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://discordjs-self-v13.netlify.app/).  
- See [the contribution guide](https://github.com/discordjs/discord.js/blob/main/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Need help?
Github Discussion: [Here](https://github.com/aiko-chan-ai/discord.js-selfbot-v13/discussions)

## Credits
- [Discord.js](https://github.com/discordjs/discord.js)

## <strong>Other project(s)

- 📘 [***aiko-chan-ai/DiscordBotClient***](https://github.com/aiko-chan-ai/DiscordBotClient) <br/>
  A patched version of discord, with bot login support

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=aiko-chan-ai/discord.js-selfbot-v13&type=Date)](https://star-history.com/#aiko-chan-ai/discord.js-selfbot-v13&Date)
