---
title: Skill
description: Install the aiBreze skill as a folder. Digest plus the law files.
order: 1
---

The skill is a folder: `SKILL.md` plus the rule files it reads. Put that folder here:

- Claude Code, every project: `~/.claude/skills/aibreze/`
- Claude Code, one repo: `.claude/skills/aibreze/`
- Cursor: `.cursor/skills/aibreze/` or `~/.cursor/skills/aibreze/`

On claude.ai, download the ZIP and upload it under Settings, Customize, Skills. Zip the folder, not the files inside it.

[Download aibreze.zip](/skills/aibreze.zip)

## Copy it from

GitHub: `skills/aibreze/`

Or npm:

```bash
pnpm add -D aibreze
```

Then copy `node_modules/aibreze/skills/aibreze/` into one of the directories above.

## Always-on Cursor rule

Copy `rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`. That stays in context even when the skill does not fire. Overlay and the rest: [Install](/install).

## One-off

https://aibreze.com/skills/aibreze/SKILL.md

Same files, no install:

- https://aibreze.com/rules/core.md
- https://aibreze.com/rules/audit.md
- https://aibreze.com/rules/claims.md

## What you say

- Spray this page.
- Run aiBreze on the README.
- Publish pass on the About copy.

It runs when you draft or revise publishable prose, or when you name it. Not on code, diffs, or chat-only answers.
