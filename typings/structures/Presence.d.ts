import Base from './Base';
import ActivityFlags from '../util/ActivityFlags';
/**
 * Activity sent in a message.
 * @typedef {Object} MessageActivity
 * @property {string} [partyId] Id of the party represented in activity
 * @property {MessageActivityType} type Type of activity sent
 */
/**
 * The status of this presence:
 * * **`online`** - user is online
 * * **`idle`** - user is AFK
 * * **`offline`** - user is offline or invisible
 * * **`dnd`** - user is in Do Not Disturb
 * @typedef {string} PresenceStatus
 */
/**
 * The status of this presence:
 * * **`online`** - user is online
 * * **`idle`** - user is AFK
 * * **`dnd`** - user is in Do Not Disturb
 * @typedef {string} ClientPresenceStatus
 */
/**
 * Represents a user's presence.
 * @extends {Base}
 */
declare class Presence extends Base {
    userId: string;
    guild: any;
    status: string;
    activities: Array<Activity | CustomStatus | RichPresence | SpotifyRPC>;
    clientStatus: {
        web?: string;
        mobile?: string;
        desktop?: string;
    } | null;
    lastModified: number;
    afk: boolean;
    since: number;
    constructor(client: any, data?: any);
    /**
     * The user of this presence
     * @type {?User}
     * @readonly
     */
    get user(): any;
    /**
     * The member of this presence
     * @type {?GuildMember}
     * @readonly
     */
    get member(): any;
    _patch(data: any): any;
    _clone(): any;
    /**
     * Whether this presence is equal to another.
     * @param {Presence} presence The presence to compare with
     * @returns {boolean}
     */
    equals(presence: any): any;
    toJSON(): any;
}
/**
 * The platform of this activity:
 * * **`desktop`**
 * * **`samsung`** - playing on Samsung Galaxy
 * * **`xbox`** - playing on Xbox Live
 * * **`ios`**
 * * **`android`**
 * * **`embedded`**
 * * **`ps4`**
 * * **`ps5`**
 * @typedef {string} ActivityPlatform
 */
/**
 * Represents an activity that is part of a user's presence.
 */
declare class Activity {
    presence: Presence;
    id: string;
    name: string;
    type: string | number;
    url: string | null;
    createdTimestamp: number;
    sessionId: string | null;
    platform: string | null;
    timestamps: {
        start: number | null;
        end: number | null;
    } | null;
    applicationId: string | null;
    details: string | null;
    state: string | null;
    syncId: string | null;
    flags: Readonly<ActivityFlags>;
    buttons: string[];
    emoji: any;
    party: any;
    assets: RichPresenceAssets;
    constructor(presence: Presence, data: any);
    _patch(data?: any): any;
    /**
     * Whether this activity is equal to another activity.
     * @param {Activity} activity The activity to compare with
     * @returns {boolean}
     */
    equals(activity: any): any;
    /**
     * The time the activity was created at
     * @type {Date}
     * @readonly
     */
    get createdAt(): any;
    /**
     * When concatenated with a string, this automatically returns the activities' name instead of the Activity object.
     * @returns {string}
     */
    toString(): any;
    _clone(): any;
    toJSON(...props: any[]): any;
}
/**
 * Assets for a rich presence
 */
