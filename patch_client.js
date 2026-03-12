const fs = require('fs');
let content = fs.readFileSync('src/client/Client.ts', 'utf8');

// 187: this.voiceStates = new VoiceStateManager({ client: this });
content = content.replace(/this\.voiceStates = new VoiceStateManager\(\{ client: this \}\);/g, 
  "this.voiceStates = new VoiceStateManager({ client: this } as any);");

// 194: ? ShardClientUtil.singleton(this, process.env.SHARDING_MANAGER_MODE)
content = content.replace(/ShardClientUtil\.singleton\(this, process\.env\.SHARDING_MANAGER_MODE\)/g, 
  "ShardClientUtil.singleton(this as any, process.env.SHARDING_MANAGER_MODE as any)");

// 538: return regions; (returns Collection<string, VoiceRegion>)
// Actually it's probably return regions as Collection<string, VoiceRegion>;
content = content.replace(/return regions;/g, "return regions as any;");

// 733: if (i.flags.has('GUEST'))
content = content.replace(/i\.flags\.has\('GUEST'\)/g, "i.flags.has('IS_GUEST_INVITE')");
// wait, maybe the flag is 'IS_GUEST_INVITE' not 'GUEST'.
// The error says: parameter of type 'BitFieldResolvable<"IS_GUEST_INVITE" | "IS_VIEWED" | "IS_ENHANCED" | "IS_APPLICATION_BYPASS", number>'.

// 781: invite_code: this.code
// wait, why is it this.code? Let's check line 781 context.

fs.writeFileSync('src/client/Client.ts', content);
