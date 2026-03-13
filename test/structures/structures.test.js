'use strict';

const assert = require('assert');
const {
  Guild, User, GuildMember, Role, GuildChannel,
  TextChannel, VoiceChannel, CategoryChannel,
  Collection, Permissions,
} = require('../../dist/index.js');

module.exports = async function structuresTests(client) {
  // User
  const user = client.user;
  assert.ok(user instanceof User);
  assert.strictEqual(typeof user.id, 'string');
  assert.strictEqual(typeof user.username, 'string');
  assert.strictEqual(typeof user.discriminator, 'string');
  assert.strictEqual(typeof user.bot, 'boolean');
  assert.strictEqual(user.bot, false);
  assert.strictEqual(typeof user.system, 'boolean');
  assert.ok(user.createdAt instanceof Date);
  assert.ok(user.createdTimestamp > 0);
  assert.strictEqual(typeof user.defaultAvatarURL, 'string');
  assert.strictEqual(typeof user.tag, 'string');
  assert.strictEqual(typeof user.toString(), 'string');
  assert.ok(user.toString().includes(user.id));

  // Guild
  const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
  if (!guild) {
    console.log('    [SKIP] No owned guild found — skipping Guild, Role, Channel, Member tests');
    console.log('    User, basic properties');
    return;
  }

  assert.ok(guild instanceof Guild);
  assert.strictEqual(typeof guild.id, 'string');
  assert.strictEqual(typeof guild.name, 'string');
  assert.ok(guild.createdAt instanceof Date);
  assert.strictEqual(guild.ownerId, client.user.id);
  assert.strictEqual(typeof guild.memberCount, 'number');
  assert.ok(guild.memberCount >= 1);
  assert.ok(guild.roles.cache instanceof Collection);
  assert.ok(guild.channels.cache instanceof Collection);

  const iconURL = guild.iconURL({ format: 'png', size: 128 });
  if (guild.icon) {
    assert.ok(iconURL.includes('cdn.discordapp.com'));
  }

  // Role (@everyone always exists)
  const everyoneRole = guild.roles.cache.find(r => r.id === guild.id);
  assert.ok(everyoneRole instanceof Role);
  assert.strictEqual(everyoneRole.name, '@everyone');
  assert.ok(everyoneRole.permissions instanceof Permissions);
  assert.strictEqual(typeof everyoneRole.hexColor, 'string');
  assert.strictEqual(typeof everyoneRole.position, 'number');
  assert.strictEqual(typeof everyoneRole.hoist, 'boolean');
  assert.strictEqual(typeof everyoneRole.managed, 'boolean');
  assert.strictEqual(typeof everyoneRole.mentionable, 'boolean');
  assert.ok(everyoneRole.createdAt instanceof Date);

  // GuildChannel
  const channel = guild.channels.cache.first();
  if (channel) {
    assert.ok(channel instanceof GuildChannel);
    assert.strictEqual(typeof channel.id, 'string');
    assert.strictEqual(typeof channel.name, 'string');
    assert.strictEqual(typeof channel.type, 'string');
    assert.strictEqual(typeof channel.position, 'number');
    assert.strictEqual(channel.guild.id, guild.id);
    assert.ok(channel.createdAt instanceof Date);
    assert.strictEqual(typeof channel.toString(), 'string');
  }

  // TextChannel
  const textChannel = guild.channels.cache.find(c => c.type === 'GUILD_TEXT');
  if (textChannel) {
    assert.ok(textChannel instanceof TextChannel);
    assert.strictEqual(textChannel.type, 'GUILD_TEXT');
    assert.ok(textChannel.topic === null || typeof textChannel.topic === 'string');
    assert.strictEqual(typeof textChannel.nsfw, 'boolean');
  }

  // VoiceChannel
  const voiceChannel = guild.channels.cache.find(c => c.type === 'GUILD_VOICE');
  if (voiceChannel) {
    assert.ok(voiceChannel instanceof VoiceChannel);
    assert.strictEqual(voiceChannel.type, 'GUILD_VOICE');
    assert.strictEqual(typeof voiceChannel.bitrate, 'number');
    assert.ok(voiceChannel.bitrate > 0);
    assert.strictEqual(typeof voiceChannel.userLimit, 'number');
  }

  // CategoryChannel
  const category = guild.channels.cache.find(c => c.type === 'GUILD_CATEGORY');
  if (category) {
    assert.ok(category instanceof CategoryChannel);
    assert.strictEqual(category.type, 'GUILD_CATEGORY');
    assert.ok(category.children instanceof Collection);
  }

  // GuildMember (self)
  const me = guild.members.cache.get(client.user.id);
  if (me) {
    assert.ok(me instanceof GuildMember);
    assert.strictEqual(me.id, client.user.id);
    assert.ok(me.user instanceof User);
    assert.ok(me.roles.cache instanceof Collection);
    assert.ok(me.joinedAt instanceof Date || me.joinedAt === null);
    assert.strictEqual(typeof me.displayName, 'string');
    assert.ok(me.permissions instanceof Permissions);
  }

  console.log('    User, Guild, Role, Channel (Text/Voice/Category), GuildMember');
};
