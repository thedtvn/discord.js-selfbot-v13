const fs = require('fs');
let content = fs.readFileSync('src/client/voice/VoiceConnection.ts', 'utf8');

content = content.replace(
  /this\.ssrcMap\.set\(\+ssrc, \{\s*\.\.\.\(this\.ssrcMap\.get\(\+ssrc\) \|\| \{\}\),\s*userId: user_id,\s*speaking: speaking,\s*\}\);/g,
  `this.ssrcMap.set(+ssrc, {
      hasVideo: false,
      ...(this.ssrcMap.get(+ssrc) || {}),
      userId: user_id,
      speaking: speaking,
    });`
);

content = content.replace(
  /this\.ssrcMap\.set\(\+audio_ssrc, \{\s*\.\.\.\(this\.ssrcMap\.get\(\+audio_ssrc\) \|\| \{\}\),\s*userId: user_id,\s*hasVideo: Boolean\(video_ssrc\),\s*\/\/\s*Maybe\s*\?\s*\}\);/g,
  `this.ssrcMap.set(+audio_ssrc, {
      speaking: 0,
      ...(this.ssrcMap.get(+audio_ssrc) || {}),
      userId: user_id,
      hasVideo: Boolean(video_ssrc), // Maybe ?
    });`
);

fs.writeFileSync('src/client/voice/VoiceConnection.ts', content);
