import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, { d: data }) => { client.notes.cache.set(data.id, data.note); };

export default handler;;
