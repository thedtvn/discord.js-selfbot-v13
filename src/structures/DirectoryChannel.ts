'use strict';

import { Channel } from './Channel';

/**
 * Represents a channel that displays a directory of guilds.
 * @extends {Channel}
 */
class DirectoryChannel extends Channel {
  public name: string;

  _patch(data: any): any {
    super._patch(data);
    /**
     * The channel's name
     * @type {string}
     */
    this.name = data.name;
  }
}

export default DirectoryChannel;
