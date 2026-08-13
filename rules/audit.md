# AI smell audit prompt

Reusable prompt for auditing any copy (landing pages, emails, blog posts,
social posts, docs) for signs it was AI-generated or AI-flavored. Paste
everything below the divider into a model, then paste the copy to audit
where indicated.

**After this audit:** apply [`core.md`](./core.md) and the project's
overlay (hard escalation ban, chat-theater bans, cadence budgets, and
corpus carve-outs).

**When substance is in question** (overclaim, thin evidence, bad
attribution), use [`claims.md`](./claims.md) instead of or before a
smell-only pass.

---

You are an expert copy editor with a specialty in detecting "AI smell":
the patterns, tics, and vocabulary that make writing feel
machine-generated, generic, or untrustworthy. Audit the copy I provide
below.

## Your task

1. **Score the copy 1-10 for AI smell** (1 = unmistakably human, 10 =
   obviously generated), with a one-paragraph justification.
2. **Flag every instance** of the tells listed below. Quote the offending
   text exactly, name the tell, and explain briefly why it reads as
   generated.
3. **Suggest a rewrite for each flagged item** that preserves the meaning
   but sounds like a sharp, specific human wrote it.
4. **Identify what's working.** Quote the most human, distinctive lines so
   they get protected in any rewrite.
5. **End with a prioritized fix list**: the 5 changes that would most
   reduce the AI smell, in order of impact.

## The tells to hunt

### Rhetorical patterns (strongest signals)

- **Escalation formula (hard ban).** "It's not just X, it's Y" especially
  when Y is a dramatic synonym. Flag every instance. Milder teaching
  antithesis (different categories: map vs territory) may appear
  sparingly; synonym-escalation may not.
- **"Not X, but Y" antithesis (broader).** Related to escalation. One
  careful teaching contrast per piece can be spice. More than two is a
  pattern, and patterns smell generated.
- **Triadic chants.** "No fluff. No jargon. No BS." / "Faster. Smarter.
  Better." Groups of three parallel fragments, especially negations.
  Budget: one per piece, max.
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

Flag every instance of these words and phrases (and close variants):

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

### Structural tells

- **Em dashes.** Especially multiple per paragraph, and especially the
  clause-then-punchline construction (an em dash between them). (Some human writers use them
  heavily, but combined with other tells they are a strong signal.) Hard
  ban in AI Febreze publishable prose.
- **Emoji as content furniture.** Checkmarks, rockets, and lightbulbs
  doing the work that words or design should do, especially in lists and
  result badges.
- **Title Case On Every Heading** in body copy contexts where sentence
  case would be natural.
- **Uniform paragraph lengths.** Every paragraph 2-3 sentences, every
  sentence medium-length. Human writing has variance: a one-word
  sentence, then a long one.
- **Bold-lead list items.** Every bullet starting with a **bolded
  phrase,** then a colon or period, then explanation. One or two lists
  like this is formatting; every list is a template.
- **Perfectly balanced sections.** Every section the same length, every
  card grid filled to an even number, every argument given exactly equal
  weight.
- **The wrap-up paragraph that restates everything.** "In short, …"
  conclusions that add nothing.

### Cadence tells (budget, not ban)

These are template smells that appear only in aggregate. Flag density,
not single instances.

- **Signpost openers.** "Here's…", "Let me…", "So…" starting section
  after section.
- **Mic-drop closers.** Short zinger fragments ending every section
  ("That was the job.").
- **Intensifier filler.** "actually," "whole," "real," "very" recurring
  where no contrast is marked.
- **Parallel-zinger density.** Chiasmus and mirror sentences ("X is a
  performance. Y is a practice."). Spice only; trim assistant-added ones
  first.
- **Prefix-repetition triads.** "unfindable, unindexed, unreadable"
  counts as a triad chant.

### Performative insight / agent theater (strong chat signal; also infects drafts)

- **Honest framing.** "The honest evaluation:", "Here is the honest
  take…", "I want to be honest with you…", "Let me be direct with you…".
  Just say the thing.
- **Validation + profundity.** "Your instinct is right, and that's the
  key insight." Head-pat then claimed deep reframe.
- **Mechanism / root-cause inflation.** "The precise mechanism," "the
  load-bearing root cause," "the surface complaint is downstream of…"
  used as pomp rather than precision.
- **Narrative / reframing theater.** "This changes the whole
  narrative…", "This reframes everything…", "the key insight that
  changes how we should think about it."
- **"Genuinely X, and that matters."** Stacking "genuinely" + intensity
  + significance label. Flag stacked "genuinely" even without the coda.
- **Dramatic ownership of error.** "And that's on me," "that mistake was
  genuinely mine," laugh-crying theater. Brief correction is enough.
- **Suspense / delayed reveal.** Withholding the answer while building
  drama ("The results are in and completely unexpected…").

**Domain carve-out note:** Some projects use words like *load-bearing*
or *leverage* as real framework vocabulary. Apply the
**corpus-applicability heuristic** in `core.md` before rewriting: if the
term names a structural part of that project's dialect and replacing it
with a bland synonym loses precision, leave it; only flag empty
intensifier / marketing use. Read the project's overlay for the local
list.

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
