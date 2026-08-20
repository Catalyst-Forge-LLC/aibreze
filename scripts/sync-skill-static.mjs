#!/usr/bin/env node
/**
 * Copy the skill adapter and rule files into site/static so the
 * domain serves raw Markdown, not FilePress HTML.
 */
import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillSrc = join(root, "skills", "aibreze", "SKILL.md");
const rulesSrc = join(root, "rules");

const skillDestDir = join(root, "site", "static", "skills", "aibreze");
const rulesDestDir = join(root, "site", "static", "rules");
const cursorSkillDir = join(root, ".cursor", "skills", "aibreze");

mkdirSync(skillDestDir, { recursive: true });
mkdirSync(rulesDestDir, { recursive: true });
mkdirSync(cursorSkillDir, { recursive: true });

copyFileSync(skillSrc, join(skillDestDir, "SKILL.md"));
copyFileSync(skillSrc, join(cursorSkillDir, "SKILL.md"));

for (const name of readdirSync(rulesSrc)) {
	if (!name.endsWith(".md") && !name.endsWith(".mdc")) continue;
	copyFileSync(join(rulesSrc, name), join(rulesDestDir, name));
}
