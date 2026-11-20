// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a GTA 6 clip cut by my agent in the build
// session, uploaded to YouTube as a public Short with the bounty's line and
// the play code in its description. This program only hands the house the
// video's address: it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing else written here
// is scored — the house reads the video's views from YouTube itself.
//
// VIDEO.json still holds the starter's placeholder address until Topan
// uploads the rendered clip and hands back its URL; the placeholder is
// refused by the gate on purpose, so this file must be replaced with the
// real Short's address before the entry is submitted.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally the env vars
// below stand in for them so the same command works on my machine.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
