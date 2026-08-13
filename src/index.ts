import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const rulesDir = join(packageRoot, "rules");

export const ruleIds = [
	"core",
	"audit",
	"claims",
	"essays",
	"landing",
	"outreach",
	"launch",
] as const;

export type RuleId = (typeof ruleIds)[number];

export const files = {
	core: join(rulesDir, "core.md"),
	audit: join(rulesDir, "audit.md"),
	claims: join(rulesDir, "claims.md"),
	essays: join(rulesDir, "essays.md"),
	landing: join(rulesDir, "landing.md"),
	outreach: join(rulesDir, "outreach.md"),
	launch: join(rulesDir, "launch.md"),
	cursor: join(rulesDir, "cursor.mdc"),
} as const;

export type FileId = keyof typeof files;

export const catalog: ReadonlyArray<{
	id: FileId;
	title: string;
	use: string;
}> = [
	{
		id: "core",
		title: "Core",
		use: "Always. Target register, applicability heuristic, teaching antithesis, hard bans, cadence budgets, chat vs publish.",
	},
	{
		id: "audit",
		title: "Smell audit",
		use: "Paste-in prompt for AI-smell scoring, tell flags, and a top-five fix list.",
	},
	{
		id: "claims",
		title: "Claims + voice",
		use: "Skeptical peer review. Substance first, aiBreze after. Use when truth or scope is in question.",
	},
	{
		id: "essays",
		title: "Essays / longform",
		use: "One register, author in the piece, concrete instance. Optional same-piece deed.",
	},
	{
		id: "landing",
		title: "Landing / marketing",
		use: "Page copy: pronoun decision, rhetorical budgets, substance gaps, read-aloud gate.",
	},
	{
		id: "outreach",
		title: "Personal outreach",
		use: "Email, DM, and text. Relationship first, one ask, links as context.",
	},
	{
		id: "launch",
		title: "Launch / announcement",
		use: "Shipping posts. Open on the decision, not the announcement. No feature dump.",
	},
	{
		id: "cursor",
		title: "Cursor pocket card",
		use: "Always-on agent digest. Copy to `.cursor/rules/` and point at core plus a project overlay.",
	},
];

export function rulePath(id: FileId): string {
	return files[id];
}

export function readRule(id: FileId): string {
	return readFileSync(files[id], "utf8");
}

export function assertRulesPresent(): string[] {
	const missing: string[] = [];
	for (const id of Object.keys(files) as FileId[]) {
		if (!existsSync(files[id])) missing.push(files[id]);
	}
	return missing;
}

export { packageRoot, rulesDir };
