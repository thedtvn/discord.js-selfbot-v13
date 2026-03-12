import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.ApplicationCommandPermissionsUpdate.handle(packet.d); };

export default handler;;