declare class RichPresenceAssets {
    activity: Activity;
    largeText: string | null;
    smallText: string | null;
    largeImage: string | null;
    smallImage: string | null;
    constructor(activity: any, assets: any);
    _patch(assets?: any): any;
    /**
     * Gets the URL of the small image asset
     * @param {StaticImageURLOptions} [options] Options for the image URL
     * @returns {?string}
     */
    smallImageURL({ format, size }?: {
        format?: string;
        size?: number;
    }): any;
    /**
     * Gets the URL of the large image asset
     * @param {StaticImageURLOptions} [options] Options for the image URL
     * @returns {?string}
     */
    largeImageURL({ format, size }?: {
        format?: string;
        size?: number;
    }): any;
    static parseImage(image: any): any;
    toJSON(): any;
    /**
     * @typedef {string} RichPresenceImage
     * Support:
     * - cdn.discordapp.com
     * - media.discordapp.net
     * - Assets ID (https://discord.com/api/v9/oauth2/applications/{application_id}/assets)
     * - Media Proxy (mp:external/{hash})
     * - Twitch (twitch:{username})
     * - YouTube (youtube:{video_id})
     * - Spotify (spotify:{image_id})
     */
    /**
     * Set the large image of this activity
     * @param {?RichPresenceImage} image The large image asset's id
     * @returns {RichPresenceAssets}
     */
    setLargeImage(image: any): any;
    /**
     * Set the small image of this activity
     * @param {?RichPresenceImage} image The small image asset's id
     * @returns {RichPresenceAssets}
     */
    setSmallImage(image: any): any;
    /**
     * Hover text for the large image
     * @param {string} text Assets text
     * @returns {RichPresenceAssets}
     */
    setLargeText(text: any): any;
    /**
     * Hover text for the small image
     * @param {string} text Assets text
     * @returns {RichPresenceAssets}
     */
    setSmallText(text: any): any;
}
declare class CustomStatus extends Activity {
    emoji: any;
    state: string | null;
    /**
     * @typedef {Object} CustomStatusOptions
     * @property {string} [state] The state to be displayed
     * @property {EmojiIdentifierResolvable} [emoji] The emoji to be displayed
     */
    /**
     * @param {Client} client Discord Client
     * @param {CustomStatus|CustomStatusOptions} [data={}] CustomStatus to clone or raw data
     */
    constructor(client: any, data?: any);
    /**
     * Set the emoji of this activity
     * @param {EmojiIdentifierResolvable} emoji The emoji to be displayed
     * @returns {CustomStatus}
     */
    setEmoji(emoji: any): any;
    /**
     * Set state of this activity
     * @param {string | null} state The state to be displayed
     * @returns {CustomStatus}
     */
    setState(state: any): any;
    /**
     * Returns an object that can be used to set the status
     * @returns {CustomStatus}
     */
    toJSON(): any;
}
declare class RichPresence extends Activity {
    secrets: any;
    metadata: any;
    name: string;
    url: string | null;
    type: string | number;
    applicationId: string | null;
    state: string | null;
    details: string | null;
    party: any;
    timestamps: any;
    buttons: string[];
    platform: string | null;
    /**
     * @param {Client} client Discord client
     * @param {RichPresence} [data={}] RichPresence to clone or raw data
     */
    constructor(client: any, data?: any);
    /**
     * Sets the status from a JSON object
     * @param {RichPresence} data data
     * @private
     */
    setup(data?: any): any;
    /**
     * Set the large image of this activity
     * @param {?RichPresenceImage} image The large image asset's id
     * @returns {RichPresence}
     */
    setAssetsLargeImage(image: any): any;
    /**
     * Set the small image of this activity
     * @param {?RichPresenceImage} image The small image asset's id
     * @returns {RichPresence}
     */
    setAssetsSmallImage(image: any): any;
    /**
     * Hover text for the large image
     * @param {string} text Assets text
     * @returns {RichPresence}
     */
    setAssetsLargeText(text: any): any;
    /**
     * Hover text for the small image
     * @param {string} text Assets text
     * @returns {RichPresence}
     */
    setAssetsSmallText(text: any): any;
    /**
     * Set the name of the activity
     * @param {?string} name The activity's name
     * @returns {RichPresence}
     */
    setName(name: any): any;
    /**
     * If the activity is being streamed, a link to the stream
     * @param {?string} url URL of the stream
     * @returns {RichPresence}
     */
    setURL(url: any): any;
    /**
     * The activity status's type
     * @param {?ActivityTypes} type The type of activity
     * @returns {RichPresence}
     */
    setType(type: any): any;
    /**
     * Set the application id of this activity
     * @param {?Snowflake} id Bot's id
     * @returns {RichPresence}
     */
    setApplicationId(id: any): any;
    /**
     * Set the state of the activity
     * @param {?string} state The state of the activity
     * @returns {RichPresence}
     */
    setState(state: any): any;
    /**
     * Set the details of the activity
     * @param {?string} details The details of the activity
     * @returns {RichPresence}
     */
    setDetails(details: any): any;
    /**
     * @typedef {Object} RichParty
     * @property {string} id The id of the party
     * @property {number} max The maximum number of members in the party
     * @property {number} current The current number of members in the party
     */
    /**
     * Set the party of this activity
     * @param {?RichParty} party The party to be displayed
     * @returns {RichPresence}
     */
    setParty(party: any): any;
    /**
     * Sets the start timestamp of the activity
     * @param {Date|number|null} timestamp The timestamp of the start of the activity
     * @returns {RichPresence}
     */
    setStartTimestamp(timestamp: any): any;
    /**
     * Sets the end timestamp of the activity
     * @param {Date|number|null} timestamp The timestamp of the end of the activity
     * @returns {RichPresence}
     */
    setEndTimestamp(timestamp: any): any;
    /**
     * @typedef {object} RichButton
     * @property {string} name The name of the button
     * @property {string} url The url of the button
     */
    /**
     * Set the buttons of the rich presence
     * @param  {...?RichButton} button A list of buttons to set
     * @returns {RichPresence}
     */
    setButtons(...button: any[]): any;
    /**
     * The platform the activity is being played on
     * @param {ActivityPlatform | null} platform Any platform
     * @returns {RichPresence}
     */
    setPlatform(platform: any): any;
    /**
     * Secrets for rich presence joining and spectating (send-only)
     * @param {?string} join Secrets for rich presence joining
     * @returns {RichPresence}
     */
    setJoinSecret(join: any): any;
    /**
     * Add a button to the rich presence
     * @param {string} name The name of the button
     * @param {string} url The url of the button
     * @returns {RichPresence}
     */
    addButton(name: any, url: any): any;
    /**
     * Convert the rich presence to a JSON object
     * @returns {Object}
     */
    toJSON(...props: any[]): any;
    /**
     * @typedef {Object} ExternalAssets
     * @property {?string} url Orginal url of the image
     * @property {?string} external_asset_path Proxy url of the image (Using to RPC)
     */
    /**
     * Retrieves external assets from a RichPresence
     * @param {Client} client - The Discord client instance.
     * @param {Snowflake} applicationId - The application ID associated with the Rich Presence.
     * @param {...string} images - 1 or 2 external image URLs (not hosted by Discord).
     * @returns {Promise<ExternalAssets[]>}
     */
    static getExternal(client: any, applicationId: any, ...images: any[]): Promise<any>;
    /**
     * When concatenated with a string, this automatically returns the activities' name instead of the Activity object.
     * @returns {string}
     */
    toString(): any;
    _clone(): any;
}
/**
 * @extends {RichPresence}
 */
declare class SpotifyRPC extends RichPresence {
    metadata: any;
    syncId: any;
    /**
     * Create a new RichPresence (Spotify style)
     * @param {Client} client Discord Client
     * @param {SpotifyRPC} [options] Options for the Spotify RPC
     */
    constructor(client: any, options?: any);
    /**
     * Sets the status from a JSON object
     * @param {SpotifyRPC} options data
     * @private
     */
    setup(options: any): any;
    /**
     * Set Spotify song id to sync with
     * @param {string} id Song id
     * @returns {SpotifyRPC}
     */
    setSongId(id: any): any;
    /**
     * Add the artist id
     * @param {string} id Artist id
     * @returns {SpotifyRPC}
     */
    addArtistId(id: any): any;
    /**
     * Set the artist ids
     * @param {string | Array<string>} ids Artist ids
     * @returns {SpotifyRPC}
     */
    setArtistIds(...ids: any[]): any;
    /**
     * Set the album id
     * @param {string} id Album id
     * @returns {SpotifyRPC}
     */
    setAlbumId(id: any): any;
    toJSON(): any;
}
export { Presence, Activity, RichPresenceAssets, CustomStatus, RichPresence, SpotifyRPC };
