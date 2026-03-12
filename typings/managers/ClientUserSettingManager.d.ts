import { Collection } from '@discordjs/collection';
import type { Snowflake } from 'discord-api-types/v10';
import type Client from '../client/Client';
import BaseManager from './BaseManager';
import { CustomStatus } from '../structures/Presence';
interface RawUserSettingsData {
    [key: string]: unknown;
    locale?: string;
    show_current_game?: boolean;
    default_guilds_restricted?: boolean;
    inline_attachment_media?: boolean;
    inline_embed_media?: boolean;
    gif_auto_play?: boolean;
    render_embeds?: boolean;
    animate_emoji?: boolean;
    enable_tts_command?: boolean;
    message_display_compact?: boolean;
    convert_emoticons?: boolean;
    explicit_content_filter?: number;
    theme?: 'dark' | 'light';
    developer_mode?: boolean;
    afk_timeout?: number;
    animate_stickers?: number;
    render_reactions?: boolean;
    status?: string;
    custom_status?: {
        text?: string;
        emoji_id?: Snowflake;
        emoji_name?: string;
    } | null;
    restricted_guilds?: Snowflake[];
}
interface CustomStatusOption {
    text?: string | null;
    status?: 'online' | 'idle' | 'dnd' | 'invisible' | null;
    emoji?: unknown;
    expires?: number | null;
}
/**
 * Manages API methods for users and stores their cache.
 * @extends {BaseManager}
 * @see {@link https://luna.gitlab.io/discord-unofficial-docs/user_settings.html}
 */
declare class ClientUserSettingManager extends BaseManager {
    #private;
    addFriendFrom: {
        all: boolean | null;
        mutual_friends: boolean | null;
        mutual_guilds: boolean | null;
    };
    locale: string | undefined;
    activityDisplay: boolean | undefined;
    allowDMsFromGuild: boolean | undefined;
    displayImage: boolean | undefined;
    linkedImageDisplay: boolean | undefined;
    autoplayGIF: boolean | undefined;
    previewLink: boolean | undefined;
    animatedEmoji: boolean | undefined;
    allowTTS: boolean | undefined;
    compactMode: boolean | undefined;
    convertEmoticons: boolean | undefined;
    DMScanLevel: number | undefined;
    theme: 'dark' | 'light' | undefined;
    developerMode: boolean | undefined;
    afkTimeout: number | undefined;
    stickerAnimationMode: number | undefined;
    showEmojiReactions: boolean | undefined;
    customStatus: RawUserSettingsData['custom_status'] | undefined;
    disableDMfromServer: Collection<Snowflake, unknown>;
    constructor(client: Client);
    /**
     * Patch data file
     * https://luna.gitlab.io/discord-unofficial-docs/docs/user_settings
     * @private
     * @param {Object} data Raw Data to patch
     */
    _patch(data?: RawUserSettingsData): void;
    /**
     * Raw data
     * @type {Object}
     */
    get raw(): RawUserSettingsData;
    fetch(): Promise<this>;
    /**
     * Edit data
     * @param {any} data Data to edit
     */
    edit(data: Partial<RawUserSettingsData>): Promise<this>;
    /**
     * Toggle compact mode
     * @returns {Promise<this>}
     */
    toggleCompactMode(): Promise<this>;
    /**
     * Discord Theme
     * @param {string} value Theme to set (dark | light)
     * @returns {Promise<this>}
     */
    setTheme(value: 'dark' | 'light'): Promise<this>;
    /**
     * CustomStatus Object
     * @typedef {Object} CustomStatusOption
     * @property {string | null} text Text to set
     * @property {string | null} status The status to set: 'online', 'idle', 'dnd', 'invisible' or null.
     * @property {EmojiResolvable | null} emoji UnicodeEmoji, DiscordEmoji, or null.
     * @property {number | null} expires The number of seconds until the status expires, or null.
     */
    /**
     * Set custom status
     * @param {?CustomStatus | CustomStatusOption} options CustomStatus
     * @returns {Promise<this>}
     */
    setCustomStatus(options: CustomStatus | CustomStatusOption | null): Promise<this>;
    /**
     * Restricted guilds setting
     * @param {boolean} status Restricted status
     * @returns {Promise}
     */
    restrictedGuilds(status: boolean): Promise<this>;
    /**
     * Add a guild to the list of restricted guilds.
     * @param {GuildIDResolve} guildId The guild to add
     * @returns {Promise}
     */
    addRestrictedGuild(guildId: Snowflake): Promise<this>;
    /**
     * Remove a guild from the list of restricted guilds.
     * @param {GuildIDResolve} guildId The guild to remove
     * @returns {Promise}
     */
    removeRestrictedGuild(guildId: Snowflake): Promise<this>;
}
export default ClientUserSettingManager;
