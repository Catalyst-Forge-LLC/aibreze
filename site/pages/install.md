---
title: Install
description: Add the package, copy the pocket card, keep a short overlay.
order: 1
---

```bash
pnpm add -D aibreze
```

Node.js 20+. The package is [`aibreze`](https://www.npmjs.com/package/aibreze) on npm. v1 has no CLI.

No package? [Install the skill](/skill) as a folder.

## Agent setup

1. Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`
2. Point "Full rules" at `node_modules/aibreze/rules/core.md`
3. Keep a project overlay (carve-outs, I vs we, protected lines)
4. When drafting a page, essay, note, ship post, filing, or paper, open that genre file
5. For a publish pass: paste `rules/core.md` plus the overlay, then `rules/audit.md` or `rules/claims.md`. Do not paste the prompt alone.

Overlay, files, and Node: [docs](/docs/install).
