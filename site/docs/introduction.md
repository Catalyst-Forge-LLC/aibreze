---
title: Introduction
---

**aiBreze** is an installable writing rule set for AI agents. Editorial rules for prose that says something instead of sounding like it. AI-assisted or not.

Written **aiBreze**. npm **`aibreze`**. A spray, not a breeze. v1 has no CLI.

Spray the prose, not the author. Earn the word.

## Not a humanizer

aiBreze does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. Same standard either way. If the prose smells, spray it.

Adjacent tools tend to be humanizers, banned-word lists, or general style linters. This package layers genre files, an earn-the-word test, claims before voice, and overlays instead of forks.

## Earn the word

The problem is unearned language, not the dictionary. "Transformative" is fine if something transformed and you can say from what into what. Overlay the terms that pass *here*. The list is not exhaustive.

Direct > clever. Clear > profound. Useful > insightful-sounding. Em dashes earn their place; most don't.

The colleague voice is the default, not the only register. Filings use [`civic.md`](/docs/files). Papers use [`academic.md`](/docs/files). Clean is a floor, not a personality.

Cadence tells are a budget: flag density, not a single em dash. Headings should name the thing. One earned dash is not a finding.

`claims.md` is substance first, voice after. A clean-smelling wrong essay is still wrong.

## Before / after

**Before.** At its core, building software isn't just about writing code. It's about bridging the gap between imagination and execution, creating solutions that don't merely function but fundamentally transform the way we interact with technology.

**After.** Software turns an idea into something people can use. Good software does that reliably.

## How it fits

```text
core.md          shared law
genre files      surface extras only
project overlay  pronouns, carve-outs, protected lines
                 ↓
drafting
                 ↓
audit.md         smell
claims.md        substance first, then voice
```

Genre files assume `core.md`. Do not fork `core.md`.

Two hooks, same law:

- [Install](/docs/install) — npm package in a project, plus an overlay
- [Skill](/docs/skill) — a folder or ZIP the agent loads on demand

Why the name: [About](/about).
