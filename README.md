<p align="center">
  <img src="site/static/logo.svg" alt="aiBreze" width="128" />
</p>

# aiBreze

An installable writing rule set for AI agents.

Editorial rules for prose that says something instead of sounding like it.
AI-assisted or not. Written **aiBreze**. npm **`aibreze`**. A spray, not a
breeze.

Spray the prose, not the author. Earn the word.

**Docs:** [aibreze.com/docs](https://aibreze.com/docs) · **Site:** [aibreze.com](https://aibreze.com)

## Install

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`.
Keep a short overlay. Full wiring: [docs](https://aibreze.com/docs/install).

Or skip npm and [install the skill](https://aibreze.com/skill) as a folder.

## Not a humanizer

aiBreze does not determine whether a human or a model wrote something, and it
does not try to fool AI detectors. Same standard either way. If the prose
smells, spray it.

<!-- xfacts-nutrition-label -->

## Nutrition label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNp1kU1rAyEQhv_KMmeTpVePDRRa0l42t1LKrE6Mjaui4xYb8t-Lu6GQQ29-PO_H6AVmkA8CPE4EEtA-JvohEMA1tgNnx4SpgoDMyCU3RrGdG-KsIp8b9fp8WAl1BnkBh94UNO3mUCMNKtnIonvBGdc1CEjFs10y34Km7VdeDKqz3oCE3TCAgFPIfNu7UPTRYWq5EdUZDX1O6NFQAgnRxwmuAjTFDPL9Ah4kfCf0xlFqijuLTlN0oU7kGa5ihQ3x0TqKiXK-CXRQpTHINvhuDVs1HwLyrP6C7sq1OrfeHXrdkTbUqTDFsozStGOxTrd3-n-QRDFkyyHVZsccs-x7Y_lUxq0KU79DRlczb55CMrTZ73c92nH5uusvQqie3Q) · [raw](https://github.com/Catalyst-Forge-LLC/aibreze/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNqdU7GO2zAM_RVDs500azoVhxYImk7tdigOssTERGRJICkHbpB_L-XeNR1uMDpZfnp6FB-fbmYy-11roh3B7I3FnuAXmNZ4mCCkDKTokxUbZpbmS6Jz3ZyAGFPUrQ-b3Wa3U4jFSuEq4QSnSgroIHJV_Xb4of8XjF5_XCFO1PEFQ1A0F8ppYX32KInQhoZKAG5OiZpc-oA82D5Ak0l5HxvOZOe2sUXp-on-jdRly9xcE11OIV3_nP906BREFvDNlVAwnmtNShNEG52WvRlOherKDCKZ99vtGWUo_calcfvWebd03h2PT9uHRa9137Po3hqMLFTUjBT5hcC6YSk2gLa9NzHFKhFB6oUVwDEHBK_YCbV7lYJRYT3oq5qkFKrMCQj03mrk88_W9CX6AP7FkuBJjVf_n28mW9Fa5vvXw_G4Gf3D-iT1svf2L2UxeusSwRreYvkqwWBx5DVMYLbzKmbQSev01lBTkcXvdbIlrmM6nNCtsslZD-P7XJ0ZnEm7rlkQCDCC0PzIgwfWjNolNHXEOvkhjZDt-d-AvkawJlTPEOgDqk9n_o8Ma0Sjs1IDpUu4_wa1wWUc) · [raw](https://github.com/Catalyst-Forge-LLC/aibreze/blob/main/skills/aibreze/SKILL_FACTS.md)


## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`. The maintainer publishes to npm.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
