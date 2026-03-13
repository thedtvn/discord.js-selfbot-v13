'use strict';

const assert = require('assert');
const {
  BitField, Permissions, Intents, UserFlags, MessageFlags,
  SystemChannelFlags, ThreadMemberFlags, ActivityFlags,
  ApplicationFlags, SnowflakeUtil, Collection,
  LimitedCollection, Formatters, ChannelFlags,
} = require('../../dist/index.js');

module.exports = async function utilTests() {
  // BitField
  const bf = new BitField(7);
  assert.strictEqual(bf.bitfield, 7);
  assert.ok(bf.has(1));
  assert.ok(bf.has(2));
  assert.ok(bf.has(4));
  assert.ok(!bf.has(8));

  const bf2 = new BitField([1, 4]);
  assert.strictEqual(bf2.bitfield, 5);
  assert.ok(bf2.has(1));
  assert.ok(!bf2.has(2));
  assert.ok(bf2.has(4));

  const bf3 = bf2.add(2);
  assert.ok(bf3.has(2));

  const bf4 = bf2.remove(4);
  assert.ok(!bf4.has(4));
  assert.ok(bf4.has(1));

  // Permissions
  const perms = new Permissions([
    Permissions.FLAGS.VIEW_CHANNEL,
    Permissions.FLAGS.SEND_MESSAGES,
    Permissions.FLAGS.EMBED_LINKS,
  ]);
  assert.ok(perms.has(Permissions.FLAGS.VIEW_CHANNEL));
  assert.ok(perms.has(Permissions.FLAGS.SEND_MESSAGES));
  assert.ok(perms.has(Permissions.FLAGS.EMBED_LINKS));
  assert.ok(!perms.has(Permissions.FLAGS.ADMINISTRATOR));
  assert.ok(!perms.has(Permissions.FLAGS.MANAGE_GUILD));

  const adminPerms = new Permissions(Permissions.FLAGS.ADMINISTRATOR);
  assert.ok(adminPerms.has(Permissions.FLAGS.ADMINISTRATOR));
  assert.ok(adminPerms.has(Permissions.FLAGS.VIEW_CHANNEL));
  assert.ok(!adminPerms.has(Permissions.FLAGS.VIEW_CHANNEL, false));

  const serialized = perms.serialize();
  assert.strictEqual(serialized.VIEW_CHANNEL, true);
  assert.strictEqual(serialized.SEND_MESSAGES, true);
  assert.strictEqual(serialized.ADMINISTRATOR, false);

  const allPerms = new Permissions(Permissions.ALL);
  assert.ok(allPerms.has(Permissions.FLAGS.KICK_MEMBERS));

  // Intents
  const intents = new Intents([
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ]);
  assert.ok(intents.has(Intents.FLAGS.GUILDS));
  assert.ok(intents.has(Intents.FLAGS.GUILD_MESSAGES));
  assert.ok(intents.has(Intents.FLAGS.DIRECT_MESSAGES));
  assert.ok(!intents.has(Intents.FLAGS.GUILD_MEMBERS));
  assert.ok(!intents.has(Intents.FLAGS.GUILD_PRESENCES));

  // UserFlags
  assert.ok(UserFlags.FLAGS.DISCORD_EMPLOYEE);
  assert.ok(UserFlags.FLAGS.PARTNERED_SERVER_OWNER);
  assert.ok(UserFlags.FLAGS.HYPESQUAD_EVENTS);
  assert.ok(UserFlags.FLAGS.HOUSE_BRAVERY);
  assert.ok(UserFlags.FLAGS.HOUSE_BRILLIANCE);
  assert.ok(UserFlags.FLAGS.HOUSE_BALANCE);

  // MessageFlags
  assert.ok(MessageFlags.FLAGS.CROSSPOSTED !== undefined);
  assert.ok(MessageFlags.FLAGS.IS_CROSSPOST !== undefined);
  assert.ok(MessageFlags.FLAGS.SUPPRESS_EMBEDS !== undefined);
  assert.ok(MessageFlags.FLAGS.EPHEMERAL !== undefined);

  // SystemChannelFlags
  assert.ok(SystemChannelFlags.FLAGS.SUPPRESS_JOIN_NOTIFICATIONS !== undefined);
  assert.ok(SystemChannelFlags.FLAGS.SUPPRESS_PREMIUM_SUBSCRIPTIONS !== undefined);

  // SnowflakeUtil
  const snowflake = SnowflakeUtil.generate();
  assert.strictEqual(typeof snowflake, 'string');
  assert.ok(snowflake.length > 0);

  const deconstructed = SnowflakeUtil.deconstruct(snowflake);
  assert.ok(deconstructed.timestamp);
  assert.ok(deconstructed.date instanceof Date);

  const snowflake2 = SnowflakeUtil.generate();
  assert.notStrictEqual(snowflake, snowflake2);

  // Collection
  const col = new Collection();
  col.set('a', 1);
  col.set('b', 2);
  col.set('c', 3);
  assert.strictEqual(col.size, 3);
  assert.strictEqual(col.get('b'), 2);
  assert.strictEqual(col.first(), 1);
  assert.strictEqual(col.last(), 3);

  const filtered = col.filter(v => v > 1);
  assert.strictEqual(filtered.size, 2);

  const mapped = col.map(v => v * 2);
  assert.deepStrictEqual(mapped, [2, 4, 6]);

  const found = col.find(v => v === 2);
  assert.strictEqual(found, 2);

  assert.ok(col.some(v => v === 3));
  assert.ok(col.every(v => v > 0));

  const sorted = col.sort((a, b) => b - a);
  assert.strictEqual(sorted.first(), 3);

  // LimitedCollection
  const limited = new LimitedCollection({ maxSize: 3 });
  limited.set('a', 1);
  limited.set('b', 2);
  limited.set('c', 3);
  limited.set('d', 4);
  assert.strictEqual(limited.size, 3);
  assert.ok(!limited.has('a'));
  assert.ok(limited.has('d'));

  // Formatters
  assert.strictEqual(Formatters.bold('test'), '**test**');
  assert.strictEqual(Formatters.italic('test'), '_test_');
  assert.strictEqual(Formatters.strikethrough('test'), '~~test~~');
  assert.strictEqual(Formatters.underscore('test'), '__test__');
  assert.strictEqual(Formatters.spoiler('test'), '||test||');
  assert.strictEqual(Formatters.inlineCode('test'), '`test`');
  assert.strictEqual(Formatters.codeBlock('js', 'code'), '```js\ncode\n```');
  assert.strictEqual(Formatters.blockQuote('test'), '>>> test');
  assert.ok(Formatters.userMention('123456').includes('123456'));
  assert.ok(Formatters.channelMention('123456').includes('123456'));
  assert.ok(Formatters.roleMention('123456').includes('123456'));

  console.log('    BitField, Permissions, Intents, Flags, Snowflake, Collection, Formatters');
};
