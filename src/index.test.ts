import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import {
	assertRulesPresent,
	catalog,
	files,
	packageRoot,
	readRule,
	ruleIds,
} from "./index.js";

test("every catalog entry has a file", () => {
	for (const entry of catalog) {
		assert.ok(entry.id in files, `catalog id missing from files: ${entry.id}`);
	}
});

test("every rule id is in files", () => {
	for (const id of ruleIds) {
		assert.ok(id in files, id);
	}
});

test("all rule files exist on disk", () => {
	assert.deepEqual(assertRulesPresent(), []);
});

test("core names the brand, the escalation ban, and the heuristic", () => {
	const core = readRule("core");
	assert.match(core, /aiBreze/);
	assert.match(core, /not just X, it's Y/i);
	assert.match(core, /unearned language/i);
	assert.match(core, /Judge the sentence, not the byline/);
	assert.match(core, /Earn the word/);
	assert.match(core, /Spray the prose, not the author/);
});

test("em dashes earn their place; they are not a hard ban", () => {
	const core = readRule("core");
	assert.doesNotMatch(core, /No em dashes in publishable prose/);
	assert.match(core, /Em dashes earn their place/);
	assert.match(core, /comma, period, or colon/i);
	assert.match(core, /Do not treat the mark as an AI tell to erase/);
	assert.doesNotMatch(readRule("cursor"), /No em dashes in publishable prose/);
	assert.doesNotMatch(readRule("audit"), /Core already bans them/);
});

test("core names the riddle-label and cozy-machinery tells", () => {
	const core = readRule("core");
	assert.match(core, /Riddle labels/);
	assert.match(core, /Cozy machinery/);
	assert.match(core, /where the machine literally sleeps/);
	const card = readRule("cursor");
	assert.match(card, /Riddle labels/);
	assert.match(card, /Cozy machinery/);
});

test("core names operator-notes, hand-holding, and unparseable-sentence tells", () => {
	const core = readRule("core");
	assert.match(core, /Operator notes in the brochure/);
	assert.match(core, /Hand-holding the obvious/);
	assert.match(core, /Unparseable sentence/);
	const card = readRule("cursor");
	assert.match(card, /Operator notes in the brochure/);
	assert.match(card, /Hand-holding the obvious/);
	assert.match(card, /Unparseable sentence/);
});

test("audit prompt has a paste slot", () => {
	assert.match(readRule("audit"), /COPY TO AUDIT/);
});

test("claims prompt has a paste slot", () => {
	assert.match(readRule("claims"), /DOCUMENT TO REVIEW/);
});

test("genre files point at core instead of restating it", () => {
	for (const id of ["essays", "landing", "outreach", "launch"] as const) {
		const text = readRule(id);
		assert.match(text, /core\.md/, `${id} should point at core.md`);
		assert.doesNotMatch(
			text,
			/It's not just X/i,
			`${id} restates the escalation ban`,
		);
		assert.doesNotMatch(
			text,
			/The honest evaluation/i,
			`${id} restates honest-framing`,
		);
	}
});

test("audit prompt is additive to core", () => {
	const audit = readRule("audit");
	assert.match(audit, /core\.md/);
	assert.match(audit, /This prompt is additive/);
	assert.doesNotMatch(audit, /Cadence tells \(budget, not ban\)/);
	assert.match(audit, /If `core\.md` is not in this context/);
	assert.match(audit, /Suspects, not automatic flags/);
});

test("essays do not require anecdote in reference docs", () => {
	assert.match(readRule("essays"), /not the file for reference docs/i);
});

test("pocket card points at genre files", () => {
	const card = readRule("cursor");
	assert.match(card, /When to open a genre file/);
	assert.match(card, /landing\.md/);
	assert.match(card, /essays\.md/);
});

test("readme states what the package is", () => {
	const readme = readFileSync(join(packageRoot, "README.md"), "utf8");
	assert.match(readme, /installable writing rule set/i);
	assert.match(readme, /## Not a humanizer/);
	assert.match(readme, /does not try to fool AI detectors/);
	assert.match(readme, /Spray the prose, not the author/);
	assert.match(readme, /Earn the word/);
});
