# aiBreze

An installable writing rule set for AI agents.

aiBreze strips the performative, faux-profound register from prose.
Written **aiBreze**. npm **`aibreze`**. A spray, not a breeze.

Direct > clever. Clear > profound. Useful > insightful-sounding. No em
dashes in publishable prose.

Spray the prose, not the author. Earn the word.

## Before / after

**Before.** At its core, building software isn't just about writing
code. It's about bridging the gap between imagination and execution,
creating solutions that don't merely function but fundamentally
transform the way we interact with technology.

**After.** Software turns an idea into something people can use. Good
software does that reliably.

## What it is

A composable editorial system for agent-generated prose (and for human
prose in the same register). Markdown you install and point an agent at.
Not a CLI (yet), not an editor, not a list of "words ChatGPT uses."

```text
core.md          shared law (register, bans, cadence, heuristic)
genre files      surface extras only (essay, landing, outreach, launch)
project overlay  pronouns, carve-outs, protected lines
                 ↓
drafting
                 ↓
audit.md         smell
claims.md        substance first, then voice
```

Genre files assume `core.md` and are additive: surface law only, no
copied bans. Do not fork `core.md`.

The **applicability heuristic** is the load-bearing idea. The problem is
unearned language, not the dictionary. Earn the word: "transformative"
is fine if something transformed and you can say from what into what.
"Inflection point" is fine if there was one. Overlay the terms that
usually pass *here*, with one-line why. The heuristic is the rule; the
list is not exhaustive.

`claims.md` is substance first, voice after. A clean-smelling wrong
essay is still wrong. Do not polish a lie.

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
| `rules/essays.md` | Longform: one register, author in the essay, concrete instance. Not for reference docs. |
| `rules/landing.md` | Page copy: pronouns, rhetorical budgets, substance, read-aloud. |
| `rules/outreach.md` | Email / DM / text. Relationship first, one ask. |
| `rules/launch.md` | Shipping posts. Open on a specific moment or the artifact, not the announcement formula. |
| `rules/cursor.mdc` | Always-on agent digest. Copy into `.cursor/rules/`. |

## Why "aiBreze"?

People who live with a smell stop noticing it. Generated prose does the
same trick. Charles Duhigg tells the household version in *The Power of
Habit* (2012): an odor-eliminating spray that flopped until the company
realized habituation was the problem, then sold the bottle as the reward
at the end of a cleaning habit. This package is that move for writing.
Make the smell visible, then take it off. Read Duhigg for the original.

The register is also leaking the other way: humans now write like the
models. aiBreze is a writing standard, not an AI-cleanup gimmick.

## Not a humanizer

aiBreze does not determine whether a human or a model wrote something,
and it does not try to fool AI detectors. It applies the same standard
either way. If the prose smells, spray it.

Adjacent tools tend to be humanizers ("make this sound human"), banned-word
anti-slop lists, or general style linters (Vale, write-good). This package
is the layered law: genre surfaces, an applicability heuristic (earn the
word), claims before cologne, overlays instead of forks, and both
prevention at draft time and audit after. Authorship is irrelevant. Prose
quality is the subject.

## Use from Node

```ts
import { readRule, files, catalog } from "aibreze";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `aibreze/rules/core.md` (and the rest), so
an agent or a prompt assembler can read the files from `node_modules`.
v1 is `readRule`. Assembling core + genre + overlay is concatenation on
purpose.

## Agent setup

1. `pnpm add -D aibreze`
2. Copy `node_modules/aibreze/rules/cursor.mdc` to
   `.cursor/rules/aibreze.mdc`
3. Point "Full rules" at `node_modules/aibreze/rules/core.md`
4. Keep a project overlay (carve-outs, I vs we, protected lines)
5. When drafting a page, essay, note, or ship post, open that genre file
6. For a publish pass: paste `rules/core.md` plus the overlay, then
   `rules/audit.md` or `rules/claims.md` (both are additive; do not paste
   the prompt alone)

## Overlay shape

Keep it short. Point at this package, then only:

- Pronouns per surface
- Terms that pass the applicability heuristic *here*, with one-line why
- Protected maxims / testimony
- Genre extras that are house law (every essay ends in a deed, brand
  metaphor budget, …)

## Site

The public site lives in [`site/`](site/) (FilePress, [`getfilepress`](https://www.npmjs.com/package/getfilepress)). Until the domain is registered, the homepage is [Catalyst-Forge-LLC/aibreze](https://github.com/Catalyst-Forge-LLC/aibreze). It will ship at aibreze.com when Namecheap is back.

```bash
pnpm site:dev
pnpm site:build
```

## Publishing to npm

The maintainer publishes. Agents must not run `npm publish`,
`pnpm publish`, or `yarn npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
