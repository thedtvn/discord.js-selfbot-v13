const fs = require('fs');
let code = fs.readFileSync('src/client/actions/ThreadMembersUpdate.ts', 'utf8');

code = code.replace(
  'const thread = client.channels.cache.get(data.id);',
  'const thread = client.channels.cache.get(data.id) as any;'
);
// data.added_members?.forEach(rawMember => {
code = code.replace(
  'data.added_members?.forEach(rawMember => {',
  'data.added_members?.forEach((rawMember: any) => {'
);
// data.removed_member_ids?.forEach(memberId => {
code = code.replace(
  'data.removed_member_ids?.forEach(memberId => {',
  'data.removed_member_ids?.forEach((memberId: any) => {'
);

fs.writeFileSync('src/client/actions/ThreadMembersUpdate.ts', code);
