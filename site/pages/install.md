---
title: Install
description: Add aiBreze to a project and wire the agent to core plus a short overlay.
order: 1
---

Requires **Node.js 20+**. The package is [`aibreze`](https://www.npmjs.com/package/aibreze) on npm.

```bash
pnpm add -D aibreze
```

## Agent setup

1. Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`
2. Point "Full rules" at `node_modules/aibreze/rules/core.md`
3. Keep a project overlay (carve-outs, I vs we, protected lines)
4. When drafting a page, essay, note, or ship post, open that genre file
5. For a publish pass: paste `rules/core.md` plus the overlay, then `rules/audit.md` or `rules/claims.md`. Do not paste the prompt alone.

## Overlay

Keep it short. Point at this package, then only:

- Pronouns per surface
- Terms that pass the applicability heuristic *here*, with one-line why
- Protected maxims / testimony
- Genre extras that are house law

Do not fork `core.md`. Do not restate the hard bans.

## From Node

```ts
import { readRule, files, catalog } from "aibreze";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `aibreze/rules/core.md` (and the rest).

The maintainer publishes to npm. Agents must not run `npm publish`.
