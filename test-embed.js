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
    // Find the first guild we own
    const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
    if (!guild) { console.log('No owned guild found'); process.exit(1); }
    
    const textCh = guild.channels.cache.find(c => c.type === 'GUILD_TEXT');
    if (!textCh) { console.log('No text channel found'); process.exit(1); }
    
    console.log('Using channel:', textCh.name, textCh.id);
    
    // Build embed
    const embed = new Discord.MessageEmbed()
      .setTitle('Embed Test')
      .setDescription('Description here')
      .setColor('#0099ff');
    
    console.log('Embed object:', JSON.stringify(embed));
    console.log('Embed toJSON:', JSON.stringify(embed.toJSON()));
    
    // Build payload
    const payload = Discord.MessagePayload.create(textCh, { embeds: [embed] }).resolveData();
    console.log('Payload data:', JSON.stringify(payload.data));
    
    // Try sending
    const msg = await textCh.send({ embeds: [embed] });
    console.log('Sent embed message:', msg.id);
  } catch (e) {
    console.error('Error:', e.message);
    console.error('Stack:', e.stack);
  }
  
  client.destroy();
  process.exit(0);
});

client.login(TOKEN);
