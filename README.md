<p align="center">
  <img src="site/static/logo.svg" alt="Smell Check" width="128" />
</p>

# Smell Check

An installable writing rule set for AI agents.

Editorial rules for prose that says something instead of sounding like it.
AI-assisted or not. Written **Smell Check**. npm **`smellcheck`**. Prose, not
code smells.

Spray the prose, not the author. Earn the word. Have you smell-checked that?

**Docs:** [smellcheck.dev/docs](https://smellcheck.dev/docs) · **Site:** [smellcheck.dev](https://smellcheck.dev)

## Install

```bash
pnpm add -D smellcheck
```

Copy `node_modules/smellcheck/rules/cursor.mdc` to `.cursor/rules/smellcheck.mdc`.
Keep a short overlay. Full wiring: [docs](https://smellcheck.dev/docs/install).

Or skip npm and [install the skill](https://smellcheck.dev/skill) as a folder.

## Not a humanizer

Smell Check does not determine whether a human or a model wrote something, and
it does not try to fool AI detectors. Same standard either way. If the prose
smells, spray it.

<!-- xfacts-nutrition-label -->

## Nutrition label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNp1kU1rAyEQhv_KMmeTpVePDRRa0l42t1LKrE6Mjaui4xYb8t-Lu6GQQ29-PO_H6AVmkA8CPE4EEtA-JvohEMA1tgNnx4SpgoDMyCU3RrGdG-KsIp8b9fp8WAl1BnkBh94UNO3mUCMNKtnIonvBGdc1CEjFs10y34Km7VdeDKqz3oCE3TCAgFPIfNu7UPTRYWq5EdUZDX1O6NFQAgnRxwmuAjTFDPL9Ah4kfCf0xlFqijuLTlN0oU7kGa5ihQ3x0TqKiXK-CXRQpTHINvhuDVs1HwLyrP6C7sq1OrfeHXrdkTbUqTDFsozStGOxTrd3-n-QRDFkyyHVZsccs-x7Y_lUxq0KU79DRlczb55CMrTZ73c92nH5uusvQqie3Q) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNqdU8Fu2zAM_RVDZydZdsxOQ7EBQbNTeyuGQpFom4gsCSTlIAvy76O8dtmhB2Mny09Pj-Lj09VMZrdtTbQjmJ2xeCT4BaY1HiYIKQMp-mDFhgtL8z1RXzcnIMYUdevTerveflaIxUrhKuEEp0oK6CByVf2xf9b_E0avP64QJ1rxCUNQNBfKaWZ98yiJ0IaGSgBuukRNLseAPNhjgCaT8r40nMle2sYWpesn-nfSKlvm5pzo1IV0_nP-636lILKAb86EgrGvNSlNEG10WvZqOBWqKzOIZN5tNj3KUI5rl8bNe-erufPV4fCwuVv0Vvcji26twchCRc1IkV8JrBvmYgNo2zsTU6wSEaReWAEcc0DwinWo3asUjArrQV_VJKVQZTog0HurkS8_W3Ms0Qfwr5YEOzVe_X-5mmxFa5mnx_3hsB793fok9bK39i9lNnrjEsES3mz5IsFgceQlTGC2l0XMoJPW6S2hpiKz38tkS1zGdDihW2STsx7Gj7k6M-hJu65ZEAgwgtDlngcPrBm1c2jqiHXyQxoh2_7fgL5FsCZUzxDoA6pP5_IfGdaIRmelBkqXcPsNuYxlHQ) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/skills/smellcheck/SKILL_FACTS.md)


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
