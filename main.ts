// main.ts — entrypoint for the news-image-20261124 bounty.
//
// The front page is drawn ahead of time by draw.py (Python 3 + Pillow) and
// shipped as entry.png: a newspaper front page for Tuesday 24 November 2026
// with 11 stories across 6 regions. This program only copies those bytes
// to the output directory, so two runs always write byte-identical output.
// The image is 1024x1024 PNG, 113,060 bytes (limit: 1 MiB, 1024x1024).
// Verified in this session: two runs of main.ts wrote byte-identical output
// (sha256 4e007d40...6a07a9), matching the shipped entry.png exactly.
//
// Why 11 stories, not 35-40: the build ran at ~00:50 UTC, minutes into the
// UTC day, and only 11 stories could be verified as first reported on
// 24 November 2026 (Arab News PK's 24-Nov-dated wires, plus the Canada-Qatar
// signing and the World Chess Championship Game 1, both played that day).
// Everything first reported on 23 November or earlier was left out on
// purpose — see stories.md in news-image-draw-24 for the excluded list.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
