declare const dgram: any;
declare const setImmediate: any;
/**
 * @typedef {Object} InterfaceAddresses
 * @property {string} [udp4] - IPv4 address
 * @property {string} [udp6] - IPv6 address
 */
/**
 * Get the interface address for a given socket type.
 * @param {"udp4"|"udp6"} type - The socket type.
 * @param {InterfaceAddresses} [interfaceAddresses] - The interface addresses mapping.
 * @returns {string|undefined} The interface address if available.
 */
declare function interfaceAddress(type: any, interfaceAddresses: any): any;
/**
 * Get a random available port.
 * @param {"udp4"|"udp6"} [protocol="udp4"] - The socket type.
 * @param {InterfaceAddresses} [interfaceAddresses] - The interface addresses mapping.
 * @returns {Promise<number>} The assigned random port.
 */
declare function randomPort(protocol: string, interfaceAddresses: any): Promise<any>;
/**
 * Get multiple random available ports.
 * @param {number} num - Number of ports to find.
 * @param {"udp4"|"udp6"} [protocol="udp4"] - The socket type.
 * @param {InterfaceAddresses} [interfaceAddresses] - The interface addresses mapping.
 * @returns {Promise<number[]>} An array of assigned random ports.
 */
declare function randomPorts(num: any, protocol: string, interfaceAddresses: any): Promise<any[]>;
/**
 * Find an available port within a given range.
 * @param {number} min - The minimum port number.
 * @param {number} max - The maximum port number.
 * @param {"udp4"|"udp6"} [protocol="udp4"] - The socket type.
 * @param {InterfaceAddresses} [interfaceAddresses] - The interface addresses mapping.
 * @returns {Promise<number>} The available port within range.
 * @throws {Error} If no port is found within the range.
 */
declare function findPort(min: any, max: any, protocol: string, interfaceAddresses: any): Promise<any>;
declare function parseStreamKey(key: any): {
    type: any;
    guildId: any;
    channelId: any;
    userId: any;
};
