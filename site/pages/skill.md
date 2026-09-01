---
title: Skill
description: Get the folder from a ZIP, a git clone, or npm.
order: 1
---

The skill is a folder: `SKILL.md` plus the rule files it reads. Get that folder one of these ways, then put it in a skills directory.

A project install is a different hook: [Install](/install). Agents that read `AGENTS.md` or `CLAUDE.md` get a pointer, not a second digest. Nothing scans the tree. Full guide: [docs](/docs/skill).

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

It stays loaded even when the skill does not run. Overlay: `docs/smellcheck.md`. [Install](/install).

## Host pointer

Paste [agents.md](/rules/agents.md) into `AGENTS.md` or `CLAUDE.md`. The pointer names core and the overlay. It does not copy the bans.

## One-off

https://smellcheck.dev/skills/smellcheck/SKILL.md

Same files, no install:

- https://smellcheck.dev/rules/core.md
- https://smellcheck.dev/rules/audit.md
- https://smellcheck.dev/rules/claims.md

## What you say

- Smell-check this page.
- Spray this page.
- Run Smell Check on the README.
- Publish pass on the About copy.
- Spray this comment letter.
- Spray this working paper.

It runs when you draft or revise publishable prose, or when you name it. Not on code, diffs, or chat-only answers.
