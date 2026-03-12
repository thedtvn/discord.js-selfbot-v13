import type { Snowflake } from 'discord-api-types/v10';
import type { Guild } from '../structures/Guild';
import BaseManager from './BaseManager';
interface RawMuteConfigData {
    end_time: string;
    selected_time_window: number;
}
interface RawGuildSettingsData {
    suppress_everyone?: boolean;
    suppress_roles?: boolean;
    mute_scheduled_events?: boolean;
    message_notifications?: number;
    flags?: number;
    mobile_push?: boolean;
    muted?: boolean;
    mute_config?: RawMuteConfigData | null;
    hide_muted_channels?: boolean;
    channel_overrides?: unknown[];
    notify_highlights?: number;
    version?: number;
}
/**
 * Manages API methods for users and stores their cache.
 * @extends {BaseManager}
 * @see {@link https://luna.gitlab.io/discord-unofficial-docs/user_settings.html}
 */
declare class GuildSettingManager extends BaseManager {
    #private;
    guildId: Snowflake;
    suppressEveryone?: boolean;
    suppressRoles?: boolean;
    muteScheduledEvents?: boolean;
    messageNotifications?: number;
    flags?: number;
    mobilePush?: boolean;
    muted?: boolean;
    muteConfig: {
        endTime: Date;
        selectedTimeWindow: number;
    } | null;
    hideMutedChannels?: boolean;
    channelOverrides?: unknown[];
    notifyHighlights?: number;
    version?: number;
    constructor(guild: Guild);
    /**
     * Raw data
     * @type {Object}
     */
    get raw(): RawGuildSettingsData;
    /**
     * Get the guild
     * @type {?Guild}
     * @readonly
     */
    get guild(): Guild | undefined;
    /**
     * Patch data file
     * @private
     * @param {Object} data Raw Data to patch
     */
    _patch(data?: RawGuildSettingsData): void;
    /**
     * Edit guild settings
     * @param {Object} data Data to edit
     * @returns {Promise<GuildSettingManager>}
     */
    edit(data: RawGuildSettingsData): Promise<this>;
}
export default GuildSettingManager;
