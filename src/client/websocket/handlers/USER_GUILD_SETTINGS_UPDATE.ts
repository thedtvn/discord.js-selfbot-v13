import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, { d: data }) => { const guild = client.guilds.cache.get(data.guild_id);
if (guild) guild?.settings._patch(data); };

export default handler;;
