# aiBreze: core

Installable writing rules for agents. Sprays the performative,
faux-profound register off prose so what remains is direct and useful.

Written **aiBreze**. npm **`aibreze`**. A spray, not a breeze.

This file is the shared core. Genre files add surface-specific rules.
They are additive: point here, then write only what that surface adds.
Do not copy the hard bans or cadence budgets into each genre file.
Register stays in core as the default; a genre file may shift it by
name (`civic.md`, `academic.md`). Projects add a short overlay for dialect carve-outs
and pronoun policy. Do not copy this file into each repo and then
diverge.

Judge the sentence, not the byline. Human prose in this register gets
sprayed too. Distinctive dialect and verbatim testimony still stand.

Protected maxims (do not rewrite into a cleverer synonym):

- Earn the word.
- Spray the prose, not the author.
- Have you smell-checked that?

**Also in this package:** `audit.md` (smell), `claims.md` (substance then
voice), `essays.md`, `landing.md`, `outreach.md`, `launch.md`,
`civic.md`, `academic.md`. The pocket card `cursor.mdc` ships in `rules/`
on npm and on this host. It is not in the skill ZIP.

The name is a household joke. People who live with a smell stop noticing
it. Generated prose does the same trick: the tics fade into the furniture
until someone from outside the room names them. Charles Duhigg tells the
household version in *The Power of Habit* (2012): an odor-eliminating
spray that did not sell until the company realized habituation was the
real problem, then repositioned the bottle as the reward at the end of a
cleaning habit. This package is that move for writing. Make the smell
visible, then take it off. The original tale is Duhigg's. Read him.

---

## Target register

Write like a sharp, slightly tired colleague who wants the real answer
across with minimal ceremony.

Direct > clever. Clear > profound. Useful > insightful-sounding.

Contractions. Short sentences mixed with longer ones. Point first, support
second. Concrete over abstract. Em dashes earn their place, like everything
else, and most don't. A comma, period, or colon usually does the job with
less drama.

This is the **default** for essays, product pages, and internal docs. It
is not the only register. Genre files shift it. Civic and institutional
writing ([`civic.md`](./civic.md)) earns ceremony and loosens
contractions. Scholarly papers ([`academic.md`](./academic.md)) keep
the colleague close and add precision; they do not put on the academic
costume. Overlay the file for the room. Do not force the default into
a filing, and do not "elevate" a paper into Moreover / Thus.

The target is the absence of theater, not a personality. Clean is a
floor. If every surface sounded like the same colleague, that would be
a new smell. Overlay the register for the room you are in.

Pronouns are a project decision (I / we / you). Pick one per surface and
hold it. Do not let an agent default to corporate "we" on a personal essay,
or to "I" on a two-person product page, without an overlay that says so.

---

## Corpus-applicability rule (carve-outs)

**Heuristic:** If a word or phrase has real application in this project
(term of art, named product, framework metaphor, standing vocabulary), it
is **allowed**. Ban it only when it is empty intensifier or agent theatrics
with no structural job.

The problem is **unearned language**, not the dictionary. **Earn the
word.** "Transformative" is fine if something transformed and you can say
from what into what.

Ask before flagging or "correcting":

1. Does this term name a real part of the work, a product, or a named
   artifact used on purpose?
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
- "Look," / "Let's be clear," / "Let's be honest," / "Here's the thing"

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
A single plain use can stay. Flag stacks and repetition.

### 7. Dramatic ownership of error

Avoid: "and that's on me," "that mistake was genuinely mine,"
laugh-crying theater. Brief correction is enough.

### 8. Suspense / cataphoric teasers

Do not withhold the answer while building drama. Do not promise a
later payoff instead of saying the thing.

Ban forward-pointing setups: "Here's the part that nobody tells you…",
"Here's what most people get wrong…", "Here's where it gets interesting.",
"Here's the best part:", "The part most people sleep on…". Claude-flavored
cousins: "a caveat worth leading with", "one thing I'll name rather than
route around:", "worth knowing too:", "now the skepticism part."
Clickbait cousins: "You won't believe what happened next."

Answer first. The name is descriptive (a teaser that points forward).
The tell is the promise, not the grammar.

### Also still banned

- Alliterative triads and stacked-negation chants, except protected
  maxims the overlay names, or **one concrete chant a genre file
  explicitly allows** (landing). **Prefix-repetition triads count**
  ("unfindable, unindexed, unreadable"). So does **Not X. Not Y. But
  Z.** ("Not for fame. Not for glory. You posted this just because…"):
  same chant, different clothes.
- Universality claims ("this applies to every domain") without evidence.
  That is a claims problem; do not only cologne it.
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
  after section. A talk earns more than a blog post; when every section
  of prose opens with the same move, it is a template. Vary or cut the
  weakest.
