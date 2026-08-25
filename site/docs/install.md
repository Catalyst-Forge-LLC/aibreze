---
title: Install
---

Wire a project. Node.js 20+. The package is [`aibreze`](https://www.npmjs.com/package/aibreze) on npm.

```bash
pnpm add -D aibreze
```

No package? [Install the skill](/docs/skill) as a folder.

Short version on the site: [Install](/install).

## Agent setup

1. Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`
2. Point "Full rules" at `node_modules/aibreze/rules/core.md`
3. Keep a project [overlay](/docs/overlay)
4. When drafting a page, essay, note, ship post, filing, or paper, open that genre file
5. For a publish pass: paste `rules/core.md` plus the overlay, then `rules/audit.md` or `rules/claims.md`. Do not paste the prompt alone.

The pocket card stays in every Cursor chat. The [skill](/docs/skill) loads when you draft publishable prose, or when you name it.

## Files

| File | Use |
| --- | --- |
| `rules/core.md` | Always. Register, heuristic, hard bans, cadence budgets, chat vs publish. |
| `rules/audit.md` | Paste-in smell audit. |
| `rules/claims.md` | Substance first, voice after. |
| `rules/essays.md` | Longform. Not for reference docs. |
| `rules/landing.md` | Page copy. |
| `rules/outreach.md` | Email / DM / text. |
| `rules/launch.md` | Shipping posts. |
| `rules/civic.md` | Filings and testimony. |
| `rules/academic.md` | Papers and methods. |
| `rules/cursor.mdc` | Always-on digest. Copy into `.cursor/rules/`. |
| `skills/aibreze/` | Skill folder. See [Skill](/docs/skill). |

Genre files assume `core.md`. Full table: [Files](/docs/files).

## Node

```ts
import { readRule, files, catalog } from "aibreze";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `aibreze/rules/core.md` (and the rest). [Node](/docs/node).
