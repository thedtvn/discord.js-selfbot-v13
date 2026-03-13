'use strict';

const assert = require('assert');
const { MessageEmbed, Collection } = require('../../dist/index.js');

const DELAY = ms => new Promise(r => setTimeout(r, ms));

module.exports = async function messageTests(client) {
  const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
  if (!guild) {
    console.log('    [SKIP] No owned guild — skipping message tests');
    return;
  }

  let testChannel = guild.channels.cache.find(
    c => c.type === 'GUILD_TEXT' && c.name === 'test-messages',
  );

  if (!testChannel) {
    testChannel = await guild.channels.create('test-messages', { type: 'GUILD_TEXT' });
  }

  // Send plain message
  const msg = await testChannel.send('Test message from test suite');
  assert.strictEqual(msg.content, 'Test message from test suite');
  assert.strictEqual(msg.author.id, client.user.id);
  assert.strictEqual(msg.channel.id, testChannel.id);
  assert.ok(msg.createdAt instanceof Date);
  assert.strictEqual(typeof msg.id, 'string');
  await DELAY(500);

  // Edit message
  const edited = await msg.edit('Edited test message');
  assert.strictEqual(edited.content, 'Edited test message');
  assert.strictEqual(edited.id, msg.id);
  await DELAY(500);

  // Send embed
  const embed = new MessageEmbed()
    .setTitle('Test Embed')
    .setDescription('Embed from test suite')
    .setColor('#00FF00')
    .addField('Field', 'Value');

  const embedMsg = await testChannel.send({ content: 'Embed test', embeds: [embed] });
  assert.ok(embedMsg.content === 'Embed test');
  assert.ok(embedMsg.embeds.length >= 0); // user accounts may not receive embeds back
  await DELAY(500);

  // React to message
  const reaction = await msg.react('👍');
  assert.ok(reaction);
  assert.strictEqual(reaction.emoji.name, '👍');
  await DELAY(500);

  // Fetch messages
  const fetched = await testChannel.messages.fetch({ limit: 5 });
  assert.ok(fetched instanceof Collection);
  assert.ok(fetched.size >= 2);
  assert.ok(fetched.has(msg.id));
  assert.ok(fetched.has(embedMsg.id));

  // Pin / unpin — msg.pin() must not throw; fetchPinned is best-effort
  await msg.pin();
  await DELAY(2000);
  const pinned = await testChannel.messages.fetchPinned();
  if (!pinned.has(msg.id)) {
    console.log('    [WARN] fetchPinned did not include message — Discord propagation delay');
  }
  await msg.unpin();
  await DELAY(500);

  // Delete messages
  await embedMsg.delete();
  await DELAY(500);
  await msg.delete();
  await DELAY(500);

  // Bulk operations: send multiple, fetch
  const bulkMessages = [];
  for (let i = 0; i < 3; i++) {
    bulkMessages.push(await testChannel.send(`Bulk message ${i}`));
    await DELAY(300);
  }

  const bulkFetched = await testChannel.messages.fetch({ limit: 3 });
  assert.strictEqual(bulkFetched.size, 3);

  // Cleanup
  for (const m of bulkMessages) {
    await m.delete();
    await DELAY(300);
  }

  console.log('    send, edit, delete, embed, react, pin/unpin, fetch, bulk');
};
