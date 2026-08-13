# aiBreze

Markdown rules that spray the performative / faux-profound register off
prose. Written **aiBreze**. npm **`aibreze`**. A spray, not a breeze.

People who live with a smell stop noticing it. Generated prose does the
same trick. Charles Duhigg tells the household version in *The Power of
Habit* (2012): an odor-eliminating spray that flopped until the company
realized habituation was the problem, then sold the bottle as the reward
at the end of a cleaning habit. This package is that move for writing.
Make the smell visible, then take it off. Read Duhigg for the original.

Direct > clever. Clear > profound. Useful > insightful-sounding. No em
dashes in publishable prose.

## Install

```bash
pnpm add -D aibreze
```

## What's in the box

| File | Use |
| --- | --- |
| `rules/core.md` | Always. Register, applicability heuristic, teaching antithesis, hard bans, cadence, chat vs publish. |
| `rules/audit.md` | Paste-in smell audit (score, flags, protect list, top 5). |
| `rules/claims.md` | Skeptical peer review. Substance first, voice after. |
| `rules/essays.md` | Longform: one register, author in the piece, concrete instance. |
| `rules/landing.md` | Page copy: pronouns, rhetorical budgets, substance, read-aloud. |
| `rules/outreach.md` | Email / DM / text. Relationship first, one ask. |
| `rules/launch.md` | Shipping posts. Open on the decision, not the announcement. |
| `rules/cursor.mdc` | Always-on agent digest. Copy into `.cursor/rules/`. |

Genre files assume `core.md`. Projects keep a **short overlay** for
pronoun policy, dialect carve-outs, and house extras. Do not fork
`core.md`.

## Use from Node

```ts
import { readRule, files, catalog } from "aibreze";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `aibreze/rules/core.md` (and the rest), so
an agent or a prompt assembler can read the files from `node_modules`.

## Agent setup

1. `pnpm add -D aibreze`
2. Copy `node_modules/aibreze/rules/cursor.mdc` to
   `.cursor/rules/aibreze.mdc`
3. Point "Full rules" at `node_modules/aibreze/rules/core.md`
4. Keep a project overlay (carve-outs, I vs we, protected lines)
5. For a publish pass: paste `rules/audit.md` or `rules/claims.md`, then
   apply core + overlay

## Overlay shape

Keep it short. Point at this package, then only:

- Pronouns per surface
- Terms that pass the applicability heuristic *here*, with one-line why
- Protected maxims / testimony
- Genre extras that are house law (every essay ends in a deed, brand
  metaphor budget, …)

## Publishing to npm

The maintainer publishes. Agents must not run `npm publish`,
`pnpm publish`, or `yarn npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
