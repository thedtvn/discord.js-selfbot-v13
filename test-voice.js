const Discord = require('./dist/index.js');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) { console.error('Set DISCORD_TOKEN env var'); process.exit(1); }

const client = new Discord.Client({ checkUpdate: false, syncStatus: false });

const results = { passed: 0, failed: 0, errors: [] };
function pass(cat, msg) { results.passed++; console.log(`  ✅ [${cat}] ${msg}`); }
function fail(cat, msg, err) { results.failed++; results.errors.push({ cat, msg, err: err?.message || err }); console.log(`  ❌ [${cat}] ${msg}${err ? ': ' + (err.message || err) : ''}`); }
function section(title) { console.log(`\n${'='.repeat(60)}\n  ${title}\n${'='.repeat(60)}`); }

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  let testGuild, voiceCh, connection;
  
  try {
    section('1. CLIENT LOGIN & VOICE SETUP');
    await client.login(TOKEN);
    pass('CLIENT', `Logged in as ${client.user.username}`);
    
    const guilds = client.guilds.cache.filter(g => g.name.startsWith('Voice-Test-') || g.name.startsWith('TS-Migration-Test-'));
    if (guilds.size === 0) {
      fail('VOICE', 'No test guild found. Creating one...');
      testGuild = await client.guilds.create('Voice-Test-' + Date.now().toString(36));
      pass('VOICE', `Created test guild: ${testGuild.name}`);
      await sleep(2000);
    } else {
      testGuild = guilds.first();
      pass('VOICE', `Using test guild: ${testGuild.name} (${testGuild.id})`);
    }
    
    voiceCh = testGuild.channels.cache.find(ch => ch.type === 'GUILD_VOICE');
    if (!voiceCh) {
      voiceCh = await testGuild.channels.create('test-voice-2', { type: 'GUILD_VOICE' });
      pass('VOICE', `Created voice channel: ${voiceCh.name}`);
    } else {
      pass('VOICE', `Found voice channel: ${voiceCh.name} (${voiceCh.id})`);
    }
    
    section('2. VOICE CONNECTION');
    try {
      console.log('  Attempting to join voice channel...');
      connection = await client.voice.joinChannel(voiceCh, { timeout: 30000 });
      pass('VOICE', 'Successfully joined voice channel');
      await sleep(2000);
    } catch (e) {
      fail('VOICE', 'Join voice channel', e);
      console.log('  Voice connection may require additional setup or permissions');
    }
    
    if (connection) {
      try {
        if (connection.channel) pass('VOICE', `connection.channel: ${connection.channel.name}`);
        if (connection.joinConfig) pass('VOICE', 'connection.joinConfig exists');
        if (typeof connection.ping === 'number') pass('VOICE', `Voice ping: ${connection.ping}ms`);
      } catch (e) { fail('VOICE', 'Connection properties', e); }
      
      section('3. VOICE STATE');
      try {
        const voiceState = testGuild.members.cache.get(client.user.id)?.voice;
        if (voiceState) {
          pass('VOICE', 'Voice state exists');
          if (voiceState.channelId === voiceCh.id) pass('VOICE', `Voice state channelId matches: ${voiceState.channelId}`);
          if (voiceState.sessionId) pass('VOICE', `Voice state sessionId: ${voiceState.sessionId}`);
          if (typeof voiceState.selfMute === 'boolean') pass('VOICE', `selfMute: ${voiceState.selfMute}`);
          if (typeof voiceState.selfDeaf === 'boolean') pass('VOICE', `selfDeaf: ${voiceState.selfDeaf}`);
        } else {
          fail('VOICE', 'Voice state not found');
        }
      } catch (e) { fail('VOICE', 'Voice state', e); }
      
      section('4. VOICE ACTIONS');
      try {
        await connection.voice.setSelfMute(true);
        pass('VOICE', 'setSelfMute(true) works');
        await sleep(500);
        await connection.voice.setSelfMute(false);
        pass('VOICE', 'setSelfMute(false) works');
      } catch (e) { fail('VOICE', 'setSelfMute', e); }
      
      try {
        await connection.voice.setSelfDeaf(true);
        pass('VOICE', 'setSelfDeaf(true) works');
        await sleep(500);
        await connection.voice.setSelfDeaf(false);
        pass('VOICE', 'setSelfDeaf(false) works');
      } catch (e) { fail('VOICE', 'setSelfDeaf', e); }
      
      section('5. VOICE STREAMING (Optional)');
      try {
        const testAudioPath = path.join(__dirname, 'test-audio.pcm');
        if (fs.existsSync(testAudioPath)) {
          const stream = fs.createReadStream(testAudioPath);
          const dispatcher = connection.play(stream, { type: 'converted' });
          pass('VOICE', 'Started audio stream');
          
          dispatcher.on('finish', () => {
            pass('VOICE', 'Audio stream finished');
          });
          
          await sleep(1000);
          dispatcher.destroy();
          pass('VOICE', 'Stopped audio stream');
        } else {
          console.log('  ℹ️  [VOICE] Skipping audio test (no test-audio.pcm file)');
        }
      } catch (e) {
        if (e.message?.includes('Cannot find module')) {
          console.log('  ℹ️  [VOICE] Skipping audio test (prism-media dependencies missing)');
        } else {
          fail('VOICE', 'Audio streaming', e);
        }
      }
      
      section('6. VIDEO STREAMING (Check API)');
      try {
        if (typeof connection.setVideoStatus === 'function') {
          pass('VOICE', 'setVideoStatus method exists');
        }
        if (connection.player) {
          pass('VOICE', 'MediaPlayer exists');
        }
      } catch (e) { fail('VOICE', 'Video API check', e); }
      
      section('7. DISCONNECT');
      try {
        await connection.disconnect();
        pass('VOICE', 'Disconnected from voice');
        await sleep(1000);
        
        const voiceState = testGuild.members.cache.get(client.user.id)?.voice;
        if (!voiceState?.channelId) {
          pass('VOICE', 'Voice state cleared after disconnect');
        }
      } catch (e) { fail('VOICE', 'Disconnect', e); }
    }
    
    section('8. VOICE MANAGER METHODS');
    try {
      if (client.voice) pass('VOICE', 'client.voice (ClientVoiceManager) exists');
      if (client.voice?.adapters) pass('VOICE', 'Voice adapters exist');
    } catch (e) { fail('VOICE', 'Voice manager', e); }
    
  } catch (e) {
    fail('GLOBAL', `Fatal error: ${e.message}`);
    console.error(e.stack);
  } finally {
    section('FINAL RESULTS');
    console.log(`\n  Total:   ${results.passed + results.failed}`);
    console.log(`  ✅ Pass:  ${results.passed}`);
    console.log(`  ❌ Fail:  ${results.failed}`);
    const total = results.passed + results.failed;
    if (total > 0) console.log(`  Rate:   ${((results.passed / total) * 100).toFixed(1)}%`);
    
    if (results.errors.length > 0) {
      console.log('\n  === FAILURES ===');
      results.errors.forEach(e => console.log(`  ❌ [${e.cat}] ${e.msg}: ${e.err}`));
    }
    
    console.log('\n  Voice test complete.');
    client.destroy();
    process.exit(results.failed === 0 ? 0 : 1);
  }
}

client.once('ready', run);
client.on('error', e => console.error('Client error:', e));
client.on('debug', msg => {
  if (msg.includes('voice') || msg.includes('Voice') || msg.includes('VOICE')) {
    console.log('[DEBUG]', msg);
  }
});

console.log('Attempting login...');
client.login(TOKEN).catch(e => {
  console.error('Login failed:', e.message);
  process.exit(1);
});
