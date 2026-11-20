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

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally the env vars
// below stand in for them so the same command works on my machine.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate only accepts a real video address on YouTube: a Shorts, watch
// or youtu.be link whose id is 11 letters, digits, _ or -, with anything
// after it (a query or fragment) read past. Refuse anything else here,
// loudly, instead of handing the gate a file it can only reject —
// the placeholder the starter ships (".../shorts/<id>") fails this
// on purpose, so it can never be submitted by accident.
const VIDEO_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;

const videoPath = join(BOT_DIR, 'VIDEO.json');
let video;
try {
  video = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video?.url !== 'string' || !VIDEO_URL.test(video.url)) {
  console.error(
    `VIDEO.json does not name a video on YouTube yet: ${JSON.stringify(video?.url)} — ` +
      'replace the placeholder with the uploaded Short\'s address first.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
