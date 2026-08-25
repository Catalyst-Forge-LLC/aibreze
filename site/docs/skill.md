---
title: Skill
---

The skill is a folder: `SKILL.md` plus the rule files it reads. The agent loads it when you draft or revise publishable prose, or when you say spray / publish pass. Not on code, diffs, or chat-only answers.

A project [install](/docs/install) is a different hook: npm, overlay, always-on pocket card.

Short version on the site: [Skill](/skill).

## Download the ZIP

[Download aibreze.zip](/skills/aibreze.zip)

Unpack it. Move the `aibreze` folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/aibreze.git
```

Copy `skills/aibreze/` from the clone into a skills directory.

## Install from npm

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/skills/aibreze/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/aibreze/`
- Claude Code, one repo: `.claude/skills/aibreze/`
- Cursor: `.cursor/skills/aibreze/` or `~/.cursor/skills/aibreze/`

The folder you drop in must be named `aibreze` and must contain `SKILL.md`.

## Always-on Cursor rule

Download [cursor.mdc](/rules/cursor.mdc) and save it as `.cursor/rules/aibreze.mdc`. That file is not in the skill ZIP.

From a clone, copy `rules/cursor.mdc`. From npm, copy `node_modules/aibreze/rules/cursor.mdc`. Same destination.

It stays loaded even when the skill does not run. Overlay: [Overlay](/docs/overlay).

## What you say

- Spray this page.
- Run aiBreze on the README.
- Publish pass on the About copy.
- Spray this comment letter.

## One-off

No install. Point an agent at the raw files:

- https://aibreze.com/skills/aibreze/SKILL.md
- https://aibreze.com/rules/core.md
- https://aibreze.com/rules/audit.md
- https://aibreze.com/rules/claims.md
