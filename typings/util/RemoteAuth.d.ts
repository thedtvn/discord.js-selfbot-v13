import EventEmitter from 'node:events';
/**
 * Discord Auth QR
 * @extends {EventEmitter}
 * @abstract
 */
declare class DiscordAuthWebsocket extends EventEmitter {
    #private;
    token: string;
    /**
     * Creates a new DiscordAuthWebsocket instance.
     */
    constructor();
    /**
     * @type {string}
     */
    get AuthURL(): string;
    /**
     * @type {Date}
     */
    get exprire(): any;
    /**
     * @type {UserRaw}
     */
    get user(): {
        id: string;
        username: string;
        discriminator: string;
        avatar: string;
    };
    /**
     * Connect WS
     * @param {Client} [client] DiscordJS Client
     * @returns {Promise<void>}
     */
    connect(client?: {
        login: (token: string) => Promise<unknown>;
    }): Promise<unknown>;
    /**
     * Destroy client
     * @returns {void}
     */
    destroy(): void;
    /**
     * Generate QR code for user to scan (Terminal)
     * @returns {void}
     */
    generateQR(): void;
    static decryptUser(payload: string): {
        id: string;
        username: string;
        discriminator: string;
        avatar: string;
    };
}
export default DiscordAuthWebsocket;
