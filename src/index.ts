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
	"civic",
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
	civic: join(rulesDir, "civic.md"),
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
		use: "Paste-in smell audit. Additive to core: extras, vocab hunt list, score and top-five.",
	},
	{
		id: "claims",
		title: "Claims + voice",
		use: "Skeptical peer review. Substance first so you do not cologne a lie, then aiBreze.",
	},
	{
		id: "essays",
		title: "Essays / longform",
		use: "Essays and talks: one register, author in the essay, concrete instance. Not for reference docs.",
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
		use: "Shipping posts. Open on a specific moment or the artifact, not the announcement formula.",
	},
	{
		id: "civic",
		title: "Civic / institutional",
		use: "Filings, testimony, legal-adjacent memos. Ceremony is earned; colleague voice is wrong here.",
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