- **Mic-drop closers.** Short zinger fragments ending a section ("That
  was the job."). Effective in small doses; not every section may end
  on one.
- **Intensifier repetition.** "actually," "whole," "real," "very,"
  "really," "truly" recurring as filler. Keep only where the word marks
  a true contrast; cut the padding uses.
- **Em-dash furniture.** Clause-then-punchline, a dash in every heading,
  or stacks. One earned dash is not a finding. Density plus other tells
  is. Do not treat the mark as an AI tell to erase.
- **Parallel-zinger density.** Chiasmus and mirror sentences ("X is a
  performance. Y is a practice.") are spice. Track the count per piece;
  protect native pairs, trim assistant-added ones first.
- **Bold-lead lists.** Every bullet "**Label.** Explanation" is a
  template when the whole piece does it.
- **Riddle labels.** A bold lead-in or heading that is an aphorism the
  reader can only decode after reading the body: "**Names you actually
  say.**" over a paragraph about custom vocabulary. Core already bans the
  setup sentence that announces the next sentence; this is the same waste
  in reverse, withholding instead of announcing. Test: cover the body and
  read the label alone. If it does not say which thing this is, name the
  thing. The aphorism can go in the prose if it earns a place there.
- **Cozy machinery.** Infrastructure written the way a fond craftsman
  would talk: the model is "asleep," a worker stays "warm," heavy jobs go
  to a "quieter" box, "the mesh is the door." Terms of art pass the
  applicability heuristic (warm cache, cold start, daemon), and one idiom
  is not a finding. The tell is the register standing in for a fact the
  writer already has: "asleep" covers suspended, unreachable, and
  misconfigured at once, so it tells the reader less than "unreachable"
  would. Keep it where the machine literally sleeps.
- **Operator notes in the brochure.** Recovery commands, internal folder
  names, settle timers, gitignore facts, and "doctor and /health run the
  same probes" listed as what the product is good at. The tell is
  *placement*, not the fact. A recovery CLI belongs under Run. A Syncthing
  wait belongs next to Syncthing. Test: would you say this first to a
  friend who asked what it does? If not, it is later, or not at all.
- **Hand-holding the obvious.** "config.json is gitignored." One trap
  warning is fine. Stating what a competent reader already knows, in the
  voice of a tour guide, is the tell.
- **Unparseable sentence.** A finished-sounding line the reader cannot
  repeat: "This is meant to live on a desktop you already leave on."
  Related to riddle labels, but at sentence level. Rewrite until a smart
  friend can say it back.
- **Participial afterthoughts.** A present participle bolted on after
  a comma for atmosphere: "…, looking out the window", "…, underscoring
  the need." One earned modifier is fine. A piece that keeps attaching
  a -ing clause to land the emotion is a template.
- **Topic-sentence pinning.** Every paragraph opens with a neat label
  of what it will say, then says it. One clear lead is not a finding.
  A whole page of outline-then-body paragraphs is.

---

## Chat mode vs publish mode

| Mode | Extra watch |
| --- | --- |
| **Agent chat** | Honest framing, validation theater, suspense, dramatic apology, genuinely-stack, helper theater |
| **Drafts / posts / pages** | Escalation formula, insight-labeling without evidence, setup sentences, cataphoric teasers, riddle labels, cozy machinery, operator notes in the brochure, hand-holding, unparseable sentences, em-dash furniture, triad packing, participial afterthoughts |

The table is extra watch, not a partition. Chat theater infects drafts.
Publish tells show up in chat.

Helper theater (any model): "Great question!", "I'd be happy to", empty
"Absolutely!", "It's important to note." Performed enthusiasm
("This is huge!", "Love this.") is the same family. Just do the work.

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

**Cataphoric teaser**  
Bad: "Here's the part that nobody tells you: the archive was too
scattered to hand off."  
Good: "The archive was too scattered to hand off."

**Em dash furniture**  
Bad: "Brain — the model plus the loop."  
Good: "Brain: the model plus the loop."

**Riddle label**  
Bad: "**Names you actually say.** `promptTerms` seeds the decoder."  
Good: "**Custom vocabulary.** `promptTerms` seeds the decoder."

**Cozy machinery**  
Bad: "If the cleanup model is asleep, you still get raw text."  
Good: "If the cleanup model is unreachable, you still get raw text."  
(Still fine: "the laptop was asleep," when it was.)

**Operator notes in the brochure**  
Bad: "**Two settle timers.** Watched folders wait 30 minutes." as the
first item under "What it is good at."  
Good: Mention the wait next to Syncthing. Lead the feature list with
what a friend would hear first.

**Hand-holding**  
Bad: "`config.json` is gitignored." after `cp config.example.json`.  
Good: Omit it. They already copied the example.

**Unparseable sentence**  
Bad: "This is meant to live on a desktop you already leave on."  
Good: "Run it on a computer you leave turned on."

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

- Pronoun policy per surface (essay I, landing we, outreach I, civic
  as the overlay names the filer, academic as the venue uses we or I, …)
- Terms that pass the applicability heuristic here, with one-line why
- Protected maxims / testimony the agent must not "de-smell"
  (this package: Earn the word. Spray the prose, not the author.
  Have you smell-checked that?)
- Genre extras that are house law (e.g. every essay ends in a deed)

Do not restate the hard bans. Point at this package. Genre files in
this package follow the same rule. They may grant a named exception
(one concrete landing chant; talks may signpost; civic and academic
may shift register). They may not silently rewrite a ban.
