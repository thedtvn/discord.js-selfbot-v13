const fs = require('fs');
let content = fs.readFileSync('src/client/Client.ts', 'utf8');

content = content.replace(/const results = new Collection\(\);/g, "const results = new Collection<string, AuthorizedApplicationData>();");

fs.writeFileSync('src/client/Client.ts', content);
