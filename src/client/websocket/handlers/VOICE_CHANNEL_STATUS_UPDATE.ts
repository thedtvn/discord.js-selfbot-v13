import type { GatewayHandler } from './types';

import { Events } from '../../../util/Constants';

const handler: GatewayHandler = (client, { d: data }) => { const channel = client.channels.cache.get(data.id);
if (channel) {
  const old = channel._clone();
  channel.status = data.status;
  client.emit(Events.CHANNEL_UPDATE, old, channel);
} };

export default handler;;
