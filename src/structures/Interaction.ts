import Base from './Base';
import { InteractionTypes, MessageComponentTypes, ApplicationCommandTypes } from '../util/Constants';
import Permissions from '../util/Permissions';
import SnowflakeUtil from '../util/SnowflakeUtil';

/**
 * Represents an interaction.
 * @extends {Base}
 */
class Interaction extends Base {
  public type: any;
  declare public id: any;
  public token: any;
  public applicationId: any;
  public channelId: any;
  public guildId: any;
  public user: any;
  public member: any;
  public version: any;
  public appPermissions: any;
  public memberPermissions: any;
  public locale: any;
  public guildLocale: any;
  public targetId: any;
  public targetType: any;
  public componentType: any;

  constructor(client: any, data: any) {
    super(client);

    /**
     * The interaction's type
     * @type {InteractionType}
     */
    this.type = InteractionTypes[data.type];

    /**
     * The interaction's id
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The interaction's token
     * @type {string}
     * @name Interaction#token
     * @readonly
     */
    Object.defineProperty(this, 'token', { value: data.token });

    /**
     * The application's id
     * @type {Snowflake}
     */
    this.applicationId = data.application_id;

    /**
     * The id of the channel this interaction was sent in
     * @type {?Snowflake}
     */
    this.channelId = data.channel_id ?? null;

    /**
     * The id of the guild this interaction was sent in
     * @type {?Snowflake}
     */
    this.guildId = data.guild_id ?? null;

    /**
     * The user which sent this interaction
     * @type {User}
     */
    this.user = this.client.users._add(data.user ?? data.member.user);

    /**
     * If this interaction was sent in a guild, the member which sent it
     * @type {?(GuildMember|APIGuildMember)}
     */
    this.member = data.member ? this.guild?.members._add(data.member) ?? data.member : null;

    /**
     * The version
     * @type {number}
     */
    this.version = data.version;

    /**
     * Set of permissions the application or bot has within the channel the interaction was sent from
     * @type {?Readonly<Permissions>}
     */
    this.appPermissions = data.app_permissions ? new Permissions(data.app_permissions).freeze() : null;

    /**
     * The permissions of the member, if one exists, in the channel this interaction was executed in
     * @type {?Readonly<Permissions>}
     */
    this.memberPermissions = data.member?.permissions ? new Permissions(data.member.permissions).freeze() : null;

    /**
     * A Discord locale string, possible values are:
     * * en-US (English, US)
     * * en-GB (English, UK)
     * * bg (Bulgarian)
     * * zh-CN (Chinese, China)
     * * zh-TW (Chinese, Taiwan)
     * * hr (Croatian)
     * * cs (Czech)
     * * da (Danish)
     * * nl (Dutch)
     * * fi (Finnish)
     * * fr (French)
     * * de (German)
     * * el (Greek)
     * * hi (Hindi)
     * * hu (Hungarian)
     * * it (Italian)
     * * ja (Japanese)
     * * ko (Korean)
     * * lt (Lithuanian)
     * * no (Norwegian)
     * * pl (Polish)
     * * pt-BR (Portuguese, Brazilian)
     * * ro (Romanian, Romania)
     * * ru (Russian)
     * * es-ES (Spanish)
     * * sv-SE (Swedish)
     * * th (Thai)
     * * tr (Turkish)
     * * uk (Ukrainian)
     * * vi (Vietnamese)
     * @see {@link https://discord.com/developers/docs/reference#locales}
     * @typedef {string} Locale
     */

    /**
     * The locale of the user who invoked this interaction
     * @type {Locale}
     */
    this.locale = data.locale;

    /**
     * The preferred locale from the guild this interaction was sent in
     * @type {?Locale}
     */
    this.guildLocale = data.guild_locale ?? null;
  }

  /**
   * The timestamp the interaction was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp(): number {
    return SnowflakeUtil.timestampFrom(this.id);
  }

  /**
   * The time the interaction was created at
   * @type {Date}
   * @readonly
   */
  get createdAt(): Date {
    return new Date(this.createdTimestamp);
  }

  /**
   * The channel this interaction was sent in
   * @type {?TextBasedChannels}
   * @readonly
   */
  get channel(): any | null {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  /**
   * The guild this interaction was sent in
   * @type {?Guild}
   * @readonly
   */
  get guild(): any | null {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  /**
   * Indicates whether this interaction is received from a guild.
   * @returns {boolean}
   */
  inGuild(): boolean {
    return Boolean(this.guildId && this.member);
  }

  /**
   * Indicates whether or not this interaction is both cached and received from a guild.
   * @returns {boolean}
   */
  inCachedGuild(): boolean {
    return Boolean(this.guild && this.member);
  }

  /**
   * Indicates whether or not this interaction is received from an uncached guild.
   * @returns {boolean}
   */
  inRawGuild(): boolean {
    return Boolean(this.guildId && !this.guild && this.member);
  }

  /**
   * Indicates whether this interaction is a {@link BaseCommandInteraction}.
   * @returns {boolean}
   */
  isApplicationCommand(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.APPLICATION_COMMAND;
  }

  /**
   * Indicates whether this interaction is a {@link CommandInteraction}.
   * @returns {boolean}
   */
  isCommand(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.APPLICATION_COMMAND && typeof this.targetId === 'undefined';
  }

  /**
   * Indicates whether this interaction is a {@link ContextMenuInteraction}
   * @returns {boolean}
   */
  isContextMenu(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.APPLICATION_COMMAND && typeof this.targetId !== 'undefined';
  }

  /**
   * Indicates whether this interaction is a {@link ModalSubmitInteraction}
   * @returns {boolean}
   */
  isModalSubmit(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.MODAL_SUBMIT;
  }

  /**
   * Indicates whether this interaction is a {@link UserContextMenuInteraction}
   * @returns {boolean}
   */
  isUserContextMenu(): boolean {
    return this.isContextMenu() && ApplicationCommandTypes[this.targetType] === ApplicationCommandTypes.USER;
  }

  /**
   * Indicates whether this interaction is a {@link MessageContextMenuInteraction}
   * @returns {boolean}
   */
  isMessageContextMenu(): boolean {
    return this.isContextMenu() && ApplicationCommandTypes[this.targetType] === ApplicationCommandTypes.MESSAGE;
  }

  /**
   * Indicates whether this interaction is an {@link AutocompleteInteraction}
   * @returns {boolean}
   */
  isAutocomplete(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE;
  }

  /**
   * Indicates whether this interaction is a {@link MessageComponentInteraction}.
   * @returns {boolean}
   */
  isMessageComponent(): boolean {
    return InteractionTypes[this.type] === InteractionTypes.MESSAGE_COMPONENT;
  }

  /**
   * Indicates whether this interaction is a {@link ButtonInteraction}.
   * @returns {boolean}
   */
  isButton(): boolean {
    return (
      InteractionTypes[this.type] === InteractionTypes.MESSAGE_COMPONENT &&
      MessageComponentTypes[this.componentType] === MessageComponentTypes.BUTTON
    );
  }

  /**
   * Indicates whether this interaction is a {@link SelectMenuInteraction}.
   * @returns {boolean}
   */
  isSelectMenu(): boolean {
    return (
      InteractionTypes[this.type] === InteractionTypes.MESSAGE_COMPONENT &&
      MessageComponentTypes[this.componentType] === MessageComponentTypes.SELECT_MENU
    );
  }

  /**
   * Indicates whether this interaction can be replied to.
   * @returns {boolean}
   */
  isRepliable(): boolean {
    return ![InteractionTypes.PING, InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE].includes(
      InteractionTypes[this.type],
    );
  }
}


export default Interaction;
