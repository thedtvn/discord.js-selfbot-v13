import { Presence } from './Presence';
/**
 * Represents the client's presence.
 * @extends {Presence}
 */
declare class ClientPresence extends Presence {
    constructor(client: any, data?: {});
    /**
     * Sets the client's presence
     * @param {PresenceData} presence The data to set the presence to
     * @returns {ClientPresence}
     */
    set(presence: any): this;
    /**
     * Parses presence data into a packet ready to be sent to Discord
     * @param {PresenceData} presence The data to parse
     * @returns {APIPresence}
     * @private
     */
    _parse({ status, since, afk, activities }: {
        status: any;
        since: any;
        afk: any;
        activities: any;
    }): {
        activities: any[];
        afk: any;
        since: any;
        status: any;
    };
}
export default ClientPresence;
/**
 * @external APIPresence
 * @see {@link https://discord.com/developers/docs/rich-presence/how-to#updating-presence-update-presence-payload-fields}
 */
