'use strict';

const assert = require('assert');

module.exports = async function restWsTests(client) {
  // REST: fetch self user
  const user = await client.users.fetch(client.user.id);
  assert.strictEqual(user.id, client.user.id);
  assert.strictEqual(user.username, client.user.username);

  // REST: fetch guild (if available)
  const guild = client.guilds.cache.first();
  if (guild) {
    const fetchedGuild = await client.guilds.fetch(guild.id);
    assert.ok(fetchedGuild);
    assert.strictEqual(fetchedGuild.id, guild.id);
  }

  // REST: fetch channel (if available)
  const channel = client.channels.cache.first();
  if (channel) {
    const fetchedChannel = await client.channels.fetch(channel.id);
    assert.ok(fetchedChannel);
    assert.strictEqual(fetchedChannel.id, channel.id);
  }

  // WebSocket: ping
  assert.strictEqual(typeof client.ws.ping, 'number');
  assert.ok(client.ws.ping >= -1);

  // WebSocket: status (READY = 0)
  assert.strictEqual(client.ws.status, 0);

  // WebSocket: shards
  assert.ok(client.ws.shards);
  assert.ok(client.ws.shards.size >= 0);

  console.log('    REST fetch (user, guild, channel), WebSocket ping/status/shards');
};
