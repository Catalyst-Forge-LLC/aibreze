import assert from "node:assert/strict";
import { test } from "node:test";
import {
	assertRulesPresent,
	catalog,
	files,
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

test("core names the brand and the escalation ban", () => {
	const core = readRule("core");
	assert.match(core, /aiBreze/);
	assert.match(core, /not just X, it's Y/i);
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
});
