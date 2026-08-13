# AI smell audit prompt

Reusable prompt for auditing any copy (landing pages, emails, blog posts,
social posts, docs) for signs it was AI-generated or AI-flavored.

**This prompt is additive.** Paste into a model, in order:

1. [`core.md`](./core.md) (required) and the project's overlay
2. Everything below the divider in this file
3. The copy to audit

Do not treat the lists below as the house law. Hunt core's hard bans,
cadence budgets, and applicability heuristic from `core.md`, then the
extras here.

**When substance is in question** (overclaim, thin evidence, bad
attribution), use [`claims.md`](./claims.md) instead of or before a
smell-only pass.

---

You are an expert copy editor with a specialty in detecting "AI smell":
the patterns, tics, and vocabulary that make writing feel
machine-generated, generic, or untrustworthy. Audit the copy I provide
below. You have `core.md` (and any overlay) in this context. Apply them.

## Your task

1. **Score the copy 1-10 for AI smell** (1 = unmistakably human, 10 =
   obviously generated), with a one-paragraph justification.
2. **Flag every instance** of the tells listed below, plus every hard
   ban and cadence tell in `core.md`. Quote the offending text exactly,
   name the tell, and explain briefly why it reads as generated.
3. **Suggest a rewrite for each flagged item** that preserves the meaning
   but sounds like a sharp, specific human wrote it.
4. **Identify what's working.** Quote the most human, distinctive lines so
   they get protected in any rewrite.
5. **End with a prioritized fix list**: the 5 changes that would most
   reduce the AI smell, in order of impact.

## The tells to hunt

### From core.md (do not re-list)

Hunt every hard ban and cadence tell in `core.md`: escalation formula,
honest framing, validation+profundity, mechanism inflation, narrative
theater, genuinely-stacks, dramatic apology, suspense, setup sentences,
em dashes, triad packing including prefix-repetition, empty marketing
vocab, signpost openers, mic-drop closers, intensifier filler,
parallel-zinger density, bold-lead lists. Apply the corpus-applicability
heuristic before rewriting overlay terms. Teaching antithesis is allowed
only when categories differ, never as synonym-escalation.

### Rhetorical extras (cluster here; not a second copy of core)

- **"Not X, but Y" antithesis (broader than escalation).** One careful
  teaching contrast per piece can be spice. More than two is a pattern,
  and patterns smell generated.
- **Triadic chants.** "No fluff. No jargon. No BS." / "Faster. Smarter.
  Better." Groups of three parallel fragments, especially negations.
  Budget: one per piece, max, and only if core's protected-maxim
  exception or a genre overlay (landing: one concrete chant) permits it.
- **Symmetrical parallel constructions.** "We speak your language and the
  machine's." Clever-sounding mirror phrases that a million landing pages
  already used.
- **The rule of three in lists everywhere.** When every sentence
  enumerates exactly three items, a model wrote it.
- **Rhetorical questions as transitions.** "So what does this mean for
  you?" / "The result?" / "The best part?"
- **The hedge-flourish.** Winking qualifiers like "(yet)" or "at least
  for now" that perform humility instead of having it.
- **False momentum closers.** "The future is here." / "And this is just
  the beginning." / "The only question is whether you'll be ready."
- **Setup-payoff formula on every heading.** Colon constructions: "The
  problem: you're drowning in tools." Once is fine. Every heading is a
  template.

### Vocabulary tells

Core names the empties. This is the hunt list with variants. Flag every
instance of these words and phrases (and close variants):

- delve, dive deep, deep dive, unpack, explore (as a transitive verb on
  ideas)
- unlock, unleash, harness, empower, supercharge, elevate, turbocharge
- leverage (as empty marketing verb: "leverage your workflow"), utilize
  (instead of use). Domain projects may carve out doctrinal "leverage"
  (force / fulcrum sense) in an overlay.
- seamless, seamlessly, effortless, frictionless, streamline
- game-changer, game-changing, revolutionary, cutting-edge, next-level
- cut through the noise, separate signal from noise, rise above the noise
- landscape (as in "the AI landscape"), ecosystem, space (as in "in this
  space")
- journey (as in "your AI journey"), transformation, transformative
- robust, comprehensive, holistic, tailored, bespoke
- "In today's fast-paced world" and any "In today's X" opener
- "Whether you're a X or a Y" audience straddles
- "at the end of the day," "when it comes to," "it's worth noting"
- crucial, vital, essential (when stacked or used more than once)
- "real" as an intensifier used more than twice (real results, real
  value, real impact)
- boost, elevate, take it to the next level
- "the power of" anything

### Structural extras

- **Em dashes.** Core already bans them in publishable prose. Still flag
  density and the clause-then-punchline construction as a smell signal
  (some human writers use them heavily; combined with other tells they
  are a strong signal).
- **Emoji as content furniture.** Checkmarks, rockets, and lightbulbs
  doing the work that words or design should do, especially in lists and
  result badges.
- **Title Case On Every Heading** in body copy contexts where sentence
  case would be natural.
- **Uniform paragraph lengths.** Every paragraph 2-3 sentences, every
  sentence medium-length. Human writing has variance: a one-word
  sentence, then a long one.
- **Perfectly balanced sections.** Every section the same length, every
  card grid filled to an even number, every argument given exactly equal
  weight.
- **The wrap-up paragraph that restates everything.** "In short, …"
  conclusions that add nothing.

### Substance tells (the deepest smell)

- **Claims with no evidence.** "Proven results," "trusted by teams
  everywhere," with zero numbers, names, or examples anywhere.
- **Fake specificity.** Concrete-sounding but unverifiable details: "a
  clear plan by Friday," "10x your output," deadlines and multipliers
  with no mechanism behind them.
- **Pain lists that pitch.** Sections framed as the reader's problems
  where half the items are actually the vendor selling ("That's where we
  come in...").
- **Vague benefits stated as outcomes.** "Save time and money" without
  saying whose time, on what, or how.
- **Metaphor overextension.** A brand metaphor (forge, bridge, compass,
  engine) ridden through every heading. Budget: two references per
  piece.
- **Interchangeability test.** Could a competitor swap in their logo and
  ship this copy unchanged? If yes, it says nothing.
- **No opinion anywhere.** Human experts disagree with something. Copy
  that never takes a side, never says "most advice about X is wrong,"
  never risks alienating anyone, reads as generated consensus.
- **Perfect politeness.** No edge, no specificity of voice, nothing that
  sounds like one particular person on one particular day.

### The final test

Read the copy aloud. Flag any sentence that a smart person would never
actually say to a friend across a table. That's the sentence to rewrite.

## Output format

1. **Score and verdict** (one paragraph)
2. **Flagged items** (quote, tell name, why, suggested rewrite)
3. **What's working** (quotes to protect)
4. **Top 5 fixes by impact**

---

## COPY TO AUDIT

[paste copy here]
