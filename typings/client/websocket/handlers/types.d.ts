import type Client from '../../Client';
import type WebSocketShard from '../WebSocketShard';
export interface GatewayPacket {
    t?: string;
    op?: number;
    s?: number;
    d: any;
}
export type GatewayHandler = (client: Client, packet: GatewayPacket, shard: WebSocketShard) => void;
