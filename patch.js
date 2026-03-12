const fs = require('fs');
let content = fs.readFileSync('src/client/voice/VoiceConnection.ts', 'utf8');

content = content.replace(/get streamConnection\(\): this \{\s*return this;\s*\}\s*set streamConnection\(value: any\) \{\s*\/\/\s*Why\s*\?\s*\}/g, "/* StreamConnection property handled in constructor */");
content = content.replace(/get streamWatchConnection\(\): Collection<string, StreamConnectionReadonly> \{\s*return new Collection\(\);\s*\}\s*set streamWatchConnection\(value: any\) \{\s*\/\/\s*Why\s*\?\s*\}/g, "/* StreamWatchConnection property handled in constructor */");

content = content.replace(/get streamConnection\(\): null \{\s*return null;\s*\}\s*set streamConnection\(value: any\) \{\s*\/\/\s*Why\s*\?\s*\}/g, "/* StreamConnection property handled in constructor */");

fs.writeFileSync('src/client/voice/VoiceConnection.ts', content);
