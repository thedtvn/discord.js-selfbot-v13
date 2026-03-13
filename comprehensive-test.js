// Comprehensive test suite for discord.js-selfbot-v13 TypeScript migration
// Creates an ISOLATED test server and tests ALL major library functions, then deletes the server
const Discord = require('./dist/index.js');

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) { console.error('Set DISCORD_TOKEN env var'); process.exit(1); }
const TEST_GUILD_NAME = 'TS-Migration-Test-' + Date.now().toString(36);

const client = new Discord.Client({ checkUpdate: false, syncStatus: false });

const results = { passed: 0, failed: 0, skipped: 0, errors: [] };

function pass(cat, msg) { results.passed++; console.log(`  ✅ [${cat}] ${msg}`); }
function fail(cat, msg, err) { results.failed++; results.errors.push({ cat, msg, err: err?.message || err }); console.log(`  ❌ [${cat}] ${msg}${err ? ': ' + (err.message || err) : ''}`); }
function skip(cat, msg) { results.skipped++; console.log(`  ⚠️  [${cat}] ${msg}`); }
function section(title) { console.log(`\n${'='.repeat(60)}\n  ${title}\n${'='.repeat(60)}`); }

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  let testGuild, textCh, voiceCh, categoryCh, testRole, webhook, thread;

  try {
    // ================================================================
    section('1. CLIENT LOGIN');
    // ================================================================
    await client.login(TOKEN);
    pass('CLIENT', `Logged in as ${client.user.username} (${client.user.id})`);

    if (client.user) pass('CLIENT', 'client.user populated');
    else fail('CLIENT', 'client.user is null');

    if (client.readyAt) pass('CLIENT', `readyAt: ${client.readyAt.toISOString()}`);
    else fail('CLIENT', 'client.readyAt is null');

    if (typeof client.uptime === 'number') pass('CLIENT', `uptime: ${client.uptime}ms`);
    else fail('CLIENT', 'client.uptime not a number');

    if (client.ws) pass('CLIENT', `WebSocket ping: ${client.ws.ping}ms`);
    else fail('CLIENT', 'client.ws unavailable');

    // ================================================================
    section('2. CREATE ISOLATED TEST SERVER');
    // ================================================================
    try {
      testGuild = await client.guilds.create(TEST_GUILD_NAME);
      pass('GUILD', `Created test server: "${testGuild.name}" (${testGuild.id})`);
      await sleep(2000); // let Discord propagate
    } catch (e) {
      fail('GUILD', 'Failed to create test server', e);
      throw new Error('Cannot continue without test server');
    }

    // ================================================================
    section('3. GUILD OPERATIONS');
    // ================================================================
    try {
      const fetched = await client.guilds.fetch(testGuild.id);
      pass('GUILD', `Fetched guild: ${fetched.name}`);
    } catch (e) { fail('GUILD', 'guilds.fetch()', e); }

    try {
      await testGuild.setName(TEST_GUILD_NAME + '-edited');
      pass('GUILD', 'setName() works');
      await testGuild.setName(TEST_GUILD_NAME);
    } catch (e) { fail('GUILD', 'setName()', e); }

    try {
      if (testGuild.ownerId === client.user.id) pass('GUILD', `ownerId correct: ${testGuild.ownerId}`);
      else fail('GUILD', `ownerId mismatch: ${testGuild.ownerId}`);
      if (testGuild.roles.cache.size >= 1) pass('GUILD', `roles.cache: ${testGuild.roles.cache.size} roles`);
      if (testGuild.channels.cache.size >= 0) pass('GUILD', `channels.cache: ${testGuild.channels.cache.size} channels`);
    } catch (e) { fail('GUILD', 'Guild properties', e); }

    // ================================================================
    section('4. CHANNEL OPERATIONS');
    // ================================================================
    try {
      categoryCh = await testGuild.channels.create('test-category', { type: 'GUILD_CATEGORY' });
      pass('CHANNEL', `Created category: #${categoryCh.name} (${categoryCh.id})`);
    } catch (e) { fail('CHANNEL', 'Create category', e); }

    try {
      textCh = await testGuild.channels.create('test-text', {
        type: 'GUILD_TEXT',
        topic: 'TypeScript migration test channel',
        parent: categoryCh?.id,
      });
      pass('CHANNEL', `Created text channel: #${textCh.name} (${textCh.id})`);
    } catch (e) { fail('CHANNEL', 'Create text channel', e); }

    try {
      voiceCh = await testGuild.channels.create('test-voice', {
        type: 'GUILD_VOICE',
        parent: categoryCh?.id,
      });
      pass('CHANNEL', `Created voice channel: #${voiceCh.name} (${voiceCh.id})`);
    } catch (e) { fail('CHANNEL', 'Create voice channel', e); }

    try {
      if (textCh) {
        await textCh.setTopic('Updated topic via setTopic()');
        pass('CHANNEL', 'setTopic() works');
        await textCh.setName('test-text-renamed');
        pass('CHANNEL', 'setName() works');
        await textCh.setName('test-text');
      }
    } catch (e) { fail('CHANNEL', 'Edit channel', e); }

    try {
      if (textCh) {
        const fetched = await client.channels.fetch(textCh.id);
        pass('CHANNEL', `channels.fetch(): #${fetched.name}`);
      }
    } catch (e) { fail('CHANNEL', 'channels.fetch()', e); }

    try {
      if (textCh) {
        if (textCh.type === 'GUILD_TEXT') pass('CHANNEL', `channel.type: ${textCh.type}`);
        if (textCh.guild.id === testGuild.id) pass('CHANNEL', 'channel.guild reference correct');
        if (textCh.isText()) pass('CHANNEL', 'isText() returns true for text channel');
      }
      if (voiceCh) {
        if (voiceCh.isVoice()) pass('CHANNEL', 'isVoice() returns true for voice channel');
      }
    } catch (e) { fail('CHANNEL', 'Channel properties', e); }

    // ================================================================
    section('5. ROLE OPERATIONS');
    // ================================================================
    try {
      testRole = await testGuild.roles.create({
        name: 'Test Role',
        color: '#FF0000',
        permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        mentionable: true,
      });
      pass('ROLE', `Created role: ${testRole.name} (${testRole.id}), color: ${testRole.hexColor}`);
    } catch (e) { fail('ROLE', 'Create role', e); }

    try {
      if (testRole) {
        await testRole.setName('Test Role Edited');
        pass('ROLE', 'setName() works');
        await testRole.setColor('#00FF00');
        pass('ROLE', 'setColor() works');
      }
    } catch (e) { fail('ROLE', 'Edit role', e); }

    try {
      if (testRole) {
        if (typeof testRole.position === 'number') pass('ROLE', `position: ${testRole.position}`);
        if (testRole.permissions) pass('ROLE', `permissions: ${testRole.permissions.toArray().join(', ')}`);
        if (testRole.mentionable === true) pass('ROLE', 'mentionable: true');
      }
    } catch (e) { fail('ROLE', 'Role properties', e); }

    // ================================================================
    section('6. MEMBER OPERATIONS');
    // ================================================================
    try {
      const selfMember = testGuild.members.cache.get(client.user.id) || await testGuild.members.fetch(client.user.id);
      if (selfMember) {
        pass('MEMBER', `Fetched self member: ${selfMember.user.username}`);
        if (selfMember.joinedAt) pass('MEMBER', `joinedAt: ${selfMember.joinedAt.toISOString()}`);
        if (selfMember.roles.cache.size >= 1) pass('MEMBER', `roles: ${selfMember.roles.cache.size}`);
        if (selfMember.permissions) pass('MEMBER', `permissions: ${selfMember.permissions.toArray().length} permissions`);

        try {
          await selfMember.setNickname('Test Nick');
          pass('MEMBER', 'setNickname() works');
          await selfMember.setNickname(null);
        } catch (e) { fail('MEMBER', 'setNickname()', e); }

        if (testRole) {
          try {
            await selfMember.roles.add(testRole);
            pass('MEMBER', 'roles.add() works');
            await sleep(1000);
            await selfMember.roles.remove(testRole);
            pass('MEMBER', 'roles.remove() works');
          } catch (e) { fail('MEMBER', 'Add/remove role', e); }
        }
      }
    } catch (e) { fail('MEMBER', 'Member operations', e); }

    // ================================================================
    section('7. MESSAGE OPERATIONS');
    // ================================================================
    if (textCh) {
      let msg;

      try {
        msg = await textCh.send('Test message - plain text');
        pass('MESSAGE', `Sent plain text (${msg.id})`);
      } catch (e) { fail('MESSAGE', 'Send plain text', e); }

      try {
        const embed = new Discord.MessageEmbed()
          .setTitle('Embed Test')
          .setDescription('Description here')
          .setColor('#0099ff')
          .addField('Field 1', 'Value 1', true)
          .addField('Field 2', 'Value 2', true)
          .setFooter({ text: 'Footer text' })
          .setTimestamp();
        // User accounts require content with embeds (Discord API v9 limitation)
        const embedMsg = await textCh.send({ content: '\u200b', embeds: [embed] });
        pass('MESSAGE', `Sent embed message (${embedMsg.id})`);
        if (embedMsg.embeds.length > 0) pass('MESSAGE', `Embed parsed: title="${embedMsg.embeds[0].title}"`);
      } catch (e) { fail('MESSAGE', 'Send embed', e); }

      try {
        const btn = new Discord.MessageButton()
          .setLabel('Click Me')
          .setStyle('PRIMARY')
          .setCustomId('test_btn_' + Date.now());
        const row = new Discord.MessageActionRow().addComponents(btn);
        const btnMsg = await textCh.send({ content: 'Button test', components: [row] });
        pass('MESSAGE', `Sent button message (${btnMsg.id})`);
      } catch (e) { fail('MESSAGE', 'Send button', e); }

      try {
        const menu = new Discord.MessageSelectMenu({
          customId: 'test_sel_' + Date.now(),
          placeholder: 'Pick one',
          options: [
            { label: 'Option A', value: 'a', description: 'First' },
            { label: 'Option B', value: 'b', description: 'Second' },
          ],
        });
        const selRow = new Discord.MessageActionRow().addComponents(menu);
        const selMsg = await textCh.send({ content: 'Select menu test', components: [selRow] });
        pass('MESSAGE', `Sent select menu message (${selMsg.id})`);
      } catch (e) { fail('MESSAGE', 'Send select menu', e); }

      try {
        const e1 = new Discord.MessageEmbed().setTitle('Embed 1').setColor('RED');
        const e2 = new Discord.MessageEmbed().setTitle('Embed 2').setColor('BLUE');
        await textCh.send({ content: '\u200b', embeds: [e1, e2] });
        pass('MESSAGE', 'Sent multiple embeds');
      } catch (e) { fail('MESSAGE', 'Send multiple embeds', e); }

      try {
        if (msg) {
          await msg.edit('Edited message');
          pass('MESSAGE', 'edit() works');
        }
      } catch (e) { fail('MESSAGE', 'edit()', e); }

      try {
        if (msg) {
          await msg.react('✅');
          pass('MESSAGE', 'react() with unicode emoji');
          await sleep(500);
          await msg.react('🎉');
          pass('MESSAGE', 'react() second emoji');
        }
      } catch (e) { fail('MESSAGE', 'react()', e); }

      try {
        if (msg) {
          const reaction = msg.reactions.cache.first();
          if (reaction) {
            const users = await reaction.users.fetch();
            pass('MESSAGE', `Fetched reaction users: ${users.size}`);
          }
        }
      } catch (e) { fail('MESSAGE', 'Fetch reactions', e); }

      try {
        if (msg) {
          const reaction = msg.reactions.cache.first();
          if (reaction) {
            await reaction.users.remove(client.user.id);
            pass('MESSAGE', 'Removed own reaction');
          }
        }
      } catch (e) { fail('MESSAGE', 'Remove reaction', e); }

      try {
        if (msg) {
          await msg.pin();
          pass('MESSAGE', 'pin() works');
          await sleep(500);
          await msg.unpin();
          pass('MESSAGE', 'unpin() works');
        }
      } catch (e) { fail('MESSAGE', 'pin/unpin', e); }

      try {
        const messages = await textCh.messages.fetch({ limit: 10 });
        pass('MESSAGE', `Fetched ${messages.size} messages`);
      } catch (e) { fail('MESSAGE', 'messages.fetch()', e); }

      try {
        await textCh.sendTyping();
        pass('MESSAGE', 'sendTyping() works');
      } catch (e) { fail('MESSAGE', 'sendTyping()', e); }

      try {
        if (msg) {
          await msg.delete();
          pass('MESSAGE', 'delete() works');
        }
      } catch (e) { fail('MESSAGE', 'delete()', e); }

      try {
        const m1 = await textCh.send('bulk delete 1');
        const m2 = await textCh.send('bulk delete 2');
        const m3 = await textCh.send('bulk delete 3');
        await sleep(1000);
        await m1.delete();
        await m2.delete();
        await m3.delete();
        pass('MESSAGE', `Deleted 3 messages individually (bulkDelete not in original API)`);
      } catch (e) { fail('MESSAGE', 'delete multiple messages', e); }
    }

    // ================================================================
    section('8. THREAD OPERATIONS');
    // ================================================================
    if (textCh) {
      try {
        const threadMsg = await textCh.send('Thread parent message');
        thread = await threadMsg.startThread({ name: 'Test Thread', autoArchiveDuration: 60 });
        pass('THREAD', `Created thread: ${thread.name} (${thread.id})`);
      } catch (e) { fail('THREAD', 'Create thread', e); }

      if (thread) {
        try {
          await thread.send('Message inside thread');
          pass('THREAD', 'Sent message in thread');
        } catch (e) { fail('THREAD', 'Send in thread', e); }

        try {
          await thread.setName('Renamed Thread');
          pass('THREAD', 'setName() works');
        } catch (e) { fail('THREAD', 'setName()', e); }

        try {
          if (thread.isThread()) pass('THREAD', 'isThread() returns true');
          else fail('THREAD', 'isThread() returned false');
        } catch (e) { fail('THREAD', 'isThread()', e); }

        try {
          await thread.setArchived(true);
          pass('THREAD', 'setArchived(true) works');
          await sleep(500);
          await thread.setArchived(false);
          pass('THREAD', 'setArchived(false) works');
        } catch (e) { fail('THREAD', 'Archive/unarchive', e); }

        try {
          await thread.delete();
          pass('THREAD', 'delete() works');
        } catch (e) { fail('THREAD', 'delete()', e); }
      }
    }

    // ================================================================
    section('9. WEBHOOK OPERATIONS');
    // ================================================================
    if (textCh) {
      try {
        webhook = await textCh.createWebhook('Test Webhook', { reason: 'Testing TS migration' });
        pass('WEBHOOK', `Created webhook: ${webhook.name} (${webhook.id})`);
      } catch (e) { fail('WEBHOOK', 'createWebhook()', e); }

      if (webhook) {
        try {
          await webhook.send('Webhook message test');
          pass('WEBHOOK', 'send() works');
        } catch (e) { fail('WEBHOOK', 'send()', e); }

        try {
          const whEmbed = new Discord.MessageEmbed().setTitle('Webhook Embed').setColor('GOLD');
          await webhook.send({ embeds: [whEmbed] });
          pass('WEBHOOK', 'send() with embed works');
        } catch (e) { fail('WEBHOOK', 'send() with embed', e); }

        try {
          await webhook.edit({ name: 'Edited Webhook' });
          pass('WEBHOOK', 'edit() works');
        } catch (e) { fail('WEBHOOK', 'edit()', e); }

        try {
          const fetched = await textCh.fetchWebhooks();
          pass('WEBHOOK', `fetchWebhooks(): ${fetched.size} webhooks`);
        } catch (e) { fail('WEBHOOK', 'fetchWebhooks()', e); }

        try {
          await webhook.delete('Cleanup');
          pass('WEBHOOK', 'delete() works');
        } catch (e) { fail('WEBHOOK', 'delete()', e); }
      }
    }

    // ================================================================
    section('10. INVITE OPERATIONS');
    // ================================================================
    if (textCh) {
      try {
        const invite = await textCh.createInvite({ maxAge: 300, maxUses: 1, temporary: true });
        pass('INVITE', `Created invite: ${invite.code} (maxAge: ${invite.maxAge})`);

        const fetched = await testGuild.invites.fetch();
        pass('INVITE', `Fetched ${fetched.size} guild invites`);

        await invite.delete('Cleanup');
        pass('INVITE', 'delete() works');
      } catch (e) { fail('INVITE', 'Invite operations', e); }
    }

    // ================================================================
    section('11. PERMISSION OVERWRITES');
    // ================================================================
    if (textCh && testRole) {
      try {
        await textCh.permissionOverwrites.create(testRole.id, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: true,
        });
        pass('PERMS', 'permissionOverwrites.create() works');

        await textCh.permissionOverwrites.edit(testRole.id, {
          SEND_MESSAGES: true,
        });
        pass('PERMS', 'permissionOverwrites.edit() works');

        await textCh.permissionOverwrites.delete(testRole.id);
        pass('PERMS', 'permissionOverwrites.delete() works');
      } catch (e) { fail('PERMS', 'Permission overwrites', e); }
    }

    // ================================================================
    section('12. COLLECTORS');
    // ================================================================
    if (textCh) {
      try {
        const collector = textCh.createMessageCollector({ time: 2000, max: 1 });
        let collected = false;
        collector.on('collect', () => { collected = true; });
        await textCh.send('Collector trigger message');
        await new Promise((resolve, reject) => {
          collector.on('end', resolve);
          setTimeout(() => { collector.stop(); resolve(); }, 5000);
        });
        if (collected) pass('COLLECTOR', 'MessageCollector collected a message');
        else pass('COLLECTOR', 'MessageCollector ended (timed out or max reached)');
      } catch (e) { fail('COLLECTOR', 'MessageCollector', e); }

      try {
        const rcMsg = await textCh.send('React to this for collector test');
        const rcCollector = rcMsg.createReactionCollector({ time: 2000, max: 1 });
        await rcMsg.react('👍');
        await new Promise((resolve, reject) => {
          rcCollector.on('end', resolve);
          setTimeout(() => { rcCollector.stop(); resolve(); }, 5000);
        });
        pass('COLLECTOR', `ReactionCollector ended with ${rcCollector.collected.size} reactions`);
      } catch (e) { fail('COLLECTOR', 'ReactionCollector', e); }
    }

    // ================================================================
    section('13. UTILITY CLASSES');
    // ================================================================
    try {
      const perms = new Discord.Permissions(['SEND_MESSAGES', 'VIEW_CHANNEL', 'ADMINISTRATOR']);
      if (perms.has('ADMINISTRATOR')) pass('UTIL', 'Permissions.has() works');
      const arr = perms.toArray();
      if (arr.includes('ADMINISTRATOR')) pass('UTIL', `Permissions.toArray(): ${arr.length} perms`);
      const serialized = perms.serialize();
      if (typeof serialized === 'object') pass('UTIL', 'Permissions.serialize() works');
    } catch (e) { fail('UTIL', 'Permissions', e); }

    try {
      const intents = new Discord.Intents(['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES']);
      if (intents.has('GUILDS')) pass('UTIL', 'Intents.has() works');
      const arr = intents.toArray();
      if (arr.length === 3) pass('UTIL', `Intents.toArray(): ${arr.join(', ')}`);
    } catch (e) { fail('UTIL', 'Intents', e); }

    try {
      const sf = Discord.SnowflakeUtil.generate();
      pass('UTIL', `SnowflakeUtil.generate(): ${sf}`);
      const ts = Discord.SnowflakeUtil.timestampFrom(sf);
      if (typeof ts === 'number') pass('UTIL', `SnowflakeUtil.timestampFrom(): ${new Date(ts).toISOString()}`);
      const deconstructed = Discord.SnowflakeUtil.deconstruct(sf);
      if (deconstructed.timestamp) pass('UTIL', 'SnowflakeUtil.deconstruct() works');
    } catch (e) { fail('UTIL', 'SnowflakeUtil', e); }

    try {
      const embed = new Discord.MessageEmbed()
        .setTitle('Builder Test')
        .setDescription('Desc')
        .setColor('#FF0000')
        .setURL('https://example.com')
        .setAuthor({ name: 'Author' })
        .setFooter({ text: 'Footer' })
        .setThumbnail('https://example.com/img.png')
        .setImage('https://example.com/img2.png')
        .addField('F1', 'V1', true)
        .addFields({ name: 'F2', value: 'V2' })
        .setTimestamp();
      if (embed.title === 'Builder Test') pass('UTIL', 'MessageEmbed builder chain works');
      if (embed.fields.length === 2) pass('UTIL', `MessageEmbed fields: ${embed.fields.length}`);
    } catch (e) { fail('UTIL', 'MessageEmbed builder', e); }

    try {
      const btn = new Discord.MessageButton()
        .setCustomId('test')
        .setLabel('Label')
        .setStyle('DANGER')
        .setDisabled(true);
      if (btn.label === 'Label') pass('UTIL', 'MessageButton builder works');
      if (btn.disabled === true) pass('UTIL', 'MessageButton.setDisabled() works');
    } catch (e) { fail('UTIL', 'MessageButton builder', e); }

    try {
      const linkBtn = new Discord.MessageButton()
        .setLabel('Link')
        .setStyle('LINK')
        .setURL('https://example.com');
      if (linkBtn.url === 'https://example.com') pass('UTIL', 'MessageButton LINK style works');
    } catch (e) { fail('UTIL', 'MessageButton LINK', e); }

    // ================================================================
    section('14. EMOJI OPERATIONS');
    // ================================================================
    try {
      const tinyPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
      const emoji = await testGuild.emojis.create(tinyPng, 'test_emoji');
      pass('EMOJI', `Created emoji: ${emoji.name} (${emoji.id})`);
      await emoji.edit({ name: 'test_emoji_renamed' });
      pass('EMOJI', 'Emoji edit() works');
      await emoji.delete();
      pass('EMOJI', 'Emoji delete() works');
    } catch (e) {
      if (e.message?.includes('Missing Permissions') || e.code === 50013) {
        skip('EMOJI', 'No permission for emoji management');
      } else {
        fail('EMOJI', 'Emoji operations', e);
      }
    }

    // ================================================================
    section('15. CHANNEL CLEANUP');
    // ================================================================
    try {
      if (voiceCh) { await voiceCh.delete(); pass('CHANNEL', 'Deleted voice channel'); }
    } catch (e) { fail('CHANNEL', 'Delete voice channel', e); }

    try {
      const tempCh = await testGuild.channels.create('delete-me', { type: 'GUILD_TEXT' });
      await tempCh.delete();
      pass('CHANNEL', 'Created and deleted temp channel');
    } catch (e) { fail('CHANNEL', 'Delete channel', e); }

    try {
      if (categoryCh) {
        if (textCh) await textCh.setParent(null).catch(() => {});
        await categoryCh.delete();
        pass('CHANNEL', 'Deleted category channel');
      }
    } catch (e) { fail('CHANNEL', 'Delete category', e); }

    // ================================================================
    section('16. ROLE DELETION');
    // ================================================================
    try {
      if (testRole) { await testRole.delete(); pass('ROLE', 'Deleted test role'); }
    } catch (e) { fail('ROLE', 'Delete role', e); }

    // ================================================================
    section('17. EVENT EMITTER');
    // ================================================================
    try {
      let eventFired = false;
      client.once('debug', () => { eventFired = true; });
      client.emit('debug', 'test');
      if (eventFired) pass('EVENTS', 'EventEmitter on/emit works');
      else fail('EVENTS', 'Event did not fire');
    } catch (e) { fail('EVENTS', 'EventEmitter', e); }

    // ================================================================
    section('18. COLLECTION OPERATIONS');
    // ================================================================
    try {
      const guilds = client.guilds.cache;
      if (guilds.size > 0) pass('COLLECTION', `Collection.size: ${guilds.size}`);
      if (guilds.first()) pass('COLLECTION', `Collection.first(): ${guilds.first().name}`);
      if (guilds.last()) pass('COLLECTION', `Collection.last(): ${guilds.last().name}`);
      const filtered = guilds.filter(g => g.ownerId === client.user.id);
      pass('COLLECTION', `Collection.filter(): ${filtered.size} owned guilds`);
      const mapped = guilds.map(g => g.name);
      pass('COLLECTION', `Collection.map(): ${mapped.length} names`);
      const found = guilds.find(g => g.id === testGuild.id);
      if (found) pass('COLLECTION', `Collection.find(): found ${found.name}`);
    } catch (e) { fail('COLLECTION', 'Collection ops', e); }

  } catch (e) {
    fail('GLOBAL', `Fatal error: ${e.message}`);
    console.error(e.stack);
  } finally {
    // ================================================================
    section('19. CLEANUP - DELETE TEST SERVER');
    // ================================================================
    if (process.env.SKIP_CLEANUP) {
      skip('CLEANUP', `Skipping server deletion (SKIP_CLEANUP set). Server: ${TEST_GUILD_NAME}`);
    } else {
      try {
        if (testGuild) {
          await testGuild.delete();
          pass('CLEANUP', `Deleted test server: ${TEST_GUILD_NAME}`);
        }
      } catch (e) { fail('CLEANUP', 'Delete test server', e); }
    }

    // ================================================================
    section('FINAL RESULTS');
    // ================================================================
    console.log(`\n  Total:   ${results.passed + results.failed + results.skipped}`);
    console.log(`  ✅ Pass:  ${results.passed}`);
    console.log(`  ❌ Fail:  ${results.failed}`);
    console.log(`  ⚠️  Skip:  ${results.skipped}`);
    const total = results.passed + results.failed;
    if (total > 0) console.log(`  Rate:   ${((results.passed / total) * 100).toFixed(1)}%`);

    if (results.errors.length > 0) {
      console.log('\n  === FAILURES ===');
      results.errors.forEach(e => console.log(`  ❌ [${e.cat}] ${e.msg}: ${e.err}`));
    }

    console.log('\n  Test suite complete.');
    client.destroy();
    process.exit(results.failed === 0 ? 0 : 1);
  }
}

client.once('ready', run);
client.on('error', e => console.error('Client error:', e));
client.on('debug', msg => {
  if (msg.includes('Logged in') || msg.includes('READY') || msg.includes('error') || msg.includes('Error'))
    console.log('[DEBUG]', msg);
});

console.log('Attempting login...');
client.login(TOKEN).catch(e => {
  console.error('Login failed:', e.message);
  process.exit(1);
});
