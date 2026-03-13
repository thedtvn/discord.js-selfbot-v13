'use strict';

const assert = require('assert');
const {
  MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu,
  MessageAttachment,
} = require('../../dist/index.js');

module.exports = async function builderTests() {
  // MessageEmbed
  const embed = new MessageEmbed()
    .setTitle('Test Embed')
    .setDescription('A test embed description')
    .setColor('#FF0000')
    .setURL('https://example.com')
    .setTimestamp()
    .setFooter({ text: 'Footer text', iconURL: 'https://example.com/icon.png' })
    .setAuthor({ name: 'Author', iconURL: 'https://example.com/author.png', url: 'https://example.com' })
    .setThumbnail('https://example.com/thumb.png')
    .setImage('https://example.com/image.png')
    .addField('Field 1', 'Value 1', true)
    .addField('Field 2', 'Value 2', true)
    .addField('Field 3', 'Value 3', false);

  assert.strictEqual(embed.title, 'Test Embed');
  assert.strictEqual(embed.description, 'A test embed description');
  assert.strictEqual(embed.url, 'https://example.com');
  assert.ok(embed.timestamp);
  assert.strictEqual(embed.footer.text, 'Footer text');
  assert.strictEqual(embed.author.name, 'Author');
  assert.strictEqual(embed.thumbnail.url, 'https://example.com/thumb.png');
  assert.strictEqual(embed.image.url, 'https://example.com/image.png');
  assert.strictEqual(embed.fields.length, 3);
  assert.strictEqual(embed.fields[0].name, 'Field 1');
  assert.strictEqual(embed.fields[0].value, 'Value 1');
  assert.strictEqual(embed.fields[0].inline, true);
  assert.strictEqual(embed.fields[2].inline, false);
  assert.strictEqual(embed.hexColor.toUpperCase(), '#FF0000');

  const embedJson = embed.toJSON();
  assert.strictEqual(embedJson.title, 'Test Embed');
  assert.strictEqual(embedJson.fields.length, 3);

  const embedCopy = new MessageEmbed(embed);
  assert.strictEqual(embedCopy.title, 'Test Embed');
  assert.strictEqual(embedCopy.fields.length, 3);

  // Empty embed
  const emptyEmbed = new MessageEmbed();
  assert.strictEqual(emptyEmbed.title, null);
  assert.strictEqual(emptyEmbed.description, null);
  assert.strictEqual(emptyEmbed.fields.length, 0);

  // Embed field manipulation
  const fieldEmbed = new MessageEmbed()
    .addField('A', '1')
    .addField('B', '2')
    .addField('C', '3');
  assert.strictEqual(fieldEmbed.fields.length, 3);
  fieldEmbed.spliceFields(1, 1);
  assert.strictEqual(fieldEmbed.fields.length, 2);
  assert.strictEqual(fieldEmbed.fields[1].name, 'C');

  // MessageButton
  const button = new MessageButton()
    .setCustomId('test_button')
    .setLabel('Click Me')
    .setStyle('PRIMARY')
    .setDisabled(false);

  assert.strictEqual(button.customId, 'test_button');
  assert.strictEqual(button.label, 'Click Me');
  assert.strictEqual(button.style, 'PRIMARY');
  assert.strictEqual(button.disabled, false);

  const linkButton = new MessageButton()
    .setLabel('Visit')
    .setStyle('LINK')
    .setURL('https://example.com');

  assert.strictEqual(linkButton.style, 'LINK');
  assert.strictEqual(linkButton.url, 'https://example.com');

  const dangerButton = new MessageButton()
    .setCustomId('danger_btn')
    .setLabel('Danger')
    .setStyle('DANGER')
    .setEmoji('⚠️');

  assert.strictEqual(dangerButton.style, 'DANGER');

  const buttonJson = button.toJSON();
  assert.strictEqual(buttonJson.label, 'Click Me');

  // MessageActionRow
  const row = new MessageActionRow().addComponents(button, linkButton);
  assert.strictEqual(row.components.length, 2);
  assert.strictEqual(row.type, 'ACTION_ROW');

  const rowJson = row.toJSON();
  assert.strictEqual(rowJson.components.length, 2);

  const emptyRow = new MessageActionRow();
  assert.strictEqual(emptyRow.components.length, 0);

  // MessageSelectMenu (uses constructor, not builder methods)
  const select = new MessageSelectMenu({
    customId: 'test_select',
    placeholder: 'Choose one',
    minValues: 1,
    maxValues: 1,
    options: [
      { label: 'Option A', value: 'a', description: 'First option' },
      { label: 'Option B', value: 'b', description: 'Second option', default: true },
      { label: 'Option C', value: 'c' },
    ],
  });

  assert.strictEqual(select.customId, 'test_select');
  assert.strictEqual(select.placeholder, 'Choose one');
  assert.strictEqual(select.minValues, 1);
  assert.strictEqual(select.maxValues, 1);
  assert.strictEqual(select.options.length, 3);
  assert.strictEqual(select.options[1].default, true);

  const selectRow = new MessageActionRow().addComponents(select);
  assert.strictEqual(selectRow.components.length, 1);

  // MessageAttachment
  const attachment = new MessageAttachment(Buffer.from('test'), 'test.txt');
  assert.strictEqual(attachment.name, 'test.txt');
  assert.ok(attachment.attachment instanceof Buffer);

  const spoilerAttachment = new MessageAttachment(Buffer.from('hidden'), 'SPOILER_image.png');
  assert.ok(spoilerAttachment.spoiler);

  const urlAttachment = new MessageAttachment('https://example.com/file.png');
  assert.strictEqual(urlAttachment.attachment, 'https://example.com/file.png');

  console.log('    Embed, ActionRow, Button, SelectMenu, Attachment');
};
