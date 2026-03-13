const Discord = require('./dist/index.js');
const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) {
  console.error('DISCORD_TOKEN environment variable is required');
  process.exit(1);
}
const client = new Discord.Client({ checkUpdate: false, syncStatus: false });

// Monkey-patch the API to see the exact request
const origExecute = client.rest.requestManager?.constructor?.prototype?.execute;

client.on('ready', async () => {
  console.log('Logged in as', client.user.username);
  
  try {
    const guild = client.guilds.cache.find(g => g.ownerId === client.user.id);
    const textCh = guild.channels.cache.find(c => c.type === 'GUILD_TEXT');
    
    // Build embed
    const embed = new Discord.MessageEmbed()
      .setTitle('Embed Test')
      .setDescription('Description here')
      .setColor('#0099ff');
    
    // Build and resolve payload manually
    const payload = Discord.MessagePayload.create(textCh, { embeds: [embed] }).resolveData();
    const { data, files } = await payload.resolveFiles();
    
    console.log('data before attachments:', JSON.stringify(data));
    console.log('files:', JSON.stringify(files));
    
    // Now try sending with content
    const msg = await textCh.send({ content: '', embeds: [embed] });
    console.log('Sent embed message with empty content:', msg.id);
  } catch (e) {
    console.error('Error:', e.message);
  }
  
  client.destroy();
  process.exit(0);
});

client.login(TOKEN);
