# aiBreze: core

Sprays the performative / faux-profound register off prose so what remains
is direct, human, and useful.

Written **aiBreze**. npm **`aibreze`**. A spray, not a breeze.

People who live with a smell stop noticing it. Generated prose does the
same trick: the tics fade into the furniture until someone from outside
the room names them. Charles Duhigg tells the household version in
*The Power of Habit* (2012): an odor-eliminating spray that did not sell
until the company realized habituation was the real problem, then
repositioned the bottle as the reward at the end of a cleaning habit.
This package is that move for writing. Make the smell visible, then take
it off. The original tale is Duhigg's. Read him.

This file is the shared core. Genre files add surface-specific rules.
They are additive: point here, then write only what that surface adds.
Do not copy the hard bans, cadence budgets, or register into each genre
file. Projects add a short overlay for dialect carve-outs and pronoun
policy. Do not copy this file into each repo and then diverge.

**Also in this package:** `audit.md` (smell), `claims.md` (substance then
voice), `essays.md`, `landing.md`, `outreach.md`, `launch.md`,
`cursor.mdc` (agent pocket card).

---

## Target register

Write like a sharp, slightly tired colleague who wants the real answer
across with minimal ceremony.

Direct > clever. Clear > profound. Useful > insightful-sounding.

Contractions. Short sentences mixed with longer ones. Point first, support
second. Concrete over abstract. No em dashes in publishable prose (commas,
periods, or parentheses).

Pronouns are a project decision (I / we / you). Pick one per surface and
hold it. Do not let an agent default to corporate "we" on a personal essay,
or to "I" on a two-person product page, without an overlay that says so.

---

## Corpus-applicability rule (carve-outs)

**Heuristic:** If a word or phrase has real application in this project
(term of art, named product, framework metaphor, standing vocabulary), it
is **allowed**. Ban it only when it is empty intensifier or agent theatrics
with no structural job.

Ask before flagging or "correcting":

1. Does this term name a real part of the work, a product, or a filing
   used on purpose?
2. Would replacing it with a bland synonym ("important," "central,"
   "key") make the prose *less* precise?
3. Is the agent stacking it for drama rather than pointing at structure?

If (1) or (2) is yes, and (3) is no: **leave it**.

The overlay lists the terms that usually pass here. The heuristic is the
rule; the list is not exhaustive.

Marketing empties that stay banned even when a cousin-word is doctrinal:
unlock, unleash, delve, seamless, game-changer, "in today's landscape,"
"your journey," empty "leverage your X."

### Teaching antithesis (allowed with a budget)

Allowed when X and Y are **different categories** (map vs territory;
session vs context window; a tool is an instance, a primitive is a
foundation).  
Banned when Y is a dramatic synonym of X ("not just a tool, it's a
partner"). Prefer ≤2 strong teaching antitheses per long piece. Never
use the escalation formula below.

The test is whether Y gives the reader a new *kind* of thing to hold, not
a bigger adjective for the same thing.

Do not "de-smell" distinctive human lines or verbatim testimony. Cut
theater; keep dialect.

---

## Hard bans (Claude / performative insight)

### 1. Escalation formula

Never: "It's not just X, it's Y."  
Especially when Y is a more dramatic synonym.

### 2. Honest framing

Ban openers like:

- "The honest evaluation:"
- "Here is the honest take…"
- "I want to be honest with you…"
- "Let me be direct with you…"

Just say the thing. (Saying "the right word is obligation" is fine;
announcing honesty is not.)

### 3. Validation + profundity claim

Ban head-pats plus deep-reframe theater:

- "Your instinct is right, and that's the key insight."
- "You're half right and half wrong, and the half you're wrong about is
  the load-bearing half." (Here *load-bearing* is theatrics unless the
  overlay says it names a real hinge.)

### 4. Mechanism / root-cause inflation

Avoid: "the precise mechanism," "the load-bearing root cause," "the
surface complaint is downstream of…" used as pomp.  
Say what happened, plainly.

### 5. Narrative / reframing theater

Ban:

