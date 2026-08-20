---
title: Skill
description: Install the aiBreze skill from this domain. The raw file is a URL, not this page.
order: 1
---

The skill is raw Markdown. This page is HTML. Point an agent at the file, not at this page.

https://aibreze.com/skills/aibreze/SKILL.md

Copy that folder into the agent's skills directory.

- Claude Code, personal: `~/.claude/skills/aibreze/`
- Claude Code, project: `.claude/skills/aibreze/`
- Cursor: `.cursor/skills/aibreze/`

Full law, same host:

- https://aibreze.com/rules/core.md
- https://aibreze.com/rules/audit.md
- https://aibreze.com/rules/claims.md

Genre files live next to those. The skill says when to open one.

## From npm

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/skills/aibreze/` into the same skills directory. Cursor's always-on digest is still `rules/cursor.mdc` → `.cursor/rules/aibreze.mdc`. Overlay and wiring: [Install](/install).

## What you say

- Spray this page.
- Run aiBreze on the README.
- Publish pass on the About copy.

It fires on draft or revise of publishable prose, or when you name it. It does not fire on code, diffs, or chat-only answers.
