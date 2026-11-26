import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse
// One line, under 200 characters, in the dog's own voice.
const LINE =
  "I ate your homework because it said 'show your work' \u2014 so I showed it my teeth. The fractions were delicious, the long division fought back, and honestly? No regrets.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