- "This changes the whole narrative…"
- "This reframes everything…"
- "This is the key insight that changes how we should think about it."

### 6. "Genuinely X, and that matters"

Do not stack "genuinely" + intensity + "and that matters."  
Use "genuinely" sparingly or not at all.

### 7. Dramatic ownership of error

Avoid: "and that's on me," "that mistake was genuinely mine,"
laugh-crying theater. Brief correction is enough.

### 8. Suspense / delayed reveal

Do not withhold the answer while building drama. Answer first.

### Also still banned

- Em dashes in publishable prose
- Alliterative triads and stacked-negation chants (except protected
  maxims the overlay names). **Prefix-repetition triads count**
  ("unfindable, unindexed, unreadable"): same chant, different clothes.
- Universality claims ("this applies to every domain") without evidence
- Setup sentences whose only job is to announce the next sentence
- Shared vocab empties: delve, unpack, unlock, unleash, harness (as
  marketing), empower, seamless, journey-as-metaphor, ecosystem-as-hype,
  etc. A term of art in the overlay ("harness" as an agent loop) still
  passes the applicability heuristic.

---

## Cadence tells (budget, not ban)

These are template smells that appear only in aggregate. Flag density,
not single instances.

- **Signpost openers.** "Here's…", "Let me…", "So…" starting section
  after section. A talk earns a few; when every section opens with the
  same move, it is a template. Vary or cut the weakest.
- **Mic-drop closers.** Short zinger fragments ending a section ("That
  was the job."). Effective in small doses; not every section may end
  on one.
- **Intensifier repetition.** "actually," "whole," "real," "very"
  recurring as filler. Keep only where the word marks a true contrast;
  cut the padding uses.
- **Parallel-zinger density.** Chiasmus and mirror sentences ("X is a
  performance. Y is a practice.") are spice. Track the count per piece;
  protect native pairs, trim assistant-added ones first.
- **Bold-lead lists.** Every bullet "**Label.** Explanation" is a
  template when the whole piece does it.

---

## Chat mode vs publish mode

| Mode | Extra watch |
| --- | --- |
| **Agent chat** | Honest framing, validation theater, suspense, dramatic apology, genuinely-stack |
| **Drafts / posts / pages** | Escalation formula, insight-labeling without evidence, setup sentences, em dashes, triad packing |

Socratic beats and real questions aimed at a reader are method, not
"transition question" smell. "So what does this mean for you?" as a
heading between two generic paragraphs is the smell.

---

## Bad → good

**Escalation**  
Bad: "It's not just a side project, it's a civilizational calling."  
Good: "It looks like a side project until the pieces sit together. The
aim is foundational."

**Honest framing**  
Bad: "The honest evaluation: the archive was too scattered to hand off."  
Good: "The archive was too scattered to hand off."

**Insight labeling**  
Bad: "This is the key insight that changes everything."  
Good: "Once the map existed, someone else could take it up."

**Empty load-bearing**  
Bad: "That's the load-bearing half of your question."  
Good: "The part that matters is whether it transfers."  
(Still fine: "The auth check is load-bearing; drop it and the rest of
the loop is theater.")

**Setup**  
Bad: "The idea worth keeping:"  
Good: Just state the idea.

**Em dash furniture**  
Bad: "Brain — the model plus the loop."  
Good: "Brain: the model plus the loop."

---

## How to audit

1. Run `audit.md` with this file in context (smell-only), or `claims.md`
   (substance, then smell). Audit and claims are additive; they do not
   restate these bans.
2. Apply the **project overlay** before rewriting.
3. Protect distinctive human lines and verbatim testimony.
4. Prioritize the five highest-impact fixes; do not flatten dialect.

---

## How to overlay

Keep a short file in the consuming project. It should contain:

- Pronoun policy per surface (essay I, landing we, outreach I, …)
- Terms that pass the applicability heuristic here, with one-line why
- Protected maxims / testimony the agent must not "de-smell"
- Genre extras that are house law (e.g. every essay ends in a deed)

Do not restate the hard bans. Point at this package. Genre files in
this package follow the same rule.
