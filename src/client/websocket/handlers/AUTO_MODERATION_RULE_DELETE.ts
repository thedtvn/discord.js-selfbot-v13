import type { GatewayHandler } from './types';

const handler: GatewayHandler = (client, packet) => { client.actions.AutoModerationRuleDelete.handle(packet.d); };

export default handler;;
