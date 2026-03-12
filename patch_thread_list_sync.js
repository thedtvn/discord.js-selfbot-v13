const fs = require('fs');
let code = fs.readFileSync('src/client/actions/ThreadListSync.ts', 'utf8');

code = code.replace(
  'data.members?.forEach(rawMember => {',
  'data.members?.forEach((rawMember: any) => {'
);
code = code.replace(
  'const thread = client.channels.cache.get(rawMember.id);',
  'const thread = client.channels.cache.get(rawMember.id) as any;'
);

fs.writeFileSync('src/client/actions/ThreadListSync.ts', code);
