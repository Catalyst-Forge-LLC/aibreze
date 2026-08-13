---
title: An installable writing rule set for agents.
description: aiBreze strips the performative, faux-profound register from prose. Not a detector. Not a humanizer.
order: 0
---

**aiBreze** is Markdown you install and point an agent at. Direct, slightly tired, useful. Not insightful-sounding.

It does not care who wrote the sentence. Human prose in that register gets sprayed too. It does not make AI writing "human." It makes writing better.

[Install](/install) · [npm](https://www.npmjs.com/package/aibreze)

## Before / after

**Before.** At its core, building software isn't just about writing code. It's about bridging the gap between imagination and execution, creating solutions that don't merely function but fundamentally transform the way we interact with technology.

**After.** Software turns an idea into something people can use. Good software does that reliably.

## What you get

A shared core (register, hard bans, cadence, an applicability heuristic so you earn the word instead of banning the dictionary), a paste-in smell audit, a claims review that checks substance before cologne, and short genre files for essays, landing pages, outreach, and ship posts.

Genre files are additive. They point at core. They do not copy the bans.

If a term names a real part of the work, leave it. "Transformative" is fine if something transformed and you can say from what into what.

## Install

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/rules/cursor.mdc` into `.cursor/rules/aibreze.mdc`. Point "Full rules" at `node_modules/aibreze/rules/core.md`. Keep a short project overlay for pronouns, carve-outs, and protected lines.

The rules are also importable from Node, and as `aibreze/rules/core.md` from `node_modules`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
