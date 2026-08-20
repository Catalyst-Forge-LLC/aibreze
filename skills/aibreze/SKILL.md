---
name: aibreze
description: >-
  Editorial rules for publishable prose. Use when drafting or revising
  pages, essays, emails, or ship posts, or when the user asks to spray,
  audit, run aiBreze, or do a publish pass. Do not use for code, diffs,
  or chat-only answers.
---

# aiBreze

Editorial rules for prose that actually says something instead of just
sounding like it. AI-assisted or not.

This file is a digest. It is not a second source of truth. If it
conflicts with `core.md`, `core.md` wins.

## Full law

Prefer a local `rules/core.md` (this repo, or `node_modules/aibreze/rules/core.md`).
If that file is not on disk, fetch `https://aibreze.com/rules/core.md`.

Smell audit: `rules/audit.md` or `https://aibreze.com/rules/audit.md`.
Claims: `rules/claims.md` or `https://aibreze.com/rules/claims.md`.

Do not paste an audit or claims prompt without `core.md` in context.

## Target

Sharp, slightly tired colleague. Direct > clever. Clear > profound.
Useful > insightful-sounding. Em dashes earn their place; most don't.
Judge the sentence, not the byline. Spray the prose, not the author.
Earn the word.

## Overlay

Keep a short project overlay. Point at this package, then only:

- Pronouns per surface
- Terms that pass the applicability heuristic *here*, with one-line why
- Protected maxims / testimony
- Genre extras that are house law

Do not fork `core.md`. Do not restate the hard bans.

## When to open a genre file

If you are drafting or revising a specific surface, read that file too.
Local path first, then `https://aibreze.com/rules/<file>`.

- Page / marketing site: `landing.md`
- Essay / talk / long argument: `essays.md`
- Email / DM / text to someone you know: `outreach.md`
- Ship post / announcement: `launch.md`

Reference docs, changelogs, API pages, UI chrome: core only. Do not
inject a scene to satisfy essay law.

## Publish pass

Paste `core.md` plus the overlay, then `audit.md` or `claims.md`. Both
are additive. Do not paste the prompt alone.

## Example asks

- Spray this page.
- Run aiBreze on the README.
- Publish pass on the About copy.
