'use strict';

const assert = require('assert');

module.exports = async function clientTests(client) {
  assert.ok(client.readyAt instanceof Date);
  assert.ok(client.readyTimestamp > 0);
  assert.strictEqual(typeof client.uptime, 'number');
  assert.ok(client.uptime >= 0);

  // Client user
  const user = client.user;
  assert.ok(user);
  assert.strictEqual(typeof user.id, 'string');
  assert.strictEqual(typeof user.username, 'string');
  assert.strictEqual(typeof user.discriminator, 'string');
  assert.strictEqual(typeof user.tag, 'string');
  assert.ok(user.tag.includes(user.username));

  // Avatar
  const avatarURL = user.avatarURL({ format: 'png', size: 256 });
  if (user.avatar) {
    assert.ok(avatarURL.includes('cdn.discordapp.com'));
  }
  const displayURL = user.displayAvatarURL({ format: 'png' });
  assert.ok(displayURL.includes('cdn.discordapp.com'));

  // Client caches exist
  assert.ok(client.guilds);
  assert.ok(client.channels);
  assert.ok(client.users);
  assert.ok(client.voice);
  assert.ok(client.ws);

  // WebSocket manager
  assert.strictEqual(typeof client.ws.ping, 'number');
  assert.strictEqual(typeof client.ws.status, 'number');

  // Options
  assert.ok(client.options);
  assert.strictEqual(client.options.checkUpdate, false);

  // Token is set (not the actual value, just existence)
  assert.ok(client.token);

  console.log('    readyAt, user, avatar, caches, ws, options');
};
