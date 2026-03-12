import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, { d: data }) => { client.settings._patch(data); };

export default handler;;
