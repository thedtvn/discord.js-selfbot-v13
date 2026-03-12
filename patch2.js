const fs = require('fs');
let content = fs.readFileSync('src/client/voice/VoiceConnection.ts', 'utf8');

content = content.replace(/this\.region = null;\s+}/, `this.region = null;
    Object.defineProperty(this, 'streamConnection', { get: () => this, set: () => {} });
    Object.defineProperty(this, 'streamWatchConnection', { get: () => new Collection(), set: () => {} });
  }`);

content = content.replace(/this\.region = null;\s+}\s+createStreamConnection/, `this.region = null;
    Object.defineProperty(this, 'streamConnection', { get: () => null, set: () => {} });
    Object.defineProperty(this, 'streamWatchConnection', { get: () => new Collection(), set: () => {} });
  }

  createStreamConnection`); // Wait, this might match the first one. Let's do it better.

// Actually I'll just use sed manually
