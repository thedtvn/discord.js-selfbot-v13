const fs = require('fs');
let content = fs.readFileSync('src/client/voice/networking/VoiceUDPClient.ts', 'utf8');

content = content.replace(/if \(packet\.error\) \{/g, "if ('error' in packet) {");

fs.writeFileSync('src/client/voice/networking/VoiceUDPClient.ts', content);
