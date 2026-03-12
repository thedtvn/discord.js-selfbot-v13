'use strict';

import BaseGuildEmoji from './BaseGuildEmoji';
import { Error } from '../errors';
import GuildEmojiRoleManager from '../managers/GuildEmojiRoleManager';
import Permissions from '../util/Permissions';
import type Client from '../client/Client';
import type Guild from './Guild';
import type User from './User';
import type Role from './Role';
import type { APIEmoji, Snowflake } from 'discord-api-types/v10';

/**
 * Represents a custom emoji.
 * @extends {BaseGuildEmoji}
 */
class GuildEmoji extends BaseGuildEmoji {
  public author: User | null;
  public declare _roles: Snowflake[];

  constructor(client: Client, data: APIEmoji & { roles?: Snowflake[]; user?: unknown }, guild: Guild) {
    super(client, data, guild);

    /**
     * The user who created this emoji
     * @type {?User}
     */
    this.author = null;

    /**
     * Array of role ids this emoji is active for
     * @name GuildEmoji#_roles
     * @type {Snowflake[]}
     * @private
     */
    Object.defineProperty(this, '_roles', { value: [], writable: true });

    this._patch(data);
  }

  /**
   * The guild this emoji is part of
   * @type {Guild}
   * @name GuildEmoji#guild
   */

  _clone(): this {
    const clone = super._clone();
    clone._roles = this._roles.slice();
    return clone;
  }

  _patch(data: APIEmoji & { roles?: Snowflake[]; user?: unknown }): void {
    super._patch(data);

    if (data.user) this.author = this.client.users._add(data.user);
    if (data.roles) this._roles = data.roles;
  }

  /**
   * Whether the emoji is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable(): boolean {
    if (!this.guild.members.me) throw new Error('GUILD_UNCACHED_ME');
    return !this.managed && this.guild.members.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS);
  }

  /**
   * A manager for roles this emoji is active for.
   * @type {GuildEmojiRoleManager}
   * @readonly
   */
  get roles(): GuildEmojiRoleManager {
    return new GuildEmojiRoleManager(this);
  }

  /**
   * Fetches the author for this emoji
   * @returns {Promise<User>}
   */
  fetchAuthor(): Promise<User> {
    return this.guild.emojis.fetchAuthor(this);
  }

  /**
   * Data for editing an emoji.
   * @typedef {Object} GuildEmojiEditData
   * @property {string} [name] The name of the emoji
   * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] Roles to restrict emoji to
   */

  /**
   * Edits the emoji.
   * @param {GuildEmojiEditData} data The new data for the emoji
   * @param {string} [reason] Reason for editing this emoji
   * @returns {Promise<GuildEmoji>}
   * @example
   * // Edit an emoji
   * emoji.edit({ name: 'newemoji' })
   *   .then(e => console.log(`Edited emoji ${e}`))
   *   .catch(console.error);
   */
  async edit(data: { name?: string; roles?: Array<Role | Snowflake> }, reason?: string): Promise<this> {
    const roles = data.roles?.map(r => r.id ?? r);
    const newData = await this.client.api
      .guilds(this.guild.id)
      .emojis(this.id)
      .patch({
        data: {
          name: data.name,
          roles,
        },
        reason,
      });
    const clone = this._clone();
    clone._patch(newData);
    return clone;
  }

  /**
   * Sets the name of the emoji.
   * @param {string} name The new name for the emoji
   * @param {string} [reason] Reason for changing the emoji's name
   * @returns {Promise<GuildEmoji>}
   */
  setName(name: string, reason?: string): Promise<this> {
    return this.edit({ name }, reason);
  }

  /**
   * Deletes the emoji.
   * @param {string} [reason] Reason for deleting the emoji
   * @returns {Promise<GuildEmoji>}
   */
  async delete(reason?: string): Promise<this> {
    await this.guild.emojis.delete(this, reason);
    return this;
  }

  /**
   * Whether this emoji is the same as another one.
   * @param {GuildEmoji|APIEmoji} other The emoji to compare it to
   * @returns {boolean}
   */
  equals(other: GuildEmoji | (APIEmoji & { roles?: Snowflake[] })): boolean {
    if (other instanceof GuildEmoji) {
      return (
        other.id === this.id &&
        other.name === this.name &&
        other.managed === this.managed &&
        other.available === this.available &&
        other.requiresColons === this.requiresColons &&
        other.roles.cache.size === this.roles.cache.size &&
        other.roles.cache.every(role => this.roles.cache.has(role.id))
      );
    } else {
      return (
        other.id === this.id &&
        other.name === this.name &&
        other.roles.length === this.roles.cache.size &&
        other.roles.every(role => this.roles.cache.has(role))
      );
    }
  }
}

export default GuildEmoji;
