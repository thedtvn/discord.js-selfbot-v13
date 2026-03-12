import { Collection } from '@discordjs/collection';
import Invite from './Invite';
import User from './User';
/**
 * Represents the logged in client's Discord user.
 * @extends {User}
 */
declare class ClientUser extends User {
    #private;
    verified: boolean;
    mfaEnabled: boolean | null;
    purchasedFlags: Readonly<any>;
    premiumUsageFlags: Readonly<any>;
    phone: string | null;
    nsfwAllowed: boolean | null;
    email: string | null;
    bio: string | null;
    pronouns: string | null;
    premiumType: number;
    _patch(data: any): any;
    /**
     * Represents the client user's presence
     * @type {ClientPresence}
     * @readonly
     */
    get presence(): any;
    /**
     * Data used to edit the logged in client
     * @typedef {Object} ClientUserEditData
     * @property {string} [username] The new username
     * @property {?(BufferResolvable|Base64Resolvable)} [avatar] The new avatar
     * @property {?(BufferResolvable|Base64Resolvable)} [banner] The new banner
     * @property {?string} [bio] The new bio
     */
    /**
     * Edits the logged in client.
     * @param {ClientUserEditData} options The new data
     * @returns {Promise<ClientUser>}
     */
    edit(options?: any): Promise<ClientUser>;
    /**
     * Sets the username of the logged in client.
     * <info>Changing usernames in Discord is heavily rate limited, with only 2 requests
     * every hour. Use this sparingly!</info>
     * @param {string} username The new username
     * @param {string} password Current Password
     * @returns {Promise<ClientUser>}
     * @example
     * // Set username
     * client.user.setUsername('discordjs', 'passw@rd')
     *   .then(user => console.log(`My new username is ${user.username}`))
     *   .catch(console.error);
     */
    setUsername(username: string, password: string): Promise<ClientUser>;
    /**
     * Sets the avatar of the logged in client.
     * @param {?(BufferResolvable|Base64Resolvable)} avatar The new avatar
     * @returns {Promise<ClientUser>}
     * @example
     * // Set avatar
     * client.user.setAvatar('./avatar.png')
     *   .then(user => console.log(`New avatar set!`))
     *   .catch(console.error);
     */
    setAvatar(avatar: any): Promise<ClientUser>;
    /**
     * Options for setting activities
     * @typedef {Object} ActivitiesOptions
     * @property {string} name Name of the activity
     * @property {string} [state] State of the activity
     * @property {ActivityType|number} [type] Type of the activity
     * @property {string} [url] Twitch / YouTube stream URL
     */
    /**
     * Data resembling a raw Discord presence.
     * @typedef {Object} PresenceData
     * @property {PresenceStatusData} [status] Status of the user
     * @property {boolean} [afk] Whether the user is AFK
     * @property {ActivitiesOptions[]|CustomStatus[]|RichPresence[]|SpotifyRPC[]} [activities] Activity the user is playing
     * @property {number|number[]} [shardId] Shard id(s) to have the activity set on
     */
    /**
     * Sets the full presence of the client user.
     * @param {PresenceData} data Data for the presence
     * @returns {ClientPresence}
     * @example
     * // Set the client user's presence
     * client.user.setPresence({ activities: [{ name: 'with discord.js' }], status: 'idle' });
     * @see {@link https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md}
     */
    setPresence(data: any): any;
    /**
     * A user's status. Must be one of:
     * * `online`
     * * `idle`
     * * `invisible`
     * * `dnd` (do not disturb)
     * @typedef {string} PresenceStatusData
     */
    /**
     * Sets the status of the client user.
     * @param {PresenceStatusData} status Status to change to
     * @param {number|number[]} [shardId] Shard id(s) to have the activity set on
     * @returns {ClientPresence}
     * @example
     * // Set the client user's status
     * client.user.setStatus('idle');
     */
    setStatus(status: string, shardId?: number | number[]): any;
    /**
     * Options for setting an activity.
     * @typedef {Object} ActivityOptions
     * @property {string} name Name of the activity
     * @property {string} [url] Twitch / YouTube stream URL
     * @property {ActivityType|number} [type] Type of the activity
     * @property {number|number[]} [shardId] Shard Id(s) to have the activity set on
     */
    /**
     * Sets the activity the client user is playing.
     * @param {string|ActivityOptions} name Activity being played, or options for setting the activity
     * @param {ActivityOptions} [options] Options for setting the activity
     * @returns {ClientPresence}
     * @example
     * // Set the client user's activity
     * client.user.setActivity('discord.js', { type: 'WATCHING' });
     * @see {@link https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md}
     */
    setActivity(name: string | any, options?: any): any;
    /**
     * Sets/removes the AFK flag for the client user.
     * @param {boolean} [afk=true] Whether or not the user is AFK
     * @param {number|number[]} [shardId] Shard Id(s) to have the AFK flag set on
     * @returns {ClientPresence}
     */
    setAFK(afk?: boolean, shardId?: number | number[]): any;
    /**
     * Sets the banner of the logged in client.
     * @param {?(BufferResolvable|Base64Resolvable)} banner The new banner
     * @returns {Promise<ClientUser>}
     * @example
     * // Set banner
     * client.user.setBanner('./banner.png')
     *   .then(user => console.log(`New banner set!`))
     *   .catch(console.error);
     */
    setBanner(banner: any): Promise<ClientUser>;
    /**
     * Set HyperSquad House
     * @param {string|number} type
     * * `LEAVE`: 0
     * * `HOUSE_BRAVERY`: 1
     * * `HOUSE_BRILLIANCE`: 2
     * * `HOUSE_BALANCE`: 3
     * @returns {Promise<void>}
     * @example
     * // Set HyperSquad HOUSE_BRAVERY
     * client.user.setHypeSquad(1); || client.user.setHypeSquad('HOUSE_BRAVERY');
     * // Leave
     * client.user.setHypeSquad(0);
     */
    setHypeSquad(type: string | number): Promise<void>;
    /**
     * Set Accent color
     * @param {ColorResolvable} color Color to set
     * @returns {Promise<ClientUser>}
     */
    setAccentColor(color?: any): Promise<ClientUser>;
    /**
     * Set About me
     * @param {string} [bio=null] Bio to set
     * @returns {Promise<ClientUser>}
     */
    setAboutMe(bio?: string | null): Promise<ClientUser>;
    /**
     * Create an invite [Friend Invites]
     * maxAge: 604800 | maxUses: 1
     * @returns {Promise<Invite>}
     * @see {@link https://github.com/13-05/hidden-disc-docs#js-snippet-for-creating-friend-invites}
     * @example
     * // Options not working
     * client.user.createFriendInvite();
     *   .then(console.log)
     *   .catch(console.error);
     */
    createFriendInvite(): Promise<Invite>;
    /**
     * Get all friend invites
     * @returns {Promise<Collection<string, Invite>>}
     */
    getAllFriendInvites(): Promise<Collection<string, Invite>>;
    /**
     * Revoke all friend invites
     * @returns {Promise<void>}
     */
    revokeAllFriendInvites(): Promise<void>;
    /**
     * Sets Discord Playing status to "Playing on Samsung Galaxy". Only selected gamss from discords database works
     * @param {string} packageName Android package name
     * @param {?string} type Must be START, UPDATE, or STOP
     * @returns {Promise<ClientUser>}
     * @example
     * // Set the client user's status
     * client.user.setSamsungActivity('com.YostarJP.BlueArchive', 'START');
     * // Update
     * client.user.setSamsungActivity('com.miHoYo.bh3oversea', 'UPDATE');
     * // Stop
     * client.user.setSamsungActivity('com.miHoYo.GenshinImpact', 'STOP');
     */
    setSamsungActivity(packageName: string, type?: string): Promise<ClientUser>;
    /**
     * Stop ringing
     * @param {ChannelResolvable} channel DMChannel | GroupDMChannel
     * @returns {Promise<void>}
     */
    stopRinging(channel: any): Promise<void>;
    /**
     * Super Reactions
     * @returns {Promise<number>}
     */
    fetchBurstCredit(): Promise<number>;
    /**
     * Set global display name
     * @param {string} globalName The new display name
     * @returns {Promise<ClientUser>}
     */
    setGlobalName(globalName?: string): Promise<ClientUser>;
    /**
     * Set pronouns
     * @param {?string} pronouns Your pronouns
     * @returns {Promise<ClientUser>}
     */
    setPronouns(pronouns?: string): Promise<ClientUser>;
}
export default ClientUser;
