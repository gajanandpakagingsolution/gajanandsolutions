// Bulk-renames every video file in a folder to gal-video-001, gal-video-002,
// etc. — keeps each file's original extension, zero-pads to 3 digits to
// match the GAL-VIDEO-XXX refs already used in imageMap.js / videos.js.
//
// SAFE BY DEFAULT: running it with no flags only PRINTS the plan — nothing
// is renamed until you re-run it with --apply.
//
// Usage:
//   node scripts/rename-videos.mjs "/path/to/your/video/folder"          (dry run — just prints)
//   node scripts/rename-videos.mjs "/path/to/your/video/folder" --apply  (actually renames)
//
// Sort order: files are sorted by name (natural sort, so "2" comes before
// "10") before numbering. If your files are named like IMG_20250310... i.e.
// with a date/timestamp, that also happens to sort into recording order.
// If you instead want them numbered by which file was *modified* most
// recently, see the SORT_BY_MODIFIED_TIME toggle below.

import { readdirSync, renameSync, statSync } from "fs";
import { extname, join } from "path";

const SORT_BY_MODIFIED_TIME = false; // set true to sort by file modified date instead of filename

const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".m4v", ".avi", ".mkv"];

const folder = process.argv[2];
const apply = process.argv.includes("--apply");

if (!folder) {
  console.error("Usage: node scripts/rename-videos.mjs \"/path/to/video/folder\" [--apply]");
  process.exit(1);
}

const naturalCompare = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

let files = readdirSync(folder).filter((f) => VIDEO_EXTENSIONS.includes(extname(f).toLowerCase()));

if (files.length === 0) {
  console.error(`No video files found in ${folder} (looked for: ${VIDEO_EXTENSIONS.join(", ")})`);
  process.exit(1);
}

files = SORT_BY_MODIFIED_TIME
  ? files.sort((a, b) => statSync(join(folder, a)).mtimeMs - statSync(join(folder, b)).mtimeMs)
  : files.sort(naturalCompare);

const plan = files.map((oldName, i) => {
  const num = String(i + 1).padStart(3, "0");
  const ext = extname(oldName).toLowerCase();
  const newName = `gal-video-${num}${ext}`;
  return { oldName, newName };
});

console.log(`${apply ? "Renaming" : "DRY RUN — planned renames for"} ${plan.length} file(s) in ${folder}:\n`);
plan.forEach(({ oldName, newName }) => console.log(`  ${oldName}  ->  ${newName}`));

if (!apply) {
  console.log("\nNothing renamed yet. Re-run with --apply once this list looks right.");
  process.exit(0);
}

for (const { oldName, newName } of plan) {
  renameSync(join(folder, oldName), join(folder, newName));
}
console.log("\nDone.");