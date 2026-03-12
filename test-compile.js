// Simple test to verify TypeScript compilation and basic library functionality
const Discord = require('./dist/index.js');

console.log('=== TypeScript Migration Compilation Test ===\n');

// Test 1: Main classes exist
const tests = [
  { name: 'Client class', test: () => typeof Discord.Client === 'function' },
  { name: 'MessageEmbed class', test: () => typeof Discord.MessageEmbed === 'function' },
  { name: 'MessageButton class', test: () => typeof Discord.MessageButton === 'function' },
  { name: 'MessageActionRow class', test: () => typeof Discord.MessageActionRow === 'function' },
  { name: 'Permissions class', test: () => typeof Discord.Permissions === 'function' },
  { name: 'Intents class', test: () => typeof Discord.Intents === 'function' },
  { name: 'Util class', test: () => typeof Discord.Util === 'object' },
];

let passed = 0;
let failed = 0;

tests.forEach(({ name, test }) => {
  try {
    if (test()) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ FAIL: ${name} - ${error.message}`);
    failed++;
  }
});

// Test 2: Create instances
try {
  const embed = new Discord.MessageEmbed()
    .setTitle('Test Embed')
    .setDescription('Testing TypeScript migration')
    .setColor('#0099ff');
  console.log('✅ PASS: MessageEmbed instance creation');
  passed++;
} catch (error) {
  console.log(`❌ FAIL: MessageEmbed instance - ${error.message}`);
  failed++;
}

try {
  const button = new Discord.MessageButton()
    .setLabel('Test Button')
    .setStyle('PRIMARY')
    .setCustomId('test_button');
  console.log('✅ PASS: MessageButton instance creation');
  passed++;
} catch (error) {
  console.log(`❌ FAIL: MessageButton instance - ${error.message}`);
  failed++;
}

try {
  const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
        .setLabel('Button 1')
        .setStyle('PRIMARY')
        .setCustomId('btn1')
    );
  console.log('✅ PASS: MessageActionRow with components');
  passed++;
} catch (error) {
  console.log(`❌ FAIL: MessageActionRow - ${error.message}`);
  failed++;
}

console.log(`\n=== TEST SUMMARY ===`);
console.log(`Total: ${passed + failed}`);
console.log(`Passed: ${passed} ✅`);
console.log(`Failed: ${failed} ❌`);
console.log(`Success rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);

if (failed === 0) {
  console.log('\n✅ TypeScript migration successful - all compilation tests passed!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some tests failed');
  process.exit(1);
}
