const fs = require('fs');
let code = fs.readFileSync('src/client/actions/ThreadMemberUpdate.ts', 'utf8');

code = code.replace(
  'const thread = client.channels.cache.get(data.id) ?? client.channels.cache.get(data.thread_id);',
  'const thread = (client.channels.cache.get(data.id) ?? client.channels.cache.get(data.thread_id)) as any;'
);

fs.writeFileSync('src/client/actions/ThreadMemberUpdate.ts', code);
