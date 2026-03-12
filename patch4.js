const fs = require('fs');
let content = fs.readFileSync('src/client/voice/VoiceConnection.ts', 'utf8');

content = content.replace(
  /onSpeaking\(\{ user_id, speaking \}: \{ user_id: string; speaking: number \}\): void \{/g,
  `onSpeaking({ user_id, speaking }: { user_id: string; speaking: number }): void {`
); // no change

content = content.replace(
  /speaking = new Speaking\(speaking\)\.freeze\(\);/g,
  `const speakingObj = new Speaking(speaking).freeze();`
);

content = content.replace(
  /this\._speaking\.set\(user_id, speaking\);/g,
  `this._speaking.set(user_id, speakingObj);`
);

content = content.replace(
  /this\.emit\('speaking', user, speaking\);/g,
  `this.emit('speaking', user, speakingObj);`
);

content = content.replace(
  /if \(\!speaking\.has\(Speaking\.FLAGS\.SPEAKING\)\) \{/g,
  `if (!speakingObj.has(Speaking.FLAGS.SPEAKING)) {`
);

content = content.replace(
  /if \(guild && user && \!speaking\.equals\(old\)\) \{/g,
  `if (guild && user && !speakingObj.equals(old)) {`
);

content = content.replace(
  /this\.client\.emit\(Events\.GUILD_MEMBER_SPEAKING, member, speaking\);/g,
  `this.client.emit('guildMemberSpeaking' as any, member, speakingObj);`
);

fs.writeFileSync('src/client/voice/VoiceConnection.ts', content);
