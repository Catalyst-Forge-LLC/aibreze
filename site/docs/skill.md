---
title: Skill
---

The skill is a folder: `SKILL.md` plus the rule files it reads. The agent loads it when you draft or revise publishable prose, or when you say spray / smell-check / publish pass. Not on code, diffs, or chat-only answers.

A project [install](/docs/install) is a different hook: npm, overlay, always-on pocket card. Agents that read `AGENTS.md` or `CLAUDE.md` get a [pointer](/rules/agents.md), not a second digest. Nothing scans the tree.

Short version on the site: [Skill](/skill).

## Download the ZIP

[Download smellcheck.zip](/skills/smellcheck.zip)

Unpack it. Move the `smellcheck` folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/smellcheck.git
```

Copy `skills/smellcheck/` from the clone into a skills directory.

## Install from npm

```bash
pnpm add -D smellcheck
```

Copy `node_modules/smellcheck/skills/smellcheck/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/smellcheck/`
- Claude Code, one repo: `.claude/skills/smellcheck/`
- Cursor: `.cursor/skills/smellcheck/` or `~/.cursor/skills/smellcheck/`

The folder you drop in must be named `smellcheck` and must contain `SKILL.md`.

## Always-on Cursor rule

Download [cursor.mdc](/rules/cursor.mdc) and save it as `.cursor/rules/smellcheck.mdc`. That file is not in the skill ZIP.

From a clone, copy `rules/cursor.mdc`. From npm, copy `node_modules/smellcheck/rules/cursor.mdc`. Same destination.

It stays loaded even when the skill does not run. Overlay: `docs/smellcheck.md`. See [Overlay](/docs/overlay).

## Host pointer

Paste [agents.md](/rules/agents.md) into `AGENTS.md` or `CLAUDE.md`, or point those files at it. Same dest from a clone or from `node_modules/smellcheck/rules/agents.md`.

The pointer names core and the overlay. It does not copy the bans.

## What you say

- Smell-check this page.
- Spray this page.
- Run Smell Check on the README.
- Publish pass on the About copy.
- Spray this comment letter.
- Spray this working paper.

## One-off

No install. Point an agent at the raw files:

- https://smellcheck.dev/skills/smellcheck/SKILL.md
- https://smellcheck.dev/rules/core.md
- https://smellcheck.dev/rules/audit.md
- https://smellcheck.dev/rules/claims.md
