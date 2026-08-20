---
title: Node
---

Node 20+. v1 is `readRule`. Assembling core + genre + overlay is concatenation on purpose.

```ts
import { readRule, files, catalog } from "aibreze";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `aibreze/rules/core.md` (and the rest), so an agent or a prompt assembler can read the files from `node_modules`.

The skill folder is `aibreze/skills/aibreze`.

The maintainer publishes. `pnpm publish` runs a gate first: login, then a patch bump if this version is already on npm. Agents must not run `npm publish`, `pnpm publish`, or `yarn npm publish`.
