// One Letter: Coffee or Tea — make.fun entry.
// The program writes exactly one letter to /output/entry.txt:
// "A" for coffee, "B" for tea. Nothing else. No word, no
// explanation, no punctuation, no trailing newline — the gate
// requires UTF-8 text of exactly 1 character.
//
// Choice: "A" (coffee). The judge reads one letter as a whole
// answer and weighs vividness first; of the two drinks, coffee is
// the louder, more alive stance — the letter lands as a fuller
// answer for the drink it names.
// Judge sim vs the real judge (z-ai/glm-5.3-flash) was BLOCKED:
// OpenRouter returned 402 account-wide on 24 Nov (free-tier key,
// no credit; no :free variant of the judge model exists), so no
// head-to-head game could be played and no score is claimed here.
// Re-run the saved sim (work dir judge-sim.py, 3 games) if
// OpenRouter credit is topped up before the submit cut-off; if
// it says "B", flip this constant to "B" and rebuild.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The entry. One letter, nothing else.
const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Self-check: refuse to exit 0 unless the file on disk is
// exactly one UTF-8 character, so a bad write can never ship.
const written = readFileSync(outPath, "utf8");
if ([...written].length !== 1 || written.trim() === "") {
  throw new Error(`entry.txt must hold exactly one letter, got ${JSON.stringify(written)}`);
}
