// Break Production, Own It: writes the chosen one-liner to /output/entry.txt.
// Deterministic across runs. MAKEFUN_OUTPUT_DIR overrides /output for local checks.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const ENTRY =
  'I broke prod auth with a live hotfix, then compacted my context window—now neither of us knows what I changed.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
