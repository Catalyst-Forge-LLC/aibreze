---
title: Skill
description: Install the aiBreze skill as a folder. Digest plus the law files.
order: 1
---

The skill is a folder: a digest (`SKILL.md`) plus the rule files it reads. Drop that folder into the host's skills directory.

- Claude Code, personal: `~/.claude/skills/aibreze/`
- Claude Code, this repo: `.claude/skills/aibreze/`
- Cursor: `.cursor/skills/aibreze/` or `~/.cursor/skills/aibreze/`

On claude.ai, download the ZIP and upload it under Settings, Customize, Skills. The archive root is a folder named `aibreze`, not loose files.

[Download aibreze.zip](/skills/aibreze.zip)

## Where the folder comes from

This repo: `skills/aibreze/`

After npm:

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/skills/aibreze/` into the same skills directory.

## Always-on Cursor rule

That is a different hook. Copy `rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`. Overlay and wiring: [Install](/install).

## Inspect the digest

https://aibreze.com/skills/aibreze/SKILL.md

Raw law files stay on this host for a one-off chat that did not install the folder.

- https://aibreze.com/rules/core.md
- https://aibreze.com/rules/audit.md
- https://aibreze.com/rules/claims.md

## What you say

- Spray this page.
- Run aiBreze on the README.
- Publish pass on the About copy.

It fires on draft or revise of publishable prose, or when you name it. It does not fire on code, diffs, or chat-only answers.
