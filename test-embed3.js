const Discord = require('./dist/index.js');
const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) {
  console.error('DISCORD_TOKEN environment variable is required');
  process.exit(1);
}
const client = new Discord.Client({ checkUpdate: false, syncStatus: false });

client.on('ready', async () => {
  console.log('Logged in as', client.user.username);
  
  try {
    const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
    const textCh = guild.channels.cache.find(c => c.type === 'GUILD_TEXT');
    
    // Send raw API request with just an embed
    const embedData = {
      title: 'Raw Embed Test',
      description: 'Testing raw embed',
      color: 39423,
      type: 'rich'
    };
    
    const rawPayload = {
      content: '',
      nonce: Discord.SnowflakeUtil.generate(),
      tts: false,
      embeds: [embedData],
      attachments: []
    };
    
    console.log('Raw payload:', JSON.stringify(rawPayload));
    
    const d = await client.api.channels[textCh.id].messages.post({ data: rawPayload });
    console.log('Sent raw embed message:', d.id);
  } catch (e) {
    console.error('Error:', e.message, e.code, e.httpStatus);
  }
  
  client.destroy();
  process.exit(0);
});

client.login(TOKEN);
