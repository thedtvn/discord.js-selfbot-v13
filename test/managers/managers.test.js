'use strict';

const assert = require('assert');
const {
  GuildManager, ChannelManager, UserManager,
  GuildChannelManager, RoleManager, GuildMemberManager,
  Collection,
} = require('../../dist/index.js');

module.exports = async function managersTests(client) {
  // GuildManager
  assert.ok(client.guilds instanceof GuildManager);
  assert.ok(client.guilds.cache instanceof Collection);
  assert.ok(client.guilds.cache.size >= 0);
  assert.strictEqual(typeof client.guilds.resolve, 'function');
  assert.strictEqual(typeof client.guilds.fetch, 'function');

  // ChannelManager
  assert.ok(client.channels instanceof ChannelManager);
  assert.ok(client.channels.cache instanceof Collection);
  assert.strictEqual(typeof client.channels.resolve, 'function');
  assert.strictEqual(typeof client.channels.fetch, 'function');

  // UserManager
  assert.ok(client.users instanceof UserManager);
  assert.ok(client.users.cache instanceof Collection);
  assert.strictEqual(typeof client.users.resolve, 'function');
  assert.strictEqual(typeof client.users.fetch, 'function');

  const selfUser = client.users.cache.get(client.user.id);
  assert.ok(selfUser);
  assert.strictEqual(selfUser.id, client.user.id);

  // Fetch own user via REST
  const fetchedUser = await client.users.fetch(client.user.id);
  assert.strictEqual(fetchedUser.id, client.user.id);
  assert.strictEqual(fetchedUser.username, client.user.username);

  const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
  if (!guild) {
    console.log('    [SKIP] No owned guild — skipping GuildChannelManager, RoleManager, MemberManager');
    console.log('    GuildManager, ChannelManager, UserManager');
    return;
  }

  // GuildChannelManager
  assert.ok(guild.channels instanceof GuildChannelManager);
  assert.ok(guild.channels.cache instanceof Collection);
  assert.strictEqual(typeof guild.channels.create, 'function');
  assert.strictEqual(typeof guild.channels.fetch, 'function');

  // RoleManager
  assert.ok(guild.roles instanceof RoleManager);
  assert.ok(guild.roles.cache instanceof Collection);
  assert.ok(guild.roles.cache.size >= 1);
  assert.strictEqual(typeof guild.roles.create, 'function');
  assert.strictEqual(typeof guild.roles.fetch, 'function');

  const fetchedRoles = await guild.roles.fetch();
  assert.ok(fetchedRoles instanceof Collection);
  assert.ok(fetchedRoles.size >= 1);

  // GuildMemberManager
  assert.ok(guild.members instanceof GuildMemberManager);
  assert.ok(guild.members.cache instanceof Collection);
  assert.strictEqual(typeof guild.members.fetch, 'function');

  const selfMember = await guild.members.fetch(client.user.id);
  assert.strictEqual(selfMember.id, client.user.id);

  console.log('    GuildManager, ChannelManager, UserManager, GuildChannelManager, RoleManager, MemberManager');
};
