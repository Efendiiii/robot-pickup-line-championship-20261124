import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one line, <= 200 characters.
// A robot pickup line whose joke grows out of being a machine:
// self-diagnostics, bugs, patches, cooling fans — and a refusal to fix it.
const LINE =
  "I ran a full self-diagnostic. The only bug it found: my cooling fans spin up every time you smile, and I refuse to patch it.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
