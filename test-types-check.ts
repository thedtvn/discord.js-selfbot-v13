import { 
  Client, 
  Message, 
  MessageEmbed, 
  TextChannel,
  MessageButton,
  MessageActionRow,
  Guild,
  GuildMember,
  Role,
  User,
  Collection
} from './dist/index';

const client = new Client({ checkUpdate: false });

client.on('ready', () => {
  const username: string | undefined = client.user?.username;
  const guilds: Collection<string, Guild> = client.guilds.cache;
  
  const embed = new MessageEmbed()
    .setTitle('Test')
    .setDescription('Type checking test')
    .setColor('#0099ff')
    .addFields({ name: 'Field', value: 'Value' });
  
  const button = new MessageButton()
    .setCustomId('test')
    .setLabel('Click')
    .setStyle('PRIMARY');
    
  const row = new MessageActionRow().addComponents(button);
  
  console.log('Types work correctly');
});

client.login('token');
