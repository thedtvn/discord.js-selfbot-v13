const { Client } = require('./dist/index.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
if (!DISCORD_TOKEN) {
  console.error('DISCORD_TOKEN environment variable is required');
  process.exit(1);
}

console.log('='.repeat(80));
console.log('VOICE REGRESSION FIX TEST');
console.log('='.repeat(80));
console.log('Testing voice connection with fixed CLIENT_CONNECT opcode...\n');

const client = new Client();

client.on('debug', (msg) => {
  if (msg.includes('[VOICE]') || msg.includes('[WS]') || msg.includes('voice')) {
    console.log(`[DEBUG] ${msg}`);
  }
});

client.once('ready', async () => {
  console.log(`\n✓ Logged in as ${client.user.tag}`);
  console.log(`  User ID: ${client.user.id}\n`);

  try {
    const guilds = client.guilds.cache;
    console.log(`Found ${guilds.size} guild(s)`);
    
    let testServer = guilds.find(g => g.name.includes('Voice-Test-') || g.name.includes('Test-Server-'));
    
    if (!testServer) {
      console.log('\nCreating new voice test server...');
      testServer = await client.guilds.create('Voice-Test-' + Math.random().toString(36).slice(2, 10));
      console.log(`✓ Created test server: ${testServer.name} (${testServer.id})`);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    } else {
      console.log(`\n✓ Using existing test server: ${testServer.name} (${testServer.id})`);
    }

    let voiceChannel = testServer.channels.cache.find(c => c.type === 'GUILD_VOICE');
    
    if (!voiceChannel) {
      console.log('\nCreating voice channel...');
      voiceChannel = await testServer.channels.create('Voice Test', { type: 'GUILD_VOICE' });
      console.log(`✓ Created voice channel: ${voiceChannel.name} (${voiceChannel.id})`);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else {
      console.log(`\n✓ Using voice channel: ${voiceChannel.name} (${voiceChannel.id})`);
    }

    console.log('\n' + '='.repeat(80));
    console.log('ATTEMPTING VOICE CONNECTION');
    console.log('='.repeat(80));
    console.log('This will test the fixed CLIENT_CONNECT opcode (12)...\n');

    const connection = await client.voice.joinChannel(voiceChannel);
    
    console.log('\n✅ VOICE CONNECTION SUCCESSFUL!');
    console.log('='.repeat(80));
    console.log(`Status: ${connection.status}`);
    console.log(`Channel: ${voiceChannel.name}`);
    console.log(`Authentication token: ${connection.authentication.token ? '✓ Present' : '✗ Missing'}`);
    console.log(`Authentication endpoint: ${connection.authentication.endpoint || '✗ Missing'}`);
    console.log(`Authentication sessionId: ${connection.authentication.sessionId || '✗ Missing'}`);
    console.log(`SSRC Map size: ${connection.ssrcMap.size}`);
    console.log('='.repeat(80));
    
    console.log('\nThe CLIENT_CONNECT opcode fix is working correctly!');
    console.log('Voice connections are now functional in the TypeScript version.\n');
    
    connection.on('debug', (msg) => {
      console.log(`[VOICE DEBUG] ${msg}`);
    });
    
    connection.on('error', (err) => {
      console.error(`[VOICE ERROR]`, err);
    });
    
    console.log('Staying connected for 10 seconds to monitor...\n');
    setTimeout(() => {
      console.log('\nDisconnecting from voice...');
      connection.disconnect();
      
      setTimeout(() => {
        console.log('\n✓ Test complete. Voice functionality restored!\n');
        process.exit(0);
      }, 2000);
    }, 10000);

  } catch (error) {
    console.error('\n❌ VOICE CONNECTION FAILED');
    console.error('='.repeat(80));
    console.error('Error:', error.message);
    if (error.code) console.error('Error code:', error.code);
    console.error('\nStack trace:');
    console.error(error.stack);
    console.error('='.repeat(80));
    process.exit(1);
  }
});

client.on('error', (error) => {
  console.error('Client error:', error);
});

console.log('Logging in...\n');
client.login(DISCORD_TOKEN);
