/**
 * Test Runner for discord.js-selfbot-v13
 *
 * Runs all module tests with a shared Client session to avoid
 * multiple logins. Offline tests (util, builders) run first,
 * then online tests share a single authenticated client.
 *
 * Usage:
 *   DISCORD_TOKEN=<token> node test/index.js
 *   DISCORD_TOKEN=<token> node test/index.js --offline   # util/builder tests only
 */

'use strict';

const assert = require('assert');

// ── Offline test modules (no Discord token required) ──
const utilTest = require('./util/util.test');
const builderTest = require('./structures/builders.test');

// ── Online test modules (require Discord token + connected client) ──
const clientTest = require('./client/client.test');
const structuresTest = require('./structures/structures.test');
const managersTest = require('./managers/managers.test');
const messageTest = require('./structures/message.test');
const restWsTest = require('./rest/rest_ws.test');
const voiceTest = require('./voice/voice.test');

const OFFLINE_TESTS = [
  { name: 'Util (BitField, Permissions, Intents, Flags, Snowflake)', fn: utilTest },
  { name: 'Builders (Embed, ActionRow, Button, SelectMenu, Modal)', fn: builderTest },
];

const ONLINE_TESTS = [
  { name: 'Client (login, user, presence, options)', fn: clientTest },
  { name: 'Structures (Guild, User, Channel, Role)', fn: structuresTest },
  { name: 'Managers (GuildManager, ChannelManager, RoleManager)', fn: managersTest },
  { name: 'Messages (send, edit, delete, embeds, reactions)', fn: messageTest },
  { name: 'REST & WebSocket (API calls, ping, gateway)', fn: restWsTest },
  { name: 'Voice (manager, connection lifecycle)', fn: voiceTest },
];

// ── Simple test harness ──

let totalPassed = 0;
let totalFailed = 0;
const results = [];

async function runSuite(label, tests, client) {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  ${label}`);
  console.log(`${'═'.repeat(60)}\n`);

  for (const test of tests) {
    const start = Date.now();
    try {
      await test.fn(client);
      const ms = Date.now() - start;
      console.log(`  ✓ ${test.name} (${ms}ms)\n`);
      results.push({ name: test.name, status: 'PASS', ms });
      totalPassed++;
    } catch (err) {
      const ms = Date.now() - start;
      console.error(`  ✗ ${test.name} (${ms}ms)`);
      console.error(`    ${err.message}\n`);
      results.push({ name: test.name, status: 'FAIL', ms, error: err.message });
      totalFailed++;
    }
  }
}

async function main() {
  const offlineOnly = process.argv.includes('--offline');

  console.log('discord.js-selfbot-v13 — Test Suite');
  console.log(`Mode: ${offlineOnly ? 'OFFLINE' : 'FULL'}`);

  // ── Offline tests ──
  await runSuite('OFFLINE TESTS', OFFLINE_TESTS, null);

  // ── Online tests ──
  if (!offlineOnly) {
    const token = process.env.DISCORD_TOKEN;
    if (!token) {
      console.error('\nDISCORD_TOKEN environment variable is required for online tests.');
      console.error('Run with --offline to skip online tests.\n');
      process.exit(1);
    }

    const { Client } = require('../dist/index.js');
    const client = new Client({ checkUpdate: false, syncStatus: false });

    const readyPromise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Client ready timed out after 30s')), 30000);
      client.once('ready', () => {
        clearTimeout(timeout);
        resolve();
      });
    });

    await client.login(token);
    await readyPromise;

    console.log(`\n  Logged in as: ${client.user.tag} (${client.user.id})`);
    console.log(`  Guilds: ${client.guilds.cache.size}`);

    try {
      await runSuite('ONLINE TESTS', ONLINE_TESTS, client);
    } finally {
      client.destroy();
    }
  }

  // ── Summary ──
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  RESULTS');
  console.log(`${'═'.repeat(60)}`);
  for (const r of results) {
    const icon = r.status === 'PASS' ? '✓' : '✗';
    console.log(`  ${icon} ${r.name} — ${r.status} (${r.ms}ms)`);
  }
  console.log(`\n  Total: ${totalPassed + totalFailed} | Passed: ${totalPassed} | Failed: ${totalFailed}`);
  console.log(`${'═'.repeat(60)}\n`);

  process.exit(totalFailed > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
