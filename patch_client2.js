const fs = require('fs');
let content = fs.readFileSync('src/client/Client.ts', 'utf8');

content = content.replace(/invite_code: this\.code/g, "invite_code: i.code || (typeof invite === 'string' ? invite : undefined)");

content = content.replace(/channel = this\.channels\.resolveId\(channel\);/g, "channel = this.channels.resolveId(channel as any);");

content = content.replace(/return this\.api\.oauth2\.tokens\.get\(\)\.then/g, "return this.api.oauth2.tokens.get().then"); // Wait, I can just cast the whole thing.
// The easiest is to do `.then(data => {` and cast the return of the function inside `then` or whatever.
// Let's check `fetchAuthorizedApps`.

fs.writeFileSync('src/client/Client.ts', content);
